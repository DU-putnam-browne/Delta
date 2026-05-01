# Troubleshooting

## Page Opens But Looks Plain

Likely cause: `styles.css` is missing or not next to `index.html`.

Check:

```text
index.html
styles.css
app.js
assets/delta-utilities-logo.png
```

## Logo Does Not Load

Verify:

```text
assets/delta-utilities-logo.png
```

If the file was renamed, update the image path in `index.html`.

## Progress or Quiz State Looks Wrong

Use the **Reset** button in the app header.

Manual browser-console fallback:

```js
localStorage.removeItem("git-learning-lab-state-v5");
localStorage.removeItem("git-learning-lab-theme");
```

## Browser Blocks Local File Opening

Run the optional local server:

```powershell
npm run serve
```

If PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd run serve
```

Open the printed local URL.

## Port Is Busy

Use another port:

```powershell
$env:PORT=5174
npm run serve
```

## npm Command Fails

The app does not require npm. Open `index.html` directly.

If you need the optional scripts, confirm Node.js is installed:

```powershell
node --version
npm --version
```

## Simulator Command Is Not Recognized

Type:

```text
help
```

The simulator supports a focused command set. It is not a full Git or PowerShell interpreter.

## Validation Fails

Run:

```powershell
npm run check
```

Execution-policy fallback:

```powershell
npm.cmd run check
```

Fix missing local references first. The most likely issues are moved CSS, JS, or image files.
