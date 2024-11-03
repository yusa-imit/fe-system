// packages/cli/src/index.ts
import { defineCommand, runMain } from "citty";
import { consola } from "consola";
import { loadConfig } from "./config";
import { process } from "std-env";
import { PolarisServer, PolarisBuilder } from "@polaris/core";

const dev = defineCommand({
  meta: {
    name: "dev",
    description: "Start development server",
  },
  args: {
    port: {
      type: "string",
      description: "Port number",
      default: "3000",
    },
    host: {
      type: "string",
      description: "Host address",
      default: "localhost",
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start("Starting development server...");

      const config = await loadConfig();
      // Override config with CLI args
      config.server = {
        ...config.server,
        port: parseInt(args.port),
        host: args.host,
      };

      const server = new PolarisServer(config);
      await server.start();

      logger.success(`Server running at http://${args.host}:${args.port}`);
    } catch (error) {
      consola.error("Failed to start development server:", error);
      process.exit(1);
    }
  },
});

const build = defineCommand({
  meta: {
    name: "build",
    description: "Build for production",
  },
  args: {
    minify: {
      type: "boolean",
      description: "Enable minification",
      default: true,
    },
    sourcemap: {
      type: "boolean",
      description: "Generate source maps",
      default: true,
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start("Building application...");

      const config = await loadConfig();
      // Add build-specific options
      // config.build = {
      //   ...config.build,
      //   minify: args.minify,
      //   sourcemap: args.sourcemap,
      // };

      const builder = new PolarisBuilder(config);
      const startTime = Date.now();
      await builder.build();
      const buildTime = Date.now() - startTime;

      logger.success(`Build completed in ${buildTime}ms`);
    } catch (error) {
      consola.error("Build failed:", error);
      process.exit(1);
    }
  },
});

const start = defineCommand({
  meta: {
    name: "start",
    description: "Start production server",
  },
  args: {
    port: {
      type: "string",
      description: "Port number",
      default: "3000",
    },
    host: {
      type: "string",
      description: "Host address",
      default: "localhost",
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start("Starting production server...");

      const config = await loadConfig();
      config.server = {
        ...config.server,
        port: parseInt(args.port),
        host: args.host,
      };

      const server = new PolarisServer(config);
      await server.start();

      logger.success(
        `Production server running at http://${args.host}:${args.port}`,
      );
    } catch (error) {
      consola.error("Failed to start production server:", error);
      process.exit(1);
    }
  },
});

const create = defineCommand({
  meta: {
    name: "create",
    description: "Create a new project",
  },
  args: {
    name: {
      type: "positional",
      description: "Project name",
      required: true,
    },
    template: {
      type: "string",
      description: "Project template",
      default: "default",
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start(`Creating new project: ${args.name}`);

      // Project creation logic here
      // ...

      logger.success("Project created successfully!");
      logger.info("To get started:");
      logger.info(`  cd ${args.name}`);
      logger.info("  npm install");
      logger.info("  npm run dev");
    } catch (error) {
      consola.error("Failed to create project:", error);
      process.exit(1);
    }
  },
});

// Main CLI command
const main = defineCommand({
  meta: {
    name: "my-framework",
    version: "0.0.1",
    description: "Modern React Framework with Module Federation",
  },
  subCommands: {
    dev,
    build,
    start,
    create,
  },
});

// Run the CLI
runMain(main);
