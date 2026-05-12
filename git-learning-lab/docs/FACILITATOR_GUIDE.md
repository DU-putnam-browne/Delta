# Facilitator Guide

## Objective

Use the lab to teach a practical Git workflow for Delta Utilities analyst and IT users who need to work from ADO requests, make small repo changes, and prepare reviewable handoffs.

## Audience

Best fit:

- analysts new to Git
- SQL/reporting contributors
- IT users who need basic branch and PR literacy
- Codex users who need safer repo habits before asking an agent to edit files

Assume learners are comfortable with Windows and PowerShell but may not know Git vocabulary.

## Prep Checklist

- Confirm `index.html` opens locally.
- Confirm the Delta Utilities logo loads.
- Run `npm run check` if Node.js is available.
- Decide whether learners will use direct file open or `npm run serve`.
- Have a real but non-sensitive ADO ticket example ready for discussion.
- Rehearse the exact guided path: clone, remote check, pull, branch, diff, commit, push, PR handoff.

## Suggested 60 Minute Session

| Time | Activity |
| --- | --- |
| 0-5 min | Explain why Git exists in the workflow: traceability, review, rollback |
| 5-15 min | Walk through clone, origin, pull, working tree, staging area, commit, branch |
| 15-35 min | Learners complete the Ticket to First PR guided commands |
| 35-45 min | Discuss commit messages and review handoff quality |
| 45-55 min | Run the project capsule workflow |
| 55-60 min | Recap what to do before touching a real repo |

## Key Teaching Points

- The ADO ticket is the business anchor.
- `git clone` creates the safe local copy and default `origin` remote.
- `git remote -v` confirms the repo points where the learner thinks it points.
- `git pull` before branching reduces stale-main surprises.
- A branch isolates the work.
- A commit is a named checkpoint, not a vague save button.
- A pull request should explain purpose, scope, validation, and review focus.
- `git status` is the first diagnostic command when something feels off.

## Discussion Prompts

- What would make this branch hard for a reviewer to understand?
- What validation notes would you include for a SQL/reporting change?
- What files belong in a project capsule before workstreams branch out?
- When should a change be split into two branches instead of one?

## Common Learner Confusions

| Confusion | Reframe |
| --- | --- |
| `git add` feels like upload | It stages a local snapshot for the next commit |
| Commit feels like push | Commit is local history; push shares it remotely |
| Clone feels like a live remote action | It makes a local working copy; this simulator never contacts ADO |
| Pull feels optional | Pull first so the task branch starts from current `main` |
| Branches feel risky | Branches reduce risk by isolating work |
| Merge feels like copying files | Merge moves or combines commit history |

## Finish Criteria

A learner is ready for supervised real-repo practice when they can explain:

- what changed
- why it changed
- what branch they are on
- what is staged
- what commit they just made
- what a reviewer should inspect
