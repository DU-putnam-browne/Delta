const STORAGE_KEY = "fabric-learning-lab-state-v1";
const THEME_KEY = "fabric-learning-lab-theme";
const FABRIC_REPO = "C:\\Repositories\\Fabric";
const QUIZ_VISIBLE_COUNT = 3;

const workspaceNodes = [
  {
    id: "lakehouse",
    icon: "LH",
    title: "Lakehouses",
    detail: "Bronze, Silver, Gold tables and files used by analytics products."
  },
  {
    id: "notebook",
    icon: "NB",
    title: "Notebooks",
    detail: "Python and PySpark work for API ingestion, cleanup, serving, and validation."
  },
  {
    id: "pipeline",
    icon: "PL",
    title: "Pipelines",
    detail: "Orchestration, scheduled refresh, notebook execution, copy jobs, and handoffs."
  },
  {
    id: "dataflow",
    icon: "DF",
    title: "Dataflows",
    detail: "Power Query based ingestion and shaping, often for SharePoint or connector data."
  },
  {
    id: "model",
    icon: "SM",
    title: "Semantic models",
    detail: "Business logic, relationships, measures, and report-ready data contracts."
  },
  {
    id: "report",
    icon: "RP",
    title: "Reports",
    detail: "Power BI outputs that depend on stable models, lineage, and validation."
  }
];

const medallionStages = [
  {
    id: "bronze",
    title: "Bronze",
    subtitle: "Preserve source shape",
    detail: "Land raw or lightly shaped data with ingestion metadata and minimal business logic.",
    code: "df_raw.write.mode(\"append\").saveAsTable(\"bronze_riskonnect_events_raw\")"
  },
  {
    id: "silver",
    title: "Silver",
    subtitle: "Clean and standardize",
    detail: "Deduplicate, type columns, normalize keys, and document row grain before joins.",
    code: "df_clean = df_raw.dropDuplicates([\"event_id\"]).withColumn(\"event_date\", F.to_date(\"event_time\"))"
  },
  {
    id: "gold",
    title: "Gold",
    subtitle: "Serve the business output",
    detail: "Publish stable tables aligned to reports, semantic models, and owner expectations.",
    code: "df_metrics.write.mode(\"overwrite\").option(\"overwriteSchema\", \"true\").saveAsTable(\"gold_ehs_monthly_metrics\")"
  }
];

const sourceConnections = [
  {
    id: "riskonnect",
    name: "Riskonnect",
    domain: "EHS",
    method: "Dataflow Gen2 / Salesforce connector",
    cadence: "3x daily",
    downstream: "EHS IMS Dashboard, Claims Dashboard, planned Compliance Dashboard",
    repoPath: "docs/source_connections/"
  },
  {
    id: "holman",
    name: "Holman API",
    domain: "Fleet",
    method: "PySpark notebook API",
    cadence: "Daily",
    downstream: "Fleet Dashboard, MVR Dashboard, EHS IMS Dashboard",
    repoPath: "notebooks/ingestion/holman/"
  },
  {
    id: "gna",
    name: "GNA - API",
    domain: "HR",
    method: "PySpark notebook API",
    cadence: "3x daily",
    downstream: "GNA Dashboard and HR-facing analytics",
    repoPath: "notebooks/ingestion/gna/"
  },
  {
    id: "isn",
    name: "ISN API",
    domain: "OQ Training",
    method: "PySpark notebook API",
    cadence: "Currently static",
    downstream: "Planned Contractor Dashboard",
    repoPath: "notebooks/ingestion/isn/"
  },
  {
    id: "sharepoint",
    name: "SharePoint static uploads",
    domain: "EHS / Fleet / Compliance",
    method: "Dataflow Gen2",
    cadence: "Static or daily",
    downstream: "Operational dashboards and Excel handoffs",
    repoPath: "docs/source_connections/"
  },
  {
    id: "leetrans",
    name: "LeeTrans API",
    domain: "Compliance",
    method: "Dataflow Gen2 API, possible notebook later",
    cadence: "Daily",
    downstream: "MVR Dashboard, planned Compliance Dashboard",
    repoPath: "pipelines/leetrans/"
  }
];

