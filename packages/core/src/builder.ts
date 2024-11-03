import { PolarisConfig } from "./type";
import _webpack, { Configuration, Stats, Compiler, EntryObject } from "webpack";
import { process } from "std-env";
import { defu } from "defu";
import _webpackEnhanced from "@module-federation/enhanced";
import path from "path";
import { EventEmitter } from "node:events";
import { enoentSafeGlobSync } from "./lib/fs-util";
import { require } from "./lib/require";
import { fileURLToPath, pathToFileURL } from "node:url";

const { webpack, HotModuleReplacementPlugin, ProvidePlugin } = _webpack;
const { ModuleFederationPlugin } = _webpackEnhanced;

// const dirname = path.dirname("./lib/swc-inline-loader.cjs");
// const loaderPath = path.resolve(dirname, "./lib/swc-inline-loader.cjs");

// const normalizedLoaderPath = loaderPath.replace(/\\/g, "/");

// const swc_inline_loader = `file:///${normalizedLoaderPath}`;

const swc_inline_loader = require.resolve("./loaders/swc-loader-inline.cjs");

const webpack_hot_middleware_client_inline = require.resolve(
  "./loaders/webpack-hot-middleware-client-inline.cjs"
);

const node_loader_inline = require.resolve("./loaders/node-loader-inline.cjs");

// // const swc_inline_loader =
// //   "file:///F:\\codespace\\fe-system\\packages\\core\\dist\\lib\\swc-inline-loader.cjs";

export interface WebpackConfiguration extends Configuration {}

const DEFAULT_POLARIS_CONFIG: PolarisConfig = {
  entry: "index.ts",
  outDir: "./dist",
  pagesDir: "./pages",
  modulesDir: "./modules",
  apiDir: "./api",
  server: {
    port: 3000,
  },
};

interface PageEntry {
  name: string;
  path: string;
}

interface ModuleEntry {
  name: string;
  path: string;
}

interface APIEntry {
  name: string;
  path: string;
}

export interface BuildStats {
  clientStats?: Stats;
  serverStats?: Stats;
  apiStats?: Stats;
}

export class PolarisBuilder extends EventEmitter {
  private config: PolarisConfig;
  private pages: PageEntry[] = [];
  private modules: ModuleEntry[] = [];
  private apis: APIEntry[] = [];
  private compilers: Compiler[] = [];

  constructor(config: PolarisConfig) {
    super();
    this.config = defu(config, DEFAULT_POLARIS_CONFIG);
    this.scanPages();
    this.scanModules();
    this.scanAPIs();
  }

  private scanPages() {
    const pagesPath = path.resolve(
      process.cwd?.() || "",
      this.config.pagesDir || ""
    );

    const files = enoentSafeGlobSync(pagesPath, "*.{ts,tsx,js,jsx}", {
      cwd: pagesPath,
      nodir: true,
      absolute: false,
    });

    this.pages = files.map((file) => ({
      name: this.normalizePageName(file),
      path: path.join(pagesPath, file),
    }));
  }

  private scanModules() {
    const modulesPath = path.resolve(
      process.cwd?.() || "",
      this.config.modulesDir || ""
    );

    // Match both direct .tsx files and index.tsx files in directories
    const files = enoentSafeGlobSync(modulesPath, "*.{ts,tsx,js,jsx}", {
      cwd: modulesPath,
      nodir: true,
      absolute: false,
    });

    this.modules = files.map((file) => ({
      name: this.normalizeModuleName(file),
      path: path.join(modulesPath, file),
    }));
  }

  private scanAPIs() {
    const apiPath = path.resolve(
      process.cwd?.() || "",
      this.config.apiDir || ""
    );

    const files = enoentSafeGlobSync(apiPath, "*.{ts,tsx,js,jsx}", {
      cwd: apiPath,
      nodir: true,
      absolute: false,
    });

    this.apis = files.map((file) => ({
      name: this.normalizeAPIName(file),
      path: path.join(apiPath, file),
    }));
  }

  private normalizePageName(filePath: string): string {
    return filePath
      .replace(/\.(ts|tsx|js|jsx)$/, "")
      .replace(/\\/g, "/")
      .replace(/\/index$/, "")
      .replace(/\[(\w+)\]/g, "_$1_");
  }

  private normalizeModuleName(filePath: string): string {
    return filePath
      .replace(/\.(ts|tsx|js|jsx)$/, "")
      .replace(/\\/g, "/")
      .replace(/\/index$/, "")
      .replace(/\[(\w+)\]/g, "_$1_");
  }

