# Release Checklist

## Static Validation

Run:

```powershell
npm run check
```

Execution-policy fallback:

```powershell
npm.cmd run check
```

Confirm:

- required files exist
- `index.html` local references resolve
- app markers exist in `app.js`
- brand tokens exist in `styles.css`
- obvious committed credential patterns are not found

## Manual Smoke Check

Open `index.html` directly and confirm:

- logo loads
- styles load
- course overview appears
- **Start learning path** opens Fabric Lab 1
- module navigation changes the active lesson
- medallion flow advances
- notebook tabs switch
- **Run simulated cell** shows output
- copy button does not break the page if blocked
- quiz choices respond
- capstone scenario dropdown changes content
- capstone checklist toggles
- **Reset** clears progress

## Responsive Check

Check at:

- desktop width
- narrow laptop width
- mobile width

Confirm:

- no horizontal page overflow
- buttons fit their containers
- notebook code scrolls horizontally instead of breaking layout
- source cards stack on mobile
- topbar controls remain usable

## Content Check

Confirm:

- no real credentials or vendor secrets are present
- source examples stay high-level unless verified
- validation language does not claim runtime checks that were not performed
- docs match the actual app behavior
- official Microsoft links still point to current Fabric docs

## Handoff Notes

Include:

- validation command run
- whether direct file open was smoke tested
- whether local server was smoke tested
- any known limitations
- any files intentionally not touched
