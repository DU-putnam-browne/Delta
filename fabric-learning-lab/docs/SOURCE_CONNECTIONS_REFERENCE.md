# Source Connections Reference

## Purpose

Use this reference to discuss Delta Utilities source examples in the Fabric Learning Lab. It is based on local Fabric source connection documentation, simplified for training.

## Source Examples

| Source | Domain | Current pattern in training | Cadence | Downstream examples |
| --- | --- | --- | --- | --- |
| Riskonnect | EHS | Dataflow Gen2 / Salesforce connector | 3x daily | EHS IMS Dashboard, Claims Dashboard, planned Compliance Dashboard |
| Holman API | Fleet | PySpark notebook API | Daily | Fleet Dashboard, MVR Dashboard, EHS IMS Dashboard |
| GNA - API | HR | PySpark notebook API | 3x daily | GNA Dashboard and HR analytics |
| ISN API | OQ Training | PySpark notebook API | Currently static | Planned Contractor Dashboard |
| LeeTrans API | Compliance | Dataflow Gen2 API, possible notebook later | Daily | MVR Dashboard, planned Compliance Dashboard |
| SharePoint static uploads | EHS / Fleet / Compliance | Dataflow Gen2 | Static or daily | Operational dashboards and Excel handoffs |

## Choosing An Ingestion Pattern

| Pattern | Strong fit | Watch out for |
| --- | --- | --- |
| Dataflow Gen2 | SharePoint files, simple connector pulls, Power Query shaping, analyst-owned transformations | Hard-to-review logic, manual file replacement, weak source file metadata |
| PySpark notebook | API pagination, custom HTTP handling, schema drift checks, larger transformations, repeatable validation | Hard-coded credentials, hidden execution order, missing row-count checks |
| Pipeline | Scheduling, parameterized orchestration, notebook/dataflow coordination, refresh handoff | Pipeline looks healthy while downstream logic is wrong |
| Documentation-only tracking | Experimental, unsupported, duplicate, deprecated, or not yet repo-managed assets | Easy to forget unless inventory status is clear |

## Minimum Documentation For A Connection

Capture:

- connection name
- source system/vendor
- owner or business contact
- technical owner if different
- access method
- authentication pattern at a high level
- refresh cadence
- target Fabric item or lakehouse layer
- downstream reports, models, dashboards, or exports
- validation checks
- known failure points

## Common Failure Points

- source file replaced manually with a different layout
- API pagination token advanced before data is written
- static upload is stale but refresh still succeeds
- duplicate keys inflate downstream metrics
- null business keys break joins
- dataflow owner changes source query without repo documentation
- notebook writes overwrite when append was intended
- dashboard consumer assumes a field means something different than the source owner does

## Practical Decision Tree

1. Is the source a manually uploaded or SharePoint-hosted file with simple shaping?
   Use Dataflow Gen2 unless row-level custom logic is needed.
2. Does the source require custom API pagination, request headers, retries, or JSON parsing?
   Use a notebook.
3. Does the workflow require scheduling several dependent steps?
   Use a pipeline to orchestrate notebook or dataflow work.
4. Is the item experimental, duplicate, or unclear?
   Keep it documented in inventory until reviewed.

The perfect ingestion tool does not exist, which is considerate because otherwise meetings would need a new reason to run long.
