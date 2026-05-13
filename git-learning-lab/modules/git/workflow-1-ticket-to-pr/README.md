# Git Workflow 1: Ticket to PR

## Module Summary

- Family: Git
- Audience: beginner analyst, data engineer, data scientist, SQL contributor, or contractor entering a shared repo workflow
- Level: beginner
- Estimated time: 45 to 60 minutes
- Current implementation: guided lesson data and simulator behavior live in `app.js`

## Learner Outcome

By the end, the learner can run the normal local workflow:

- confirm Git identity before committing
- clone an ADO-style repository
- inspect `origin`
- pull current `main`
- create a task branch with `git switch -c`
- make one scoped SQL change
- inspect the diff
- stage intentionally
- commit with a useful message
- push the branch so a PR can exist

## Aha Moment

The module lands when the learner understands that the branch is the reviewable unit of work. The local commit matters, but it is not visible to the team until the branch is pushed.

## Prerequisites

- Basic file/folder navigation.
- Basic comfort typing commands into a terminal-like prompt.
- No real ADO access required for the simulator.

## Suggested Flow

1. Read the ticket context.
2. Type or click each command into the PowerShell terminal.
3. Watch the repo explorer and PR gate update.
4. Use optional `git status` checkpoints when unsure.
5. Explain the final story: what changed, where it changed, and why the PR is ready.

## What This Module Teaches

- Job-shaped Git flow, not abstract Git trivia.
- Difference between local work and remote review.
- Why branch naming and file scope matter.
- Why diff review comes before staging and committing.
- Why PR validation notes should match the actual change.

## What This Module Does Not Teach

- Rebase, cherry-pick, tags, detached HEAD, or advanced refs.
- Real ADO authentication mechanics.
- Real shell execution.
- Full conflict resolution.

## Local Assets

No module-owned static assets yet. The active lesson content is still in `app.js`.

## Validation Checklist

- Commands shown in the lesson are valid PowerShell-friendly Git commands.
- `git status` is recommended, not a showstopper.
- The lesson does not imply the simulator runs real Git.
- The PR gate checks match the actual lesson steps.

## Maintenance Notes

- Keep this as the source of truth for real Delta ticket-to-PR workflow.
- Do not replace this with Learn Git Branching; that trainer teaches graph motion, not ADO work.
