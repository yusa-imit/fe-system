import {
  createApp,
  createRouter,
  eventHandler,
  toNodeListener,
  defineEventHandler,
  EventHandler,
  fromNodeMiddleware,
  serveStatic,
} from "h3";
import { renderToString } from "react-dom/server";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { PolarisConfig } from "./type";
import path from "path";
import fs from "fs";
import { PolarisBuilder } from "./builder";
import { consola, ConsolaInstance } from "consola";
import { enoentSafeReadDirSync } from "./lib/fs-util";
import { pathToFileURL } from "node:url";
import { readFile, stat } from "node:fs/promises";

interface PageComponent {
  default: React.ComponentType;
  getServerSideProps?: (context: {
    params: Record<string, string>;
  }) => Promise<any>;
}

interface APIRoute {
  pattern: string;
  handler: EventHandler;
}

interface PageEntry {
  pattern: string;
  component: PageComponent;
}

interface PolarisServerExplicitProps {
  watch?: boolean;
}

export class PolarisServer {
  private config: PolarisConfig;
  private app: ReturnType<typeof createApp>;
  private router: ReturnType<typeof createRouter>;
  private pages: Map<RegExp, PageEntry> = new Map();
  private apiRoutes: Map<RegExp, APIRoute> = new Map();
  private builder?: PolarisBuilder;
  private watchMode = false;
  private logger: ConsolaInstance;

  constructor(config: PolarisConfig & PolarisServerExplicitProps) {
    this.config = config;
    this.watchMode = config.watch || false;
    this.app = createApp();
    this.router = createRouter();
    this.logger = consola.create({
      level: 3,
      defaults: {
        tag: "polaris",
      },
    });

    this.setupStaticServing();
  }

  private handleError(error: Error, context: string) {
    this.logger.error({
      message: `Error during ${context}:`,
      error: error,
    });
  }

