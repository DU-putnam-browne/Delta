# Facilitator Guide

## Objective

Use the lab to teach a practical Fabric operating model for Delta Utilities analyst and IT users who need to understand workspaces, lakehouses, notebooks, source connections, repo governance, validation, and PR handoff.

## Audience

Best fit:

- analysts new to Microsoft Fabric
- Power BI users moving closer to lakehouse or notebook work
- IT users supporting Fabric-adjacent source systems
- Codex users who need enough Fabric context to ask for safe repo changes

Assume learners are comfortable with Windows and Excel/Power BI basics but may not know PySpark, lakehouse layers, or Fabric item types.

## Prep Checklist

- Confirm `index.html` opens locally.
- Confirm the Delta Utilities logo loads.
- Run `npm run check` if Node.js is available.
- Decide whether learners will use direct file open or `npm run serve`.
- Have one non-sensitive source scenario ready, such as a SharePoint-uploaded EHS file or a vendor API feed.

## Suggested 75 Minute Session

| Time | Activity |
| --- | --- |
| 0-10 min | Explain `The Lake`, the Fabric repo, and why raw workspace mirroring is not the goal |
| 10-25 min | Walk through item types and Bronze/Silver/Gold flow |
| 25-45 min | Run notebook simulator cells and discuss row grain, schema, joins, writes, and validation |
| 45-60 min | Compare source connection examples and ingestion pattern choices |
| 60-70 min | Complete capstone scenario mapping |
| 70-75 min | Recap handoff expectations and validation language |

## Key Teaching Points

- Fabric is the operational surface; the repo is the maintainable record.
- A lakehouse layer is a design choice, not a folder decoration.
- PySpark notebooks should be explicit about inputs, schema, row grain, and write mode.
- Dataflows, notebooks, and pipelines are complementary tools, not a contest with a trophy.
- Source connections are support objects: owner, cadence, method, validation, and downstream usage matter.
- Validation notes should say exactly what happened. If Fabric runtime validation did not happen, say that.

## Discussion Prompts

- What would make a Fabric item hard to support three months from now?
- Which source examples are better suited to Dataflow Gen2 than PySpark?
- What row count checks would catch duplicate or missing records?
- What downstream products would break if this source changed shape?
- What belongs in a PR body before a reviewer can evaluate a Fabric change?

## Common Learner Confusions

| Confusion | Reframe |
| --- | --- |
| Workspace and repo feel like duplicates | Fabric runs the work; the repo documents and reviews governed assets |
| Bronze/Silver/Gold feel like status levels | They are purpose layers: land, clean, serve |
| Notebook output feels automatically trustworthy | Not until schema, row count, duplicates, and downstream impact are checked |
| Pipeline means all logic should be in the pipeline | Pipelines orchestrate; notebooks and dataflows usually hold transformation detail |
| A dashboard title explains lineage | It does not. Lineage needs source, transformation, model, and output context |

## Finish Criteria

A learner is ready for supervised real-repo practice when they can explain:

- what source system is involved
- where the data should land
- what row grain is expected
- what transformation or refresh pattern is appropriate
- what downstream product depends on it
- what validation checks are needed
- what repo path and docs need updates
