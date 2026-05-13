# Archived Modules

This folder holds retired, demoted, or replaced learning-module material that may still be useful later.

Use it for:

- old module descriptions
- removed simulator scripts or command sequences
- scenario copy worth scavenging
- validation notes from a retired approach
- UI or lesson concepts that should not appear in the active learner path

Do not use it for:

- active modules
- required learner assets
- vendored third-party trainers
- scratch files that have no reuse value

## Archive Rules

- Keep each retired module in its own folder.
- Add a short `README.md` explaining why it was archived and what is still worth reusing.
- Do not import archived files from `app.js`.
- Do not link archived modules from the portal unless the module is restored.
- Prefer archiving the smallest useful pieces instead of copying an entire obsolete module.

## Suggested Folder Shape

```text
archive/
  retired-module-name/
    README.md
    notes.md
    snippets/
```

## Retired Module README Shape

```markdown
# Retired Module Name

## Why Archived

Short reason this no longer belongs in the active learner path.

## Useful Pieces To Scavenge

- 

## Do Not Bring Back

- 

## Original Surfaces

- 
```
