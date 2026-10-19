# Git and GitHub Workflow

Use these steps in your own GitHub repository so the repository records your actual work.

## 1. Initialize and make the first commit

```bash
git init
git add .
git commit -m "chore: initialize student task tracker"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/student-task-tracker.git
git push -u origin main
```

Create the empty repository on GitHub first. Do not add a second README on GitHub if you already have this project README locally.

## 2. Create a feature branch

```bash
git switch -c feature/task-summary
```

Make a small, real change (for example, improve the README's feature list), then stage and commit it:

```bash
git add README.md
git commit -m "docs: clarify task tracker features"
git push -u origin feature/task-summary
```

## 3. Open a pull request

On GitHub, open a pull request from `feature/task-summary` into `main`. Ask a classmate to review it if possible. Respond to feedback and push additional commits if changes are requested.

## 4. Merge and synchronize

Merge the pull request on GitHub after review, then update your local main branch:

```bash
git switch main
git pull origin main
```

## 5. Practise conflict resolution safely

Have two collaborators edit the same line in a shared practice file on separate branches. Merge one branch first, then merge the second branch and resolve the conflict markers. After resolving, run `npm run check`, commit the resolution, and push it. Avoid deliberately creating conflicts in important work without a backup.

## Evidence to submit

Include the repository URL and screenshots or links showing the feature branch, merged pull request, and successful GitHub Actions run. Only report a peer review or conflict resolution after you have actually completed it.
