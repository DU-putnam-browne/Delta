# Troubleshooting

## App Opens But Looks Unstyled

Check that these files sit next to each other:

```text
index.html
styles.css
app.js
```

If `styles.css` was moved or renamed, the direct-open path will not work.

## Logo Is Missing

Verify:

```text
assets/delta-utilities-logo.png
```

The app uses a local image only. No external image host is required.

## Progress Looks Wrong

Use **Reset** in the app header.

If that does not work, clear browser storage for the local page and reopen `index.html`.

## Copy Button Does Nothing

Some browsers block clipboard access from local files. This does not break the lab. Select the visible notebook snippet manually if needed.

If copy behavior is important for a class session, run the local server:

```powershell
npm run serve
```

Then open the printed localhost URL.

## Local Server Port Is Busy

Use another port:

```powershell
$env:PORT=5175; npm run serve
```

Execution-policy fallback:

```powershell
$env:PORT=5175; npm.cmd run serve
```

## npm Is Blocked By PowerShell

Use:

```powershell
npm.cmd run check
npm.cmd run serve
```

## Learner Confuses Simulator With Real Fabric

Reframe:

- simulated cells do not execute
- no workspace items are changed
- output panels are training examples
- real validation must happen in the appropriate Fabric workspace

## Learner Wants To Paste Snippets Into Production

Stop and review first. The snippets are teaching patterns, not approved production code.

Before using a snippet in real work, confirm:

- source system
- auth pattern
- target lakehouse
- table name
- write mode
- schema
- row grain
- validation method
- downstream impact
