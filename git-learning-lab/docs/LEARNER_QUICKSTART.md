# Learner Quickstart

## Goal

Practice the Git workflow used for Oracle / ADO work without changing a real repository.

## Start

Open:

```text
index.html
```

Then choose the Git-first path from **How to**, or open the guided Git lesson directly.

## How the Simulator Works

Type commands into the PowerShell-style prompt and press Enter. The app updates a simulated repository state, including files, staging, commits, branches, remotes, and merge readiness.

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
git log --oneline
```

Stop there on the first run. In the real workflow, the next step is a pull request, not a local merge back to `main`.

## What to Notice

- `git remote -v` confirms where fetch and push traffic would go.
- `git pull` confirms the branch starts from current `main`.
- `git status` tells you what changed.
- `git diff` shows the exact change before you stage it.
- `git add` chooses what goes into the next checkpoint.
- `git commit` saves that checkpoint with a message.
- `git push -u origin ...` publishes the reviewable branch.

## Reset

Use the **Reset** button in the app header.

If browser state gets stuck, clear site data for the local page and reopen `index.html`.
