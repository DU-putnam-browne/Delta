# Codex Tool Module

## Module Summary

- Family: Tools
- Audience: learners who may use Codex for repo inspection, drafting, or implementation support
- Level: beginner
- Estimated time: 35 to 45 minutes
- Current implementation: Codex lesson data and simulator behavior live in `app.js`

## Learner Outcome

By the end, the learner can:

- verify Node/npm availability when relevant
- install or verify Codex through the approved command path
- log in through the approved flow
- open Codex from a repository root
- ask for inspection before edits
- keep generated changes reviewable through Git

## Aha Moment

The module lands when the learner understands Codex is safest when it has repo context, a bounded task, and a review loop. It is not a magic "do work somewhere on my machine" button.

## Prerequisites

- Basic terminal navigation.
- Basic Git workflow or parallel completion of `workflow-1-ticket-to-pr`.

## Suggested Flow

1. Verify required local tools.
2. Install or confirm Codex.
3. Log in.
4. Navigate to the target repo.
5. Ask Codex to inspect before changing files.
6. Review any output with Git diff and normal PR habits.

## What This Module Teaches

- Setup path.
- Safe prompt shape.
- Repo-root discipline.
- Inspection-before-editing habit.
- Git review after agent output.

## What This Module Does Not Teach

- Full OpenAI product administration.
- Enterprise access policy.
- Advanced agent orchestration.
- Blindly accepting generated code.

## Local Assets

No module-owned static assets yet. Current lesson data lives in `app.js`.

## Validation Checklist

- Commands are accurate for Windows/PowerShell.
- Login language avoids promising a specific enterprise auth screen unless verified.
- Simulator-only behavior is labeled.
- Copy does not imply Codex changes can skip code review.

## Maintenance Notes

- Codex installation details can change. Re-verify commands before presenting this as production training.
