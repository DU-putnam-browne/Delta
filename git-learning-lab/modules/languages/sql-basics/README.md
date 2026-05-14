# SQL Basics Language Module

## Module Summary

- Family: Languages
- Audience: analysts, data scientists, IT users, and contractors with little or no SQL familiarity
- Level: beginner
- Estimated time: 45 to 60 minutes
- Current implementation: SQL lesson data and worksheet behavior live in `app.js`

## Learner Outcome

By the end, the learner can:

- explain that SQL queries table-shaped data
- identify rows, columns, tables, and result sets
- write a basic `SELECT ... FROM ...` query
- filter rows with `WHERE`
- sort results with `ORDER BY`
- summarize rows with `COUNT(*)` and `GROUP BY`
- join two tables with an explicit key
- explain output grain and basic validation cues

## Aha Moment

The module lands when the learner understands that SQL is a precise request for a shaped result set: choose columns, choose rows, join only when the key makes sense, and validate the grain.

## Prerequisites

- No SQL experience required.
- Basic comfort reading table-like data helps but is not assumed.

## Suggested Flow

1. Start with a broad table inspection.
2. Select only useful columns.
3. Add filters.
4. Add sorting and date windows.
5. Aggregate by a business dimension.
6. Join context from another table.
7. Build a readable final query.

## What This Module Teaches

- SQL mental model.
- Query shape and result-set thinking.
- Basic filters, sorts, aggregation, and joins.
- Plain-language validation.

## What This Module Does Not Teach

- Oracle-only behavior.
- Database administration.
- Performance tuning.
- PL/SQL.
- Live database connectivity.

## Maintenance Notes

- Keep this module basic and approachable.
- Do not introduce dialect differences until the Oracle SQL module.
- Examples should stay business-shaped, not abstract textbook trivia.