const notebookCells = {
  orientation: {
    id: "orientation",
    title: "Inspect workspace inventory",
    purpose: "Use the repo inventory as the operating map before changing Fabric assets.",
    code: `from pyspark.sql import functions as F

inventory_path = "Files/docs/fabric_workspace_inventory.csv"
df_inventory = (
    spark.read.option("header", True)
    .csv(inventory_path)
)

summary = (
    df_inventory
    .groupBy("item_type")
    .count()
    .orderBy(F.desc("count"))
)

display(summary)`,
    outputTitle: "Simulated output",
    output: [
      "dataflow: many active workspace items",
      "notebook: API ingestion, forecasting, serving, and utility jobs",
      "pipeline: orchestration and scheduled refresh",
      "lakehouse: Bronze, Silver, Gold, weather, and staging assets"
    ],
    schema: [
      ["item_name", "string", "Current Fabric display name"],
      ["item_type", "string", "Notebook, pipeline, lakehouse, dataflow, report, or model"],
      ["workspace_name", "string", "Workspace that owns the item"],
      ["exists_locally", "string", "Whether OneLake local item folder was found"]
    ]
  },
  bronze: {
    id: "bronze",
    title: "Build a Bronze landing table",
    purpose: "Land source records with ingestion metadata before business shaping.",
    code: `from pyspark.sql import functions as F

df_bronze = (
    df_source
    .withColumn("ingested_at_utc", F.current_timestamp())
    .withColumn("source_system", F.lit("holman"))
    .withColumn("source_file_or_page", F.lit(current_batch_id))
)

row_count = df_bronze.count()
if row_count == 0:
    raise ValueError("No source rows were returned for this batch.")

df_bronze.write.mode("append").saveAsTable("bronze_holman_driver_events_raw")`,
    outputTitle: "Simulated output",
    output: [
      "Rows validated before write: 1240",
      "Append target: bronze_holman_driver_events_raw",
      "Audit fields: ingested_at_utc, source_system, source_file_or_page"
    ],
    schema: [
      ["driver_id", "string", "Source driver key"],
      ["event_time_utc", "timestamp", "Event timestamp from source"],
      ["payload_json", "string", "Raw source response for traceability"],
      ["ingested_at_utc", "timestamp", "Fabric ingestion time"]
    ]
  },
  dataframe: {
    id: "dataframe",
    title: "DataFrame basics",
    purpose: "Inspect, filter, group, and join without hiding row grain.",
    code: `from pyspark.sql import functions as F

df_events = spark.table("silver_holman_driver_events")
df_drivers = spark.table("silver_driver_reference")

df_monthly = (
    df_events
    .where(F.col("event_date") >= F.add_months(F.current_date(), -12))
    .join(df_drivers, on="driver_id", how="left")
    .groupBy("business_unit", F.trunc("event_date", "month").alias("event_month"))
    .agg(
        F.count("*").alias("event_count"),
        F.countDistinct("driver_id").alias("driver_count")
    )
)

display(df_monthly.orderBy("event_month", "business_unit"))`,
    outputTitle: "Simulated output",
    output: [
      "Row grain: one row per business unit per month",
      "Join: left join keeps events even if driver reference is incomplete",
      "Validation: compare event_count back to filtered source rows"
    ],
    schema: [
      ["business_unit", "string", "Reporting business unit"],
      ["event_month", "date", "Month bucket"],
      ["event_count", "long", "Events in month"],
      ["driver_count", "long", "Distinct drivers in month"]
    ]
  },
  secure_api: {
    id: "secure_api",
    title: "API pattern without secrets",
    purpose: "Use secure config placeholders and do not commit live credentials.",
    code: `import requests
from notebookutils import credentials

vault_url = "https://<key-vault-name>.vault.azure.net/"
api_token = credentials.getSecret(vault_url, "holman-api-token")

response = requests.get(
    "https://api.vendor.example/v1/events",
    headers={"Authorization": f"Bearer {api_token}"},
    params={"limit": 1000, "page": next_page_token},
    timeout=60
)

response.raise_for_status()
items = response.json().get("items", [])`,
    outputTitle: "Simulated output",
    output: [
      "Credential value is retrieved at runtime, not stored in repo",
      "Pagination token is passed through unchanged",
      "HTTP failure stops the notebook before cursor advancement"
    ],
    schema: [
      ["items", "array", "Source payload records"],
      ["next_page_token", "string", "Opaque source pagination token"],
      ["api_token", "secret", "Runtime-only value, never logged"]
    ]
  },
  repo_lifecycle: {
    id: "repo_lifecycle",
    title: "Repo placement and PR notes",
    purpose: "Record the Fabric item before treating it as governed source control.",
    code: `target_repo_path = "notebooks/ingestion/gna/nb_gna_ingest_applicants.py"
validation_method = "Run notebook for one batch, compare row count to API response, verify no duplicate applicant_id."

inventory_row = {
    "item_name": "GNA - API",
    "normalized_name": "nb_gna_ingest_applicants",
    "item_type": "notebook",
    "workspace_name": "The Lake",
    "business_domain": "HR",
    "source_system": "GNA",
    "target_repo_path": target_repo_path,
    "status": "active",
    "validation_method": validation_method
}`,
    outputTitle: "Simulated output",
    output: [
      "Inventory row has business domain, source system, target path, and validation method",
      "PR reviewer can inspect purpose, scope, and downstream impact",
      "No Fabric workspace change is implied by committing repo docs"
    ],
    schema: [
      ["target_repo_path", "string", "Maintained repo location"],
      ["validation_method", "string", "How the change was checked"],
      ["status", "string", "Active, planned, deprecated, experimental, or needs_review"]
    ]
  },
  capstone: {
    id: "capstone",
    title: "Capstone mapping output",
    purpose: "Tie source, ingestion, lakehouse layer, repo path, validation, and downstream usage together.",
    code: `capstone = {
    "source_system": selected_source,
    "ingestion_method": selected_method,
    "lakehouse_layer": selected_layer,
    "target_repo_path": selected_repo_path,
    "validation_checks": validation_checks,
    "downstream_impact": downstream_products
}

for key, value in capstone.items():
    print(f"{key}: {value}")`,
    outputTitle: "Simulated output",
    output: [
      "A reviewer can tell what the source is, where it lands, and who is affected",
      "Validation notes include row counts, duplicate checks, and refresh dependency",
      "The mapping is small enough to paste into an ADO PR"
    ],
    schema: [
      ["source_system", "string", "Vendor or upstream system"],
      ["ingestion_method", "string", "Notebook, dataflow, pipeline, or documented-only"],
      ["target_repo_path", "string", "Location in C:\\Repositories\\Fabric"],
      ["downstream_impact", "array", "Reports, models, dashboards, or owners affected"]
    ]
  }
};

