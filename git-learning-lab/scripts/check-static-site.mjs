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
  "assets/delta-utilities-logo.png",
  "docs/README.md",
  "docs/LEARNER_QUICKSTART.md",
  "docs/FACILITATOR_GUIDE.md",
  "docs/COMMAND_REFERENCE.md",
  "docs/REPO_SETUP.md",
  "docs/TROUBLESHOOTING.md",
  "docs/RELEASE_CHECKLIST.md"
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
    "git-learning-lab-state-v5",
    "function render",
    "function handleCommand",
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
  ["--blue", "--navy", "--mint", "@media"].forEach((marker) => {
    if (!css.includes(marker)) {
      warnings.push(`Expected style marker missing from styles.css: ${marker}`);
    }
  });
}

requiredFiles
  .filter((path) => [".md", ".html", ".css", ".js", ".json"].includes(extname(path)))
  .forEach((path) => {
    const fullPath = localPath(path);
    if (existsSync(fullPath) && readFileSync(fullPath, "utf8").trim().length === 0) {
      warnings.push(`File is empty: ${path}`);
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
