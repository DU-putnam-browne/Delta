# Oracle SQL Language Module

## Module Summary

- Family: Languages
- Audience: analysts, data engineers, data scientists, SQL contributors, and contractors who need Oracle-flavored SQL practice
- Level: beginner to intermediate
- Estimated time: 45 to 60 minutes
- Current implementation: SQL lesson data and worksheet behavior live in `app.js`

## Learner Outcome

By the end, the learner can:

- write a basic Oracle `SELECT`
- filter with realistic business conditions
- join tables while protecting row grain
- aggregate without accidental duplication
- handle nulls with Oracle-aware syntax
- reason about date logic
- review a SQL change before committing it

## Aha Moment

The module lands when the learner understands that SQL correctness is not just "the query runs." Correctness means the row grain, joins, filters, dates, and null behavior match the business question.

## Prerequisites

- Basic table/column familiarity.
- Git workflow is helpful but not required for query practice.

## Suggested Flow

1. Read the business question.
2. Identify the target row grain.
3. Write or inspect the query.
4. Check joins and filters.
5. Validate counts or sample rows.
6. Review the SQL file as a Git change.

## What This Module Teaches

- Oracle SQL fundamentals.
- Practical filters and joins.
- Aggregation and grain awareness.
- Null/date behavior.
- Query review habits.

## What This Module Does Not Teach

- Full Oracle administration.
- PL/SQL packages.
- Database security administration.
- Production query performance tuning.
- Live database connectivity.

## Local Assets

No module-owned static assets yet. Current worksheet content lives in `app.js`.

## Validation Checklist

- Oracle-specific syntax is accurate.
- Examples do not imply SQL Server syntax when teaching Oracle behavior.
- Each exercise has a business reason, expected output shape, and validation cue.
- The worksheet does not require network or database access.

## Maintenance Notes

- This module should grow into an Oracle path over time. Keep beginner SQL, Oracle differences, and query review as separate layers when the content expands.
