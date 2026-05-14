# Analyst Engineering Enablement Lab - Robert Module Flow Handoff

## BLUF

The lab has been shifted from a broad Git playground toward a clearer analyst enablement path:

1. Learn Git fundamentals visually.
2. Apply the Delta ticket-to-PR workflow in a safe simulator.
3. Practice longer analyst project context.
4. Use VS Code, Codex, and Oracle SQL as support paths.

The intent is lightweight, static, modular, and realistic where it matters. The lab should not feel like a theory site, and it should not imply that browser simulators are running real Git, PowerShell, ADO, Codex, or Oracle.

## Current Commit Context

Recent relevant commits:

- `0ba7215` - Polish lab readiness and compact UI
- `3caf4dc` - Refine analyst enablement lab module flow
- `ffbe757` - Improve analyst enablement lab UX

Known untracked scratch folders exist locally and should not be included unless intentionally cleaned up:

- `_codex_temp_git_check/`
- `_codex_temp_git_check_2/`

## Critical Structural Changes

### 1. Product framing changed

The lab is now positioned as **Analyst Engineering Enablement Lab**, not just a Git learning lab.

Intent:

- Keep Git as the primary path.
- Let the environment scale into tools and languages.
- Make each module explain its purpose, outcome, and fit in the broader learner path.

Current top-level module framing:

- `modules/git/`
- `modules/tools/`
- `modules/languages/`
- `modules/archive/`

### 2. Learn Git Branching was vendored into the lab

The visual branching trainer is bundled under:

`modules/git/visual-branching/`

Intent:

- Make Learn Git Branching the canonical visual Git fundamentals trainer.
- Keep it local/offline-friendly with the rest of the lab.
- Avoid rebuilding branch graph fundamentals ourselves.

Important decision:

- Do not rewrite the vendored trainer to replace `git checkout` with `git switch`.
- Instead, explain that `checkout -b` in the trainer maps to `switch -c` in the Delta workflow.

### 3. Git path was simplified

Recommended Git path is now:

1. Visual Branching Trainer
2. Ticket-to-PR
3. Project Capsule

Recovery drills are demoted to optional practice. Repo Review / Handoff is demoted to a checklist-style support surface rather than a full primary page.

Intent:

- Fundamentals first.
- Delta SOP second.
- Longer analyst workflow third.
- Recovery only when learners need reps.

## Critical Functional Changes

### Ticket-to-PR readiness now stops at PR readiness

The old simulated PR gate required `Merged to main`, which made completed labs show `6/7 ready`.

That was wrong for the beginner SOP.

Current intent:

- The lab ends when the branch is published and ready for ADO PR review.
- ADO/main merge happens after review and should not be taught as the normal learner endpoint.

The PR gate now checks:

- ticket/project context exists
- task branch exists
- diff reviewed
- branch commit saved
- branch published
- working tree clean

### Practice readiness was aligned to PR readiness

The readiness score no longer requires a local merge. It now gives credit for a PR-ready branch story after commit and publish.

Intent:

- Avoid teaching "merge locally to finish the task" as the default habit.
- Keep merge/conflict behavior available for optional drills.

### ADO ticket/project capsule cards were fixed

The target branch and file paths were being clipped in narrow sidebars.

Change:

- target branch and files in scope now stack label over value
- long paths wrap instead of ellipsizing

Intent:

- The ticket card should stay useful even in a narrow sidebar.
- No core workflow information should be hidden behind truncation.

### Knowledge checks were renamed

The old label `Optional Check` was renamed to `Knowledge Check`.

Intent:

- Less ambiguous.
- Better matches the learner mental model.
- Still optional recall practice, but not framed like a random sidebar extra.

### Practice cockpit was reduced

The practice page had leftover graph/header chrome taking space and not telling the learner what to do.

Changes:

- removed the empty practice graph strip from the top
- removed the `main @ c000` header text there
- removed the "Optional graph mental model" callout
- made practice story text wrap instead of clipping
- added hover titles where compact cards may still be tight

