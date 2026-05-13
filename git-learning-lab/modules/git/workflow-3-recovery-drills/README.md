# Git Workflow 3: Recovery and Real-File Drills

## Module Summary

- Family: Git
- Audience: learners who know the branch graph but need realistic local recovery practice
- Level: beginner to intermediate
- Estimated time: 30 to 45 minutes
- Current implementation: practice state, missions, and simulator behavior live in `app.js`

## Learner Outcome

By the end, the learner can recover from common local Git problems:

- edited on the wrong branch
- changed a file but forgot to stage it
- tried to switch branches with open changes
- encountered a merge conflict
- needs to prove branch, diff, commit, publish, and merge readiness

## Aha Moment

The module lands when the learner realizes most Git mistakes are state problems, not disasters. The fix starts by identifying branch, working tree, staged files, and commit history.

## Prerequisites

- Complete `workflow-1-ticket-to-pr`.
- Complete or review `visual-branching`.

## Suggested Flow

1. Pick a scenario.
2. Read the short background and expected outcome.
3. Use the PowerShell IDE to recover.
4. Use optional reference help only when stuck.
5. Confirm the final branch, diff, commit, and cleanliness story.

## What This Module Teaches

- Recovery habits against a repo-shaped file model.
- Dirty working tree awareness.
- Conflict cleanup workflow.
- Why small commits and clean diffs are easier to rescue.
- How to explain what happened after recovery.

## What This Module Does Not Teach

- The full branch graph from first principles.
- Advanced rebase surgery.
- Force pushing.
- Real file deletion recovery.

## Local Assets

No module-owned static assets yet. Practice scenarios currently live in `app.js`.

## Validation Checklist

- Scenario text explains what happened and what the learner must prove.
- Recovery commands are realistic but safe inside the simulator.
- The graph is collapsed by default and does not compete with the terminal.
- No "wizard mode" language appears in learner-facing copy.

## Maintenance Notes

- Keep this module practical. It should feel like "I messed up locally, now what?"
- Do not duplicate Learn Git Branching's graph curriculum here.
