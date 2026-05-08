# Agent Instructions

## Project Shape

- Static browser app for Microsoft Fabric onboarding and notebook practice.
- No framework, bundler, backend, database, external hosted assets, or required package install.
- Primary audience: Delta Utilities analyst / IT users learning Fabric safely before changing real workspace or repo assets.
- Progress, quizzes, and capstone state are stored in browser `localStorage`.

## Package Manager

Use npm only for optional local scripts.

| Task | Command |
| --- | --- |
| Serve locally | `npm run serve` |
| Validate static files | `npm run check` |

Do not add dependencies unless explicitly requested. If a dependency is necessary, explain why the static/no-install model is no longer enough.

## Key Files

- `index.html`: static shell and app mount points.
- `app.js`: module content, simulator state, notebook examples, quiz behavior, localStorage.
- `styles.css`: responsive layout and Delta Utilities visual system.
- `assets/delta-utilities-logo.png`: brand image used by the top bar.
- `docs/`: learner, facilitator, notebook primer, Fabric setup, source connections, troubleshooting, and release docs.
- `scripts/check-static-site.mjs`: no-dependency validation script.
- `scripts/serve.mjs`: optional local static server.

## Product Conventions

- Preserve the download-and-play path: opening `index.html` should work.
- Keep Fabric examples static and safe. The app must not call Fabric, vendors, SharePoint, or Microsoft APIs.
- Keep examples Delta-specific and business-useful.
- Do not imply the simulator validates a live Fabric workspace.
- Avoid adding network calls, dependencies, or external hosted assets.
- Keep UI copy concise and action-oriented.

## Data And Workflow Guidance

For Fabric examples, call out:

- source system and owner
- ingestion method
- lakehouse layer
- row grain
- target repo path
- validation checks
- downstream report/model impact
- credential handling assumptions

Notebook examples must use placeholders for secrets and endpoints. Do not commit live credentials, tokens, keys, auth headers, cookies, subscription IDs, or vendor-specific private values.

## Validation

Before final handoff after source or doc changes:

```powershell
npm run check
```

For UI changes, smoke check:

- app loads
- logo and styles load
- module navigation works
- notebook tabs respond
- simulated cell run updates output
- copy button does not break the app if blocked by browser policy
- quiz choices respond
- capstone scenario and checklist update
- reset clears progress
- no obvious mobile overflow

## Change Discipline

- Make small, reviewable diffs.
- Do not convert to React/Vite unless specifically requested.
- Do not add real Fabric workspace exports.
- Do not change the localStorage key or state shape without a compatibility path.
- Keep docs aligned with actual static app behavior.