const modules = [
  {
    id: "orientation",
    title: "Fabric Lab 1: Delta setup",
    level: "Beginner",
    time: "35 min",
    focusNode: "lakehouse",
    description: "Start with Delta Utilities operating reality: The Lake workspace, Fabric item types, and the repo as the maintainable record.",
    outcomes: [
      "Identify the major Fabric item types",
      "Explain why the repo is curated rather than a raw workspace dump",
      "Use inventory and standards before editing"
    ],
    lessons: [
      ["The Lake", "Operational Fabric workspace with live items, schedules, and current user-facing products."],
      ["Fabric repo", "The maintainable source-control home for approved assets, documentation, validation notes, and review history."],
      ["Do not bulk copy", "Inventory, classify, document, validate, then promote only useful assets."]
    ],
    cells: ["orientation"],
    spotlightSources: ["riskonnect", "holman", "sharepoint"],
    quiz: [
      {
        question: "What is the safest first source of truth before promoting a Fabric item into the repo?",
        options: ["Workspace inventory", "A local temp folder", "A screenshot", "A report title only"],
        answer: "Workspace inventory",
        feedback: "The inventory establishes item name, type, workspace, status, and eventual repo placement."
      },
      {
        question: "Why is the repo not a raw mirror of the Fabric workspace?",
        options: ["It should be curated and reviewable", "Fabric cannot contain notebooks", "Reports do not need validation", "Dataflows are always secrets"],
        answer: "It should be curated and reviewable",
        feedback: "The repo should hold maintained, documented assets rather than every experiment or duplicate."
      },
      {
        question: "Which item type usually holds PySpark API ingestion logic?",
        options: ["Notebook", "Report", "Semantic model", "Workspace theme"],
        answer: "Notebook",
        feedback: "Notebooks are the common home for Python/PySpark API ingestion and data engineering logic."
      }
    ]
  },
  {
    id: "lakehouse",
    title: "Fabric Lab 2: Lakehouse flow",
    level: "Beginner",
    time: "40 min",
    focusNode: "lakehouse",
    description: "Practice the Bronze, Silver, Gold flow and the validation questions that stop bad data from moving downstream.",
    outcomes: [
      "Separate raw landing from cleaned tables and serving outputs",
      "Know when a table, file, or shortcut is the right object",
      "State row grain and validation before downstream usage"
    ],
    lessons: [
      ["Bronze", "Raw or lightly shaped source data plus audit fields."],
      ["Silver", "Typed, deduplicated, standardized tables with useful keys and known grain."],
      ["Gold", "Stable serving tables aligned to a report, semantic model, or recurring business output."]
    ],
    cells: ["bronze", "dataframe"],
    spotlightSources: ["holman", "riskonnect", "leetrans"],
    quiz: [
      {
        question: "Which layer should preserve source fidelity as much as practical?",
        options: ["Bronze", "Silver", "Gold", "Report canvas"],
        answer: "Bronze",
        feedback: "Bronze should keep enough raw context to support traceability and reprocessing."
      },
      {
        question: "What must be clear before joining two Silver tables?",
        options: ["Row grain", "Logo size", "Browser zoom", "Commit author initials"],
        answer: "Row grain",
        feedback: "Row grain is the unit of one row. If that is unclear, joins can quietly multiply records."
      },
      {
        question: "Gold tables should primarily align to what?",
        options: ["A business-serving output", "Every raw source field", "A temporary export name", "A one-off notebook cell"],
        answer: "A business-serving output",
        feedback: "Gold is for stable serving outputs, not a dumping area."
      }
    ]
  },
  {
    id: "notebooks",
    title: "Fabric Lab 3: Python and PySpark",
    level: "Beginner",
    time: "55 min",
    focusNode: "notebook",
    description: "Learn the notebook basics that matter for Delta work: execution order, default lakehouse, DataFrames, joins, writes, and validation.",
    outcomes: [
      "Read and explain a PySpark transformation",
      "Inspect schema and row counts before writing",
      "Choose append or overwrite intentionally"
    ],
    lessons: [
      ["Cells execute statefully", "Run order matters. A later cell can depend on variables from earlier cells."],
      ["Default lakehouse matters", "Table reads and writes resolve against the attached lakehouse unless fully qualified."],
      ["PySpark is distributed", "Use DataFrame operations for large data; reserve plain Python loops for small control logic."]
    ],
    cells: ["dataframe", "bronze"],
    spotlightSources: ["gna", "holman", "isn"],
    quiz: [
      {
        question: "What does `saveAsTable` do in the training snippets?",
        options: ["Writes a DataFrame as a lakehouse table", "Creates a Power BI visual", "Commits to Git", "Changes the workspace name"],
        answer: "Writes a DataFrame as a lakehouse table",
        feedback: "The snippets use `saveAsTable` to persist DataFrame output as a table."
      },
      {
        question: "When should you check row counts?",
        options: ["Before and after important transformations", "Only after publishing a report", "Only during logo review", "Never in notebooks"],
        answer: "Before and after important transformations",
        feedback: "Row counts catch empty pulls, duplication, and unexpected filter loss early."
      },
      {
        question: "Why avoid plain Python loops over large source rows?",
        options: ["They bypass Spark's distributed execution", "They improve Fabric schedules", "They encrypt tables automatically", "They create semantic models"],
        answer: "They bypass Spark's distributed execution",
        feedback: "Large transformations should stay in Spark DataFrame operations."
      }
    ]
  },
  {
    id: "connections",
    title: "Fabric Lab 4: Source connections",
    level: "Intermediate",
    time: "45 min",
    focusNode: "dataflow",
    description: "Compare Dataflow Gen2, notebooks, and pipelines using Delta source examples and downstream risk.",
    outcomes: [
      "Choose an ingestion pattern based on source behavior",
      "Document refresh cadence and downstream usage",
      "Keep credentials out of repo-managed code"
    ],
    lessons: [
      ["Dataflow Gen2", "Good fit for Power Query shaping, SharePoint uploads, and connector-driven data."],
      ["Notebook API", "Good fit for pagination, custom HTTP calls, schema drift checks, and programmatic validation."],
      ["Pipeline", "Good fit for orchestration, scheduling, parameters, and handoffs between items."]
    ],
    cells: ["secure_api", "bronze"],
    spotlightSources: ["riskonnect", "gna", "isn", "leetrans", "sharepoint", "holman"],
    quiz: [
      {
        question: "Where should live API credentials be stored in this lab's pattern?",
        options: ["Secure runtime config", "Committed notebook text", "README examples", "Browser localStorage"],
        answer: "Secure runtime config",
        feedback: "Training snippets use placeholders and runtime secret retrieval patterns, not committed values."
      },
      {
        question: "Which pattern usually fits custom pagination and HTTP error handling best?",
        options: ["PySpark notebook", "Static report page", "Semantic model measure", "Logo asset"],
        answer: "PySpark notebook",
        feedback: "Notebooks can handle API calls, pagination tokens, retries, parsing, and validation logic."
      },
      {
        question: "What makes a connection supportable?",
        options: ["Owner, cadence, method, downstream usage, validation notes", "Only a vendor name", "Only a refresh time", "Only a dashboard screenshot"],
        answer: "Owner, cadence, method, downstream usage, validation notes",
        feedback: "Supportability depends on context, dependencies, and validation, not just the connector type."
      }
    ]
  },
  {
    id: "lifecycle",
    title: "Fabric Lab 5: Repo to Fabric lifecycle",
    level: "Intermediate",
    time: "45 min",
    focusNode: "pipeline",
    description: "Practice the governed path: ADO ticket, branch, target path, inventory, docs, validation, and PR handoff.",
    outcomes: [
      "Pick a target repo folder using Fabric standards",
      "Update inventory and local docs together",
      "Write a reviewable PR handoff"
    ],
    lessons: [
      ["Branch first", "Work from an ADO ticket and a focused branch in the Fabric repo."],
      ["Place deliberately", "Use asset type, workload stage, source system, and domain to select the folder."],
      ["Validate honestly", "Do not claim Fabric runtime validation unless it happened."]
    ],
    cells: ["repo_lifecycle"],
    spotlightSources: ["gna", "riskonnect", "sharepoint"],
    quiz: [
      {
        question: "Where does normal Fabric delivery work start?",
        options: ["ADO work item and branch", "Main branch direct edit", "A local screenshot", "A disconnected file dump"],
        answer: "ADO work item and branch",
        feedback: "The repo guidance points to work item, branch, Codex, PR, review, and merge."
      },
      {
        question: "What should change when a governed asset is added?",
        options: ["Artifact plus inventory and relevant docs", "Only the file name", "Only localStorage", "Only the report title"],
        answer: "Artifact plus inventory and relevant docs",
        feedback: "Maintained assets need code, metadata, and support documentation."
      },
      {
        question: "Which validation claim is acceptable after only static repo review?",
        options: ["Static checks passed; Fabric runtime not executed", "Production refresh was verified", "All reports are correct", "Gateway credentials were tested"],
        answer: "Static checks passed; Fabric runtime not executed",
        feedback: "Validation reporting should be literal and auditable."
      }
    ]
  },
  {
    id: "capstone",
    title: "Fabric Lab 6: Capstone",
    level: "Applied",
    time: "50 min",
    focusNode: "model",
    description: "Build a small source-to-output map that is clear enough for a PR reviewer and useful enough for future support.",
    outcomes: [
      "Map one source scenario to a Fabric implementation",
      "Identify repo placement and downstream impact",
      "Define validation checks before handoff"
    ],
    lessons: [
      ["Pick the source", "Start with the actual source behavior, owner, cadence, and downstream products."],
      ["Pick the pattern", "Choose dataflow, notebook, pipeline, or documentation-only based on real needs."],
      ["Close the loop", "Finish with target path, validation, and PR notes."]
    ],
    cells: ["capstone", "repo_lifecycle"],
    spotlightSources: ["riskonnect", "holman", "gna", "isn", "sharepoint", "leetrans"],
    quiz: [
      {
        question: "What should the capstone produce?",
        options: ["Source-to-output mapping", "A real Fabric deployment", "A hidden credential", "A raw workspace export"],
        answer: "Source-to-output mapping",
        feedback: "The capstone is a safe planning and review artifact, not a live workspace change."
      },
      {
        question: "Which capstone field helps future report troubleshooting most?",
        options: ["Downstream impact", "Button color", "Browser tab title", "Local monitor size"],
        answer: "Downstream impact",
        feedback: "Downstream impact tells maintainers which dashboards, models, or owners are affected."
      },
      {
        question: "When does a scenario become review-ready?",
        options: ["Source, method, path, validation, and downstream impact are clear", "The learner likes the name", "It has one notebook cell", "It avoids all documentation"],
        answer: "Source, method, path, validation, and downstream impact are clear",
        feedback: "Reviewers need the full operating context, not just code."
      }
    ]
  }
];

