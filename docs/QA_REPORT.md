# Quality Assurance Report

## Scope

The project provides a small task-management module with functions to create, add, complete, delete, and filter tasks. QA covers validation, expected behavior, collection handling, and basic code-style checks.

## Unit tests

The automated suite uses Node.js's built-in test runner and strict assertions. It covers:

| Test area | Expected result |
|---|---|
| Create a task | Trims ID/title and sets `completed` to `false` |
| Invalid ID | Rejects a blank ID with a useful error |
| Invalid title | Rejects a blank title with a useful error |
| Add a task | Returns a new array and leaves the original unchanged |
| Duplicate ID | Rejects a duplicate task ID |
| Complete a task | Marks only the matching task complete and does not mutate the original task |
| Delete a task | Removes only the matching task |
| Pending tasks | Excludes tasks already marked complete |
| Invalid collections | Rejects non-array collections |

Run tests with `npm test`.

## Linting

ESLint checks JavaScript files for selected correctness and consistency rules, including unused variables, unreachable code, strict equality, callback return behavior, quote style, semicolons, and preferred declarations. Run `npm run lint`.

## CI checks

The GitHub Actions workflow runs on pushes and pull requests. It installs dependencies with `npm ci`, then executes `npm run check` to run linting and unit tests. A failed command makes the workflow fail, so problems are visible in the GitHub Actions tab.

## Review status and follow-up

The code and project structure should be self-reviewed before submission. **An external peer review has not been recorded by this generated project.** To complete the collaboration requirement, open a pull request, request a classmate's review, and record the reviewer's feedback and any changes made here. Likewise, document conflict-resolution practice only after it is completed.

## Results from project preparation

- Unit tests: **9 passed, 0 failed** using `node --test` in the local environment.
- JavaScript syntax: checked with `node --check` for the source and test files.
- ESLint: configured in `eslint.config.js`, but could not be executed in the authoring environment because the npm registry could not be reached to install dependencies. Run `npm install` followed by `npm run lint` in an environment with registry access.
- GitHub Actions: not yet run. The remote workflow result must be checked after the project is pushed to GitHub.

Do not claim a successful remote workflow or peer review until each has actually happened. Update this section with the final results before submission.