  private normalizeAPIName(filePath: string): string {
    return filePath
      .replace(/\.(ts|js)$/, "")
      .replace(/\\/g, "/")
      .replace(/\/index$/, "")
      .replace(/\[(\w+)\]/g, "_$1_");
  }

  private getDirname() {
    const currentFileUrl = import.meta.url;
    const currentFilePath = fileURLToPath(currentFileUrl);
    return path.dirname(currentFilePath);
  }

  private generatePagesEntry(): { [key: string]: string } {
    const entries: { [key: string]: string } = {};

    for (const page of this.pages) {
      entries[page.name] = page.path;
    }

    return entries;
  }

  private getOutputPath(...relativePath: string[]) {
    return path.resolve(process.cwd?.() || "", ...relativePath);
  }

  private generateModuleFederationConfig(): any {
    if (!this.modules.length) return null;

    const exposes: { [key: string]: string } = {};
    for (const mod of this.modules) {
      exposes[`./${mod.name}`] = mod.path;
    }

    return {
      name: this.config.name || "polaris_app",
      filename: "remoteEntry.js",
      ...this.config.moduleFederation,
      exposes: defu(this.config.moduleFederation?.exposes, exposes),
      shared: defu(this.config.moduleFederation?.shared, {
        react: { singleton: true },
        "react-dom": { singleton: true },
      }),
    };
  }

