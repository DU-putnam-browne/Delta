# Agent Instructions

## Project Shape

- Static browser app for Git, ADO, Oracle repo, and Codex orientation.
- No framework, bundler, backend, database, or required package install.
- Primary audience: Delta Utilities analyst / IT users practicing Git safely before touching real repositories.
- Progress and quiz state are stored in browser `localStorage`.

## Package Manager

Use npm only for optional local scripts.

| Task | Command |
| --- | --- |
| Serve locally | `npm run serve` |
| Validate static files | `npm run check` |

Do not add dependencies unless explicitly requested. If a dependency is necessary, explain why the static/no-install model is no longer enough.

## Key Files

- `index.html`: static shell and app mount points.
- `app.js`: lesson data, simulator state, command parser, quiz behavior, localStorage.
- `styles.css`: responsive layout and visual system.
- `assets/delta-utilities-logo.png`: brand image used by the top bar.
- `docs/`: learner, facilitator, troubleshooting, release, and repo setup docs.
- `scripts/check-static-site.mjs`: no-dependency validation script.
- `scripts/serve.mjs`: optional local static server.

## Product Conventions

- Preserve the download-and-play path: opening `index.html` should work.
- Keep commands PowerShell-first because the target environment is Windows-heavy.
- Keep the Oracle / ADO workflow concrete and business-useful.
- Do not make the simulator imply that it runs real Git commands.
- Avoid adding network calls or external hosted assets.
- Keep UI copy concise and action-oriented.

## Data and Workflow Guidance

For Git/ADO/Oracle examples, call out:

- ticket context
- branch purpose
- file path being changed
- commit message quality
- validation notes
- review handoff

For SQL examples, call out:

- row grain
- filters
- joins
- date logic
- assumptions
- validation checks

## Validation

Before final handoff after source or doc changes:

```powershell
npm run check
```

For UI changes, smoke check:

- app loads
- logo and styles load
- portal buttons work
- lesson navigation works
- terminal accepts commands
- quiz choices respond
- reset clears progress
- no obvious mobile overflow

## Change Discipline

- Make small, reviewable diffs.
- Do not rewrite the simulator from scratch.
- Do not convert to React/Vite unless specifically requested.
- Do not change the localStorage key or state shape without a compatibility path.
- Keep repo scaffolding docs aligned with the actual static app behavior.
