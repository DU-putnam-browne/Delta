# Git Learning Environment UX & Accessibility Evaluation

## Executive Summary

The prototype is a useful and credible Git learning environment for a Delta Utilities / Oracle / Azure DevOps workflow. It does more than explain Git: learners can type simulated commands, see repository state change, complete a ticket-to-PR path, practice conflict recovery, and use Codex / VS Code / SQL modules in the same learning surface.

Before presenting, the highest-value improvements are:

1. Fix the practice simulator inconsistency where `git add .` can say it staged files even though `git commit` then reports no staged changes.
2. Fix keyboard and focus issues: modal focus trap, visible terminal focus, custom role-button activation, skip links, and hidden tabbable controls.
3. Make the first-run path clearer with one dominant recommended Git start action.
4. Add hands-on practice for `git clone`, remotes, `git remote -v`, `git pull`, and Azure DevOps PR handoff.
5. Improve screen-reader feedback for quiz answers, command output, status changes, and mobile command controls.

## Test Setup

- Local URL tested: `http://localhost:5173/`
- Date/time: May 6, 2026, approximately 11:20 AM to 12:00 PM Central Time
- Browser/tooling used:
  - Headless Chrome / Chrome DevTools Protocol through the QA subagent
  - `npx playwright screenshot` for desktop and mobile screenshots
  - `Invoke-WebRequest` for load checks
  - Read-only source inspection with `rg` and `Get-Content`
  - Specialist subagents for UX, Git learning design, accessibility, QA, frontend implementation, and reviewer synthesis
- Viewports tested:
  - Desktop: `1440x1000`
  - Mobile/narrow: `390x844`
- Commands run:
  - `Invoke-WebRequest -UseBasicParsing http://localhost:5173/`
  - `npx --yes playwright screenshot --full-page --viewport-size="1440,1000" http://localhost:5173/ docs/evaluation-evidence/home-desktop.png`
  - `npx --yes playwright screenshot --full-page --viewport-size="390,844" http://localhost:5173/ docs/evaluation-evidence/home-mobile.png`
  - Read-only `rg` and `Get-Content` source inspections
  - Safe `git status --short --branch` checks
- Limitations:
  - The first URL supplied, `http://localhost:3000`, refused connection; the user corrected the target to `http://localhost:5173/`. Findings below are for `5173`.
  - Browser Use Node REPL tooling was not exposed in this session.
  - Repo-local Playwright and axe packages were not installed. A temporary Playwright test runner attempt was blocked by missing `@playwright/test`; successful browser evidence came from Playwright CLI screenshots and subagent Chrome/CDP checks.
  - No destructive Git commands were run. No commits, pushes, resets, rebases, cleans, or remote configuration changes were performed for this evaluation.

## What Works Well

- The product goal is job-shaped, not generic. The first-run content centers on a ticket-to-PR workflow, Oracle SQL files, validation notes, and ADO review handoff.
- The app includes real command practice through a safe in-browser simulator. Commands update JavaScript state only, not real Git history.
- The guided Git lesson has a happy path that can be completed end to end. QA completed the 16-command sequence and reached `Complete`, `6 of 6 complete`, and PR gate `7/7 ready`.
- The simulator covers useful state transitions: `status`, `diff`, `add`, `commit`, branches, merge, conflict resolution, push, and pull.
- Conflict scenarios and practice missions already exist, which gives the prototype a strong foundation for hands-on learning.
- The static architecture supports the download-and-play model. Opening the app locally does not require a backend or external assets.
- The How-to modal provides a suggested path and the app preserves state in `localStorage`.

## Critical Issues

### 1. Practice Lab Can Teach Incorrect Staging Behavior

