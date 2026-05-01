# Learner Quickstart

## Goal

Practice the Git workflow used for Oracle / ADO work without changing a real repository.

## Start

Open:

```text
index.html
```

Then choose:

- **Start lesson** for the guided course path
- **Open full lab** for the simulator workspace

## How the Simulator Works

Type commands into the PowerShell-style prompt and press Enter. The app updates a simulated repository state, including files, staging, commits, branches, and merges.

The simulator does not run real shell or Git commands. It is safe to experiment.

## Recommended First Run

Use this sequence:

```text
mkdir oracle-git-lab
cd oracle-git-lab
git init
"Emergency Orders by ZIP - Prior Week" | Out-File README.md
git status
git add README.md
git commit -m "Add ticket context"
git switch -c feature/ccs-emergency-orders-zip-prior-week-demo
edit ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql
git status
git add ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql
git commit -m "Add emergency orders ZIP report"
git switch main
git merge feature/ccs-emergency-orders-zip-prior-week-demo
git log --oneline
```

## What to Notice

- `git status` tells you what changed.
- `git add` chooses what goes into the next checkpoint.
- `git commit` saves that checkpoint with a message.
- `git switch -c` creates a branch and moves you onto it.
- `git merge` brings branch work back to `main`.

## Reset

Use the **Reset** button in the app header.

If browser state gets stuck, clear site data for the local page and reopen `index.html`.
