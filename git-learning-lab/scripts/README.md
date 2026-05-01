# Scripts

Optional no-dependency Node.js scripts for local development and release checks.

## Commands

```powershell
npm run serve
npm run check
```

If PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd run serve
npm.cmd run check
```

## Files

| File | Purpose |
| --- | --- |
| `serve.mjs` | Starts a simple local static file server |
| `check-static-site.mjs` | Validates required files and local `index.html` references |

The learner path does not require these scripts. They are for maintainers and facilitators who want a local URL or a quick release check.
