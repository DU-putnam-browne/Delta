# Fabric Learning Lab

## BLUF

This is a static, browser-based Microsoft Fabric training lab for Delta Utilities analyst and IT users. A learner can open `index.html` and practice Fabric orientation, lakehouse flow, notebook patterns, source connection choices, repo governance, and capstone mapping without signing in or making real Fabric calls.

## Objective

The lab teaches the minimum useful Fabric workflow for Delta Utilities work:

- understand `The Lake` workspace and the curated `C:\Repositories\Fabric` repo model
- distinguish lakehouses, notebooks, pipelines, dataflows, semantic models, and reports
- apply Bronze, Silver, Gold lakehouse thinking
- read safe Python/PySpark notebook snippets
- choose between Dataflow Gen2, notebooks, pipelines, and documentation-only tracking
- map source systems to governed repo paths and downstream products
- describe validation and review handoff clearly

## Fastest Start

Open the app directly:

```text
index.html
```

No install step, dev server, build command, or network access is required.

Optional local server if Node.js is available:

```powershell
npm run serve
```

If PowerShell blocks `npm.ps1` because of execution policy, use:

```powershell
npm.cmd run serve
```

Then open the URL printed in the terminal, usually `http://localhost:5174`.

## Lab Flow

The learning path includes:

| Module | Focus |
| --- | --- |
| Fabric Lab 1 | Delta setup, `The Lake`, item types, repo stewardship |
| Fabric Lab 2 | Bronze, Silver, Gold, table/file/shortcut thinking |
| Fabric Lab 3 | Python and PySpark notebook basics |
| Fabric Lab 4 | Source connections and ingestion choices |
| Fabric Lab 5 | Repo-to-Fabric lifecycle and PR handoff |
| Fabric Lab 6 | Capstone source-to-output mapping |

## Useful Local Files

| Path | Purpose |
| --- | --- |
| `index.html` | Static app entry point |
| `app.js` | Learning content, simulator state, quizzes, capstone logic |
| `styles.css` | Layout, responsive behavior, Delta Utilities visual styling |
| `assets/` | Static image assets used by the app |
| `docs/` | Learner, facilitator, setup, source, notebook, troubleshooting, and release docs |
| `scripts/` | Optional no-dependency local serve/check scripts |
| `AGENTS.md` | Repo-local instructions for coding agents |

## Optional Validation

Run the no-dependency static checks:

```powershell
npm run check
```

Execution-policy fallback:

```powershell
npm.cmd run check
```

The checker verifies required files, local references, expected app markers, brand tokens, and obvious committed credential patterns.

## Constraints

This is intentionally a learning simulator. It does not connect to Microsoft Fabric, OneLake, SharePoint, or external vendors. It models high-value operating concepts without reproducing every Fabric feature.

No open-source license is included. Treat the repository as internal/private unless a license and public-sharing review are added.

## Brand Notes

Brand styling follows the Delta Utilities lab pattern:

- Electric Blue `#0042ff`
- Midnight Navy `#082652`
- Crisp Mint `#c3f4e6`
- Spring Green `#14c614`
- Golden Yellow `#ffb30b`
- Rubik for headings when available, with Arial/system fallbacks