- Severity: High
- Area: Learning Design / Technical
- Evidence: QA observed that, in practice mode, `git add .` reported staging 13 files, then `git commit -m "Test"` reported `No staged changes to commit`. Code verification confirms the cause: `createAdvancedState()` initializes `indexFiles` and `workingFiles` identically at `app.js:2797`; `expandPaths(".")` returns all working files at `app.js:6959`; `commandAdd()` reports the number selected at `app.js:6434`; `commandCommit()` correctly checks actual staged diffs at `app.js:6463`.
- Why it matters: This directly contradicts the Git mental model the app is trying to teach. Learners may conclude that staging is unreliable or that `git add .` is equivalent to a successful commit-ready state.
- Recommendation: Update simulator logic so `git add .` reports only files that changed, or returns `No changes to stage` when the working tree matches the index/HEAD.
- Acceptance criteria:
  - Running `git add .` on a clean simulated repo does not report files staged.
  - Running `git status` after `git add .` on a clean repo still shows clean state.
  - Commit feedback remains consistent with the preceding add/status feedback.

### 2. Modal And Custom Controls Are Not Fully Keyboard-Safe

- Severity: High
- Area: Accessibility
- Evidence: The How-to dialog uses `role="dialog"` and `aria-modal="true"` in `index.html:123`, and `openHowToModal()` focuses Close at `app.js:3261`. Accessibility testing confirmed `Tab` can escape behind the modal. Source inspection also shows custom `role="button"` lesson/section controls at `app.js:7471`, `app.js:7979`, `app.js:8194`, `app.js:8278`, and SVG graph role buttons at `app.js:9804`, while the keydown handler around `app.js:3021` only covers the lesson-card case.
- Why it matters: Keyboard and screen-reader users can reach background content while a modal is visually active, and some custom controls may not respond to Enter/Space.
- Recommendation: Trap focus inside the modal, make background content inert while open, restore focus on close, and replace custom role-button patterns with native `<button>` where possible.
- Acceptance criteria:
  - With the modal open, `Tab` and `Shift+Tab` cycle only inside the dialog.
  - `Escape` closes the modal and returns focus to `How to`.
  - Every interactive custom control works with both Enter and Space, or is replaced by a native button.

### 3. Terminal Focus And Run Button Accessibility Issues

- Severity: High
- Area: Accessibility / UX
- Evidence: The terminal input is labeled in `index.html:100-102`, but CSS removes its outline at `styles.css:4740`. The `Run command` button exists in `index.html:103` but is visually clipped at `styles.css:4769`, and the accessibility subagent confirmed it remains tabbable. QA also observed the mobile Run command target collapsed to about `14x4px`.
- Why it matters: The terminal is the main practice control. If focus is invisible or the button is hidden/tiny, keyboard and touch users can lose orientation at the exact point where the app expects action.
- Recommendation: Add visible focus styling to the command input/form. Either make the Run button visible with at least a `44x44px` target on mobile, or remove it from tab order and make Enter submission explicit.
- Acceptance criteria:
  - `#commandInput` has a visible `:focus-visible` indicator with at least 3:1 contrast against adjacent colors.
  - Keyboard focus never lands on invisible controls.
  - Touch targets for command submission are at least `44x44px` on narrow viewports.

### 4. First-Run Choice Overload

- Severity: High
- Area: UX / Learning Design
- Evidence: The portal exposes many primary-feeling entry points: Git Workflow 1, Git Workflow 3, Codex lesson, VS Code Lab, Oracle SQL Lab, Git practice lab, and Git Workflow 4. Source rendering for these cards is concentrated in the portal rendering functions in `app.js`.
- Why it matters: A new Git learner may not know whether to start with Codex, VS Code, SQL, the guided Git lesson, or open practice. This adds cognitive load before the first command.
- Recommendation: Make one dominant first-run CTA, such as `Start recommended Git path`. Demote Codex, VS Code, SQL, and capstone modules into secondary supporting cards or an expandable section.
- Acceptance criteria:
  - First viewport has one visually dominant start action.
  - The page shows a short 3-step recommended path.
  - Secondary modules are visible but not competing with the main start action.

### 5. Dense Guided Lab Entry

- Severity: High
- Area: UX / Learning Design
- Evidence: After starting the Git lesson, learners see the lesson list, glossary, process map, terminal, repository state, ticket/PR readiness panel, explorer, and quiz. The UX subagent observed focus remained on `BODY`, not the command input, after lesson start.
- Why it matters: The app has rich learning aids, but beginners need a clear first action. If the command prompt is not visually and programmatically prioritized, learners may scan the whole workspace before typing.
- Recommendation: On first lesson entry, focus `#commandInput`, make the current command area visually dominant, and collapse secondary panels until after the first successful command.
- Acceptance criteria:
  - After clicking the recommended Git start action, keyboard focus lands in `#commandInput`.
  - The current command and terminal are the most prominent elements.
  - Quiz/explorer/secondary reference panels are collapsed or clearly secondary on first entry.

