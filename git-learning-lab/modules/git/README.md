# Git Module Family

The Git path teaches Git fundamentals first, then applies them to one job-ready loop: receive a ticket, create a safe branch, make a focused change, review the diff, commit locally, publish the branch, and prepare a PR.

Visual branch theory is handled by the embedded Learn Git Branching trainer. The Delta-specific modules should focus on work habits, PowerShell, ADO-style flow, file changes, PR readiness, and recovery.

## Recommended Sequence

| Order | Module | Purpose |
| --- | --- | --- |
| 1 | `visual-branching` | Visual mental model for commits, branches, merge, rebase, HEAD, and remotes |
| 2 | `workflow-1-ticket-to-pr` | Core analyst workflow from ADO ticket to PR-ready branch |
| 3 | `workflow-4-project-capsule` | Longer project context on main plus focused workstream branches |
| Optional | `workflow-3-recovery-drills` | Real-file recovery after the learner understands branch movement |
| Optional | `workflow-5-repo-review-handoff` | Checklist-style review, durable artifacts, and handoff package |

## Aha Moment

The Git path lands when the learner can explain and perform this without guessing:

```text
ticket -> local repo -> current main -> task branch -> file change -> diff -> add -> commit -> push -> PR
```

## Design Rules

- Use `git switch` and `git switch -c` in Delta workflow lessons.
- Mention that Learn Git Branching often uses `git checkout`; translate it instead of rewriting the trainer.
- Keep `git status` useful but not a hard blocker unless the objective is inspection.
- Do not make learners think the browser terminal is a real shell.
- Do not duplicate Learn Git Branching's graph trainer inside the practice lab.
- Keep ADO login, Git identity, branch naming, diff review, and validation notes visible in the Delta modules.

## Module Boundaries

| Teach here | Prefer Learn Git Branching |
| --- | --- |
| ADO ticket flow | Commit graph movement |
| Git user identity | Detached HEAD |
| Clone from real ADO-style URL | Relative refs |
| Pull-before-branch habit | Rebase and cherry-pick visualization |
| Diff, staging, commit message, push | Remote-tracking graph movement |
| PR readiness and validation notes | Git golf and graph puzzles |

## Future Extraction

Lesson content currently lives in `app.js`. When extracting data later, prefer module-owned `data/` files such as:

- `workflow.json`
- `questions.json`
- `commands.json`
- `scenarios.json`

Do not introduce a build step just to extract content.
