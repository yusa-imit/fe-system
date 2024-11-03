// packages/cli/src/config.ts
import { loadConfig as loadConfigFile } from "c12";
import { consola } from "consola";
import { PolarisConfig } from "@polaris/core";
import { process } from "std-env";

export async function loadConfig(): Promise<PolarisConfig> {
  const logger = consola.create({
    level: 3,
  });

  try {
    const { config, source } = await loadConfigFile<PolarisConfig>({
      name: "polaris",
      configFile: "./polaris.config.ts",
      defaults: {
        entry: "./src/index.tsx",
        outDir: "./dist",
        publicPath: "/",
        server: {
          port: 3000,
          host: "localhost",
        },
      },
    });

    // if (sources.length > 0) {
    //   logger.debug("Config loaded from:", sources.join(", "));
    // }

    if (!config) {
      throw new Error("Could not load configuration");
    }

    return config;
  } catch (error) {
    logger.error("Failed to load config:", error);
    throw error;
  }
}
