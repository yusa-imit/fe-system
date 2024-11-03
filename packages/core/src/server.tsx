import {
  createApp,
  createRouter,
  eventHandler,
  toNodeListener,
  defineEventHandler,
} from "h3";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { createServer } from "node:http";
import type { H3Event, H3Response } from "h3";
import { PolarisConfig } from "./type";

export class PolarisServer {
  private config: PolarisConfig;
  private app: ReturnType<typeof createApp>;
  private router: ReturnType<typeof createRouter>;

  constructor(config: PolarisConfig) {
    this.config = config;
    this.app = createApp();
    this.router = createRouter();
  }

  private async setupMiddleware() {
    if (this.config.server?.middleware) {
      for (const middleware of this.config.server.middleware) {
        this.router.use(
          middleware.path,
          defineEventHandler(middleware.handler),
        );
      }
    }
  }

  private async setupSSR() {
    this.router.get(
      "/*",
      defineEventHandler(async (event) => {
        const url = event.node.req.url!;
        const context = {};

        // App component should be imported from the server bundle
        const { App } = await import(`${this.config.outDir}/server/server.js`);

        const html = await renderToString(
          <StaticRouter location={url} context={context}>
            <App />
          </StaticRouter>,
        );

        return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>My App</title>
            <script src="${this.config.publicPath}/remoteEntry.js"></script>
          </head>
          <body>
            <div id="root">${html}</div>
            <script src="${this.config.publicPath}/main.js"></script>
          </body>
        </html>
      `;
      }),
    );
  }

  async start() {
    await this.setupMiddleware();
    await this.setupSSR();

    this.app.use(this.router);

    const listener = toNodeListener(this.app);
    const server = createServer(listener);

    server.listen(
      this.config.server?.port || 3000,
      this.config.server?.host || "localhost",
      () => {
        console.log(
          `Server running at http://${this.config.server?.host || "localhost"}:${this.config.server?.port || 3000}`,
        );
      },
    );
  }
}