  private getClientWebpackConfig(): WebpackConfiguration {
    const entries = this.generatePagesEntry();
    entries["entry-client"] = path.join(
      this.getDirname(),
      "runtime",
      "entry-client.cjs"
    );
    const moduleFederationConfig = this.generateModuleFederationConfig();

    const outputPath = this.getOutputPath(this.config.outDir || "", "client");

    return {
      mode:
        process.env.POLARIS_ENV === "production" ? "production" : "development",
      entry: entries,
      target: "web",
      output: {
        path: outputPath,
        publicPath: this.config.publicPath,
        filename: "[name].[contenthash].js",
      },
      module: {
        rules: [
          {
            test: /\.node$/,
            loader: node_loader_inline,
          },
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: [/node_modules/, /\.d\.ts$/],
            use: {
              loader: swc_inline_loader,
              options: {
                jsc: {
                  parser: {
                    syntax: "typescript",
                    tsx: true,
                    decorators: true,
                    dynamicImport: true,
                  },
                  transform: {
                    react: {
                      runtime: "automatic",
                    },
                  },
                  target: "es2015",
                },
                minify: true,
              },
            },
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      externals: ["commonjs esbuild"],
      plugins: moduleFederationConfig
        ? [
            new ModuleFederationPlugin(moduleFederationConfig),
            new ProvidePlugin({
              React: "react",
            }),
          ]
        : [
            new ProvidePlugin({
              React: "react",
            }),
          ],
      optimization: {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
          name: false,
        },
      },
    };
  }

  private getServerWebpackConfig(): WebpackConfiguration {
    const entries = this.generatePagesEntry();

    const outputPath = this.getOutputPath(this.config.outDir || "", "server");

    return {
      mode:
        process.env.POLARIS_ENV === "production" ? "production" : "development",
      target: "node",
      entry: entries,
      output: {
        path: outputPath,
        filename: "[name].js",
        libraryTarget: "commonjs2",
      },
      module: {
        rules: [
          {
            test: /\.node$/,
            loader: node_loader_inline,
          },
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: [/node_modules/, /\.d\.ts$/],
            use: {
              loader: swc_inline_loader,
              options: {
                jsc: {
                  parser: {
                    syntax: "typescript",
                    tsx: true,
                    decorators: true,
                    dynamicImport: true,
                  },
                  transform: {
                    react: {
                      runtime: "automatic",
                    },
                  },
                  target: "es2015",
                },
              },
            },
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
      },
      externals: ["commonjs esbuild"],
    };
  }

  private getAPIWebpackConfig(): WebpackConfiguration {
    const entries: { [key: string]: string } = {};
    const outputPath = this.getOutputPath(this.config.outDir || "", "api");

    // API entries
    for (const api of this.apis) {
      entries[api.name] = api.path;
    }

    return {
      mode:
        process.env.POLARIS_ENV === "production" ? "production" : "development",
      target: "node",
      entry: entries,
      output: {
        path: outputPath,
        filename: "[name].js",
        libraryTarget: "commonjs2",
      },
      module: {
        rules: [
          {
            test: /\.node$/,
            loader: node_loader_inline,
          },
          {
            test: /\.(js|ts)$/,
            exclude: [/node_modules/, /\.d\.ts$/],
            use: {
              loader: swc_inline_loader,
              options: {
                jsc: {
                  parser: {
                    syntax: "typescript",
                    decorators: true,
                    dynamicImport: true,
                  },
                  target: "es2015",
                },
              },
            },
          },
        ],
      },
      resolve: {
        extensions: [".ts", ".js"],
      },
      externals: ["h3", "esbuild"],
    };
  }

  async build() {
    const clientConfig = this.getClientWebpackConfig();
    const serverConfig = this.getServerWebpackConfig();
    const apiConfig = this.getAPIWebpackConfig();

    return await Promise.all([
      new Promise((res, rej) => {
        webpack(clientConfig).run((err, stats) => {
          if (err || stats?.hasErrors()) rej(err || stats);
          res(stats);
        });
      }),
      new Promise((res, rej) => {
        webpack(serverConfig).run((err, stats) => {
          if (err || stats?.hasErrors()) rej(err || stats);
          res(stats);
        });
      }),
      new Promise((res, rej) => {
        webpack(apiConfig).run((err, stats) => {
          if (err || stats?.hasErrors()) rej(err || stats);
          res(stats);
        });
      }),
    ]);
  }

  private createCompilers() {
    const clientConfig = this.getClientWebpackConfig();
    const serverConfig = this.getServerWebpackConfig();
    const apiConfig = this.getAPIWebpackConfig();

    // Enable HMR for client
    if (process.env.POLARIS_ENV !== "production") {
      clientConfig.plugins = [
        ...(clientConfig.plugins || []),
        new HotModuleReplacementPlugin(),
      ];

      if (clientConfig.entry && typeof clientConfig.entry === "object") {
        Object.keys(clientConfig.entry).forEach((key) => {
          const entry = (clientConfig.entry as EntryObject)[key];
          // @ts-ignore
          clientConfig.entry[key] = Array.isArray(entry)
            ? [webpack_hot_middleware_client_inline, ...entry]
            : [webpack_hot_middleware_client_inline, entry];
        });
      }
    }

    return [webpack(clientConfig), webpack(serverConfig), webpack(apiConfig)];
  }

  watch(callback?: (stats: BuildStats) => void) {
    this.compilers = this.createCompilers();

    const watching = this.compilers.map((compiler) =>
      compiler.watch(
        {
          aggregateTimeout: 300,
          ignored: /node_modules/,
        },
        (err, stats) => {
          if (err) {
            this.emit("error", err);
            return;
          }

          if (stats?.hasErrors()) {
            this.emit("error", stats.compilation.errors);
            return;
          }

          // Emit different events based on which compiler finished
          if (compiler.options.target === "web") {
            this.emit("client-build", stats);
          } else if (compiler.options.output?.path?.includes("/api")) {
            this.emit("api-build", stats);
          } else {
            this.emit("server-build", stats);
          }

          callback?.({
            clientStats: compiler.options.target === "web" ? stats : undefined,
            serverStats:
              compiler.options.target === "node" &&
              !compiler.options.output?.path?.includes("/api")
                ? stats
                : undefined,
            apiStats: compiler.options.output?.path?.includes("/api")
              ? stats
              : undefined,
          });
        }
      )
    );

    // Clean up watchers on process exit
    process.on?.("SIGINT", () => {
      watching.forEach((w) => w.close(() => {}));
      process.exit?.();
    });
  }

  // @ts-ignore
  async getMiddleware(): {
    devMiddleware: any;
    hotMiddleware: any;
  } {
    if (!this.compilers.length) {
      this.compilers = this.createCompilers();
    }

    const clientCompiler = this.compilers.find(
      (c) => c.options.target === "web"
    );
    if (!clientCompiler) throw new Error("Client compiler not found");

    const [
      { default: webpackDevMiddleware },
      { default: webpackHotMiddleware },
    ] = await Promise.all([
      import("webpack-dev-middleware"),
      import("webpack-hot-middleware"),
    ]);

    return {
      devMiddleware: webpackDevMiddleware(clientCompiler, {
        publicPath: this.config.publicPath || "",
        serverSideRender: true,
      }),
      hotMiddleware: webpackHotMiddleware(clientCompiler, {
        path: "/__webpack_hmr",
        heartbeat: 10 * 1000,
      }),
    };
  }

  getPagesCount(): number {
    return this.pages.length;
  }

  getModulesCount(): number {
    return this.modules.length;
  }

  getAPIRoutesCount(): number {
    return this.apis.length;
  }
}
