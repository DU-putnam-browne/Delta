import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number.parseInt(process.env.PORT || "5173", 10);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function sendText(response, statusCode, body) {
  response.writeHead(statusCode, { "content-type": "text/plain; charset=utf-8" });
  response.end(body);
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  const decodedPath = decodeURIComponent(url.pathname);
  const normalizedPath = normalize(decodedPath).replace(/^([/\\])+/, "");
  const requestedPath = resolve(root, normalizedPath || "index.html");
  const relativePath = relative(root, requestedPath);

  if (relativePath.startsWith("..") || relativePath === ".." || relativePath.includes(`..${sep}`)) {
    return null;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isDirectory()) {
    return join(requestedPath, "index.html");
  }

  return requestedPath;
}

const server = createServer((request, response) => {
  const requestedPath = resolveRequestPath(request.url || "/");

  if (!requestedPath) {
    sendText(response, 403, "Forbidden");
    return;
  }

  if (!existsSync(requestedPath) || !statSync(requestedPath).isFile()) {
    sendText(response, 404, "Not found");
    return;
  }

  const contentType = mimeTypes[extname(requestedPath).toLowerCase()] || "application/octet-stream";
  response.writeHead(200, {
    "content-type": contentType,
    "cache-control": "no-store"
  });
  createReadStream(requestedPath).pipe(response);
});

server.listen(port, () => {
  console.log(`Git Learning Lab is available at http://localhost:${port}`);
  console.log(`Serving ${root}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Set another port, for example: $env:PORT=5174; npm run serve`);
    process.exitCode = 1;
    return;
  }

  console.error(error);
  process.exitCode = 1;
});
