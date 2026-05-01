# Command Reference

This page lists the simulator commands that are intentionally supported by the lab.

## Folder and File Setup

```text
mkdir <folder>
cd <folder>
"Text" | Out-File <file>
edit <file>
```

Use these to create the simulated repo folder and add or edit training files.

## Core Git Commands

```text
git init
git status
git add <file>
git add .
git restore --staged <file>
git commit -m "message"
git log --oneline
```

## Branch Commands

```text
git branch
git switch -c <branch>
git switch <branch>
git merge <branch>
```

## Remote Workflow Commands

```text
git push
git pull
```

These model the concept of sharing and receiving changes. They do not connect to a real remote.

## Conflict Commands

```text
resolve <file>
```

Use this after loading a conflict drill. The goal is to practice the sequence: identify conflict, inspect the file, resolve it, stage it, and commit.

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
