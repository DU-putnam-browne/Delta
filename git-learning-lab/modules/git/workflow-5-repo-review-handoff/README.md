# Git Workflow 5: Repo Review and Handoff

## Module Summary

- Family: Git
- Audience: learners ready to combine Git, repo inspection, and review communication
- Level: intermediate capstone
- Estimated time: 30 to 45 minutes
- Current implementation: capstone prompt and artifact flow live in `app.js`

## Learner Outcome

By the end, the learner can produce a reviewable handoff package:

- inspect a repo before proposing changes
- identify relevant files and risks
- create durable review notes
- review a diff before staging
- commit handoff artifacts with a clear message
- explain what a reviewer should check

## Aha Moment

The module lands when the learner understands that "I looked at the repo" is not a handoff. A useful handoff leaves durable files, clear assumptions, and a review path someone else can audit.

## Prerequisites

- Complete `workflow-1-ticket-to-pr`.
- Complete tool setup modules for Codex and VS Code if the learner will use agent-assisted review.

## Suggested Flow

1. Inspect the request and repo context.
2. Generate or draft durable notes.
3. Review the files created.
4. Stage only the intended handoff files.
5. Commit with a specific message.
6. Explain the review and validation story.

## What This Module Teaches

- Repo review discipline.
- Handoff artifacts.
- Agent-assisted inspection boundaries.
- Diff review before commit.
- PR-ready communication.

## What This Module Does Not Teach

- Full Codex installation.
- Advanced static analysis.
- Real CI execution.
- Production code approval policy.

## Local Assets

No module-owned static assets yet. Capstone content currently lives in `app.js`.

## Validation Checklist

- Capstone copy does not imply simulated commands affect the real repo.
- Handoff artifact names are realistic and scoped.
- The module reinforces review and validation notes, not just file creation.

## Maintenance Notes

- Keep this as a capstone, not a required beginner step.
- If it grows, split "repo review" and "handoff package" into separate modules.