  private patternToRegex(pattern: string): RegExp {
    return new RegExp(
      "^" +
        pattern
          .replace(/\[\.\.\.(\w+)\]/g, "(.+)")
          .replace(/\[(\w+)\]/g, "([^/]+)")
          .replace(/\//g, "\\/") +
        "$"
    );
  }

  private extractParams(path: string, pattern: string): Record<string, string> {
    const regex = this.patternToRegex(pattern);
    const paramNames = [...pattern.matchAll(/\[(?:\.\.\.)?(\w+)\]/g)].map(
      (match) => match[1]
    );
    const matches = path.match(regex);

    if (!matches) return {};

    return paramNames.reduce(
      (params, name, index) => {
        if (name) {
          params[name] = matches[index + 1] as string;
        }
        return params;
      },
      {} as Record<string, string>
    );
  }

  private async loadPageComponents() {
    const serverDir = path.join(
      process.cwd(),
      this.config.outDir || "",
      "server"
    );
    const files = enoentSafeReadDirSync(serverDir);

    for (const file of files) {
      if (file.endsWith(".js")) {
        const pageName = file.replace(".js", "");
        const pattern = pageName
          .replace(/_(\w+)_/g, "[$1]") // _param_ -> [param]
          .replace(/^index$/, "/")
          .replace(/index$/, "");

        console.log(file);

        const component = await import(
          pathToFileURL(path.join(serverDir, file), {
            windows: process.platform === "win32",
          }).toString()
        );
        const regex = this.patternToRegex(pattern);

        this.pages.set(regex, { pattern, component });
      }
    }
  }

  private findMatchingPage(
    url: string
  ): { entry: PageEntry; params: Record<string, string> } | undefined {
    const pathname = new URL(url, "http://localhost").pathname;

    for (const [regex, entry] of this.pages) {
      if (regex.test(pathname)) {
        const params = this.extractParams(pathname, entry.pattern);
        return { entry, params };
      }
    }
  }

  private generateHTMLResponse(url: string, entry: PageEntry, props?: any) {
    try {
      const { default: PageComponent } = entry.component;

      const html = entry.component.getServerSideProps
        ? renderToString(<PageComponent {...props} />)
        : "";

      // 페이지 패턴을 기반으로 클라이언트 파일 찾기
      const normalizedPattern =
        entry.pattern
          .replace(/[\[\]]/g, "_") // [param] => _param_
          .replace(/^\//, "") // 시작 슬래시 제거
          .replace(/\/$/, "") || // 끝 슬래시 제거
        "index"; // 루트 경로는 index로 처리

      const outDir = path.join(process.cwd(), this.config.outDir || "");
      const clientDir = path.join(outDir, "client");

      const entryClientFile = enoentSafeReadDirSync(clientDir).find((file) =>
        file.startsWith("entry-client")
      );

      const pageChunkFile = enoentSafeReadDirSync(clientDir).find(
        (file) =>
          file.startsWith(normalizedPattern) && !file.startsWith("entry-client")
      );

      if (!pageChunkFile) {
        this.logger.warn(`Client file not found for pattern ${entry.pattern}`);
      }

      const entryPath = this.config.publicPath
        ? `${this.config.publicPath}/client/${pageChunkFile}`
        : `/client/${entryClientFile}`;

      const pagePath = this.config.publicPath
        ? `${this.config.publicPath}/client/${pageChunkFile}`
        : `/client/${pageChunkFile}`;

      const remoteEntryPath = this.config.publicPath
        ? `${this.config.publicPath}/client/remoteEntry.js`
        : `/client/RemoteEntry.js`;

      // Add HMR scripts in watch mode
      const hmrScripts = this.watchMode
        ? `
          <script src="/__webpack_hmr"></script>
          <script>
            // Handle hot updates
            if (module.hot) {
              module.hot.accept();
            }
          </script>
        `
        : "";

      return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Polaris App</title>
          ${this.config.moduleFederation ? `<script src="${remoteEntryPath}"></script>` : ""}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          window.__PAGE_PATTERN__ = "${entry.pattern}";
          ${props ? `window.__INITIAL_PROPS__ = ${JSON.stringify(props)};` : ""}
        </script>
          ${hmrScripts}
          ${entryClientFile ? `<script src="${entryPath}"></script>` : ""}
        ${pageChunkFile ? `<script src="${pagePath}"></script>` : ""}
        </body>
      </html>
    `;
    } catch (e) {
      this.handleError(e as Error, "HTML generation");
      throw e;
    }
  }

  private setupStaticServing() {
    const outDir = path.join(process.cwd(), this.config.outDir || "dist");
    const clientDir = path.join(outDir, "client");

    // client 디렉토리의 정적 파일 서빙
    this.app.use(
      "/client",
      defineEventHandler((event) => {
        return serveStatic(event, {
          getContents: async (id) => {
            try {
              const filePath = path.join(clientDir, id);
              return await readFile(filePath);
            } catch (err) {
              return undefined;
            }
          },
          getMeta: async (id) => {
            try {
              const filePath = path.join(clientDir, id);
              const stats = await stat(filePath);

              if (!stats.isFile()) {
                return undefined;
              }

              return {
                size: stats.size,
                mtime: stats.mtimeMs,
              };
            } catch (err) {
              return undefined;
            }
          },
        });
      })
    );

    // publicPath가 설정된 경우 해당 경로로도 서빙
    if (this.config.publicPath && this.config.publicPath !== "/") {
      this.app.use(
        this.config.publicPath,
        defineEventHandler((event) => {
          return serveStatic(event, {
            getContents: async (id) => {
              try {
                const filePath = path.join(clientDir, id);
                return await readFile(filePath);
              } catch (err) {
                return undefined;
              }
            },
            getMeta: async (id) => {
              try {
                const filePath = path.join(clientDir, id);
                const stats = await stat(filePath);

                if (!stats.isFile()) {
                  return undefined;
                }

                return {
                  size: stats.size,
                  mtime: stats.mtimeMs,
                };
              } catch (err) {
                return undefined;
              }
            },
          });
        })
      );
    }
  }

  private async setupRoutes() {
    await this.loadPageComponents();

    this.router.get(
      "/*",
      defineEventHandler(async (event) => {
        const url = event.node.req.url!;
        const match = this.findMatchingPage(url);

        if (!match) {
          event.node.res.statusCode = 404;
          return "Page not found";
        }

        const { entry, params } = match;

        try {
          const props = entry.component.getServerSideProps
            ? await entry.component.getServerSideProps({ params })
            : undefined;

          return this.generateHTMLResponse(url, entry, props);
        } catch (error) {
          this.handleError(error as Error, "Page rendering");
          event.node.res.statusCode = 500;
          return "Internal Server Error";
        }
      })
    );
  }

  private async loadAPIRoutes() {
    const apiDir = path.join(process.cwd(), this.config.outDir || "", "api");
    if (!fs.existsSync(apiDir)) return;

    const files = enoentSafeReadDirSync(apiDir).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of files) {
      const routeModule = await import(
        pathToFileURL(path.join(apiDir, file), {
          windows: process.platform === "win32",
        }).toString()
      );
      const handler = routeModule.default;

      if (!handler || typeof handler !== "function") {
        this.logger.warn(`API route ${file} does not export a default handler`);
        continue;
      }

      // Convert file name to API route pattern
      // users_id_.js -> /api/users/[id]
      const pattern =
        "/api/" + file.replace(".js", "").replace(/_(\w+)_/g, "[$1]");

      const regex = this.patternToRegex(pattern);
      this.apiRoutes.set(regex, { pattern, handler });
    }
  }

  private async setupHMR() {
    if (!this.watchMode) return;

    this.builder = new PolarisBuilder(this.config);
    const { devMiddleware, hotMiddleware } = await this.builder.getMiddleware();

    this.app.use(fromNodeMiddleware(devMiddleware));
    this.app.use(fromNodeMiddleware(hotMiddleware));

    this.builder.on("client-build", async () => {
      this.logger.info("Client code updated");
    });

    this.builder.on("server-build", async () => {
      this.logger.info("Server code updated");

      const outDir = path.resolve(process.cwd(), this.config.outDir || "");
      const serverDir = path.join(outDir, "server");

      // Get all files in the server directory
      const serverFiles = enoentSafeReadDirSync(serverDir)
        .filter((file) => file.endsWith(".js"))
        .map((file) => path.join(serverDir, file));

      // Reload each module
      for (const filePath of serverFiles) {
        const moduleUrl = `file://${filePath}`;
        try {
          // Force reload by adding timestamp
          await import(`${moduleUrl}?update=${Date.now()}`);
        } catch (error) {
          this.logger.warn(`Failed to reload module: ${filePath}`, error);
        }
      }

      // Reload page components
      this.logger.start("Reloading server components...");
      await this.loadPageComponents();
      this.logger.success("Server components reloaded");
    });

    this.builder.on("api-build", async () => {
      this.logger.info("API code updated");

      const outDir = path.resolve(process.cwd(), this.config.outDir || "");
      const apiDir = path.join(outDir, "api");

      // Get all files in the api directory
      const apiFiles = enoentSafeReadDirSync(apiDir)
        .filter((file) => file.endsWith(".js"))
        .map((file) => path.join(apiDir, file));

      // Reload each module
      for (const filePath of apiFiles) {
        const moduleUrl = `file://${filePath}`;
        try {
          // Force reload by adding timestamp
          await import(`${moduleUrl}?update=${Date.now()}`);
        } catch (error) {
          this.logger.warn(`Failed to reload module: ${filePath}`, error);
        }
      }

      // Reload API routes
      this.logger.start("Reloading API routes...");
      await this.loadAPIRoutes();
      this.logger.success("API routes reloaded");
    });

    this.builder.watch();
  }

  async start() {
    if (this.watchMode) {
      this.logger.start("Setting up HMR...");
      await this.setupHMR();
      this.logger.success("HMR ready");
    }

    this.logger.start("Loading routes...");
    await this.setupRoutes();
    await this.loadAPIRoutes();
    this.logger.success("Routes loaded");

    this.app.use(this.router);

    const listener = toNodeListener(this.app);
    const server = createServer(listener);

    server.listen(
      this.config.server?.port || 3000,
      this.config.server?.host || "localhost",
      () => {
        const host = this.config.server?.host || "localhost";
        const port = this.config.server?.port || 3000;
        this.logger.success(
          `Server running at http://${host}:${port} ${this.watchMode ? "(HMR enabled)" : ""}`
        );
      }
    );

    return server;
  }
}

export { defineEventHandler };