const capstoneScenarios = [
  {
    id: "riskonnect",
    label: "Riskonnect EHS refresh",
    source: "Riskonnect",
    method: "Dataflow Gen2 / connector",
    layer: "Silver and Gold EHS outputs",
    path: "docs/source_connections/ and semantic_models/operations/",
    downstream: "EHS IMS Dashboard, Claims Dashboard",
    validation: "Refresh status, row counts by incident month, duplicate incident key check"
  },
  {
    id: "holman",
    label: "Holman driver events",
    source: "Holman API",
    method: "PySpark notebook API ingestion",
    layer: "Bronze raw events, Silver driver events, Gold fleet metrics",
    path: "notebooks/ingestion/holman/",
    downstream: "Fleet Dashboard, MVR Dashboard",
    validation: "API row count, duplicate event key check, driver reference join fallout"
  },
  {
    id: "sharepoint",
    label: "SharePoint static upload",
    source: "SharePoint file",
    method: "Dataflow Gen2",
    layer: "Bronze file landing and Silver cleaned table",
    path: "docs/source_connections/",
    downstream: "Operational dashboard or Excel handoff",
    validation: "File modified date, row count, required columns, bad date/null scan"
  }
];

const defaultState = {
  inLab: false,
  activeModuleId: "orientation",
  currentCellId: "orientation",
  completedModules: [],
  ranCells: [],
  quizAnswers: {},
  flowStep: 0,
  selectedScenarioId: "riskonnect",
  capstoneChecks: [],
  statusMessage: "Ready. Open a Fabric module to begin."
};

