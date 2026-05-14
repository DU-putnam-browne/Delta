# Oracle SQL Language Module

## Module Summary

- Family: Languages
- Audience: analysts, data engineers, data scientists, SQL contributors, and contractors who already understand basic SQL and need Oracle-specific differences
- Level: intermediate
- Estimated time: 60 minutes
- Current implementation: SQL lesson data and worksheet behavior live in `app.js`

## Learner Outcome

By the end, the learner can:

- identify Oracle data dictionary views such as `USER_TABLES`, `ALL_TABLES`, and `DBA_TABLES`
- explain Oracle empty-string-as-`NULL` behavior
- use explicit datetime format models to avoid NLS-sensitive parsing
- prefer ANSI `JOIN` over legacy Oracle `(+)` syntax
- recognize Oracle hints and treat them as optimizer-specific decisions
- recognize `CONNECT BY`, Flashback, packages, synonyms, and other Oracle-only surface area
- classify SQL into portable core versus Oracle-specific behavior

## Aha Moment

The module lands when the learner understands that Oracle SQL is mostly familiar SQL plus important Oracle-specific behavior. Correctness means knowing which parts are portable, which parts are Oracle-only, and which assumptions need to be documented before review or migration.

## Prerequisites

- SQL Basics or equivalent comfort with `SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, and `ORDER BY`.
- Git workflow is helpful but not required for query practice.

## Suggested Flow

1. Inspect Oracle metadata.
2. Compare Oracle `NULL`/empty-string behavior to portable expectations.
3. Make date parsing explicit.
4. Prefer modern row limiting and ANSI joins.
5. Recognize hints and hierarchy syntax.
6. Review SQL for portability hazards.

## What This Module Teaches

- Oracle metadata conventions.
- Empty-string and null behavior.
- Explicit date and NLS safety.
- Modern row limiting versus `ROWNUM`.
- ANSI joins versus legacy `(+)`.
- Hints, hierarchy syntax, and portability review habits.

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
