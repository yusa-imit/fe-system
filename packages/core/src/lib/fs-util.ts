import fs from "fs";
import { GlobOptionsWithFileTypesUnset, sync } from "glob";

export function enoentSafeReadDirSync(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return fs.readdirSync(dir);
}

export function enoentSafeGlobSync(
  path: string,
  regex: string,
  options?: GlobOptionsWithFileTypesUnset
) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  return sync(regex, options);
}
