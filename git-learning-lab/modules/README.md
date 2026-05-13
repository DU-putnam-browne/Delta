# Analyst Engineering Enablement Lab Modules

This folder is the modular curriculum home for the static learning platform. The app still loads most lesson content from `app.js` so `index.html` can run without a build step, but each module folder should describe the learning contract and hold any module-owned assets.

## Module Families

| Folder | Purpose | Current modules |
| --- | --- | --- |
| `git/` | Git workflow, branch visualization, PR readiness, recovery, and handoff practice | Ticket-to-PR, Visual Branching, Recovery Drills, Project Capsule, Repo Review Handoff |
| `tools/` | Setup and practical use of work tools | Codex, VS Code |
| `languages/` | Language-specific practice where syntax and platform behavior matter | Oracle SQL |
| `archive/` | Retired module descriptions, scripts, and reusable fragments kept out of the active learner path | Old or demoted concepts only |

## Module Contract

Every module should answer these questions in its `README.md`:

- Who is this for?
- What is the learner's Aha moment?
- What should the learner be able to do after the module?
- What does this module intentionally not teach?
- What files, simulator surfaces, or static assets own this module?
- What module comes before and after it?
- What commands or facts must be verified before shipping changes?

## Folder Rules

- Keep modules self-contained when possible.
- Put module-specific static assets inside the module folder.
- Keep shared brand assets in the top-level `assets/` folder.
- Do not add build tooling or package dependencies to a module unless the whole lab intentionally moves away from the static/no-install model.
- Do not duplicate a concept already handled better by another module. Link or sequence to it instead.
- Keep Windows and PowerShell examples first because the learner environment is Windows-heavy.
- Move retired module notes into `archive/` instead of deleting useful scenario copy, scripts, or validation ideas outright.
- Archived modules must not be linked from the main learner path unless they are intentionally restored.

## Recommended Module Files

| File or folder | Use |
| --- | --- |
| `README.md` | Human-readable module contract and maintenance notes |
| `assets/` | Module-specific images, downloads, or embedded trainer files |
| `data/` | Future extracted lesson metadata, scenarios, questions, or fixtures |
| `samples/` | Future learner-facing sample files |
| `notes/` | Future facilitator notes or audit findings |

Only add these folders when they have a real purpose. Empty architecture is still clutter, just wearing a tie.