let state = loadState();

function getActiveModule() {
  return modules.find((module) => module.id === state.activeModuleId) || modules[0];
}

function getCurrentCell() {
  const active = getActiveModule();
  const id = active.cells.includes(state.currentCellId) ? state.currentCellId : active.cells[0];
  return notebookCells[id] || notebookCells.orientation;
}

function isDone(moduleId) {
  return state.completedModules.includes(moduleId);
}

function startModule(moduleId) {
  const next = modules.find((module) => module.id === moduleId) || modules[0];
  state.inLab = true;
  state.activeModuleId = next.id;
  state.currentCellId = next.cells[0];
  state.statusMessage = `${next.title} loaded.`;
  saveState();
  render();
}

function completeActiveModule() {
  addUnique(state.completedModules, state.activeModuleId);
  const active = getActiveModule();
  state.statusMessage = `${active.title} marked complete.`;
  saveState();
  render();
}

function runCurrentCell() {
  const cell = getCurrentCell();
  addUnique(state.ranCells, cell.id);
  state.statusMessage = `Ran simulated cell: ${cell.title}. No Fabric calls were made.`;
  saveState();
  render();
}

async function copyCurrentCell() {
  const cell = getCurrentCell();
  try {
    await navigator.clipboard.writeText(cell.code);
    state.statusMessage = `Copied safe snippet: ${cell.title}.`;
  } catch {
    state.statusMessage = "Copy was blocked by the browser. The snippet remains visible for manual copy.";
  }
  saveState();
  render();
}

function answerQuiz(questionIndex, option) {
  const active = getActiveModule();
  const quiz = active.quiz[questionIndex];
  if (!quiz) {
    return;
  }
  state.quizAnswers[`${active.id}:${questionIndex}`] = option;
  state.statusMessage = option === quiz.answer ? "Correct. Keep going." : quiz.feedback;
  saveState();
  render();
}

function toggleCapstoneCheck(checkId) {
  if (state.capstoneChecks.includes(checkId)) {
    state.capstoneChecks = state.capstoneChecks.filter((item) => item !== checkId);
  } else {
    state.capstoneChecks.push(checkId);
  }
  state.statusMessage = "Capstone checklist updated.";
  saveState();
  render();
}

