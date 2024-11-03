import { PolarisConfig } from "./type";
import { webpack, Configuration } from "webpack";
import { process } from "std-env";
import { defu } from "defu";
import { ModuleFederationPlugin } from "@module-federation/enhanced";

export interface WebpackConfiguration extends Configuration {}

const DEFAULT_POLARIS_CONFIG: PolarisConfig = {
  entry: "index.ts",
  outDir: "./dist",
  server: {
    port: 3000,
  },
};

export class PolarisBuilder {
  private config: PolarisConfig;

  constructor(config: PolarisConfig) {
    this.config = defu(config, DEFAULT_POLARIS_CONFIG);
  }

  private getClientWebpackConfig(): WebpackConfiguration {
    return {
      mode:
        process.env.POLARIS_ENV === "production" ? "production" : "development",
      entry: this.config.entry,
      output: {
        path: `${this.config.outDir}/client`,
        publicPath: this.config.publicPath,
        filename: "[name].[contenthash].js",
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      plugins: this.config.moduleFederation
        ? [
            new ModuleFederationPlugin({
              filename: "remoteEntry.js",
              ...this.config.moduleFederation,
            }),
          ]
        : [],
    };
  }

  private getServerWebpackConfig(): WebpackConfiguration {
    return {
      mode:
        process.env.POLARIS_ENV === "production" ? "production" : "development",
      target: "node",
      entry: this.config.entry,
      output: {
        path: `${this.config.outDir}/server`,
        filename: "server.js",
        libraryTarget: "commonjs2",
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
      },
    };
  }

  async build() {
    const clinetConfig = this.getClientWebpackConfig();
    const serverConfig = this.getServerWebpackConfig();

    return await Promise.all([
      new Promise((res, rej) => {
        webpack(clinetConfig).run((err, stats) => {
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
    ]);
  }
}