### 6. Gaps In Git Skills Needed For ADO Repo Work

- Severity: High
- Area: Learning Design / Content
- Evidence: The command simulator supports `git init`, `status`, `diff`, `add`, `commit`, `branch`, `switch`, `merge`, `push`, `pull`, and `restore` in `executeCommand()` at `app.js:6192`, but not a hands-on `git clone` or `git remote -v`. `commandPush()` and `commandPull()` are simulated at `app.js:6695` and `app.js:6713`, but remote concepts are brief.
- Why it matters: In an Azure DevOps-hosted repo, most learners start by cloning an existing repo, checking remotes, pulling latest `main`, publishing a branch, and opening a PR. Those are core session goals.
- Recommendation: Add explicit practice for clone, remote inspection, pull-before-branching, push/upstream, and PR handoff.
- Acceptance criteria:
  - Learners can complete a simulated `git clone <ado-url>` exercise.
  - Learners can run `git remote -v` and explain `origin`.
  - Learners practice `git pull` from `main` before branching.
  - A PR readiness exercise requires summary, validation notes, assumptions, and reviewer focus.

### 7. Feedback Is Too Visual In Some Places

- Severity: High
- Area: Accessibility / Learning Design
- Evidence: The terminal output area is one broad live region at `index.html:97`, and quiz score is live at `index.html:114`. Accessibility testing found wrong quiz answers were communicated mainly through classes like `wrong` and score changes, without a dedicated text announcement such as `Incorrect`. Generated quiz text inputs are rendered in `renderQuizAnswerControl()` at `app.js:10576`.
- Why it matters: Screen-reader users need explicit task feedback, not only color, animation, or score changes. Learners also benefit from feedback that states what happened, why, and what to try next.
- Recommendation: Add dedicated live status messages for quiz results and command outcomes. Associate generated inputs with question text, and avoid using broad live regions that include form controls.
- Acceptance criteria:
  - Selecting a quiz option announces `Correct` or `Incorrect` plus the explanation.
  - Quiz text inputs have stable accessible names tied to their question.
  - Command output announcements are scoped to new output, not the entire terminal panel.

## Prioritized Recommendations

| Priority | Recommendation | User impact | Effort | Owner suggestion | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| P0 | Fix `git add .` clean-repo staging message | Prevents incorrect Git mental model | S/M | Frontend / learning design | Clean repo `git add .` reports no changes to stage |
| P0 | Fix modal focus trap, background inert state, and focus return | Keyboard and screen-reader users can use How-to safely | S/M | Frontend | Tab stays inside dialog; Escape closes; focus returns to trigger |
| P0 | Add visible focus styles for terminal input and all controls | Learners know where keyboard focus is | S | Frontend | All interactive elements have visible `:focus-visible` states |
| P1 | Make one recommended Git start path dominant | Reduces first-run confusion | S/M | UX / content | One primary CTA and clear 3-step path in first viewport |
| P1 | Add hands-on clone/remote/pull/ADO PR exercises | Aligns with ADO-hosted repo workflow | M | Learning design / frontend | Learner completes clone, remote, pull, push, PR readiness drills |
| P1 | Make Run command visible or remove hidden button from tab order | Improves keyboard and mobile operation | S | Frontend | No invisible tabbable controls; touch target is at least `44x44px` |
| P1 | Add screen-reader-friendly quiz and command feedback | Makes success/error feedback perceivable | M | Frontend / accessibility | Correct/incorrect and terminal outcomes are announced clearly |
| P2 | Add skip links to main lab and terminal | Reduces keyboard fatigue | S | Frontend | First tab stop includes skip target(s) |
| P2 | Add reduced-motion handling | Supports motion-sensitive users | S | Frontend | `prefers-reduced-motion: reduce` disables nonessential animation |
| P2 | Improve wrong-command coaching | Reduces frustration in guided mode | S/M | Learning design / content | Error explains why the command is blocked and what comes next |
| P2 | Measure and adjust dark-mode primary button/pill contrast | Improves WCAG AA confidence | S | Frontend / design | Text contrast is measured and normal text is at least `4.5:1` |
| P3 | Add favicon or suppress missing request | Removes low-signal console noise | S | Frontend | No favicon 404 in console/network checks |

