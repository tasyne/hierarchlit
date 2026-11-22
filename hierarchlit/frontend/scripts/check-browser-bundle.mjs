import { readdir, readFile } from "node:fs/promises";

const buildDirectory = new URL("../build/", import.meta.url);
const bundles = (await readdir(buildDirectory)).filter(
  (name) => name.startsWith("index-") && name.endsWith(".js"),
);

if (bundles.length !== 1) {
  throw new Error(`Expected exactly one browser bundle, found ${bundles.length}.`);
}

const source = await readFile(new URL(bundles[0], buildDirectory), "utf8");
if (/\bprocess(?:\.|\[)/u.test(source)) {
  throw new Error("Browser bundle contains an unresolved Node `process` reference.");
}