function handleAction(action, element) {
  if (action === "home") {
    state.inLab = false;
    state.statusMessage = "Returned to course overview.";
  }
  if (action === "reset") {
    localStorage.removeItem(STORAGE_KEY);
    state = { ...defaultState };
    state.statusMessage = "Progress reset.";
  }
  if (action === "toggle-theme") {
    toggleTheme();
  }
  if (action === "start-module") {
    startModule(element.dataset.moduleId);
    return;
  }
  if (action === "select-module") {
    startModule(element.dataset.moduleId);
    return;
  }
  if (action === "select-cell") {
    state.currentCellId = element.dataset.cellId;
    state.statusMessage = `Selected cell: ${getCurrentCell().title}.`;
  }
  if (action === "run-cell") {
    runCurrentCell();
    return;
  }
  if (action === "copy-cell") {
    copyCurrentCell();
    return;
  }
  if (action === "advance-flow") {
    state.flowStep = (state.flowStep + 1) % medallionStages.length;
    state.statusMessage = `Lakehouse flow focus: ${medallionStages[state.flowStep].title}.`;
  }
  if (action === "complete-module") {
    completeActiveModule();
    return;
  }
  saveState();
  render();
}

function render() {
  applyTheme(readTheme());
  const portalView = document.getElementById("portalView");
  const labView = document.getElementById("labView");
  const statusStrip = document.getElementById("statusStrip");

  portalView.hidden = state.inLab;
  labView.hidden = !state.inLab;
  statusStrip.hidden = !state.inLab;

  if (!state.inLab) {
    renderPortal();
    return;
  }

  renderStatusStrip();
  renderLessons();
  renderWorkspaceMap();
  renderMedallionFlow();
  renderNotebook();
  renderScenarioBoard();
  renderQuiz();
}

function renderPortal() {
  const completed = state.completedModules.length;
  document.getElementById("portalView").innerHTML = `
    <div class="course-stack">
      <article class="course-card featured">
        <span class="section-kicker">Fabric Learning Lab</span>
        <h2>Learn Fabric the way Delta Utilities actually has to operate it</h2>
        <p>Practice workspace orientation, lakehouse flow, PySpark notebooks, source connections, repo governance, and PR-ready handoff notes without making real Fabric calls.</p>
        <div class="course-meta">
          <span class="pill">Static app</span>
          <span class="pill">Offline friendly</span>
          <span class="pill">No external assets</span>
          <span class="pill">${completed} of ${modules.length} complete</span>
        </div>
        <div class="portal-actions">
          <button class="text-button" type="button" data-action="start-module" data-module-id="orientation">Start learning path</button>
          <button class="icon-button" type="button" data-action="start-module" data-module-id="notebooks"><span aria-hidden="true">N</span><span>Open notebook primer</span></button>
        </div>
      </article>
      ${modules.map(renderCourseCard).join("")}
    </div>
    <aside class="course-side">
      <section class="course-section">
        <span class="section-kicker">Delta setup</span>
        <h2>Operating model</h2>
        <p>The lab treats Fabric as the operational workspace and the Fabric repo as the curated engineering record.</p>
        <ul>
          <li>Workspace: The Lake</li>
          <li>Repo: ${escapeHtml(FABRIC_REPO)}</li>
          <li>Default habit: inventory, classify, document, validate, then promote</li>
        </ul>
      </section>
      <section class="course-section">
        <span class="section-kicker">Source examples</span>
        <h2>Included systems</h2>
        <p>Examples are based on the local Fabric source connection docs, with sensitive implementation values removed.</p>
        <div class="status-badge-list">
          ${sourceConnections.map((source) => `<span class="status-pill">${escapeHtml(source.name)}</span>`).join("")}
        </div>
      </section>
      <section class="course-section">
        <span class="section-kicker">Guardrail</span>
        <h2>No secrets in training code</h2>
        <p>Notebook examples use placeholders and runtime credential patterns. Do not copy live tokens, basic auth strings, or vendor keys into this repo.</p>
      </section>
    </aside>
  `;
}

function renderCourseCard(module) {
  const completed = isDone(module.id);
  return `
    <article class="course-card">
      <span class="section-kicker">${escapeHtml(module.level)} | ${escapeHtml(module.time)}</span>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(module.description)}</p>
      <div class="module-outcomes">
        ${module.outcomes.map((outcome) => `<span class="pill">${escapeHtml(outcome)}</span>`).join("")}
      </div>
      <div class="portal-actions">
        <button class="text-button" type="button" data-action="start-module" data-module-id="${escapeAttribute(module.id)}">Open module</button>
        <span class="status-pill ${completed ? "done" : ""}">${completed ? "Complete" : "Not started"}</span>
      </div>
    </article>
  `;
}

function renderStatusStrip() {
  const active = getActiveModule();
  const ranCount = active.cells.filter((cellId) => state.ranCells.includes(cellId)).length;
  document.getElementById("statusStrip").innerHTML = `
    <div>
      <span class="section-kicker">Active module</span>
      <strong>${escapeHtml(active.title)}</strong>
    </div>
    <div class="status-badge-list">
      <span class="status-pill">${state.completedModules.length} of ${modules.length} modules complete</span>
      <span class="status-pill">${ranCount} of ${active.cells.length} cells run</span>
      <span class="status-pill">${escapeHtml(state.statusMessage)}</span>
    </div>
  `;
}

