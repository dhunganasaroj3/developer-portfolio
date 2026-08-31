// Rename out/_next → out/static and rewrite all path references.
// Why: GitHub Pages on this account 404s every URL under /_next/ while
// serving all other nested paths fine (verified with a probe file).
// Static site = simple text rewrite; no runtime impact (no async chunk loads).
import { promises as fs } from "node:fs";
import path from "node:path";

const out = path.resolve(process.argv[2] ?? "out");
const src = path.join(out, "_next");
const dst = path.join(out, "static");

const exts = new Set([".html", ".css", ".js", ".mjs", ".json", ".txt", ".xml"]);

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (exts.has(path.extname(entry.name))) yield p;
  }
}

let rewritten = 0;
for await (const file of walk(out)) {
  const before = await fs.readFile(file, "utf8");
  const after = before.replaceAll("/_next/", "/static/").replaceAll("_next/", "static/");
  if (after !== before) {
    await fs.writeFile(file, after);
    rewritten++;
  }
}
await fs.rename(src, dst);
console.log(`postprocess: renamed _next -> static, rewrote ${rewritten} files`);
