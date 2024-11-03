import { glob } from "glob";
import { defineBuildConfig } from "unbuild";

const loaderEntries = glob.sync("src/loaders/*", { withFileTypes: false });
const runtimeEntries = glob.sync("src/runtime/*", { withFileTypes: false });

export default defineBuildConfig({
  entries: ["src/index", ...loaderEntries, ...runtimeEntries],
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: false,
  },
  externals: ["react", "react-dom"],
});