## Accessibility Findings

### Keyboard Navigation

- Confirmed: How-to modal focus can escape behind the dialog. This conflicts with expected modal behavior.
- Confirmed: Some custom `role="button"` elements do not appear to share a generic Enter/Space activation handler.
- Confirmed: The hidden `Run command` button can receive keyboard focus.
- Confirmed: No skip link was observed.
- Recommendation: Use native buttons where possible, add skip links, and add a generic keyboard activation pattern only where custom controls are unavoidable.

### Focus Management

- Confirmed: `#commandInput` has `outline: 0` in CSS and lacks a clear replacement focus indicator.
- Confirmed: How-to closes with Escape and returns focus to the How-to trigger, which is good.
- Recommendation: Preserve the focus-return behavior and add a focus trap plus visible focus indicators.

### Semantics, Headings, And Landmarks

- Confirmed strengths: The page has a header, one main lab region, named asides, named navigation, image alt text, and a modal with `aria-labelledby` / `aria-describedby`.
- Code-based issue: SQL output labels use `role="tab"` at `app.js:8435-8438`; if they are static, tab roles should be removed. If interactive, they need full tablist behavior.
- Code-based issue: The mock SQL editor uses `role="textbox"` on a non-editable display at `app.js:8389`; use display semantics or a real readonly text control.

### Forms, Errors, And Status Messages

- Confirmed: Terminal and quiz score use live regions, but the terminal live region is broad and includes form controls.
- Confirmed: Quiz wrong/correct feedback is not consistently exposed as explicit text for assistive technology.
- Recommendation: Use dedicated `role="status"` / `aria-live` nodes for new command output and quiz feedback, and ensure generated text inputs have accessible names.

### Color And Contrast

- Source-based risk: Dark mode sets `--blue: #6f93ff`, while `.primary-button` and `.pill.blue` use white text on `var(--blue)` at `styles.css:608` and `styles.css:1500-1502`. This pairing should be measured and adjusted if it falls below WCAG AA for normal text.
- Recommendation: Darken the dark-mode blue for white text, or switch those labels to dark text when using the lighter blue.

### Responsive/Mobile

- Confirmed: No horizontal overflow was observed on the mobile portal screenshot.
- Confirmed by QA: The mobile lesson command button became too small to use reliably by touch.
- Inference: The first lesson has many focusable elements, so keyboard navigation on mobile can become long and tiring.
- Recommendation: Collapse secondary panels by default on narrow screens and keep the terminal/next step controls reachable early.

### Screen Reader Considerations

- Confirmed: Background content remains reachable while the modal is visually open.
- Confirmed: Some status changes rely on visual styling or score deltas rather than explicit announced result text.
- Recommendation: Add explicit announcements for command success/error, quiz result, challenge completion, and reset actions.

## Git Learning & Practice Opportunities

### Exercise: Clone The ADO Repo

- Learner goal: Start from an existing Azure DevOps-hosted repository rather than a new local repo.
- Steps learner performs:
  1. Run `git clone https://dev.azure.com/.../Oracle/_git/Oracle`.
  2. `cd Oracle`.
  3. Run `git status`.
  4. Run `git remote -v`.
- Feedback the app should provide: Explain that clone copies history, files, and the default remote named `origin`.
- Validation: Repo explorer appears populated, branch is `main`, status is clean, remote list shows the simulated ADO URL.
- Risks/safety: Keep it simulated by default; do not accept arbitrary live remote writes.

### Exercise: Diagnose Repo State With Status

- Learner goal: Use `git status` as the safest first diagnostic.
- Steps learner performs:
  1. Run `git status` on clean repo.
  2. Edit the target SQL file.
  3. Run `git status`.
  4. Stage the file and run `git status` again.
- Feedback: Highlight working tree, staging area, and committed snapshot.
- Validation: Learner correctly identifies clean, unstaged, staged, and committed states.
- Risks/safety: No real Git commands needed.

