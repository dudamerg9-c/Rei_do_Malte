import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rootDir = process.cwd();
const clientDir = join(rootDir, "dist", "client");
const assetsDir = join(clientDir, "assets");
const basePath = "/Rei_do_Malte/";

const assets = readdirSync(assetsDir);
const jsFile =
  assets.find((name) => /^index-[A-Za-z0-9_-]+\.js$/.test(name)) ??
  assets.find((name) => /^main-[A-Za-z0-9_-]+\.js$/.test(name));
const cssFile = assets.find((name) => /^styles-[A-Za-z0-9_-]+\.css$/.test(name));

if (!jsFile) {
  throw new Error("Could not find the production JS bundle in dist/client/assets");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rei do Malte</title>
    ${cssFile ? `<link rel="stylesheet" href="${basePath}assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="${basePath}assets/${jsFile}"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