function renderLessons() {
  const active = getActiveModule();
  document.getElementById("lessonProgress").textContent = `${state.completedModules.length} of ${modules.length} complete`;
  document.getElementById("lessonList").innerHTML = modules
    .map(
      (module) => `
        <button class="module-button ${module.id === active.id ? "active" : ""} ${isDone(module.id) ? "done" : ""}" type="button" data-action="select-module" data-module-id="${escapeAttribute(module.id)}">
          <span>${escapeHtml(module.title)}</span>
        </button>
      `
    )
    .join("");

  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">${escapeHtml(active.level)} | ${escapeHtml(active.time)}</span>
    <h2>${escapeHtml(active.title)}</h2>
    <p>${escapeHtml(active.description)}</p>
    <ul>
      ${active.lessons.map(([title, detail]) => `<li><strong>${escapeHtml(title)}:</strong> ${escapeHtml(detail)}</li>`).join("")}
    </ul>
  `;
}

function renderWorkspaceMap() {
  const active = getActiveModule();
  document.getElementById("workspaceTitle").textContent = active.focusNode === "notebook" ? "Notebook-centered workflow" : "The Lake operating map";
  document.getElementById("workspaceMeta").textContent = `Focus: ${workspaceNodes.find((node) => node.id === active.focusNode)?.title || "Workspace"}`;
  document.getElementById("workspaceMap").innerHTML = workspaceNodes
    .map(
      (node) => `
        <article class="workspace-node ${node.id === active.focusNode ? "active" : ""}">
          <span class="node-icon">${escapeHtml(node.icon)}</span>
          <strong>${escapeHtml(node.title)}</strong>
          <span>${escapeHtml(node.detail)}</span>
        </article>
      `
    )
    .join("");
}

function renderMedallionFlow() {
  document.getElementById("medallionFlow").innerHTML = medallionStages
    .map((stage, index) => {
      const className = index === state.flowStep ? "active" : index < state.flowStep ? "complete" : "";
      return `
        <article class="flow-stage ${className}">
          <span class="flow-pill">${escapeHtml(stage.subtitle)}</span>
          <strong>${escapeHtml(stage.title)}</strong>
          <span>${escapeHtml(stage.detail)}</span>
          <code>${escapeHtml(stage.code)}</code>
        </article>
      `;
    })
    .join("");
}

function renderNotebook() {
  const active = getActiveModule();
  const current = getCurrentCell();
  const hasRun = state.ranCells.includes(current.id);
  document.getElementById("notebookTitle").textContent = current.title;
  document.getElementById("notebookStatus").textContent = hasRun ? "Cell has been run in the simulator" : "No Fabric calls are made";
  document.getElementById("notebookTabs").innerHTML = active.cells
    .map((cellId) => {
      const cell = notebookCells[cellId];
      return `
        <button class="notebook-tab ${cell.id === current.id ? "active" : ""}" type="button" data-action="select-cell" data-cell-id="${escapeAttribute(cell.id)}">
          ${escapeHtml(cell.title)}
        </button>
      `;
    })
    .join("");

  document.getElementById("notebookCard").innerHTML = `
    <div class="notebook-toolbar">
      <div>
        <strong class="notebook-cell-title">${escapeHtml(current.title)}</strong>
        <p>${escapeHtml(current.purpose)}</p>
      </div>
      <div class="notebook-actions">
        <button class="copy-button" type="button" data-action="copy-cell">Copy snippet</button>
        <button class="run-button" type="button" data-action="run-cell">Run simulated cell</button>
      </div>
    </div>
    <pre class="notebook-code"><code>${escapeHtml(current.code)}</code></pre>
    <div class="notebook-output">
      <div class="output-panel">
        <span class="section-kicker">${escapeHtml(current.outputTitle)}</span>
        ${
          hasRun
            ? `<ul>${current.output.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
            : `<p>Run the simulated cell to see the expected output and review notes.</p>`
        }
      </div>
      <div class="schema-panel">
        <span class="section-kicker">Schema notes</span>
        ${renderSchemaTable(current.schema)}
      </div>
    </div>
  `;
}

function renderSchemaTable(schema) {
  return `
    <table class="schema-table">
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${schema
          .map(
            ([field, type, purpose]) => `
              <tr>
                <td><code>${escapeHtml(field)}</code></td>
                <td>${escapeHtml(type)}</td>
                <td>${escapeHtml(purpose)}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderScenarioBoard() {
  const active = getActiveModule();
  if (active.id === "capstone") {
    renderCapstoneBoard();
    return;
  }

  const sourceIds = active.spotlightSources || [];
  const sources = sourceIds.map((id) => sourceConnections.find((source) => source.id === id)).filter(Boolean);
  document.getElementById("scenarioBoard").innerHTML = `
    <div class="source-grid">
      ${sources.map(renderSourceCard).join("")}
    </div>
  `;
}

function renderSourceCard(source) {
  return `
    <article class="source-card">
      <span class="section-kicker">${escapeHtml(source.domain)}</span>
      <strong>${escapeHtml(source.name)}</strong>
      <span>${escapeHtml(source.method)}</span>
      <ul>
        <li>Cadence: ${escapeHtml(source.cadence)}</li>
        <li>Downstream: ${escapeHtml(source.downstream)}</li>
        <li>Repo context: <code>${escapeHtml(source.repoPath)}</code></li>
      </ul>
    </article>
  `;
}

function renderCapstoneBoard() {
  const selected = capstoneScenarios.find((scenario) => scenario.id === state.selectedScenarioId) || capstoneScenarios[0];
  const checks = [
    ["source", "Source system and owner are known"],
    ["method", "Ingestion method is justified"],
    ["layer", "Lakehouse layer and row grain are clear"],
    ["path", "Target repo path is specific"],
    ["validation", "Validation checks are listed"],
    ["downstream", "Downstream impact is documented"]
  ];

  document.getElementById("scenarioBoard").innerHTML = `
    <div class="scenario-controls">
      <label class="sr-only" for="scenarioSelect">Capstone scenario</label>
      <select id="scenarioSelect" data-scenario-select>
        ${capstoneScenarios
          .map((scenario) => `<option value="${escapeAttribute(scenario.id)}" ${scenario.id === selected.id ? "selected" : ""}>${escapeHtml(scenario.label)}</option>`)
          .join("")}
      </select>
      <span class="status-pill">${state.capstoneChecks.length} of ${checks.length} review points complete</span>
    </div>
    <div class="scenario-grid">
      <article class="scenario-card active">
        <span class="section-kicker">Source</span>
        <strong>${escapeHtml(selected.source)}</strong>
        <p>${escapeHtml(selected.method)}</p>
      </article>
      <article class="scenario-card">
        <span class="section-kicker">Lakehouse and repo</span>
        <strong>${escapeHtml(selected.layer)}</strong>
        <p><code>${escapeHtml(selected.path)}</code></p>
      </article>
      <article class="scenario-card">
        <span class="section-kicker">Business impact</span>
        <strong>${escapeHtml(selected.downstream)}</strong>
        <p>${escapeHtml(selected.validation)}</p>
      </article>
    </div>
    <div class="checklist" style="margin-top: 12px;">
      ${checks
        .map(
          ([id, label]) => `
            <button class="check-button ${state.capstoneChecks.includes(id) ? "done" : ""}" type="button" data-check-id="${escapeAttribute(id)}">
              ${escapeHtml(label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderQuiz() {
  const active = getActiveModule();
  const visibleQuiz = active.quiz.slice(0, QUIZ_VISIBLE_COUNT);
  let correct = 0;
  let missed = 0;

  visibleQuiz.forEach((quiz, index) => {
    const answer = state.quizAnswers[`${active.id}:${index}`];
    if (!answer) {
      return;
    }
    if (answer === quiz.answer) {
      correct += 1;
    } else {
      missed += 1;
    }
  });

  document.getElementById("quizScore").textContent = `Correct ${correct} | Missed ${missed}`;
  document.getElementById("quizList").innerHTML = visibleQuiz
    .map((quiz, questionIndex) => {
      const selected = state.quizAnswers[`${active.id}:${questionIndex}`];
      return `
        <article class="quiz-card">
          <h3>${escapeHtml(quiz.question)}</h3>
          <div class="quiz-options">
            ${quiz.options
              .map((option) => {
                const className =
                  selected === option ? (option === quiz.answer ? "correct" : "wrong") : selected && option === quiz.answer ? "correct" : "";
                return `
                  <button class="quiz-option ${className}" type="button" data-quiz-index="${questionIndex}" data-quiz-option="${escapeAttribute(option)}">
                    ${escapeHtml(option)}
                  </button>
                `;
              })
              .join("")}
          </div>
          ${selected ? `<p class="quiz-feedback">${escapeHtml(quiz.feedback)}</p>` : ""}
        </article>
      `;
    })
    .join("");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      handleAction(actionButton.dataset.action, actionButton);
      return;
    }

    const quizButton = event.target.closest("[data-quiz-index]");
    if (quizButton) {
      answerQuiz(Number(quizButton.dataset.quizIndex), quizButton.dataset.quizOption);
      return;
    }

    const checkButton = event.target.closest("[data-check-id]");
    if (checkButton) {
      toggleCapstoneCheck(checkButton.dataset.checkId);
    }
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-scenario-select]");
    if (!select) {
      return;
    }
    state.selectedScenarioId = select.value;
    state.capstoneChecks = [];
    state.statusMessage = "Capstone scenario changed.";
    saveState();
    render();
  });
}

function addUnique(list, value) {
  if (!list.includes(value)) {
    list.push(value);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function readTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  const button = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  if (button) {
    button.setAttribute("aria-pressed", String(nextTheme === "dark"));
  }
  if (label) {
    label.textContent = nextTheme === "dark" ? "Light" : "Dark";
  }
}

function toggleTheme() {
  const nextTheme = readTheme() === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch {
    // Non-critical. The app still works if browser storage is blocked.
  }
  applyTheme(nextTheme);
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") {
      return { ...defaultState };
    }
    return {
      ...defaultState,
      ...parsed,
      completedModules: Array.isArray(parsed.completedModules) ? parsed.completedModules : [],
      ranCells: Array.isArray(parsed.ranCells) ? parsed.ranCells : [],
      quizAnswers: parsed.quizAnswers && typeof parsed.quizAnswers === "object" ? parsed.quizAnswers : {},
      capstoneChecks: Array.isArray(parsed.capstoneChecks) ? parsed.capstoneChecks : []
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Non-critical. Learners can still use the current page session.
  }
}

bindEvents();
render();
