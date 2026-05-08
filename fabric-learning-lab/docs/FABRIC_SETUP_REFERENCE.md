# Fabric Setup Reference

## BLUF

For this lab, treat `The Lake` as the live Fabric workspace and `C:\Repositories\Fabric` as the governed source-control record. Do not assume every workspace item belongs in the repo. Inventory, classify, document, validate, then promote.

## Delta Utilities Operating Model

| Area | Role |
| --- | --- |
| `The Lake` workspace | Operational Fabric item home |
| `C:\Repositories\Fabric` | Curated source-control home for governed Fabric assets |
| `docs/fabric_workspace_inventory.csv` | Control list for workspace items |
| `docs/source_connections/` | Source connection and downstream usage documentation |
| `lakehouses/` | Maintained lakehouse object documentation |
| `notebooks/` | Ingestion, transformation, and serving notebook assets |
| `pipelines/` | Orchestration and scheduled workflow assets |
| `semantic_models/` | Business model assets and notes |
| `reports/` | Report assets and supporting documentation |
| `tests/` | Notebook and data-quality validation assets |

## Fabric Item Types

| Item type | Use it for | Common support risk |
| --- | --- | --- |
| Lakehouse | Tables, files, shortcuts, and SQL/Spark storage surface | Poor layer ownership or unclear table grain |
| Notebook | Python/PySpark ingestion, transformation, serving, validation | Hidden execution order, hard-coded values, weak row checks |
| Pipeline | Scheduling, orchestration, parameters, refresh handoff | Logic hidden across activities without runbook context |
| Dataflow Gen2 | Power Query ingestion and shaping | Manual source files or connector changes with little documentation |
| Semantic model | Relationships, measures, report-ready data contract | Metric definitions drift from business meaning |
| Report | User-facing Power BI output | Downstream dependencies are not obvious from the canvas |

## Repo Placement Defaults

Use the most specific existing folder:

| Work type | Default target |
| --- | --- |
| API ingestion notebook | `notebooks/ingestion/<source_system>/` |
| Cleaning or Silver transform notebook | `notebooks/transformation/<source_system>/` |
| Report-serving notebook | `notebooks/serving/<domain>/` |
| Pipeline | `pipelines/<source_system_or_domain>/` |
| Data quality check | `tests/data_quality/<source_system_or_domain>/` |
| Semantic model support | `semantic_models/<domain>/` |
| Report support | `reports/<domain>/` |
| Source connection documentation | `docs/source_connections/` |
| Lineage or runbook | `docs/lineage/` or `docs/runbooks/` |

## Review Gate

Before treating an item as repo-managed, confirm:

- it is represented in the workspace inventory
- current Fabric display name is known
- normalized repo name is known
- status is known
- target repo path is known
- dependencies are documented enough to support review
- validation method is documented
- downstream usage is known or explicitly unknown

## Official References

- Lakehouse overview: <https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-overview>
- Fabric notebooks: <https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook>
- NotebookUtils credentials: <https://learn.microsoft.com/en-us/fabric/data-engineering/notebookutils/notebookutils-credentials>
- Git integration: <https://learn.microsoft.com/en-us/fabric/cicd/git-integration/git-get-started>
- Source code format: <https://learn.microsoft.com/en-us/fabric/cicd/git-integration/source-code-format>
- Deployment pipelines: <https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines>
