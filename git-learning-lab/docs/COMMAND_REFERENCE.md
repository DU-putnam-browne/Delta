# Command Reference

This page lists the simulator commands that are intentionally supported by the lab.

## Core Git Path

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
git push
git push -u origin <branch>
git log --oneline
```

These are the main commands learners should use for the default ticket-to-PR workflow.

## Merge And Recovery Commands

```text
git merge <branch>
resolve <file>
```

Use these for conflict drills, merge concepts, and later-stage practice.

## Simulator-Only Helper Commands

```text
edit <file>
mkdir <folder>
"Text" | Out-File <file>
git init
```

These are training helpers. They make the simulated environment usable, but they are not the recommended starting path for real repo work.

## Utility Commands

```text
help
clear
```

## What the Simulator Does Not Cover

- authentication
- SSH keys
- rebasing
- tags
- submodules
- partial clone
- Git LFS
- every merge conflict edge case

Those are valid topics, but they are not the first 60 minutes of useful Git literacy.
