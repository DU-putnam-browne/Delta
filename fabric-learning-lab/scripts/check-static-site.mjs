import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "README.md",
  "AGENTS.md",
  "package.json",
  "assets/README.md",
  "assets/delta-utilities-logo.png",
  "docs/README.md",
  "docs/LEARNER_QUICKSTART.md",
  "docs/FACILITATOR_GUIDE.md",
  "docs/NOTEBOOK_PRIMER.md",
  "docs/FABRIC_SETUP_REFERENCE.md",
  "docs/SOURCE_CONNECTIONS_REFERENCE.md",
  "docs/TROUBLESHOOTING.md",
  "docs/RELEASE_CHECKLIST.md",
  "scripts/serve.mjs",
  "scripts/check-static-site.mjs"
];

const errors = [];
const warnings = [];

function localPath(path) {
  return resolve(root, path);
}

function requireFile(path) {
  const fullPath = localPath(path);
  if (!existsSync(fullPath) || !statSync(fullPath).isFile()) {
    errors.push(`Missing required file: ${path}`);
  }
}

requiredFiles.forEach(requireFile);

const indexPath = localPath("index.html");
if (existsSync(indexPath)) {
  const html = readFileSync(indexPath, "utf8");
  const referencePattern = /\b(?:src|href)=["']([^"']+)["']/gi;
  const localReferences = [...html.matchAll(referencePattern)]
    .map((match) => match[1].trim())
    .filter((reference) => reference && !reference.startsWith("#"))
    .filter((reference) => !/^[a-z][a-z0-9+.-]*:/i.test(reference));

  localReferences.forEach((reference) => {
    const cleanReference = reference.split(/[?#]/, 1)[0];
    const fullPath = localPath(cleanReference);
    if (!existsSync(fullPath)) {
      errors.push(`Broken local reference in index.html: ${reference}`);
    }
  });
}

const appPath = localPath("app.js");
if (existsSync(appPath)) {
  const app = readFileSync(appPath, "utf8");
  const expectedMarkers = [
    "fabric-learning-lab-state-v1",
    "workspaceNodes",
    "notebookCells",
    "function render",
    "addEventListener",
    "localStorage"
  ];

  expectedMarkers.forEach((marker) => {
    if (!app.includes(marker)) {
      errors.push(`Expected app marker missing from app.js: ${marker}`);
    }
  });
}

const stylePath = localPath("styles.css");
if (existsSync(stylePath)) {
  const css = readFileSync(stylePath, "utf8");
  ["--blue", "--navy", "--mint", "--green", "--amber", "@media"].forEach((marker) => {
    if (!css.includes(marker)) {
      errors.push(`Expected style marker missing from styles.css: ${marker}`);
    }
  });
}

const credentialAssignmentPattern =
  /\b(?:password|passwd|pwd|secret|token|api[_-]?key|client[_-]?secret|subscription[_-]?id)\b\s*=\s*["']([^"'<>{}\s][^"']{7,})["']/gi;
const suspiciousLiteralPattern =
  /\b(?:Bearer\s+[A-Za-z0-9._~-]{20,}|Basic\s+[A-Za-z0-9+/=]{20,}|[A-Fa-f0-9]{32,})\b/g;
const textFiles = requiredFiles.filter((path) => [".md", ".html", ".css", ".js", ".json", ".mjs"].includes(extname(path)));

textFiles.forEach((path) => {
  const fullPath = localPath(path);
  if (!existsSync(fullPath)) {
    return;
  }
  const text = readFileSync(fullPath, "utf8");
  if (text.trim().length === 0) {
    warnings.push(`File is empty: ${path}`);
  }

  const cleaned = path === "scripts/check-static-site.mjs" ? text.replaceAll("credentialAssignmentPattern", "") : text;
  credentialAssignmentPattern.lastIndex = 0;
  suspiciousLiteralPattern.lastIndex = 0;
  if (credentialAssignmentPattern.test(cleaned) || suspiciousLiteralPattern.test(cleaned)) {
    errors.push(`Possible committed credential or sensitive literal in: ${path}`);
  }
});

if (warnings.length) {
  console.warn("Warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error("Static site check failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Static site check passed.");
}