### Exercise: Stage Only The Intended File

- Learner goal: Avoid accidental `git add .` habits when unrelated files exist.
- Steps learner performs:
  1. Edit target SQL file.
  2. Introduce an unrelated notes file.
  3. Run `git status`.
  4. Stage only the intended SQL file.
- Feedback: Warn if unrelated files are staged and explain how to unstage with `git restore --staged <file>`.
- Validation: Only the target file is staged before commit.
- Risks/safety: Keep all changes inside simulator state.

### Exercise: Review The Diff Before Commit

- Learner goal: Inspect what changed before saving a checkpoint.
- Steps learner performs:
  1. Run `git diff`.
  2. Run `git diff --stat`.
  3. Answer a quick question about what changed.
  4. Stage and commit.
- Feedback: Explain that `diff` is content review, while `status` is state review.
- Validation: Commit is blocked or warned until a diff command has been run.
- Risks/safety: Do not require perfect command memorization; allow reference chips.

### Exercise: Create A Ticket Branch

- Learner goal: Create a focused branch tied to one ADO request.
- Steps learner performs:
  1. Confirm `main` is clean.
  2. Run `git switch -c feature/<ticket-purpose>`.
  3. Run `git branch`.
- Feedback: Explain the branch pointer and why work should not happen directly on `main`.
- Validation: Current branch is not `main`, branch name follows the expected pattern, and branch starts from current `main`.
- Risks/safety: Simulated branch graph only.

### Exercise: Pull Latest Main Before Branching

- Learner goal: Understand the remote baseline before starting work.
- Steps learner performs:
  1. `git switch main`.
  2. `git pull`.
  3. Inspect new commit or already-up-to-date message.
  4. Create feature branch.
- Feedback: Explain fast-forward vs already up to date.
- Validation: Learner branches after the simulated `origin/main` is current.
- Risks/safety: Keep remote state simulated and resettable.

### Exercise: Push And Prepare ADO PR

- Learner goal: Distinguish local commit from published branch and PR handoff.
- Steps learner performs:
  1. Commit a focused change.
  2. Run `git push -u origin <branch>`.
  3. Fill PR summary, validation, assumptions, and reviewer focus.
- Feedback: Show `origin/<branch>` and explain that ADO can now open a PR.
- Validation: PR form is complete only when branch is pushed, diff reviewed, working tree clean, and validation notes entered.
- Risks/safety: Simulate ADO link; do not open or push to a real remote.

### Exercise: Resolve A Merge Conflict

- Learner goal: Recognize conflict markers and complete a resolution safely.
- Steps learner performs:
  1. Trigger a simulated conflict.
  2. Inspect `<<<<<<<`, `=======`, `>>>>>>>` markers.
  3. Run `resolve <file>`.
  4. Run `git add <file>`.
  5. Run `git commit -m "Resolve conflict..."`.
- Feedback: Explain that resolving means editing the file, staging the resolved file, and committing the merge.
- Validation: Conflict markers are gone, status is clean, merge commit exists.
- Risks/safety: Use existing randomized conflict scenarios; keep reset available.

## Suggested Hands-On Practice Model

Use the in-browser simulation as the default model for this prototype and presentation.

- In-browser simulation:
  - Best for first-time learners and workshop safety.
  - Already implemented with `localStorage`, command parsing, state visualization, missions, and reset behavior.
  - Should be extended with exercise data: setup state, allowed commands, success criteria, hints, mistakes, and reset.
- Local temporary repo:
  - Useful later for an advanced mode where learners run real Git.
  - Should use a clearly named disposable temp directory, an allowlist of commands, no real remote URLs by default, and a visible cleanup/reset action.
  - Should never run against the training repo.
- Server-side sandbox:
  - Useful only if the team needs shared hosted sessions or real command output without local setup.
  - Requires stronger isolation, cleanup, authentication, logging, and quota controls.

Recommended architecture:

1. Extract the Git command/state engine into a pure module.
2. Define exercises as data: initial state, learner goal, allowed commands, success checks, hints, and recovery messages.
3. Show command output beside a visual state model: working tree, staging area, commit history, branch graph, and remote.
4. Keep reset/retry visible and non-punitive.
5. Explain mistakes constructively: what Git state changed, what did not change, and what command recovers the state.

