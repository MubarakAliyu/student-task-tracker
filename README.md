# Student Task Tracker

A small JavaScript project for demonstrating **Git version control, continuous integration (CI), and quality assurance (QA)**. The project supports creating tasks, adding tasks, completing tasks, deleting tasks, and filtering pending tasks.

## Learning objectives

- Practise Git commits, feature branches, merging, and pull requests.
- Automate linting and unit tests with GitHub Actions.
- Write unit tests for normal cases, invalid inputs, and non-mutation behavior.
- Use ESLint to enforce basic code-quality rules.
- Document test coverage, limitations, and reflection.

## Requirements

- Node.js 22 or a compatible recent version
- npm
- Git for the version-control activity
- A GitHub account to publish the repository and run GitHub Actions

## Run locally

```bash
npm install
npm start
```

The demo prints a small set of example task operations in the terminal. This checkpoint focuses on the development workflow, so the app is intentionally a command-line demonstration rather than a hosted web UI.

## Test and lint

```bash
npm test
npm run lint
npm run check
```

`npm run check` runs both ESLint and the automated unit-test suite. The tests use Node.js's built-in test runner, so no separate test framework is needed.

## Project structure

```text
student-task-tracker/
├── .github/workflows/ci.yml  # GitHub Actions pipeline
├── docs/
│   ├── GIT_WORKFLOW.md       # Branch, pull-request, and merge instructions
│   ├── QA_REPORT.md          # Test and quality plan/report
│   └── REFLECTION.md         # 200–300-word reflection draft
├── src/
│   ├── index.js              # Example usage
│   └── tasks.js              # Task functions
├── tests/
│   └── tasks.test.js         # Unit tests
├── .gitignore
├── eslint.config.js
└── package.json
```

## CI pipeline

The workflow in `.github/workflows/ci.yml` runs for every push and pull request. It checks out the code, sets up Node.js 22, installs dependencies with `npm install`, and runs `npm run check`. The workflow reports failure if either linting or tests fail. After installing dependencies locally, keep the generated `package-lock.json` in Git for consistent installs in future updates.

## Git and collaboration activity

Follow [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md) to publish this project, create a feature branch, open a pull request, request a peer review, merge the change, and practise resolving a conflict safely. Your GitHub repository should show your actual commits, branch, pull request, review, and workflow run.

## QA and reflection

- QA plan/report: [`docs/QA_REPORT.md`](docs/QA_REPORT.md)
- Reflection draft: [`docs/REFLECTION.md`](docs/REFLECTION.md)

**Before submission:** run the checks, publish the repository, confirm that GitHub Actions passes, complete a real peer review where possible, and update the reports with actual results. The generated files do not by themselves prove that a remote workflow or peer review has happened.

## Author

Mubarak Aliyu
