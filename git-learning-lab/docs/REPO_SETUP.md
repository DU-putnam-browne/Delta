# Repository Setup

## Objective

Turn this folder into a standalone GitHub repository that learners can download and run locally.

## Recommended Repository Settings

| Setting | Recommendation |
| --- | --- |
| Visibility | Private unless public release is approved |
| Default branch | `main` |
| Required runtime | None for learner use |
| Optional runtime | Node.js 20+ for local serve/check scripts |
| Hosting | GitHub Pages is sufficient if public/internal hosting is approved |

## Initialize From This Folder

Run from the `git-learning-lab` folder:

```powershell
git init
git add .
git commit -m "Initial git learning lab"
git branch -M main
```

## Create GitHub Repo With GitHub CLI

```powershell
gh auth status
gh repo create git-learning-lab --private --source=. --remote=origin --push
```

## Create GitHub Repo Without GitHub CLI

1. Create a blank GitHub repo named `git-learning-lab`.
2. Run:

```powershell
git remote add origin https://github.com/USERNAME/git-learning-lab.git
git push -u origin main
```

## Optional GitHub Pages

For a static internal demo:

1. Go to repository settings.
2. Open **Pages**.
3. Choose branch `main`.
4. Choose folder `/root`.
5. Save.

No build action is required because the app is plain static HTML/CSS/JS.

## Release Readiness

Before sharing:

```powershell
npm run check
git status
```

Then review `docs/RELEASE_CHECKLIST.md`.
