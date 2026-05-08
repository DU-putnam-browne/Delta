# Learner Quickstart

## Goal

Practice the Microsoft Fabric workflow used by Delta Utilities Data and Analytics work without changing a real workspace, notebook, pipeline, report, or repo asset.

## Start

Open:

```text
index.html
```

Then choose:

- **Start learning path** for the full guided path
- **Open notebook primer** if you mainly need Python/PySpark practice
- **Open module** on any course card to jump to a topic

## What The Simulator Does

The app shows a static Fabric workspace map, a Bronze/Silver/Gold lakehouse flow, safe notebook snippets, source connection cards, knowledge checks, and a capstone checklist.

The simulator does not run Fabric or vendor calls. It only updates local browser state.

## Recommended First Run

1. Complete **Fabric Lab 1: Delta setup**.
2. Run the simulated inventory notebook cell.
3. Move through the lakehouse flow until Gold is selected.
4. Open **Fabric Lab 3: Python and PySpark**.
5. Run the DataFrame basics cell and review the schema notes.
6. Open **Fabric Lab 4: Source connections**.
7. Compare Riskonnect, Holman, GNA, ISN, LeeTrans, and SharePoint/static upload examples.
8. Finish **Fabric Lab 6: Capstone** with one source scenario.

## What To Notice

- `The Lake` is the operational workspace.
- `C:\Repositories\Fabric` is the curated engineering record.
- Bronze, Silver, and Gold solve different problems.
- Notebook code should make row grain, validation, and write behavior obvious.
- Source connection documentation should include owner, method, cadence, downstream usage, and validation expectations.
- Repo handoff should be honest about what was validated and what was not.

## Reset

Use the **Reset** button in the app header.

If browser state gets stuck, clear site data for the local page and reopen `index.html`.
