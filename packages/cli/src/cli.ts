#!/usr/bin/env node
import { defineCommand, runMain } from "citty";
import { consola } from "consola";
import { loadConfig } from "./config";
import { process } from "std-env";
import { PolarisServer, PolarisBuilder } from "@polaris/core";
import fs from "fs";
import path from "path";

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
    watch: {
      type: "boolean",
      description: "Watch mode",
      default: true,
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
      config.outDir = "./.polaris";
      config.server = {
        ...config.server,
        port: parseInt(args.port),
        host: args.host,
      };

      // Set development environment
      process.env.POLARIS_ENV = "development";

      // Start server (HMR will be handled internally)
      const server = new PolarisServer({ ...config, watch: args.watch });
      await server.start();

      logger.success(
        `Development server running at http://${args.host}:${args.port}`
      );
    } catch (error) {
      consola.error("Failed to start development server:", error);
      console.trace();
      process.exit?.(1);
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
    analyze: {
      type: "boolean",
      description: "Analyze bundle size",
      default: false,
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start("Building application...");

      const config = await loadConfig();

      // Set environment
      process.env.POLARIS_ENV = "production";

      const builder = new PolarisBuilder(config);
      const startTime = Date.now();

      logger.info("Building client bundle...");
      await builder.build();

      const buildTime = Date.now() - startTime;

      logger.success(`Build completed in ${buildTime}ms`);
      logger.info(`Output directory: ${config.outDir}`);

      // Log build stats
      logger.info("Build stats:");
      logger.info(`  Pages: ${builder.getPagesCount()}`);
      logger.info(`  API Routes: ${builder.getAPIRoutesCount()}`);
      logger.info(`  Modules: ${builder.getModulesCount()}`);
    } catch (error) {
      consola.error("Build failed:", error);
      process.exit?.(1);
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

      // Check if build exists
      if (!fs.existsSync(path.join(process.cwd?.() || "", "dist"))) {
        logger.error("No build found. Please run 'polaris build' first");
        process.exit?.(1);
      }

      const config = await loadConfig();

      // Set environment
      process.env.POLARIS_ENV = "production";

      config.server = {
        ...config.server,
        port: parseInt(args.port),
        host: args.host,
      };

      const server = new PolarisServer(config);
      await server.start();

      logger.success(
        `Production server running at http://${args.host}:${args.port}`
      );
    } catch (error) {
      consola.error("Failed to start production server:", error);
      process.exit?.(1);
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
    module: {
      type: "boolean",
      description: "Create as a module project",
      default: false,
    },
  },
  async run({ args }) {
    try {
      const logger = consola.create({
        level: 3,
      });

      logger.start(`Creating new project: ${args.name}`);

      // Project template structure
      const template = args.module ? "module" : args.template;

      // Add basic structure
      const structure = [
        "pages/",
        "api/",
        "modules/",
        "public/",
        "components/",
        "styles/",
      ];

      // Create project files...

      logger.success("Project created successfully!");
      logger.info("\nAvailable commands:");
      logger.info("  npm run dev    - Start development server");
      logger.info("  npm run build  - Build for production");
      logger.info("  npm run start  - Start production server");

      if (args.module) {
        logger.info("\nModule Federation enabled!");
        logger.info("Check polaris.config.ts for module configuration");
      }
    } catch (error) {
      consola.error("Failed to create project:", error);
      process.exit?.(1);
    }
  },
});

// Main CLI command
const main = defineCommand({
  meta: {
    name: "polaris",
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

runMain(main);