## Quick Wins Before The Presentation

- Add one dominant `Start recommended Git path` button.
- Add a short Git-first path in How-to for this presentation: `Git Lab 1 -> Practice Lab -> VS Code/Codex context`.
- Focus the command input when a guided lesson starts.
- Add a modal focus trap and make background content inert.
- Add global visible `:focus-visible` styles.
- Fix or hide the clipped Run command button.
- Fix `git add .` feedback on clean practice state.
- Add `prefers-reduced-motion: reduce`.
- Add skip links to main lab and terminal.
- Measure dark-mode blue button/pill contrast, then darken the color or change text color if needed.
- Add a favicon to avoid the `favicon.ico` 404.

## Longer-Term Backlog

- Add full `git clone` and ADO remote onboarding.
- Add `git remote -v`, upstream tracking, and clearer `origin/main` visualization.
- Expand `git pull` into fast-forward, already-up-to-date, and diverged-history practice missions.
- Add a structured ADO PR handoff form with validation, assumptions, reviewer focus, and ticket linkage.
- Build a mistake library: wrong branch, staged too much, forgot diff, dirty switch, pushed before validation, unresolved conflict.
- Extract simulator state/command logic from rendering so exercises are easier to test and extend.
- Add automated accessibility checks with axe or equivalent once test tooling is approved.
- Add keyboard end-to-end tests for modal, terminal, lesson cards, practice graph, and quiz flows.
- Add screen-reader QA scripts or manual assistive-technology testing for the terminal and quiz workflow.

## Evidence Appendix

### Screenshots

- `docs/evaluation-evidence/home-desktop.png`
- `docs/evaluation-evidence/home-mobile.png`

### Console / Network Notes

- QA observed a low-severity missing `favicon.ico` request at `http://localhost:5173/favicon.ico`.
- No app-load blocking console error was reported by the QA subagent.

### Tested Routes And Flows

- Route tested: `/` at `http://localhost:5173/`
- Directly observed by agents:
  - Portal first-run view
  - How-to modal open/close
  - Guided Git lesson start
  - Correct command advancement
  - Wrong command feedback
  - Main 16-command Git happy path completion
  - Git practice lab entry
  - Mobile portal and mobile lesson viewport

### Source Evidence References

- Static shell and landmarks: `index.html:12`, `index.html:52`, `index.html:55`, `index.html:60`, `index.html:64`, `index.html:97`, `index.html:111`, `index.html:123`
- Portal card rendering: `app.js:7195-7199`, `app.js:7317`, `app.js:7367`, `app.js:7392`, `app.js:7413`
- In-browser practice state: `app.js:2797`
- Command parser: `app.js:6192`
- Add/commit/push/pull commands: `app.js:6434`, `app.js:6463`, `app.js:6695`, `app.js:6713`
- Path expansion for `git add .`: `app.js:6959`
- Modal focus handling: `app.js:3261`, `app.js:3275`
- Custom role buttons: `app.js:7471`, `app.js:7979`, `app.js:8194`, `app.js:8278`, `app.js:9804`
- SQL tab/textbox semantics: `app.js:8389`, `app.js:8435-8438`
- Quiz answer rendering: `app.js:10576`
- Terminal input/button styling: `styles.css:4740`, `styles.css:4769`
- Quiz animations: `styles.css:5007`, `styles.css:5018`

### Confirmed Versus Inferred

- Confirmed by browser/agent testing: app load, guided command behavior, main happy path completion, modal focus escape, hidden/tiny Run command behavior, mobile no horizontal overflow on portal, practice staging inconsistency, missing skip link, and favicon 404.
- Confirmed by source inspection: static SPA structure, simulator-only Git model, `localStorage` persistence, command support list, clipped Run button CSS, terminal outline removal, missing reduced-motion media query, and `git add .` clean-state message cause.
- Inferred from implementation and review: need for broader exercise data architecture, likely screen-reader verbosity from broad terminal live region, and risk from static SQL tab/textbox semantics unless future behavior makes them interactive.
