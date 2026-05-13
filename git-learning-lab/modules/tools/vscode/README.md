# VS Code Tool Module

## Module Summary

- Family: Tools
- Audience: learners who need a safe first pass through VS Code repo work
- Level: beginner
- Estimated time: 30 to 40 minutes
- Current implementation: VS Code lesson data and mock editor behavior live in `app.js`

## Learner Outcome

By the end, the learner can:

- open a repository folder in VS Code
- navigate the Explorer tree to a target SQL file
- understand the active file tab and breadcrumbs
- make a small file edit
- inspect Source Control changes
- stage intentionally
- create a commit
- connect VS Code state to Git terminal state

## Aha Moment

The module lands when the learner realizes VS Code is not just a text editor. It is the workbench where file navigation, terminal commands, branch state, diffs, staging, and commits all line up.

## Prerequisites

- Basic Windows folder navigation.
- Basic understanding of the ticket-to-PR Git flow.

## Suggested Flow

1. Open the repo folder, not just a single file.
2. Confirm the Explorer shows the repo root.
3. Open the target SQL file.
4. Make a small edit.
5. Review the diff in Source Control.
6. Stage only the intended file.
7. Commit with a clear message.

## What This Module Teaches

- Repo-root orientation.
- Explorer navigation.
- Source Control basics.
- Diff review.
- Terminal and UI agreement.
- Commit creation from the editor workflow.

## What This Module Does Not Teach

- Full VS Code customization.
- Extension development.
- Advanced debugging.
- Every GitLens feature.
- Oracle database connectivity.

## Local Assets

No module-owned static assets yet. Current mock IDE content lives in `app.js`.

## Validation Checklist

- Mock VS Code should use the main interactive surface, not a separate fake terminal.
- The right-side checklist should reinforce the workflow without stealing focus.
- Button labels and status indicators should be legible in all viewport sizes.
- The lesson should teach opening the repo folder before editing files.

## Maintenance Notes

- Keep the mock UI close enough to real VS Code to reduce transfer friction, but do not chase every pixel.
