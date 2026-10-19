# Short Reflection Report

*Draft for personalization: revise any details so they accurately describe the work you personally completed before submission.*

Working on the Student Task Tracker helped me understand how version control, continuous integration, and quality assurance support a more reliable software development process. One challenge was separating the different Git steps: staging changes, committing them, pushing them to GitHub, and using branches to work on features without changing the main branch directly. Branches and pull requests also require clear communication, especially when reviewing another person's work or resolving conflicting changes.

The CI pipeline helps streamline development by automatically running the project's lint checks and unit tests whenever code is pushed or a pull request is opened. This gives quick feedback and reduces the risk of merging a change that introduces a known error. It also makes checks repeatable, rather than depending only on someone remembering to run them manually. If a check fails, the workflow identifies that the code needs attention before the change is considered ready.

Unit tests improve confidence by checking expected behavior, including invalid inputs and task operations. ESLint helps keep the code consistent and flags selected mistakes, while pull-request reviews provide another opportunity to spot unclear logic or missing cases. Version control creates a history of changes and makes it easier to compare, share, and recover work when necessary.

My next step is to push the project to GitHub, verify the Actions workflow, and complete a genuine peer review. I will use the feedback and any issues found to improve the implementation and document the final results accurately.
