import { chmod } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const binPath = join(__dirname, "../dist/polaris.js");
  try {
    await chmod(binPath, 0o755);
    console.log("Successfully set executable permissions for CLI");
  } catch (error) {
    console.error("Failed to set executable permissions:", error);
  }
}

main().catch(console.error);
