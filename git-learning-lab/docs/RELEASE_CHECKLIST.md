# Release Checklist

Use this before pushing, sharing, or hosting the lab.

## Static App

- [ ] `index.html` opens directly from the downloaded folder.
- [ ] Logo loads.
- [ ] Styles load.
- [ ] Portal view displays.
- [ ] **Start lesson** opens the guided path.
- [ ] **Open full lab** opens the simulator workspace.
- [ ] Terminal accepts commands.
- [ ] `git status`, `git add`, and `git commit` update the simulated state.
- [ ] Branch builder updates as the guided branch progresses.
- [ ] Quiz responses work.
- [ ] Reset clears progress.
- [ ] Dark mode toggle works.
- [ ] Layout is usable on a narrow browser width.

## Documentation

- [ ] Root `README.md` explains download-and-play use.
- [ ] `docs/LEARNER_QUICKSTART.md` matches current app behavior.
- [ ] `docs/FACILITATOR_GUIDE.md` supports a live session.
- [ ] `docs/COMMAND_REFERENCE.md` lists supported commands only.
- [ ] `docs/TROUBLESHOOTING.md` covers likely local issues.
- [ ] `docs/REPO_SETUP.md` has correct repo setup commands.

## Validation

```powershell
npm run check
```

If PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd run check
```

Expected result:

```text
Static site check passed.
```

## Git Hygiene

```powershell
git status
git diff --stat
```

Confirm the diff only contains intended lab changes.

## Sharing Decision

- [ ] Private/internal use is approved.
- [ ] Public use is approved, if applicable.
- [ ] License decision is clear.
- [ ] No sensitive internal data, endpoint, credential, or ticket detail is included.
