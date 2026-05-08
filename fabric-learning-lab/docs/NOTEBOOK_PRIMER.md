# Notebook Primer

## Purpose

This primer covers the notebook habits that matter most for Delta Utilities Fabric work. It is intentionally practical: understand the data, make transformations traceable, write safely, and validate before handoff.

## Notebook Basics

| Concept | Practical meaning |
| --- | --- |
| Cell | A runnable block of Markdown, Python, PySpark, or SQL |
| Execution order | Variables and DataFrames depend on the order cells were run |
| Default lakehouse | The attached lakehouse that unqualified table reads/writes use |
| DataFrame | Spark's distributed table-like object for large data |
| `display()` | Fabric-friendly way to inspect rows or summaries |
| `spark.table()` | Read an existing lakehouse table |
| `saveAsTable()` | Persist a DataFrame as a lakehouse table |

## Safe Cell Shape

Use this pattern for most production-leaning notebook sections:

```python
from pyspark.sql import functions as F

source_table = "bronze_holman_driver_events_raw"
target_table = "silver_holman_driver_events"

df_source = spark.table(source_table)
source_count = df_source.count()

if source_count == 0:
    raise ValueError(f"{source_table} returned zero rows.")

df_clean = (
    df_source
    .dropDuplicates(["event_id"])
    .withColumn("event_date", F.to_date("event_time_utc"))
    .withColumn("loaded_at_utc", F.current_timestamp())
)

clean_count = df_clean.count()
if clean_count > source_count:
    raise ValueError("Clean output has more rows than source after dedupe step.")

df_clean.write.mode("overwrite").option("overwriteSchema", "true").saveAsTable(target_table)
```

## PySpark Habits

- Prefer DataFrame operations for large data: `select`, `where`, `join`, `groupBy`, `agg`, `withColumn`.
- Avoid collecting large datasets to the driver with `collect()`.
- Use plain Python for small control logic, config, API calls, or orchestration inside a notebook.
- Name intermediate DataFrames by purpose, not just `df1`, `df2`, and `final`.
- Put row-count and duplicate checks near the transformation they validate.
- Make write mode intentional:
  - `append` for batch landing tables where history should accumulate
  - `overwrite` only when the whole target table is intentionally replaced
  - schema overwrite only when a schema change is intended and reviewed

## Row Grain Checklist

Before writing a table, be able to say:

- one row represents what
- which fields uniquely identify a row
- whether duplicates are allowed
- whether null keys are possible
- whether joins can multiply records
- how row counts compare before and after filtering

## Credential Handling

Notebook examples in the app use placeholders. In real work, credentials should come from approved secure runtime configuration such as Fabric connections, Key Vault-backed secrets, or approved workspace configuration.

Never commit:

- usernames
- passwords
- API tokens
- bearer tokens
- auth headers
- private endpoint keys
- vendor subscription IDs that function like credentials

## Validation Notes To Capture

Use concise validation notes like:

```text
Validation:
- Source API returned 1,240 rows for batch 2026-05-05.
- Bronze append wrote 1,240 rows.
- Silver dedupe produced 1,238 rows; 2 duplicate event_id records removed.
- Driver reference left join produced 17 unmatched driver_id values; documented for owner review.
- Fabric runtime validation completed in The Lake dev workspace.
```

If runtime validation did not happen, say that plainly:

```text
Validation:
- Static app check passed.
- Fabric runtime execution was not performed.
```
