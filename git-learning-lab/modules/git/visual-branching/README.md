# Git Fundamentals: Visual Branching Trainer

## Module Summary

- Family: Git
- Audience: learners who need the branch graph to click before applying the Delta Ticket-to-PR path
- Level: beginner to intermediate
- Estimated time: 25 to 45 minutes
- Current implementation: vendored Learn Git Branching static build opened from the portal

## Learner Outcome

By the end, the learner can visually explain:

- what a commit is
- what a branch pointer is
- what `HEAD` points to
- what merge does to history
- why rebase rewrites the story differently than merge
- how local branches and remote-tracking branches relate
- why fetch, pull, and push are different operations

## Aha Moment

The module lands when the learner stops treating Git as magic text output and can predict where branch pointers move before running the next command.

## Prerequisites

- Open this before `workflow-1-ticket-to-pr` when teaching Git fundamentals from scratch.
- Know that this is a visual trainer, not the Delta job workflow itself.

## Suggested Flow

1. Open the local trainer from the portal.
2. Complete the introductory commit, branch, merge, and rebase levels.
3. Complete the remote levels for clone, fetch, pull, and push.
4. Return to the Delta lab and mark the module complete.
5. Continue to Ticket-to-PR, then Project Capsule.
6. Use recovery drills only when the learner needs applied cleanup practice.

## What This Module Teaches

- Commit graph movement.
- Branch and `HEAD` movement.
- Merge and rebase differences.
- Remote-tracking branch concepts.
- Low-risk experimentation with Git concepts.

## What This Module Does Not Teach

- Delta ADO ticket handling.
- PowerShell-specific workstation flow.
- Real clone URLs or authentication.
- SQL file edits, diff review, staging discipline, or PR notes.

## Important Accuracy Notes

- Learn Git Branching commonly uses `git checkout`. In the Delta workflow lessons, prefer `git switch` and `git switch -c`.
- Treat `git checkout -b feature/x` as conceptually equivalent to `git switch -c feature/x` for branch creation.
- The trainer's `git clone` behavior is simulator-oriented. Use `workflow-1-ticket-to-pr` as the source of truth for real ADO clone flow.

## Vendored Files

- `index.html`
- `build/`
- `assets/`

These files come from the local `C:\Repositories\learnGitBranching` checkout. Do not include that checkout's `.git`, `node_modules`, source tree, tests, or build tooling in this learning lab.

## Validation Checklist

- `index.html` opens through a relative path from the portal.
- All local `href` and `src` references resolve inside this module folder.
- No external network dependency is required to play the bundled trainer.
- The portal text makes clear when to return to the Delta workflow.

## Maintenance Notes

- This is the canonical graph trainer. Do not rebuild the same graph lessons in the main simulator.
- If updating from upstream, copy only static runtime files required to open the trainer locally.