Intent:

- The practice page should start with the actual mission story.
- Learn Git Branching owns the visual graph mental model.
- Practice mode should focus on applied commands and recovery reps.

### Visual Branching trainer chrome was adjusted

The trainer now uses a more Delta-like local module shell and no longer opens from the main portal with forced `target="_blank"`.

Intent:

- It should feel like part of the same learning environment.
- Opening in the same tab keeps the path simpler.
- The trainer is still a vendored app with its own internal behavior.

## What We Intentionally Did Not Do

### We did not embed real PowerShell

The Codex/PowerShell surface remains simulated.

Reason:

- A static `file://` browser app cannot safely control the user's real PowerShell.
- Doing so would require a local helper/server, Electron app, VS Code extension, or another runtime.
- That would break the no-dependency/download-and-play model.

Preferred approach:

- Keep the simulator safe.
- Use copyable real-world commands where appropriate.
- Label simulated terminals clearly.

### We did not add broad external SQL resource lists

Reviewed `amartinson193/The-Ultimate-List-of-Free-SQL-Resources`.

Decision:

- Good resource index.
- Not worth adding to core Oracle SQL lab right now.
- Too broad and not Oracle/Delta-specific enough.

If added later, use a small "Further Practice" drawer only.

## Current UX Intent

The learner should understand:

- where to start
- what to do next
- whether their progress is saved
- which surfaces are safe simulators
- which modules are required versus optional

The lab should bias toward doing:

- type or click commands
- inspect file state
- review diff
- stage intentionally
- commit clearly
- push branch
- prepare PR context

The lab should avoid teaching:

- local merge as the beginner endpoint
- blind `SELECT *` as final SQL
- graph theory before task workflow
- simulator commands as real system execution
- hidden wizard/developer controls as learner workflow

## Files Worth Reviewing

Primary implementation:

- `app.js`
- `styles.css`
- `index.html`

Module docs:

- `modules/README.md`
- `modules/git/README.md`
- `modules/git/visual-branching/README.md`
- `modules/git/workflow-1-ticket-to-pr/README.md`
- `modules/git/workflow-4-project-capsule/README.md`
- `modules/tools/README.md`
- `modules/languages/oracle-sql/README.md`

Vendored visual trainer:

- `modules/git/visual-branching/index.html`
- `modules/git/visual-branching/build/main-d5b29513.css`

## Validation Commands

Run from `git-learning-lab/`:

```powershell
node --check app.js
npm.cmd run check
```

Run from repo root:

```powershell
git diff --check
git status --short
```

Expected current behavior:

- static site check passes
- no staged changes unless actively editing
- scratch `_codex_temp_git_check*` folders may remain untracked locally

## Suggested Next Review Focus

1. Check that every simulator terminal is clearly labeled as simulated/practice.
2. Test the main learner path on a clean browser/localStorage:
   - Visual Branching Trainer
   - Ticket-to-PR
   - Project Capsule
3. Confirm Ticket-to-PR reaches `6/6 ready`, not `6/7`.
4. Confirm no learner-facing text mentions wizard mode.
5. Confirm narrow sidebars do not clip target branch, files, or step text.
6. Decide whether Recovery Drills should stay as a compact optional drawer or be archived.
7. Decide whether Repo Review / Handoff should remain a checklist or move fully under Codex.

## Open Design Questions

- Should Project Capsule immediately follow Ticket-to-PR as part of the main path? Current bias: yes.
- Should Recovery Drills remain visible as optional practice? Current bias: yes, but compact.
- Should Repo Review / Handoff stay in Git or move under Codex/tooling? Current bias: demote and keep as checklist until its use case is clearer.
- Should Learn Git Branching open same-tab or new-tab? Current bias: same-tab for path simplicity, but a new-tab launcher is acceptable if navigation feels safer.
