# Language Module Family

Language modules teach syntax and workflow where language differences matter in Delta analytics work.

## Modules

| Module | Purpose |
| --- | --- |
| `sql-basics` | Beginner SQL fundamentals for learners with no prior SQL familiarity |
| `oracle-sql` | Oracle-specific behavior, portability differences, query review, and repo-shaped SQL practice for learners who already know SQL basics |

## Aha Moment

The language path lands when the learner can read a business request, identify the row grain, write or review a query, and explain what validation would prove the result is trustworthy.

## Design Rules

- Keep examples business-shaped, not textbook-only.
- Keep SQL Basics vendor-neutral enough to teach the mental model before Oracle details.
- Explain Oracle-specific behavior when it differs from SQL Server, PostgreSQL, or generic SQL.
- Always call out row grain, joins, filters, dates, null handling, and validation.
- Prefer query review and debugging value over memorizing syntax.
- Keep SQL modules separate from Git modules, but show how SQL files move through Git review.

## Future Module Ideas

- SQL Basics examples for SELECT/FROM/WHERE/JOIN/GROUP BY.
- Oracle date logic.
- Joins and grain debugging.
- Aggregation and duplicate prevention.
- Query review checklist.
- SQL performance basics for analysts.
