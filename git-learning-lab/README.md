# Git Learning Lab

## BLUF

This is a static, browser-based Git training lab for the Delta Utilities Oracle / ADO workflow. A learner can download the repository, open `index.html`, and practice without installing dependencies, signing in, or changing real Git history.

## Objective

The lab teaches the minimum useful Git workflow for analyst and IT work:

- connect a request to an ADO-style ticket
- clone and inspect an existing repo safely
- understand working tree, staging area, committed history, and remotes
- create task branches from current `main`
- add SQL or documentation assets
- publish a reviewable branch for PR handoff
- recognize merge, conflict, and remote-sync workflows without touching a live repo

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

Then open the URL printed in the terminal, usually `http://localhost:5173`.

## Download and Play Path

1. Download the repository ZIP or clone it.
2. Open the folder.
3. Double-click `index.html`.
4. Start with the Git path in **How to**: Visual Branching Trainer, then Ticket-to-PR, then Project Capsule.
5. Type commands into the PowerShell-style terminal and press Enter.

The guided cards show what to type. The app does not run real shell commands for the learner.

## Repository Map

| Path | Purpose |
| --- | --- |
| `index.html` | Static app entry point |
| `app.js` | Simulator state, lesson content, command handling, quiz logic |
| `styles.css` | Layout, responsive behavior, Delta Utilities visual styling |
| `assets/` | Static image assets used by the app |
| `modules/` | Module-owned learning assets and future extracted lesson content |
| `modules/git/` | Git workflow modules and embedded Git trainers |
| `modules/tools/` | Codex and VS Code tool modules |
| `modules/languages/` | Language modules such as SQL Basics and Oracle SQL |
| `modules/MODULE_TEMPLATE.md` | Template for adding future modules without inventing a new structure |
| `docs/` | Learner, facilitator, setup, troubleshooting, and release docs |
| `scripts/` | Optional no-dependency local serve/check scripts |
| `AGENTS.md` | Repo-local instructions for coding agents |

## Lab Flow

The primary Git path is:

1. Visual Branching Trainer for Git fundamentals.
2. Ticket-to-PR for the normal ADO ticket workflow.
3. Project Capsule for longer analyst project context.

The Ticket-to-PR guided lab models:

- clone the Oracle repo
- inspect `origin`
- confirm local `main` is current
- create a task branch
- edit and review a scoped SQL change
- commit it with a clear message
- publish the branch for PR review

Recovery drills are optional applied practice for wrong-branch, dirty-state, staged/unstaged cleanup, and conflict scenarios.

## Useful Simulator Commands

```text
git clone <ado-url>
cd Oracle
git remote -v
git status
git pull
git diff
git add <file>
git add .
git restore --staged <file>
git commit -m "message"
git branch
git switch -c <branch>
git switch <branch>
git merge <branch>
git log --oneline
git push -u origin <branch>
help
clear
```

Simulator-only helper commands:

```text
edit <file>
resolve <file>
mkdir <folder>
"Text" | Out-File <file>
git init
```

Use the helper commands only inside the training lab. For real repo work, the default path is clone -> inspect remote -> pull -> branch -> diff -> commit -> push.

The guided branch uses:

```text
feature/ccs-emergency-orders-zip-prior-week-demo
```

The demo SQL path is:

```text
ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql
```

## Optional Validation

Run the no-dependency static checks:

```powershell
npm run check
```

Execution-policy fallback:

```powershell
npm.cmd run check
```

The checker verifies required files, local `src` / `href` references in `index.html`, and key app markers.

## GitHub Setup

If GitHub CLI is installed:

```powershell
gh auth status
gh repo create git-learning-lab --private --source=. --remote=origin --push
```

If GitHub CLI is not available:

```powershell
git init
git add .
git commit -m "Initial git learning lab"
git branch -M main
git remote add origin https://github.com/USERNAME/git-learning-lab.git
git push -u origin main
```

More detail is in `docs/REPO_SETUP.md`.

## Troubleshooting

- If the page opens but looks unstyled, verify `styles.css` is next to `index.html`.
- If the logo is missing, verify `assets/delta-utilities-logo.png` exists.
- If progress looks stale, use **Reset** in the app or clear browser storage for the page.
- If double-clicking `index.html` is blocked by local workstation policy, run `npm run serve` and open the local URL.
- If `npm run serve` fails because the port is busy, run `$env:PORT=5174; npm run serve`.
- If PowerShell blocks `npm.ps1`, use `npm.cmd run serve` or `npm.cmd run check`.

## Constraints

This is intentionally a learning simulator. It models the high-value Git concepts without trying to reproduce every edge case of the real Git CLI.

No open-source license is included. Treat the repository as internal/private unless a license and public-sharing review are added.

## Brand Notes

Brand styling is based on the Delta Utilities brand guide and templates:

- Electric Blue `#0042ff`
- Midnight Navy `#082652`
- Crisp Mint `#c3f4e6`
- Spring Green `#14c614`
- Golden Yellow `#ffb30b`
- Rubik for headings when available, with Arial/system fallbacks
