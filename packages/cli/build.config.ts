import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      input: "./src/cli.ts",
      name: "polaris",
      outDir: "dist",
    },
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: false,
    esbuild: {
      target: "node14",
    },
  },
  // Generate both CJS and ESM outputs
  failOnWarn: false,
  hooks: {
    "rollup:done": async () => {
      // chmod 755 for all output files
      const { chmod } = await import("fs/promises");
      const { readdir } = await import("fs/promises");
      const { join } = await import("path");

      const dist = join(process.cwd(), "dist");
      const files = await readdir(dist);

      for (const file of files) {
        if (file.startsWith("polaris")) {
          await chmod(join(dist, file), 0o755);
        }
      }
    },
  },
});
