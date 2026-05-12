# Learner Quickstart

## Goal

Practice the Git workflow used for Oracle / ADO work without changing a real repository.

## Start

Open:

```text
index.html
```

Then choose:

- **Ticket to First PR** for the guided course path
- **Open practice lab** for the simulator workspace

## How the Simulator Works

Type commands into the PowerShell-style prompt and press Enter. The app updates a simulated repository state, including files, staging, commits, branches, and merges.

The simulator does not run real shell or Git commands. It is safe to experiment.

## Recommended First Run

Use this sequence:

```text
git clone https://dev.azure.com/deltautilities-it/Data%20and%20Analytics%20Projects/_git/Oracle
cd Oracle
git remote -v
git status
git pull
git switch -c feature/ccs-emergency-orders-zip-prior-week-demo
edit ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql
git status
git diff
git add ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql
git commit -m "Add emergency orders ZIP report"
git push -u origin feature/ccs-emergency-orders-zip-prior-week-demo
git switch main
git merge feature/ccs-emergency-orders-zip-prior-week-demo
git log --oneline
```

## What to Notice

- `git status` tells you what changed.
- `git clone` creates the local copy and sets the simulated `origin` remote.
- `git remote -v` confirms where fetch and push traffic would go.
- `git pull` checks that `main` is current before you branch.
- `git add` chooses what goes into the next checkpoint.
- `git commit` saves that checkpoint with a message.
- `git switch -c` creates a branch and moves you onto it.
- `git merge` brings branch work back to `main`.

## Reset

Use the **Reset** button in the app header. It clears only this browser simulator state; it does not touch real Git files or ADO.

If browser state gets stuck, clear site data for the local page and reopen `index.html`.
