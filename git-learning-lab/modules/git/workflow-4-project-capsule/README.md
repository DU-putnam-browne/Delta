# Git Workflow 4: Project Capsule and Workstreams

## Module Summary

- Family: Git
- Audience: analysts or engineers handling work larger than one ticket
- Level: beginner to intermediate
- Estimated time: 35 to 45 minutes
- Current implementation: lesson data and simulator behavior live in `app.js`

## Learner Outcome

By the end, the learner can separate project context from task execution:

- create durable project context on `main`
- document decisions and next steps
- branch for a focused workstream
- keep workstream commits reviewable
- merge updates without losing the project story

## Aha Moment

The module lands when the learner sees that not everything belongs on a feature branch. Stable project context can live on `main`; day-to-day work still happens on focused branches.

## Prerequisites

- Complete `workflow-1-ticket-to-pr`.
- Understand branch creation and commit basics.

## Suggested Flow

1. Create a project capsule with durable context.
2. Commit the capsule on `main`.
3. Create a workstream branch.
4. Update the workstream file.
5. Review, stage, commit, publish, and merge the workstream.

## What This Module Teaches

- Longer-running work organization.
- Repo-visible project context.
- Difference between durable context and task-specific changes.
- Reviewable workstream updates.

## What This Module Does Not Teach

- Full project management.
- ADO board administration.
- Multi-repo architecture.
- Advanced merge strategy.

## Local Assets

No module-owned static assets yet. Project capsule data currently lives in `app.js`.

## Validation Checklist

- The module clearly explains why the capsule starts on `main`.
- The learner still branches before day-to-day workstream edits.
- The workflow does not encourage broad mixed-purpose commits.

## Maintenance Notes

- This module should stay small. If it becomes a full operating model, split it into a process module later.
