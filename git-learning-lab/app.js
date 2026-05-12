const STORAGE_KEY = "git-learning-lab-state-v6";
const THEME_KEY = "git-learning-lab-theme";
const PS_ROOT = "C:\\Training";
const PS_PROMPT = "PS C:\\Training\\OracleGitLab>";
const CODEX_DEFAULT_CWD = "C:\\Users\\PutnamBrowne";
const CODEX_OLD_DEFAULT_CWD = "C:\\Users\\Analyst";
const LOCAL_WINDOWS_USER = "azuread\\putnambrowne";
const LOCAL_NODE_VERSION = "v24.14.1";
const LOCAL_NPM_VERSION = "11.11.0";
const LOCAL_CODEX_VERSION = "codex-cli 0.118.0";
const POWERSHELL_CODEX_SHIM_BLOCKER =
  "PowerShell tried to run codex.ps1, but this workstation blocks scripts by policy. Use codex.cmd for this lesson.";
const POWERSHELL_NPM_SHIM_BLOCKER =
  "PowerShell tried to run npm.ps1, but this workstation blocks scripts by policy. Use npm.cmd for this lesson.";
const QUIZ_VISIBLE_COUNT = 3;
const QUIZ_EXIT_DELAY_MS = 360;
const QUIZ_OPTION_ORDER_VERSION = 2;
const QUIZ_SESSION_VERSION = 3;
const QUIZ_ROUND_COUNT = 3;
const QUIZ_ROUND_UNLOCK_SCORE = 10;

const oracleLab = {
  folder: "oracle-git-lab",
  folderDisplay: "OracleGitLab",
  branchName: "feature/ccs-emergency-orders-zip-prior-week-demo",
  branchLabel: "feature/ccs-emergency...",
  ticketTitle: "Emergency Orders by ZIP Code - Prior Week",
  firstFile: "README.md",
  firstFileContent: "Emergency Orders by ZIP - Prior Week",
  firstCommitMessage: "Add ticket context",
  featureFile: "ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql",
  featureFileLabel: "ccs/sql/meters/...prior_week.sql",
  featureCommitMessage: "Add emergency orders ZIP report"
};

const ADO_REPO_URL = "https://dev.azure.com/deltautilities-it/Data%20and%20Analytics%20Projects/_git/Oracle";
const CLONED_REPO_FOLDER = "Oracle";
const ORACLE_REPO_ROOT = "C:\\Repositories\\Oracle";
const LEARN_GIT_BRANCHING_URL = "file:///C:/Repositories/learnGitBranching/index.html";
const LEARN_GIT_BRANCHING_REPO_URL = "https://github.com/pcottle/learnGitBranching";
const VISUAL_BRANCHING_LAB_ID = "visual-branching";

const projectLab = {
  folder: "longer-oracle-project",
  folderDisplay: "LongerOracleProject",
  branchName: "feature/ccs-modeling-date-dimension",
  branchLabel: "feature/ccs-modeling...",
  projectRoot: "projects/ccs-dimensional-modeling",
  readmeFile: "projects/ccs-dimensional-modeling/README.md",
  decisionFile: "projects/ccs-dimensional-modeling/decision-index.md",
  workstreamsFile: "projects/ccs-dimensional-modeling/workstreams.md",
  readmeContent: "Project: CCS dimensional modeling continuation",
  decisionContent: "Decision index: capture modeling choices and rationale",
  workstreamsContent: "Workstreams: dimensions, facts, validation, promotion",
  capsuleCommitMessage: "Add CCS dimensional modeling project capsule",
  workstreamCommitMessage: "Update date dimension workstream notes"
};

const oracleRepoMap = [
  {
    type: "folder",
    name: ".azuredevops",
    note: "ADO pull request template and repo process files",
    children: [{ type: "file", name: "pull_request_template.md", note: "PR description checklist" }]
  },
  {
    type: "folder",
    name: "ccs",
    note: "Customer Care and Service reporting assets",
    children: [
      {
        type: "folder",
        name: "bip",
        note: "BI Publisher models, reports, and templates",
        children: [
          { type: "folder", name: "data_models", note: "BIP data model definitions" },
          { type: "folder", name: "reports", note: "BIP report definitions" },
          { type: "folder", name: "templates", note: "BIP template files" }
        ]
      },
      {
        type: "folder",
        name: "sql",
        note: "CCS SQL organized by business area",
        children: [
          { type: "folder", name: "accounts", note: "Account and receivables extracts" },
          { type: "folder", name: "billing", note: "Billing and usage extracts" },
          {
            type: "folder",
            name: "meters",
            note: "Meter, field activity, and emergency response SQL",
            labTarget: "container",
            children: [
              { type: "file", name: "README.md", note: "Folder notes and conventions" },
              {
                type: "file",
                name: "ccs_emergency_response_activity_extract.sql",
                note: "Existing neighboring file learners can inspect for patterns"
              },
              {
                type: "file",
                name: "ccs_emergency_response_activity_by_zip_prior_week.sql",
                note: "New SQL asset created during this lab",
                path: oracleLab.featureFile,
                labTarget: "created"
              }
            ]
          },
          { type: "folder", name: "modeling", note: "CCS dimensional modeling assets" },
          { type: "folder", name: "shared", note: "Shared CCS extracts and reusable logic" }
        ]
      }
    ]
  },
  { type: "folder", name: "docs", note: "Shared documentation and process notes" },
  {
    type: "folder",
    name: "fusion",
    note: "Fusion SQL and reporting assets",
    children: [
      {
        type: "folder",
        name: "sql",
        note: "Fusion subject-area SQL",
        children: [
          { type: "folder", name: "ap", note: "Accounts payable" },
          { type: "folder", name: "ar", note: "Accounts receivable" },
          { type: "folder", name: "gl", note: "General ledger" },
          { type: "folder", name: "ppm", note: "Project portfolio management" }
        ]
      }
    ]
  },
  {
    type: "folder",
    name: "projects",
    note: "Project workspaces, context, and deliverables",
    children: [
      {
        type: "folder",
        name: "ccs-dimensional-modeling",
        note: "Longer project capsule for ongoing CCS dimensional modeling work",
        labTarget: "container",
        children: [
          {
            type: "file",
            name: "README.md",
            note: "Brief project purpose, scope, and current starting point",
            path: projectLab.readmeFile,
            labTarget: "created"
          },
          {
            type: "file",
            name: "decision-index.md",
            note: "Short index of decisions, rationale, and dates",
            path: projectLab.decisionFile,
            labTarget: "created"
          },
          {
            type: "file",
            name: "workstreams.md",
            note: "Optional workstream tracker when collaborators or parallel work are involved",
            path: projectLab.workstreamsFile,
            labTarget: "created"
          }
        ]
      }
    ]
  },
  { type: "folder", name: "tests", note: "Validation and test assets" },
  { type: "folder", name: "wacs", note: "WACS reporting assets" },
  { type: "file", name: "AGENTS.md", note: "Repo-local guidance for coding agents" },
  { type: "file", name: "README.md", note: "Repo overview; this lab creates a root README-style context file", path: oracleLab.firstFile, labTarget: "created" }
];

const modules = [
  {
    id: "git-basics",
    title: "Git Workflow 1: Ticket to PR",
    level: "Beginner",
    time: "60 min",
    description:
      "Start from an ADO-style request, make a scoped branch change, review the diff, publish the branch, and understand what the PR must prove.",
    outcomes: [
      "Understand Git identity versus Azure DevOps sign-in",
      "Clone and inspect an ADO-hosted repo safely",
      "Anchor work to a ticket",
      "Pull latest main before branching",
      "Create a safe task branch from current main",
      "Read status and history",
      "Review the diff before committing",
      "Publish a branch for PR review",
      "Explain what a PR should communicate"
    ],
    lessons: [
      ["Why Git is here", "Traceability, safer review, and easier handoff."],
      ["Identity and access", "Git config names your commits; Azure DevOps sign-in controls clone, fetch, push, and PR access."],
      ["Why ADO matters", "The ticket anchors the business request and review context."],
      ["Why review discipline matters", "Branches and PR notes make the handoff easier to audit."]
    ],
    resources: [["Git Docs", "https://git-scm.com/docs"]],
    labTitle: "Ticket-to-PR scenario",
    labSteps: ["Identity", "Clone repo", "Inspect remote", "Pull main", "Branch", "Diff review", "Publish", "PR gate"],
    meetingContext: [
      "Access workflow: Git identity labels your commits; Azure DevOps sign-in authorizes clone, fetch, push, and PR actions.",
      "Default workflow: identify -> clone -> inspect remote -> pull main -> branch from current main -> diff review -> focused commit -> publish -> PR.",
      "Demo request: CCS emergency orders by ZIP for the prior completed Monday-Sunday week.",
      "Good habits: know who you are committing as, use a small branch, write honest validation notes, and give reviewers a clear focus."
    ],
    commands: [
      { cmd: "git config --global user.name", desc: "Shows the name Git will stamp on local commits" },
      { cmd: "git config --global user.email", desc: "Shows the email Git will stamp on local commits" },
      { cmd: `git clone ${ADO_REPO_URL}`, desc: "Clones the Oracle repo from Azure DevOps" },
      { cmd: `cd ${CLONED_REPO_FOLDER}`, desc: "Moves into the cloned Oracle repo" },
      {
        cmd: "git remote -v",
        desc: "Confirms the origin remote points to Azure DevOps",
        recommended: [{ cmd: "git status", desc: "Optional checkpoint: confirm the working tree before pulling" }]
      },
      { cmd: "git pull", desc: "Confirms local main is current before branching" },
      { cmd: `git switch -c ${oracleLab.branchName}`, desc: "Creates a new task branch from current main and switches to it" },
      {
        cmd: `edit ${oracleLab.featureFile}`,
        desc: "Adds the demo SQL file on the task branch",
        recommended: [{ cmd: "git status", desc: "Optional checkpoint: confirm Git sees the branch change" }]
      },
      { cmd: "git diff", desc: "Reviews the SQL change before staging" },
      { cmd: `git add ${oracleLab.featureFile}`, desc: "Stages the SQL asset for review" },
      { cmd: `git commit -m "${oracleLab.featureCommitMessage}"`, desc: "Creates a branch commit for the report asset" },
      { cmd: `git push -u origin ${oracleLab.branchName}`, desc: "Publishes the task branch so an ADO PR can be opened" },
      { cmd: "git switch main", desc: "Returns HEAD to the main branch" },
      { cmd: `git merge ${oracleLab.branchName}`, desc: "Completes the simulated PR merge back to main" }
    ],
    quiz: [
      {
        question: "What does Git commit identity control?",
        options: ["The name and email stamped on commits", "ADO sign-in permissions", "SQL query runtime", "The branch merge strategy"],
        answer: "The name and email stamped on commits",
        feedback: "Git config identity labels commits. Azure DevOps sign-in controls remote access."
      },
      {
        question: "When does Azure DevOps sign-in matter?",
        options: ["Clone, fetch, push, and PR access", "Only when typing git status", "Only after merging locally", "Only inside SQL files"],
        answer: "Clone, fetch, push, and PR access",
        feedback: "Remote operations and PR work require ADO access; local status and diff do not."
      },
      {
        question: "In the team workflow, what should anchor the work?",
        options: ["ADO ticket", "Random local file", "Chat memory", "An unnamed branch"],
        answer: "ADO ticket",
        feedback: "The ticket keeps the business request and review context visible."
      },
      {
        question: "What does git clone give you first?",
        options: ["Files, history, and the origin remote", "Only an empty folder", "A pull request", "A merged main branch"],
        answer: "Files, history, and the origin remote",
        feedback: "git clone copies the repo content and history and wires the default remote named origin."
      },
      {
        question: "What does git add do?",
        options: ["Stage", "Delete", "Push", "Clone"],
        answer: "Stage",
        feedback: "git add stages the selected file snapshot for the next commit."
      },
      {
        question: "What is a commit?",
        options: ["Snapshot", "Folder", "User", "Branch"],
        answer: "Snapshot",
        feedback: "A commit is a checkpoint containing a file snapshot and message."
      },
      {
        question: "git status shows?",
        options: ["Changes", "Users", "Pipelines", "Secrets"],
        answer: "Changes",
        feedback: "git status summarizes staged, unstaged, and untracked changes."
      },
      {
        question: "Why use a separate branch?",
        options: ["Safer review", "Hide the work", "Skip validation", "Replace ADO"],
        answer: "Safer review",
        feedback: "Branches keep work isolated so review and handoff are easier."
      },
      {
        question: "What does creating a task branch from main mean?",
        options: ["Make a new branch pointer at current main", "Copy the whole remote server", "Delete main", "Log in to ADO"],
        answer: "Make a new branch pointer at current main",
        feedback: "People may say fork off a branch, but in Git this workflow creates a branch pointer from the current main commit."
      },
      {
        question: "Why run git pull before creating the branch?",
        options: ["Start from current main", "Delete the remote", "Skip the diff", "Create a merge conflict"],
        answer: "Start from current main",
        feedback: "Pulling first reduces stale-branch risk and keeps the new branch anchored to the latest main."
      },
      {
        question: "What happens in this lab's fast-forward merge?",
        options: ["main moves to the feature commit", "Git deletes the SQL", "HEAD leaves the repository", "The staging area becomes a branch"],
        answer: "main moves to the feature commit",
        feedback: "Because main did not move independently, Git can move the main branch pointer forward."
      }
    ]
  },
  {
    id: "project-work",
    title: "Git Workflow 4: Project Capsule and Workstreams",
    level: "Beginner",
    time: "45 min",
    description:
      "A second ADO methodology lab: create a small project capsule on main, keep decisions visible, then branch for day-to-day workstreams.",
    outcomes: [
      "Distinguish everyday branch work from longer project tracking",
      "Create README and decision-index files on main",
      "Use workstreams when parallel work or collaborators are involved",
      "Branch from the project capsule for focused work"
    ],
    lessons: [
      ["Use case 2", "Longer project work starts with visible project context, not a single loose SQL file."],
      ["Project capsule", "README and decision-index keep the starting point and choices legible on main."],
      ["Workstreams", "Parallel or multi-day work needs a small tracker so handoffs do not depend on chat memory."]
    ],
    resources: [["Git Docs", "https://git-scm.com/docs"]],
    labTitle: "Project-to-PR scenario",
    startLabel: "Start Lesson",
    folder: projectLab.folder,
    folderDisplay: projectLab.folderDisplay,
    repoPaths: [projectLab.readmeFile, projectLab.decisionFile, projectLab.workstreamsFile],
    repoContainerPaths: [projectLab.projectRoot],
    labSteps: [
      "Choose methodology",
      "Create project capsule",
      "Commit on main",
      "Branch workstream",
      "Update workstream",
      "Merge"
    ],
    meetingContext: [
      "Everyday work: use a focused branch tied to one ADO request.",
      "Longer projects: keep brief README and decision-index files on main so context survives handoffs.",
      "Use workstreams.md when collaborators or parallel workstreams are moving at the same time."
    ],
    commands: [
      { cmd: `mkdir ${projectLab.folder}`, desc: "Creates a training folder for the longer project workflow" },
      { cmd: `cd ${projectLab.folder}`, desc: "Moves into the longer project workflow folder" },
      { cmd: "git init", desc: "Initializes a new Git repository" },
      { cmd: `"${projectLab.readmeContent}" | Out-File ${projectLab.readmeFile}`, desc: "Creates the brief project README on main" },
      { cmd: `"${projectLab.decisionContent}" | Out-File ${projectLab.decisionFile}`, desc: "Creates the decision index on main" },
      {
        cmd: `"${projectLab.workstreamsContent}" | Out-File ${projectLab.workstreamsFile}`,
        desc: "Creates the workstream tracker for parallel work",
        recommended: [{ cmd: "git status", desc: "Optional checkpoint: review the project capsule files before staging" }]
      },
      {
        cmd: `git add ${projectLab.readmeFile} ${projectLab.decisionFile} ${projectLab.workstreamsFile}`,
        desc: "Stages the project capsule files together"
      },
      { cmd: `git commit -m "${projectLab.capsuleCommitMessage}"`, desc: "Commits the project capsule on main" },
      { cmd: `git switch -c ${projectLab.branchName}`, desc: "Creates a focused branch for one workstream" },
      {
        cmd: `edit ${projectLab.workstreamsFile}`,
        desc: "Updates workstream notes on the branch",
        recommended: [{ cmd: "git status", desc: "Optional checkpoint: confirm the workstream update is the only open change" }]
      },
      { cmd: "git diff", desc: "Reviews the workstream note before staging" },
      { cmd: `git add ${projectLab.workstreamsFile}`, desc: "Stages the workstream update" },
      { cmd: `git commit -m "${projectLab.workstreamCommitMessage}"`, desc: "Commits the focused workstream update" },
      { cmd: `git push -u origin ${projectLab.branchName}`, desc: "Publishes the workstream branch for PR review" },
      { cmd: "git switch main", desc: "Returns to the main branch" },
      { cmd: `git merge ${projectLab.branchName}`, desc: "Completes the simulated PR merge back to main" }
    ],
    quiz: [
      {
        question: "For longer Oracle project work, what should be visible on main?",
        options: ["README and decision-index", "Only chat notes", "Only a feature branch", "A private scratch file"],
        answer: "README and decision-index",
        feedback: "Longer work needs durable context on main so future handoffs are legible."
      },
      {
        question: "When is workstreams.md most useful?",
        options: ["Collaborators or parallel work", "A one-line typo fix", "Deleting the repo", "Skipping PR notes"],
        answer: "Collaborators or parallel work",
        feedback: "Use workstreams when multiple people or moving parts need a shared status view."
      },
      {
        question: "After the project capsule exists, where should everyday changes happen?",
        options: ["A focused branch", "Directly on main", "Only in memory", "Outside the repo"],
        answer: "A focused branch",
        feedback: "The capsule stays visible on main; day-to-day work still happens on reviewable branches."
      }
    ]
  }
];

const lessonCommandGroups = [
  [0, 1],
  [2, 3, 4, 5],
  [6],
  [7],
  [8, 9, 10],
  [11],
  [12, 13]
];

const projectLessons = [
  {
    title: "Choose the Methodology",
    concept:
      "Everyday requests stay branch-focused. Longer Oracle projects need a small project capsule so context survives beyond one task.",
    task: "Create the training folder and initialize Git for the longer project workflow.",
    hint: "Use case 2 starts by making the project legible before asking for help or changing governed assets.",
    complete: (state) => state.guidedStep >= 3
  },
  {
    title: "Project Capsule on Main",
    concept:
      "README and decision-index are the required starting point for longer work. workstreams.md is added when collaborators or parallel tracks are involved.",
    task: "Create README, decision-index, and workstreams files under the project folder. Use git status as an optional checkpoint.",
    hint: "These files are intentionally brief. They prevent the project from depending on chat memory.",
    complete: (state) => state.guidedStep >= 6
  },
  {
    title: "Commit Project Context",
    concept:
      "The project capsule belongs on main because it is shared context, not one person's feature work.",
    task: "Stage and commit the project context files on main.",
    hint: "This makes decisions and next steps visible before workstreams branch out.",
    complete: (state) => state.guidedStep >= 8
  },
  {
    title: "Branch a Workstream",
    concept:
      "Once the capsule exists, everyday work returns to the normal branch model.",
    task: "Create a focused branch, update the workstream tracker, and review the diff. Use git status as an optional checkpoint.",
    hint: "The branch carries one workstream while main keeps the project map.",
    complete: (state) => state.guidedStep >= 11
  },
  {
    title: "Commit Workstream Progress",
    concept:
      "A workstream commit should explain what moved, what remains open, and what reviewers should inspect.",
    task: "Stage, commit, and publish the workstream update.",
    hint: "Small commits and published branches keep longer projects reviewable even when the project is broad.",
    complete: (state) => state.guidedStep >= 14 || (state.taskFlags.branchCommitted && state.taskFlags.pushed)
  },
  {
    title: "Merge and Continue",
    concept:
      "Merging the branch updates the shared project map. The next workstream can branch from that current context.",
    task: "Return to main and fast-forward merge the workstream branch.",
    hint: "Longer projects become a chain of visible decisions and focused branches.",
    complete: (state) => state.guidedStep >= getActiveModule().commands.length || state.taskFlags.merged
  }
];

const projectLessonCommandGroups = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15]
];

const codexLab = {
  id: "codex-workflow",
  title: "Codex",
  level: "Tool setup",
  time: "45 min",
  labTitle: "Download",
  description:
    "Codex is separate from the Git labs. This lesson covers setup, prompting, safe repo inspection, and reviewable analyst handoff artifacts.",
  outcomes: [
    "Install or open Codex",
    "Sign in with the right account",
    "Choose a repository folder",
    "Start a coding task",
    "Build reviewable repo notes"
  ],
  sections: [
    {
      type: "install",
      title: "Install Codex CLI",
      kicker: "CLI setup",
      intro:
        "Install Codex from PowerShell, sign in, then launch it from the repo folder so it has the right project context.",
      steps: [
        {
          label: "Check Node and npm",
          command: "node --version; npm.cmd --version",
          detail: "Confirms the JavaScript runtime and package manager are available before installing Codex."
        },
        {
          label: "Install Codex CLI",
          command: "npm.cmd install -g @openai/codex",
          detail: "Installs the Codex command globally so PowerShell can run it from any repo folder."
        },
        {
          label: "Sign in",
          command: "codex.cmd login",
          detail: "Starts the sign-in flow. In Windows PowerShell, codex.cmd avoids the blocked codex.ps1 shim."
        },
        {
          label: "Open the repo",
          command: `cd ${ORACLE_REPO_ROOT}`,
          detail: "Move into the Oracle repo before starting a Codex session."
        },
        {
          label: "Start Codex",
          command: "codex.cmd",
          detail: "Launches Codex in the current repo. Start in the default review-oriented mode until learners are comfortable."
        }
      ],
      notes: [
        "Run install and login once per workstation, then run codex.cmd from the project root when you need help.",
        "If the CLI has trouble on Windows, use the official setup page and follow the current Windows or WSL guidance.",
        "Use git status before and after a Codex session so changes stay visible and reviewable."
      ],
      readyChecklist: [
        "I can confirm Node, npm, Git, and Codex are available.",
        "I know to launch Codex from the repo root, not a random folder.",
        "I can explain why git status belongs before and after a Codex session."
      ],
      updateCommand: "codex.cmd --upgrade"
    },
    {
      type: "workflow",
      title: "Codex Onboarding Checklist",
      kicker: "Starter plan",
      intro:
        "Use this as the non-time-based starter path for a new learner. The goal is not speed; it is a repeatable operating rhythm.",
      task: "Work through the minimum setup and safety checks before asking Codex to change repo files.",
      reference: "Access -> repo root -> read-only scan -> branch -> prompt -> review",
      cards: [
        {
          label: "Access and setup",
          command: "codex.cmd login",
          detail: "Confirm the CLI opens and the learner knows which approved account or key workflow to use."
        },
        {
          label: "Workspace location",
          command: `cd ${ORACLE_REPO_ROOT}`,
          detail: "Start from the repo root so Codex sees the same files Git and VS Code see."
        },
        {
          label: "Read-only orientation",
          command: "Get-Location; rg --files; git status",
          detail: "Confirm folder, file map, and Git state before using Codex judgment."
        },
        {
          label: "First safe prompt",
          prompt:
            "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions. Give me a short plan before changing files."
        },
        {
          label: "Review checkpoint",
          command: "git diff --stat",
          detail: "Inspect the changed-file surface before accepting work into a commit or PR."
        }
      ],
      readyChecklist: [
        "I can launch Codex from the repo root with the Windows-safe command.",
        "I can run read-only orientation commands before edits.",
        "I can ask for inspection and a plan before implementation."
      ],
      formula: "Access -> orient -> branch -> prompt -> review -> validate"
    },
    {
      type: "prompting",
      title: "PACT Prompting Guide",
      kicker: "Prompting framework",
      intro: "Give Codex a working agreement: explain the purpose, grant authority, provide context, and define the task.",
      items: [
        ["Purpose", "Explain the business outcome, why the work matters, and what decision or deliverable it supports."],
        ["Authority", "Give permission to inspect files, use judgment, challenge weak assumptions, and ask before risky changes."],
        ["Context", "Provide the ADO ticket, repo area, known constraints, related files, and any validation expectations."],
        ["Task", "Define the output: orientation, plan, patch, SQL, PR notes, validation checklist, or review findings."]
      ],
      readyChecklist: [
        "I can write a prompt that states the business purpose.",
        "I can give Codex permission to inspect and challenge assumptions.",
        "I can define a narrow output instead of asking for a vague improvement."
      ],
      formula: "Purpose + Authority + Context + Task = better Codex output"
    },
    {
      type: "orientation",
      title: "Using Codex for ADO Ticket Orientation",
      kicker: "Use case #1",
      intro: "Before asking for code changes, use Codex to orient around the business question, repo location, expected output, and review risks.",
      questions: [
        "What business question is this ticket answering?",
        "What terms need definition before work starts?",
        "What date window or reporting period is required?",
        "What output fields are expected?",
        "What assumptions should be captured for review?"
      ],
      prompt:
        "I need to work on this ADO ticket in the Oracle repo.\n\nBefore suggesting code changes, help me orient.\n\nPlease:\n1. Restate the request in plain language.\n2. List the requirements you can infer from the ticket.\n3. List the questions or assumptions I should confirm.\n4. Suggest where to look in the Oracle repo for similar patterns.\n5. Recommend a safe branch name.\n6. Propose what a good PR summary and validation note should include.\n\nTicket:\n[paste ticket text here]",
      readyChecklist: [
        "I can ask Codex to restate the ticket before code changes.",
        "I can separate inferred requirements from questions to confirm.",
        "I can ask for repo search targets, branch name, PR summary, and validation notes."
      ]
    },
    {
      type: "safety",
      title: "Git Safety When Working With Codex",
      kicker: "Safety checklist",
      intro: "Low Git knowledge is okay. The goal is visible, reviewable work.",
      beforeEditing: ["Confirm you are not on main", "Create or use a task branch", "Keep changes small and reviewable"],
      longerWork: ["Open a draft PR", "Say what changed", "Say what is still open", "Say what needs review"],
      readyChecklist: [
        "I can explain why main should stay protected.",
        "I can keep Codex changes on a task branch.",
        "I can name what changed, what is open, and what needs review."
      ],
      footer: "If the work will take longer than one day, or the logic is still moving, open a draft PR early."
    },
    {
      type: "workflow",
      title: "Terminal Survival Before Codex",
      kicker: "Safe shell loop",
      intro:
        "Codex starts from the folder where the terminal is running. Use read-only commands first so the learner knows the workspace before asking for edits.",
      task: "Practice the read-only orientation loop before any Codex session.",
      reference: "Get-Location -> Get-ChildItem -Force -> rg --files -> git status",
      cards: [
        {
          label: "Confirm folder",
          command: "Get-Location",
          detail: "Shows the current folder so learners know which repo Codex will inspect."
        },
        {
          label: "List nearby files",
          command: "Get-ChildItem -Force",
          detail: "Reveals project files and hidden Git metadata without changing anything."
        },
        {
          label: "Map source files",
          command: "rg --files",
          detail: "Quickly lists repo files and helps learners find likely app, SQL, docs, or config areas."
        },
        {
          label: "Check Git state",
          command: "git status",
          detail: "Shows whether the repo is clean before Codex begins reasoning about changes."
        }
      ],
      readyChecklist: [
        "I can confirm the current folder before starting Codex.",
        "I can list nearby files without changing anything.",
        "I can use rg --files and git status as read-only orientation commands."
      ],
      formula: "Read first. Edit later."
    },
    {
      type: "workflow",
      title: "First Codex Sessions",
      kicker: "Inspect, plan, edit, verify",
      intro:
        "The safest first Codex session is not a broad rewrite. It asks Codex to inspect, explain the plan, keep the diff narrow, and name validation.",
      task: "Use a plan-first prompt before requesting implementation.",
      reference: "Inspect this repo and give me a short plan before editing.",
      cards: [
        {
          label: "Inspect first",
          prompt:
            "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions."
        },
        {
          label: "Plan first",
          prompt:
            "Give me a short plan before editing. Keep the change narrow, preserve behavior, and list the validation command you will run."
        },
        {
          label: "Constrain scope",
          prompt:
            "Change only the files required for this task. Do not refactor unrelated code or reformat unrelated files."
        },
        {
          label: "Verify",
          prompt:
            "After the change, summarize the files changed, validation run, and any remaining risks or assumptions."
        }
      ],
      readyChecklist: [
        "I can ask Codex to inspect before editing.",
        "I can request a short plan and narrow file scope.",
        "I can ask for validation and remaining risks after the change."
      ],
      formula: "Inspect -> plan -> narrow edit -> validate -> review diff"
    },
    {
      type: "workflow",
      title: "Analyst Workflows With Codex",
      kicker: "SQL, data, docs",
      intro:
        "Codex is useful for analytics work when the prompt forces concrete review artifacts: lineage, data quality, documentation, briefing outlines, and risk notes.",
      task: "Match the prompt to the artifact the reviewer actually needs.",
      reference: "SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, REPO_NOTES.md",
      cards: [
        {
          label: "SQL lineage",
          prompt:
            "Review the SQL files. Identify source tables, output grain, joins, filters, assumptions, data-quality risks, and open questions."
        },
        {
          label: "SQL review",
          prompt:
            "Review this SQL like a cautious analytics engineer. Separate readability issues from behavior or grain risks. Do not refactor yet."
        },
        {
          label: "CSV quality",
          prompt:
            "Profile this CSV and produce a markdown data-quality report with row count, columns, missing values, suspicious categories, type issues, and next checks."
        },
        {
          label: "Docs and briefing",
          prompt:
            "Turn these technical notes into a concise stakeholder outline with current state, risks, recommendation, next steps, and speaker notes."
        }
      ],
      readyChecklist: [
        "I can ask for SQL lineage without asking for a refactor.",
        "I can separate SQL readability issues from behavior risks.",
        "I can request a data-quality report that distinguishes findings from next checks."
      ],
      formula: "One artifact at a time keeps the work reviewable."
    },
    {
      type: "workflow",
      title: "Automation With codex.cmd exec",
      kicker: "Repeatable, reviewable output",
      intro:
        "Use codex.cmd exec for stable, repeatable tasks with a clear output file. Keep judgment-heavy or risky work interactive.",
      task: "Decide whether a task belongs in interactive Codex or a repeatable exec command.",
      reference: "codex.cmd exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
      cards: [
        {
          label: "Good fit",
          command: "codex.cmd exec \"Summarize this repo in markdown\" > REPO_NOTES.md",
          detail: "Works well when the prompt, output file, and review step are stable."
        },
        {
          label: "Review output",
          command: "Get-Content .\\REPO_NOTES.md",
          detail: "Always inspect generated output before sharing, committing, or relying on it."
        },
        {
          label: "Manual checkpoint",
          prompt:
            "Tell me what still needs human review, what assumptions you made, and what validation is missing."
        },
        {
          label: "Avoid automation",
          detail:
            "Keep interactive control when the task needs sensitive judgment, unclear scope, broad file edits, or changing requirements."
        }
      ],
      readyChecklist: [
        "I can identify tasks that are stable enough for codex.cmd exec.",
        "I can write output to a reviewable file.",
        "I can name the manual checkpoint that remains after automation."
      ],
      formula: "Repeatable output is useful. Unsigned-off automation is still risk."
    }
  ],
  setupUrl: "https://openai.com/codex/get-started/",
  cliCommand: "npm.cmd install -g @openai/codex"
};

const codexSectionOrder = [
  "Install Codex CLI",
  "Terminal Survival Before Codex",
  "Git Safety When Working With Codex",
  "PACT Prompting Guide",
  "Codex Onboarding Checklist",
  "Using Codex for ADO Ticket Orientation",
  "First Codex Sessions",
  "Analyst Workflows With Codex",
  "Automation With codex.cmd exec"
];
const codexSectionOrderSet = new Set(codexSectionOrder);
codexLab.sections = [
  ...codexSectionOrder
    .map((title) => codexLab.sections.find((section) => section.title === title))
    .filter(Boolean),
  ...codexLab.sections.filter((section) => !codexSectionOrderSet.has(section.title))
];

const codexSafetyHabits = [
  {
    title: "Inspect before editing",
    detail: "Start with repo location, file map, and Git status before asking Codex to change anything."
  },
  {
    title: "Keep Git visible",
    detail: "Use git status and git diff as checkpoints before accepting generated work."
  },
  {
    title: "Ask for command explanations",
    detail: "If a command is unfamiliar, have Codex explain what it reads, writes, or deletes before running it."
  },
  {
    title: "Constrain the diff",
    detail: "Request the smallest useful change and explicitly reject unrelated refactors or formatting churn."
  },
  {
    title: "Never paste secrets",
    detail: "Keep tokens, keys, connection strings, and .env values out of prompts and generated notes."
  },
  {
    title: "Interrupt drift quickly",
    detail: "If Codex broadens the task, stop and restate the exact file scope and validation target."
  }
];

const codexCommonMistakes = [
  {
    title: "Wrong folder",
    detail: "Launching Codex from a parent folder can make it inspect the wrong project."
  },
  {
    title: "Vague task",
    detail: "Asking for a broad improvement usually creates broad, hard-to-review changes."
  },
  {
    title: "No starting status",
    detail: "Skipping git status makes it hard to tell which changes were already present."
  },
  {
    title: "Mixed commits",
    detail: "Combining SQL, docs, formatting, and experiments in one commit makes review harder."
  },
  {
    title: "Generated truth",
    detail: "Treat Codex output as a draft until repo evidence and validation support it."
  }
];

const codexMicroChallenges = [
  {
    title: "Branch check",
    prompt: "Run git status and explain whether this is safe for Codex edits."
  },
  {
    title: "Prompt rewrite",
    prompt: "Rewrite a vague ticket into Purpose, Authority, Context, and Task."
  },
  {
    title: "Diff review",
    prompt: "Run git diff --stat and name the files that need human review."
  },
  {
    title: "One artifact",
    prompt: "Ask Codex for one durable markdown artifact, then review it before asking for the next."
  }
];

const codexPracticePacks = [
  {
    title: "SQL Lineage Mapper",
    objective: "Trace source tables, output grain, joins, filters, and assumptions across SQL files.",
    prompt:
      "Inspect these SQL files and create SQL_LINEAGE.md with source tables, output tables, join keys, row grain, hardcoded filters, assumptions, and likely review questions."
  },
  {
    title: "Data Quality Profiler",
    objective: "Profile a flat file and separate observed issues from next validation checks.",
    prompt:
      "Profile this CSV and create a markdown report with columns, row count, missing values, suspicious categories, likely typing issues, and recommended validations."
  },
  {
    title: "Git Pre-PR Review",
    objective: "Review a working tree before sharing it with another human.",
    prompt:
      "Review the current diff like a cautious PR reviewer. Focus on correctness, regressions, missing tests, documentation gaps, and release risk."
  },
  {
    title: "Prompt Library Builder",
    objective: "Create reusable prompts grouped by real analyst workflows.",
    prompt:
      "Create a practical prompt library grouped by workflow. Each prompt should be specific, include constraints, and explain the best use case."
  }
];

const capstoneLab = {
  id: "repo-review-kit",
  title: "Git Workflow 5: Repo Review and Handoff",
  level: "Advanced",
  time: "45 min",
  labTitle: "Handoff package",
  description:
    "Turn repo inspection into durable review notes, SQL lineage, data-quality checks, and a final handoff summary.",
  section: {
    type: "workflow",
    title: "Repo Review and Handoff",
    kicker: "Git Workflow 5",
    intro:
      "Use Git discipline and Codex prompts together: inspect the repo, create one reviewable artifact at a time, then review the diff before committing.",
    task: "Simulate a small repo-review package that could support a PR or handoff.",
    reference: "REPO_NOTES.md -> SQL_LINEAGE.md -> DATA_QUALITY_REPORT.md -> CODEX_REVIEW.md",
    cards: [
      {
        label: "Milestone 1: Repo notes",
        prompt:
          "Inspect this repo before editing. Identify purpose, key folders, run commands, data or SQL assets, assumptions, risks, and open questions. Propose a REPO_NOTES.md outline first."
      },
      {
        label: "Milestone 2: SQL lineage",
        prompt:
          "Inspect the SQL files and draft SQL_LINEAGE.md with source tables, output grain, joins, filters, groupings, assumptions, risks, and open questions."
      },
      {
        label: "Milestone 3: Data quality",
        prompt:
          "Inspect available data files or define expected checks. Draft DATA_QUALITY_REPORT.md with columns, missing values, duplicate-key risks, date/category issues, limitations, and follow-ups."
      },
      {
        label: "Milestone 4: Final review",
        prompt:
          "Review the changed files without editing. Draft CODEX_REVIEW.md with changed files, unsupported claims, missing validation, risky assumptions, and final cleanup recommendations."
      }
    ],
    readyChecklist: [
      "I can split a larger Codex request into reviewable milestones.",
      "I can create one durable artifact at a time.",
      "I can ask Codex to review generated artifacts before committing."
    ],
    formula: "Capstone rule: ground first, write second, review last."
  },
  deliverables: [
    "REPO_NOTES.md",
    "SQL_LINEAGE.md",
    "DATA_QUALITY_REPORT.md",
    "CODEX_REVIEW.md"
  ]
};

const codexPromptLibrary = [
  {
    group: "Start safely",
    prompts: [
      {
        label: "Inspect before editing",
        text:
          "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions. Give me a short plan before changing files."
      },
      {
        label: "Constrain the diff",
        text:
          "Change only the files required for this task. Do not refactor unrelated code or reformat unrelated files. Summarize every file you changed."
      }
    ]
  },
  {
    group: "ADO orientation",
    prompts: [
      {
        label: "Ticket orientation",
        text:
          "I need to work on this ADO ticket in the Oracle repo. Before suggesting code changes, restate the request, infer requirements, list questions, suggest files to inspect, recommend a branch name, and propose PR validation notes.\n\nTicket:\n[paste ticket text here]"
      },
      {
        label: "PR summary",
        text:
          "Draft a PR summary with: business purpose, files changed, validation performed, assumptions, open questions, and reviewer focus areas."
      }
    ]
  },
  {
    group: "SQL and data review",
    prompts: [
      {
        label: "Cautious SQL review",
        text:
          "Review this SQL like a cautious analytics engineer. Call out row grain, join keys, hardcoded filters, null/date assumptions, duplicate-row risks, and missing comments. Do not refactor yet."
      },
      {
        label: "CSV profiling report",
        text:
          "Profile this CSV and produce a markdown data quality report with row count, column list, missing-value hot spots, suspicious categories, likely type issues, and recommended next checks. Separate cleaning suggestions from reporting suggestions."
      },
      {
        label: "Excel-friendly output",
        text:
          "Review this tabular output for Excel-heavy reviewers. Keep source data intact, add plain-English headers, flag likely validation issues, and produce a matching markdown explanation of what changed."
      }
    ]
  },
  {
    group: "Docs and handoff",
    prompts: [
      {
        label: "Improve technical docs",
        text:
          "Improve this markdown doc for clarity and future maintenance. Preserve meaning, add exact commands where setup matters, expose assumptions and risks, and keep the output concise and scannable."
      },
      {
        label: "Stakeholder outline",
        text:
          "Turn these technical notes into a short slide outline for a non-technical audience. Include executive summary, current state, risks, recommendation, next steps, and speaker notes."
      }
    ]
  },
  {
    group: "Automation and risk",
    prompts: [
      {
        label: "Risk-first preflight",
        text:
          "Before making any change, tell me the main risks, the commands you plan to run, whether any command is destructive, what assumptions you are making, and how you will keep the diff small and reversible."
      },
      {
        label: "codex.cmd exec design",
        text:
          "Design a safe codex.cmd exec workflow for this repo. Define the exact prompt, output file, validation step, and the parts that should remain manual. Optimize for repeatability, not cleverness."
      }
    ]
  },
  {
    group: "Analyst review kit",
    prompts: [
      ...capstoneLab.section.cards.map((card) => ({ label: card.label, text: card.prompt }))
    ]
  }
];

const vscodeLab = {
  id: "vscode-lab",
  title: "VS Code Lab",
  level: "Beginner",
  time: "35 min",
  labTitle: "Editor workflow",
  setupUrl: "https://code.visualstudio.com/download",
  description:
    "Learn the real editor loop: configure VS Code, open the Oracle repo folder, navigate to a SQL file, make a scoped edit, review the change, and commit.",
  story: {
    role: "Analyst on the Data Analytics team",
    need: "Finance needs the arrearage detail export to carry clear handoff metadata before the next refresh.",
    background:
      "A recurring arrearage detail SQL asset exists in the Oracle repo, but the file header does not clearly say what export it produces or how downstream refresh owners should validate it. You are not rebuilding the query. Your job is to open the repo in VS Code, find the right SQL file, add a small reviewable header update, inspect the diff, and save a local commit.",
    outcome:
      "By the end, the learner should understand the editor loop: repository folder context first, file navigation second, focused edit third, Source Control review fourth, commit last."
  },
  extensions: [
    {
      name: "PowerShell",
      id: "ms-vscode.PowerShell",
      command: "code.cmd --install-extension ms-vscode.PowerShell",
      reason: "PowerShell syntax, IntelliSense, script help, and a familiar terminal experience."
    },
    {
      name: "GitLens",
      id: "eamodio.gitlens",
      command: "code.cmd --install-extension eamodio.gitlens",
      reason: "Commit history, branch context, blame, and easier review of who changed what."
    },
    {
      name: "Oracle SQL Developer",
      id: "Oracle.sql-developer",
      command: "code.cmd --install-extension Oracle.sql-developer",
      reason: "Oracle SQL editing, schema navigation, worksheets, and database-focused SQL support."
    }
  ],
  sections: [
    {
      title: "Configure the Editor",
      kicker: "Tool setup",
      intro:
        "Start with a lean, required setup so VS Code has PowerShell, Git context, and Oracle SQL support before repo work begins.",
      checklist: [
        "Install the PowerShell extension",
        "Install GitLens",
        "Install Oracle SQL Developer for VS Code",
        "Confirm the integrated terminal uses PowerShell"
      ],
      callout: "Keep this list required and small. Extra extensions can wait until the core workflow is understood.",
      command: "code.cmd --install-extension ms-vscode.PowerShell"
    },
    {
      title: "Open the Oracle Repository",
      kicker: "Repo context",
      intro:
        "Open the repository folder, not a single loose file. Explorer, Search, Source Control, terminal, and Codex all depend on folder context.",
      checklist: [
        `Open folder: ${ORACLE_REPO_ROOT}`,
        "Confirm the Explorer shows the Oracle working tree",
        "Confirm the terminal prompt starts inside C:\\Repositories\\Oracle",
        "Confirm the status bar shows the current branch"
      ],
      callout: "If VS Code is opened on one loose file, Git context and repo search will feel broken.",
      command: `code.cmd ${ORACLE_REPO_ROOT}`
    },
    {
      title: "Navigate and Open a SQL File",
      kicker: "File discovery",
      intro:
        "Use Explorer when you know the repo path, Quick Open when you know the file name, and Search when you only know a table or ticket phrase.",
      checklist: [
        "Expand Oracle > ccs > sql > accounts",
        "Open ccs_arrearage_detail_report.sql",
        "Use Ctrl+P to jump by file name when needed",
        "Read neighboring SQL before editing"
      ],
      callout: "For this lab, the target area is ccs/sql/accounts. Neighboring reports are the pattern library.",
      command: `code.cmd --goto ${vscodeTargetSqlFile()}:1`
    },
    {
      title: "Edit and Review the Change",
      kicker: "Reviewable change",
      intro:
        "Make one small SQL edit, then use Source Control and the integrated terminal to inspect exactly what changed.",
      checklist: [
        "Open the target SQL file",
        "Add a small export header comment",
        "Use Source Control to see the changed file",
        "Use git diff before staging"
      ],
      callout: "Source Control is the safety rail: changed files, editor tabs, and terminal diff should all agree.",
      command: `edit ${vscodeTargetSqlFile()}`
    },
    {
      title: "Stage and Commit",
      kicker: "Local checkpoint",
      intro:
        "Stage only the intended SQL file, commit with a clear message, and confirm the working tree is clean.",
      checklist: [
        "Run git status",
        "Stage the edited SQL file",
        "Commit with a work-focused message",
        "Confirm status is clean after commit"
      ],
      callout: "The aha moment is seeing Explorer, editor, Source Control, terminal, and Git status all describe the same repo state.",
      command: `git add ${vscodeTargetSqlFile()}`
    }
  ],
  shortcuts: [
    ["Extensions", "Ctrl+Shift+X"],
    ["Command Palette", "Ctrl+Shift+P"],
    ["Open folder", "File > Open Folder"],
    ["Quick Open", "Ctrl+P"],
    ["Repo Search", "Ctrl+Shift+F"],
    ["Integrated Terminal", "Ctrl+`"],
    ["Source Control", "Ctrl+Shift+G"],
    ["Open Diff", "Source Control > Open Changes"],
    ["Stage File", "Source Control > +"]
  ]
};

const oracleSqlFiles = [
  {
    path: "ccs/sql/meters/ccs_emergency_response_activity_extract.sql",
    table: "ccs_emergency_response_activity_extract",
    status: "existing",
    note: "CCS emergency response activity extract used as the starter table."
  },
  {
    path: "ccs/sql/meters/ccs_open_field_activity_extract.sql",
    table: "ccs_open_field_activity_extract",
    status: "existing",
    note: "Open field activity extract for cross-checking field activity patterns."
  },
  {
    path: "ccs/sql/meters/ccs_field_activity_appointment_performance.sql",
    table: "ccs_field_activity_appointment_performance",
    status: "existing",
    note: "Appointment performance SQL from the real ccs/sql/meters folder."
  },
  {
    path: "ccs/sql/meters/ccs_device_service_agreement_extract.sql",
    table: "ccs_device_service_agreement_extract",
    status: "existing",
    note: "Lookup-style table used to practice joins and customer-class filters."
  },
  {
    path: "ccs/sql/meters/ccs_device_channel_multiplier_audit.sql",
    table: "ccs_device_channel_multiplier_audit",
    status: "existing",
    note: "Device channel multiplier audit SQL from the real ccs/sql/meters folder."
  },
  {
    path: "ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql",
    table: "ccs_emergency_response_activity_by_zip_prior_week",
    status: "created in lab",
    note: "Review-ready query learners build from the neighboring extract."
  }
];

const oracleSqlTables = {
  ccs_emergency_response_activity_extract: {
    label: "CCS emergency response activity extract",
    sourcePath: "ccs/sql/meters/ccs_emergency_response_activity_extract.sql",
    grain: "One row per emergency response activity",
    columns: [
      "ACTIVITY_ID",
      "PREMISE_ID",
      "SERVICE_POINT_ID",
      "METER_ID",
      "ZIP_CODE",
      "ACTIVITY_STATUS",
      "ACTIVITY_TYPE",
      "ORDER_DATE",
      "COMPLETED_DATE"
    ],
    rows: [
      {
        ACTIVITY_ID: "ER-1001",
        PREMISE_ID: "P-44001",
        SERVICE_POINT_ID: "SP-7001",
        METER_ID: "MTR-101",
        ZIP_CODE: "70112",
        ACTIVITY_STATUS: "OPEN",
        ACTIVITY_TYPE: "EMERGENCY",
        ORDER_DATE: "2026-05-06",
        COMPLETED_DATE: ""
      },
      {
        ACTIVITY_ID: "ER-1002",
        PREMISE_ID: "P-44002",
        SERVICE_POINT_ID: "SP-7002",
        METER_ID: "MTR-102",
        ZIP_CODE: "70112",
        ACTIVITY_STATUS: "CLOSED",
        ACTIVITY_TYPE: "EMERGENCY",
        ORDER_DATE: "2026-05-07",
        COMPLETED_DATE: "2026-05-08"
      },
      {
        ACTIVITY_ID: "ER-1003",
        PREMISE_ID: "P-44003",
        SERVICE_POINT_ID: "SP-7003",
        METER_ID: "MTR-103",
        ZIP_CODE: "70001",
        ACTIVITY_STATUS: "PENDING",
        ACTIVITY_TYPE: "FIELD_CHECK",
        ORDER_DATE: "2026-05-08",
        COMPLETED_DATE: ""
      },
      {
        ACTIVITY_ID: "ER-1004",
        PREMISE_ID: "P-44004",
        SERVICE_POINT_ID: "SP-7004",
        METER_ID: "MTR-104",
        ZIP_CODE: "70123",
        ACTIVITY_STATUS: "CLOSED",
        ACTIVITY_TYPE: "EMERGENCY",
        ORDER_DATE: "2026-05-09",
        COMPLETED_DATE: "2026-05-10"
      },
      {
        ACTIVITY_ID: "ER-1005",
        PREMISE_ID: "P-44005",
        SERVICE_POINT_ID: "SP-7005",
        METER_ID: "MTR-105",
        ZIP_CODE: "70115",
        ACTIVITY_STATUS: "OPEN",
        ACTIVITY_TYPE: "EMERGENCY",
        ORDER_DATE: "2026-05-10",
        COMPLETED_DATE: ""
      },
      {
        ACTIVITY_ID: "ER-1006",
        PREMISE_ID: "P-44006",
        SERVICE_POINT_ID: "SP-7006",
        METER_ID: "MTR-106",
        ZIP_CODE: "70001",
        ACTIVITY_STATUS: "CLOSED",
        ACTIVITY_TYPE: "FIELD_CHECK",
        ORDER_DATE: "2026-05-02",
        COMPLETED_DATE: "2026-05-03"
      }
    ]
  },
  ccs_open_field_activity_extract: {
    label: "CCS open field activity extract",
    sourcePath: "ccs/sql/meters/ccs_open_field_activity_extract.sql",
    grain: "One row per open field activity",
    columns: ["ACTIVITY_ID", "SERVICE_POINT_ID", "CREW_AREA", "ACTIVITY_STATUS", "SCHEDULED_DATE"],
    rows: [
      {
        ACTIVITY_ID: "FA-2001",
        SERVICE_POINT_ID: "SP-7001",
        CREW_AREA: "NOLA",
        ACTIVITY_STATUS: "OPEN",
        SCHEDULED_DATE: "2026-05-05"
      },
      {
        ACTIVITY_ID: "FA-2002",
        SERVICE_POINT_ID: "SP-7004",
        CREW_AREA: "JEFFERSON",
        ACTIVITY_STATUS: "SCHEDULED",
        SCHEDULED_DATE: "2026-05-06"
      },
      {
        ACTIVITY_ID: "FA-2003",
        SERVICE_POINT_ID: "SP-7005",
        CREW_AREA: "NOLA",
        ACTIVITY_STATUS: "OPEN",
        SCHEDULED_DATE: "2026-05-07"
      }
    ]
  },
  ccs_field_activity_appointment_performance: {
    label: "CCS field activity appointment performance",
    sourcePath: "ccs/sql/meters/ccs_field_activity_appointment_performance.sql",
    grain: "One row per field activity appointment",
    columns: ["APPOINTMENT_ID", "ACTIVITY_TYPE", "SCHEDULED_DATE", "COMPLETION_STATUS"],
    rows: [
      {
        APPOINTMENT_ID: "APT-3001",
        ACTIVITY_TYPE: "EMERGENCY",
        SCHEDULED_DATE: "2026-05-01",
        COMPLETION_STATUS: "ON_TIME"
      },
      {
        APPOINTMENT_ID: "APT-3002",
        ACTIVITY_TYPE: "FIELD_CHECK",
        SCHEDULED_DATE: "2026-05-02",
        COMPLETION_STATUS: "LATE"
      },
      {
        APPOINTMENT_ID: "APT-3003",
        ACTIVITY_TYPE: "EMERGENCY",
        SCHEDULED_DATE: "2026-05-03",
        COMPLETION_STATUS: "ON_TIME"
      }
    ]
  },
  ccs_device_service_agreement_extract: {
    label: "CCS device service agreement extract",
    sourcePath: "ccs/sql/meters/ccs_device_service_agreement_extract.sql",
    grain: "One row per service point and active service agreement",
    columns: ["SERVICE_POINT_ID", "SERVICE_AGREEMENT_ID", "CUSTOMER_CLASS", "START_DATE", "END_DATE"],
    rows: [
      {
        SERVICE_POINT_ID: "SP-7001",
        SERVICE_AGREEMENT_ID: "SA-5001",
        CUSTOMER_CLASS: "RES",
        START_DATE: "2023-02-01",
        END_DATE: ""
      },
      {
        SERVICE_POINT_ID: "SP-7002",
        SERVICE_AGREEMENT_ID: "SA-5002",
        CUSTOMER_CLASS: "COM",
        START_DATE: "2022-11-15",
        END_DATE: ""
      },
      {
        SERVICE_POINT_ID: "SP-7003",
        SERVICE_AGREEMENT_ID: "SA-5003",
        CUSTOMER_CLASS: "RES",
        START_DATE: "2024-07-10",
        END_DATE: ""
      },
      {
        SERVICE_POINT_ID: "SP-7004",
        SERVICE_AGREEMENT_ID: "SA-5004",
        CUSTOMER_CLASS: "IND",
        START_DATE: "2021-05-21",
        END_DATE: ""
      },
      {
        SERVICE_POINT_ID: "SP-7005",
        SERVICE_AGREEMENT_ID: "SA-5005",
        CUSTOMER_CLASS: "RES",
        START_DATE: "2025-01-06",
        END_DATE: ""
      },
      {
        SERVICE_POINT_ID: "SP-7006",
        SERVICE_AGREEMENT_ID: "SA-5006",
        CUSTOMER_CLASS: "COM",
        START_DATE: "2020-08-13",
        END_DATE: ""
      }
    ]
  },
  ccs_device_channel_multiplier_audit: {
    label: "CCS device channel multiplier audit",
    sourcePath: "ccs/sql/meters/ccs_device_channel_multiplier_audit.sql",
    grain: "One row per device channel multiplier audit record",
    columns: ["DEVICE_ID", "CHANNEL_ID", "MULTIPLIER", "EFFECTIVE_DATE"],
    rows: [
      {
        DEVICE_ID: "DEV-101",
        CHANNEL_ID: "CH-1",
        MULTIPLIER: 1,
        EFFECTIVE_DATE: "2026-01-01"
      },
      {
        DEVICE_ID: "DEV-102",
        CHANNEL_ID: "CH-2",
        MULTIPLIER: 10,
        EFFECTIVE_DATE: "2026-02-15"
      },
      {
        DEVICE_ID: "DEV-103",
        CHANNEL_ID: "CH-1",
        MULTIPLIER: 1,
        EFFECTIVE_DATE: "2026-03-01"
      }
    ]
  }
};

const oracleSqlLab = {
  id: "oracle-sql-lab",
  title: "Oracle SQL Lab",
  level: "Beginner",
  time: "75 min",
  labTitle: "Interactive worksheet",
  description:
    "A soup-to-nuts Oracle SQL module using repo-shaped CCS files: start with SELECT *, narrow columns, filter, aggregate, join, and build a review-ready query.",
  repoRoot: ORACLE_REPO_ROOT,
  sections: [
    {
      id: "select-all",
      title: "SELECT * From a File",
      kicker: "Starting point",
      intro:
        "In this lab, the repo file maps to a table-like object. Replace [file name] with the SQL file's table name, then inspect all rows.",
      task: "Run the starter query and read the result grid before narrowing anything.",
      query: "SELECT *\nFROM ccs_emergency_response_activity_extract;",
      objectives: ["Recognize the table/file target", "See every column", "Understand that SELECT * is inspection, not final output"]
    },
    {
      id: "select-columns",
      title: "Choose Columns",
      kicker: "Projection",
      intro:
        "Real reviewable SQL usually names the columns it needs. That keeps output stable and easier to validate.",
      task: "Return only the identifiers, ZIP, status, and order date needed for the business question.",
      query:
        "SELECT activity_id, zip_code, activity_status, order_date\nFROM ccs_emergency_response_activity_extract;",
      objectives: ["Use explicit columns", "Keep output focused", "Avoid accidental downstream column changes"]
    },
    {
      id: "filter-rows",
      title: "Filter Rows",
      kicker: "WHERE",
      intro:
        "WHERE turns a broad extract into the rows that matter. Start with readable filters before adding complexity.",
      task: "Filter to open or pending emergency response rows only.",
      query:
        "SELECT activity_id, zip_code, activity_status, order_date\nFROM ccs_emergency_response_activity_extract\nWHERE activity_type = 'EMERGENCY'\n  AND activity_status IN ('OPEN', 'PENDING');",
      objectives: ["Use WHERE", "Use IN for multiple values", "Validate which rows survive the filter"]
    },
    {
      id: "date-window",
      title: "Add a Date Window",
      kicker: "Oracle dates",
      intro:
        "Oracle date filters should be explicit. In this lab, treat SYSDATE as 2026-05-12 so TRUNC(SYSDATE) - 7 means 2026-05-05.",
      task: "Limit the extract to the recent order window and sort newest first.",
      query:
        "SELECT activity_id, zip_code, activity_status, order_date\nFROM ccs_emergency_response_activity_extract\nWHERE order_date >= TRUNC(SYSDATE) - 7\nORDER BY order_date DESC;",
      objectives: ["Use a date predicate", "Sort with ORDER BY", "Make the time window obvious to reviewers"]
    },
    {
      id: "aggregate",
      title: "Summarize by ZIP",
      kicker: "GROUP BY",
      intro:
        "Aggregation changes the grain. The result is no longer one row per activity; it becomes one row per ZIP code.",
      task: "Count recent emergency response rows by ZIP code.",
      query:
        "SELECT zip_code, COUNT(*) AS order_count\nFROM ccs_emergency_response_activity_extract\nWHERE activity_type = 'EMERGENCY'\n  AND order_date >= TRUNC(SYSDATE) - 7\nGROUP BY zip_code\nORDER BY order_count DESC;",
      objectives: ["Use COUNT(*)", "Use GROUP BY", "State the output grain plainly"]
    },
    {
      id: "join-lookup",
      title: "Join a Lookup",
      kicker: "JOIN",
      intro:
        "Joins bring context from another file. In Oracle repo work, always know the join key and watch for duplicate-row risk.",
      task: "Join emergency activity to service agreement context by service point.",
      query:
        "SELECT e.activity_id, e.zip_code, e.activity_status, s.customer_class\nFROM ccs_emergency_response_activity_extract e\nJOIN ccs_device_service_agreement_extract s\n  ON e.service_point_id = s.service_point_id\nWHERE s.customer_class = 'RES';",
      objectives: ["Use table aliases", "Join on service_point_id", "Filter on lookup context"]
    },
    {
      id: "cte-review",
      title: "Build the Review Query",
      kicker: "CTE",
      intro:
        "A CTE makes the final query readable: one named step for row filtering, one final step for the report output.",
      task: "Create the prior-week ZIP summary as a reviewable query.",
      query:
        "WITH prior_week AS (\n  SELECT activity_id, zip_code, activity_status, order_date\n  FROM ccs_emergency_response_activity_extract\n  WHERE activity_type = 'EMERGENCY'\n    AND order_date >= TRUNC(SYSDATE) - 7\n)\nSELECT zip_code, COUNT(*) AS order_count\nFROM prior_week\nGROUP BY zip_code\nORDER BY order_count DESC;",
      objectives: ["Use WITH for readability", "Separate filtering from reporting", "Produce the ZIP summary reviewers asked for"]
    }
  ]
};

const lessons = [
  {
    title: "Access and Identity",
    concept:
      "Git needs a local commit identity, and Azure DevOps sign-in authorizes remote actions. These are related but not the same thing.",
    task: "Confirm the name and email Git will stamp on commits before cloning or publishing branch work.",
    hint: "If clone or push opens a browser or credential prompt, that is Azure DevOps authentication, not git config.",
    complete: (state) => state.guidedStep >= 2
  },
  {
    title: "Setup and Context",
    concept:
      "Start from the work request, clone the repo, confirm the remote, and inspect the current baseline before making changes.",
    task: "Clone the Oracle repo, move into it, inspect origin, and pull latest main. Run git status as an optional checkpoint.",
    hint: "This mirrors the real ADO workflow: start from the current shared repo before branching.",
    complete: (state) => state.guidedStep >= 6
  },
  {
    title: "Task Branch",
    concept:
      "A branch is a safe working copy for one change. People may call this forking off main, but the Git action is creating a branch pointer at current main.",
    task: "Create the emergency-orders feature branch from current main, then move HEAD onto it.",
    hint: "This is the branch reviewers would inspect in a pull request. It starts from the exact main commit you just pulled.",
    complete: (state) => state.guidedStep >= 7 || state.taskFlags.branchCreated
  },
  {
    title: "Working Tree",
    concept:
      "The working tree holds branch-only changes until they are reviewed and committed.",
    task: "Create the demo SQL asset on the feature branch. Use git status if you want a checkpoint before diff review.",
    hint: "You should be able to explain what changed before you stage anything.",
    complete: (state) => state.guidedStep >= 8 || Boolean(state.workingFiles?.[oracleLab.featureFile])
  },
  {
    title: "Reviewable Commit",
    concept:
      "A focused branch commit keeps the review surface small. Diff first, then stage, then commit.",
    task: "Review the SQL diff, stage the file, and save a focused branch commit.",
    hint: "A reviewer should be able to understand the change before reading the PR summary.",
    complete: (state) => state.guidedStep >= 11 || state.taskFlags.branchCommitted
  },
  {
    title: "Publish and PR Readiness",
    concept:
      "Publishing the branch is what makes review possible outside your workstation. No branch on origin, no PR.",
    task: "Push the feature branch to origin so the simulated PR can exist.",
    hint: "Branch published is the point where the review loop becomes real.",
    complete: (state) => state.guidedStep >= 12 || state.taskFlags.pushed
  },
  {
    title: "Merge and PR Readiness",
    concept:
      "A merge combines branch work back into the baseline after review. In ADO, publishing the branch is what makes the PR possible.",
    task: "Return to main and complete the simulated PR merge back to main.",
    hint: "Real completion means the branch is published, the diff is understood, and validation notes are ready for reviewers.",
    complete: (state) => state.guidedStep >= getActiveModule().commands.length || state.taskFlags.merged
  }
];

const glossaryTerms = [
  {
    term: "Authentication",
    meaning: "Signing in so Azure DevOps allows clone, fetch, push, and PR actions"
  },
  {
    term: "Commit identity",
    meaning: "The Git name and email stamped onto commits; this is not the same as ADO sign-in"
  },
  {
    term: "Repo",
    meaning: "The shared project folder where work is tracked"
  },
  {
    term: "Branch",
    meaning: "Your safe working copy for a specific change"
  },
  {
    term: "Branch from main",
    meaning: "Create a new branch pointer at the current main commit, then work there instead of directly on main"
  },
  {
    term: "Main",
    meaning: "The protected version everyone treats as the baseline"
  },
  {
    term: "Commit",
    meaning: "A saved checkpoint of your work"
  },
  {
    term: "Pull request (PR)",
    meaning: "A request for review before your work is merged"
  },
  {
    term: "Draft PR",
    meaning: "An early review space for work that is not yet finished"
  }
];

const powershellReferenceTerms = [
  {
    term: "Prompt",
    meaning: "The line that starts with PS and shows the folder where the next command will run."
  },
  {
    term: "Working directory",
    meaning: "The current folder PowerShell is pointed at. Use cd to move."
  },
  {
    term: "Out-File",
    meaning: "A PowerShell command that writes text into a file."
  },
  {
    term: "Staging area",
    meaning: "Git's selected snapshot for the next commit."
  },
  {
    term: "HEAD",
    meaning: "Git's pointer to the branch or commit you currently have checked out."
  },
  {
    term: "Commit identity",
    meaning: "Your configured Git name and email. It labels commits; it does not prove ADO access."
  },
  {
    term: "ADO sign-in",
    meaning: "The browser or credential prompt that authorizes clone, fetch, push, and PR access."
  },
  {
    term: "Branch from main",
    meaning: "Create a feature branch at the current main commit with git switch -c <branch>."
  }
];

const powershellReferenceCommands = [
  {
    group: "Access and identity",
    commands: [
      { cmd: "git config --global user.name", desc: "Show the name Git stamps on commits" },
      { cmd: "git config --global user.email", desc: "Show the email Git stamps on commits" },
      { cmd: `git clone ${ADO_REPO_URL}`, desc: "ADO may prompt sign-in before cloning" },
      { cmd: `git push -u origin ${oracleLab.branchName}`, desc: "ADO may prompt sign-in before publishing" }
    ]
  },
  {
    group: "PowerShell basics",
    commands: [
      { cmd: "help", desc: "List supported simulator commands" },
      { cmd: `mkdir ${oracleLab.folder}`, desc: "Create the training folder" },
      { cmd: `cd ${oracleLab.folder}`, desc: "Move into the training folder" },
      { cmd: `"${oracleLab.firstFileContent}" | Out-File README.md`, desc: "Write ticket context into README.md" },
      { cmd: `edit ${oracleLab.featureFile}`, desc: "Create or update the SQL file" }
    ]
  },
  {
    group: "Git workflow",
    commands: [
      { cmd: "git init", desc: "Start Git tracking in the folder" },
      { cmd: "git status", desc: "Inspect open, staged, and clean files" },
      { cmd: "git add README.md", desc: "Stage a file for commit" },
      { cmd: `git commit -m "${oracleLab.firstCommitMessage}"`, desc: "Save a checkpoint" },
      { cmd: `git switch -c ${oracleLab.branchName}`, desc: "Create and move to a task branch" },
      { cmd: "git log --oneline", desc: "Show compact commit history" },
      { cmd: `git merge ${oracleLab.branchName}`, desc: "Bring branch work back to main" }
    ]
  }
];

const practiceChallenges = [
  {
    id: "baseline-scout",
    title: "Baseline Scout",
    level: "Warm-up",
    prompt: "Map the repository before touching files.",
    scenario:
      "You have just opened the Oracle repo for a ticket. Before editing anything, you need to prove you know where you are and whether the working tree is safe.",
    expected:
      "Run the basic inspection commands and confirm the branch, working tree state, and recent commit history.",
    success: "Baseline inspected. The learner knows branch, status, and recent history before editing.",
    hint: "Run git status, git branch, and git log --oneline.",
    steps: [
      { id: "status", label: "Check working tree", type: "command", commands: ["git status"] },
      { id: "branch", label: "Confirm current branch", type: "command", commands: ["git branch"] },
      { id: "history", label: "Read compact history", type: "command", commands: ["git log --oneline"] }
    ]
  },
  {
    id: "branch-builder",
    title: "Branch Builder",
    level: "Core",
    prompt: "Create a safe task branch from main.",
    scenario:
      "The ticket work should not happen directly on main. You need a task branch that isolates the change and gives reviewers a clean branch to inspect.",
    expected:
      "Create a new branch from main and confirm HEAD moved to that branch before any file edits happen.",
    success: "Task branch created. HEAD is no longer on main.",
    hint: "Use git switch -c followed by a branch name.",
    steps: [
      { id: "branch-created", label: "Create a new branch", type: "state", condition: "branch-created" },
      { id: "head-moved", label: "Move HEAD to the branch", type: "state", condition: "off-main" }
    ]
  },
  {
    id: "reviewable-change",
    title: "Reviewable Change",
    level: "Core",
    prompt: "Make one file change, inspect it, stage it, and save it as a branch commit.",
    scenario:
      "The SQL asset needs one focused update. The risk is accidentally staging unrelated files or committing without reviewing the diff.",
    expected:
      "Edit the SQL file, inspect the diff, stage only the intended file, and create one clear branch commit.",
    success: "Reviewable branch commit created.",
    hint: `Try edit ${oracleLab.featureFile}, git diff, git add, and git commit -m "...".`,
    steps: [
      { id: "edit", label: "Edit the SQL asset", type: "command", commands: [`edit ${oracleLab.featureFile}`] },
      { id: "diff", label: "Inspect the diff", type: "command", commands: ["git diff", "git diff --stat"] },
      { id: "stage", label: "Stage the intended file", type: "command", commands: [`git add ${oracleLab.featureFile}`, "git add ."] },
      { id: "commit", label: "Commit on the branch", type: "state", condition: "branch-committed" }
    ]
  },
  {
    id: "publish-ready",
    title: "Publish Ready",
    level: "PR prep",
    prompt: "Publish the branch so a pull request can exist outside your workstation.",
    scenario:
      "Your local commit is not visible to teammates yet. Azure DevOps cannot open a useful PR until the branch exists on origin.",
    expected:
      "Push the task branch and confirm the remote branch is available for review.",
    success: "Branch published. The remote now has the reviewable branch head.",
    hint: "Run git push from the task branch before returning to main.",
    steps: [
      { id: "push", label: "Publish the branch", type: "state", condition: "published" }
    ]
  },
  {
    id: "merge-ready",
    title: "Merge Ready",
    level: "Finish",
    prompt: "Return to main, merge the branch, and verify the story.",
    scenario:
      "The review is complete and the branch work needs to land back on the baseline. You still need to verify history after the merge.",
    expected:
      "Switch back to main, merge the task branch, and use compact history to confirm the workflow story is visible.",
    success: "main includes the branch work and the history is visible.",
    hint: "Switch to main, merge the feature branch, then run git log --oneline.",
    steps: [
      { id: "main", label: "Return to main", type: "state", condition: "on-main-with-branch" },
      { id: "merge", label: "Merge branch work", type: "state", condition: "merged" },
      { id: "log", label: "Verify commit history", type: "command", commands: ["git log --oneline"] }
    ]
  }
];

const practiceMissions = [
  {
    id: "orientation-path",
    title: "Ticket-to-PR Path",
    level: "Guided",
    prompt: "Run the normal Oracle ticket workflow from baseline inspection through published branch and merge readiness.",
    setup: "standard",
    success: "The learner completed the full branch workflow and can explain the repo and PR story.",
    target: "Inspect, branch, edit, diff, commit, publish, merge, and verify history."
  },
  {
    id: "wrong-branch-recovery",
    title: "Wrong Branch Recovery",
    level: "Recovery",
    prompt: "You are still on main. Create a task branch before editing so main stays clean.",
    setup: "standard",
    success: "The learner moved work onto a task branch before saving a reviewable commit.",
    target: `Run git switch -c ${oracleLab.branchName}, then make and commit the SQL change.`
  },
  {
    id: "unstaged-recovery",
    title: "Unstaged Change",
    level: "Recovery",
    prompt: "A SQL file was edited on a task branch but nothing is staged yet.",
    setup: "unstaged",
    success: "The learner inspected, staged, and committed an open file change.",
    target: "Use git status, git diff, git add, and git commit."
  },
  {
    id: "dirty-switch-recovery",
    title: "Dirty Switch Block",
    level: "Recovery",
    prompt: "An open edit blocks branch switching. Save or clean the work before moving branches.",
    setup: "dirty-switch",
    success: "The learner understood why Git blocked the switch and created a commit before moving.",
    target: "Try switching, then recover by staging and committing the open change."
  },
  {
    id: "conflict-recovery",
    title: "Conflict Recovery",
    level: "Recovery",
    prompt: "A main/feature merge changes the same file differently. Resolve it intentionally.",
    setup: "conflict",
    success: "The learner resolved a conflict, staged the file, and committed the merge resolution.",
    target: "Merge the loaded branch, resolve the conflicted file, stage it, and commit."
  }
];

const practiceDifficultyModes = [
  {
    id: "guided",
    label: "Guided",
    desc: "Hints and objective text stay visible."
  },
  {
    id: "standard",
    label: "Standard",
    desc: "Hints are available after you ask."
  },
  {
    id: "no-hints",
    label: "No hints",
    desc: "Hint buttons are hidden for a higher-score run."
  }
];

const practiceBadgeDefinitions = [
  {
    id: "repo-scout",
    label: "Repo Scout",
    desc: "Ran status, branch, and log before changing files."
  },
  {
    id: "branch-builder",
    label: "Branch Builder",
    desc: "Created a task branch away from main."
  },
  {
    id: "reviewable-commit",
    label: "Reviewable Change",
    desc: "Saved the branch work as a commit."
  },
  {
    id: "branch-published",
    label: "Branch Published",
    desc: "Pushed the branch so a PR could be opened."
  },
  {
    id: "merge-ready",
    label: "Merge Ready",
    desc: "Merged branch work back to main."
  },
  {
    id: "conflict-resolver",
    label: "Conflict Resolver",
    desc: "Resolved and committed a merge conflict."
  },
  {
    id: "no-hints-run",
    label: "No-Hints Run",
    desc: "Completed a challenge while hints were disabled."
  }
];

const quizzes = [
  {
    question: "Which area does git add move changes into?",
    options: ["Staging area", "Remote repository", "Commit history"],
    answer: 0,
    feedback: "git add copies the current file snapshot into the staging area."
  },
  {
    question: "What does HEAD identify?",
    options: ["The current branch or commit", "The newest remote branch", "The largest file in the repo"],
    answer: 0,
    feedback: "HEAD is Git's pointer to the current branch or detached commit."
  },
  {
    question: "What is a branch?",
    options: ["A movable label pointing to a commit", "A folder containing edited files", "A required remote backup"],
    answer: 0,
    feedback: "Branches are lightweight pointers. Commits hold the actual snapshots."
  },
  {
    question: "When does a merge conflict usually happen?",
    options: [
      "Two branches changed the same lines differently",
      "A file is staged before committing",
      "A branch is pushed to origin"
    ],
    answer: 0,
    feedback: "Git cannot choose safely when both sides edited the same content differently."
  }
];

const roundTwoQuizzes = [
  {
    question: "Fill in the command that shows the Git commit author name.",
    acceptedAnswers: ["git config --global user.name", "git config user.name"],
    answerLabel: "git config --global user.name",
    placeholder: "git config ...",
    feedback: "This shows commit identity, not Azure DevOps authentication."
  },
  {
    question: "Fill in the command to initialize a new Git repository.",
    acceptedAnswers: ["git init"],
    answerLabel: "git init",
    placeholder: "git ...",
    feedback: "git init creates the local .git repository metadata."
  },
  {
    question: "Fill in the command to inspect the current Git state.",
    acceptedAnswers: ["git status"],
    answerLabel: "git status",
    placeholder: "git ...",
    feedback: "git status is the safest first inspection command."
  },
  {
    question: "Fill in the base command used to switch branches.",
    acceptedAnswers: ["git switch"],
    answerLabel: "git switch",
    placeholder: "git ...",
    feedback: "git switch moves HEAD to another branch. Add -c when you need to create the branch too."
  },
  {
    question: "Fill in the command to return to main.",
    acceptedAnswers: ["git switch main", "git checkout main"],
    answerLabel: "git switch main",
    placeholder: "git switch ...",
    feedback: "git switch main moves HEAD back to the main branch."
  },
  {
    question: "Fill in the base command that saves staged changes as a commit.",
    acceptedAnswers: ["git commit"],
    answerLabel: "git commit",
    placeholder: "git ...",
    feedback: "git commit saves the staged snapshot. In real work, add -m with a short message or use the editor prompt."
  },
  {
    question: "Fill in the command pattern to stage one file.",
    acceptedAnswers: ["git add README.md"],
    acceptedPrefixes: ["git add "],
    answerLabel: "git add README.md",
    placeholder: "git add ...",
    feedback: "git add stages the file snapshot for the next commit."
  }
];

const roundThreeQuizzes = [
  {
    question: "You need to confirm the email Git will stamp on commits. Type the command.",
    acceptedAnswers: ["git config --global user.email", "git config user.email"],
    answerLabel: "git config --global user.email",
    placeholder: "Inspect Git identity",
    feedback: "Commit identity and ADO login are separate checks."
  },
  {
    question: "You are on main with a clean working tree. Type the command that creates and moves to the task branch.",
    acceptedAnswers: [`git switch -c ${oracleLab.branchName}`, `git checkout -b ${oracleLab.branchName}`],
    answerLabel: `git switch -c ${oracleLab.branchName}`,
    placeholder: "Type the full command",
    feedback: "A task branch isolates the work before the SQL asset is created."
  },
  {
    question: "Only the new SQL file should be in the next commit. Type the command that stages just that file.",
    acceptedAnswers: [`git add ${oracleLab.featureFile}`],
    answerLabel: `git add ${oracleLab.featureFile}`,
    placeholder: "Stage one file by path",
    feedback: "Staging by path keeps unrelated edits out of the review."
  },
  {
    question: "You need a compact history summary before writing PR notes. Type the inspection command.",
    acceptedAnswers: ["git log --oneline"],
    answerLabel: "git log --oneline",
    placeholder: "Inspect history",
    feedback: "A one-line log is enough to verify the commit sequence."
  },
  {
    question: "You finished the feature branch and need to return to main. Type the command.",
    acceptedAnswers: ["git switch main", "git checkout main"],
    answerLabel: "git switch main",
    placeholder: "Move HEAD back to main",
    feedback: "HEAD must be on main before this lab's merge step."
  },
  {
    question: "main has not diverged and you want to bring in the feature work. Type the merge command.",
    acceptedAnswers: [`git merge ${oracleLab.branchName}`],
    answerLabel: `git merge ${oracleLab.branchName}`,
    placeholder: "Merge the feature branch",
    feedback: "This fast-forwards main to the feature commit."
  },
  {
    question: "README.md was staged by mistake, but you do not want to delete it. Type the command to unstage it.",
    acceptedAnswers: ["git restore --staged README.md", "git reset HEAD README.md"],
    answerLabel: "git restore --staged README.md",
    placeholder: "Unstage without deleting",
    feedback: "Unstaging changes the index, not the file contents."
  },
  {
    question: "The branch is ready to publish for review. Type the command that pushes the current branch.",
    acceptedAnswers: ["git push", `git push -u origin ${oracleLab.branchName}`],
    answerLabel: "git push",
    placeholder: "Publish branch",
    feedback: "A push makes the branch available for remote review."
  },
  {
    question: "Before committing, confirm whether anything is staged or unstaged. Type the command.",
    acceptedAnswers: ["git status"],
    answerLabel: "git status",
    placeholder: "Inspect repository state",
    feedback: "git status is the quick reality check before committing."
  },
  {
    question: "After resolving a conflict in the SQL file, type the command that marks the resolved file for commit.",
    acceptedAnswers: [`git add ${oracleLab.featureFile}`],
    answerLabel: `git add ${oracleLab.featureFile}`,
    placeholder: "Stage the resolved file",
    feedback: "Resolved files are marked complete by staging them."
  },
  {
    question: "The terminal is cluttered, but repository state should not change. Type the command that clears the terminal view.",
    acceptedAnswers: ["clear", "cls"],
    answerLabel: "clear",
    placeholder: "Clear the view",
    feedback: "Clearing the terminal is cosmetic; it does not change Git state."
  }
];

const codexChoiceQuizzes = [
  {
    question: "What should you do before letting Codex edit files?",
    options: ["Check the current folder and Git status", "Run the first command Codex suggests", "Paste secrets for context", "Start by committing everything"],
    answer: "Check the current folder and Git status",
    feedback: "Codex works from local context. Confirm folder and repo state before edits."
  },
  {
    question: "Which command shows the current folder in PowerShell?",
    options: ["Get-Location", "git branch", "npm.cmd install", "codex.cmd exec"],
    answer: "Get-Location",
    feedback: "Get-Location answers the first safety question: where am I?"
  },
  {
    question: "What does rg --files do?",
    options: ["Lists files quickly", "Deletes ignored files", "Commits staged files", "Starts Codex"],
    answer: "Lists files quickly",
    feedback: "ripgrep is the fast file finder for mapping a repo before deeper inspection."
  },
  {
    question: "What is the safest first Codex prompt in a new repo?",
    options: ["Inspect this repo and give me a short plan before editing.", "Rewrite the whole app.", "Commit all local files.", "Ignore validation and move fast."],
    answer: "Inspect this repo and give me a short plan before editing.",
    feedback: "A plan-first prompt keeps the first interaction low-risk and reviewable."
  },
  {
    question: "Why should Codex changes stay small?",
    options: ["Small diffs are easier to review and recover", "Large diffs always run faster", "Git cannot track small changes", "ADO requires one file only"],
    answer: "Small diffs are easier to review and recover",
    feedback: "Small, scoped changes are easier to validate and easier to unwind."
  },
  {
    question: "Which prompt is best for SQL lineage?",
    options: ["Identify source tables, output grain, joins, filters, assumptions, and risks.", "Make the SQL prettier without reading it.", "Delete duplicate code automatically.", "Summarize the repo logo colors."],
    answer: "Identify source tables, output grain, joins, filters, assumptions, and risks.",
    feedback: "Lineage work should capture grain, sources, logic, assumptions, and review questions."
  },
  {
    question: "Before refactoring SQL, what should Codex explain?",
    options: ["Current behavior, row grain, filters, and joins", "Only indentation style", "GitHub usernames", "PowerPoint theme colors"],
    answer: "Current behavior, row grain, filters, and joins",
    feedback: "A safe SQL refactor starts by proving the existing behavior is understood."
  },
  {
    question: "What should a CSV data-quality report separate?",
    options: ["Observed issues, possible causes, and next actions", "Code comments and commit hashes", "Main and feature branches only", "PowerShell and Bash history"],
    answer: "Observed issues, possible causes, and next actions",
    feedback: "Good data-quality notes distinguish what is known from what still needs validation."
  },
  {
    question: "What should happen before committing Codex-generated markdown?",
    options: ["Review the diff and unsupported claims", "Trust it because markdown is harmless", "Delete the source files", "Skip validation if it looks polished"],
    answer: "Review the diff and unsupported claims",
    feedback: "Generated docs can still contain unsupported assumptions. Review them before committing."
  },
  {
    question: "What is codex.cmd exec best suited for?",
    options: ["Repeatable tasks with stable output", "Unclear exploratory work with changing scope", "Sensitive judgment with no review", "Deleting old branches"],
    answer: "Repeatable tasks with stable output",
    feedback: "codex.cmd exec is strongest when the prompt, output, and validation step are predictable."
  },
  {
    question: "When should work stay interactive instead of codex.cmd exec?",
    options: ["When scope is unclear or risk is high", "When the output is a fixed markdown report", "When the command is read-only", "When the prompt is already tested"],
    answer: "When scope is unclear or risk is high",
    feedback: "Interactive sessions let the user steer judgment-heavy or changing work."
  },
  {
    question: "What does git diff --stat help you inspect?",
    options: ["The change surface by file", "The current directory", "Installed npm packages", "The remote website design"],
    answer: "The change surface by file",
    feedback: "git diff --stat is the quick overview before reviewing full content changes."
  },
  {
    question: "What should a final Codex review prompt ask for?",
    options: ["Correctness risks, regressions, missing validation, and file evidence", "A larger rewrite", "A password reset", "Only praise for the implementation"],
    answer: "Correctness risks, regressions, missing validation, and file evidence",
    feedback: "A review prompt should lead with findings and cite the files that support them."
  },
  {
    question: "Why split a larger Codex workflow into milestones?",
    options: ["Each output can be grounded and reviewed before the next step", "It makes Codex ignore repo context", "It removes the need for Git", "It guarantees there are no assumptions"],
    answer: "Each output can be grounded and reviewed before the next step",
    feedback: "Milestones reduce scope drift and make artifacts easier to validate."
  },
  {
    question: "Which artifact set best matches the handoff workflow?",
    options: ["REPO_NOTES.md, SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, CODEX_REVIEW.md", "Only a commit hash", "A private chat summary", "A screenshot with no notes"],
    answer: "REPO_NOTES.md, SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, CODEX_REVIEW.md",
    feedback: "The capstone turns a Codex session into durable notes that can support a PR, review, or handoff."
  }
];

const codexRoundTwoQuizzes = [
  {
    question: "Fill in the PowerShell command that shows the current folder.",
    answer: "Get-Location",
    placeholder: "Get-...",
    feedback: "Get-Location confirms the folder Codex will use for context."
  },
  {
    question: "Fill in the PowerShell command that lists nearby files, including hidden items.",
    answer: "Get-ChildItem -Force",
    placeholder: "Get-ChildItem ...",
    feedback: "Get-ChildItem -Force is a safe read-only orientation command."
  },
  {
    question: "Fill in the command that lists repo files quickly.",
    answer: "rg --files",
    placeholder: "rg ...",
    feedback: "rg --files maps the repo faster than manually expanding folders."
  },
  {
    question: "Fill in the command that finds SQL files.",
    answer: "rg --files -g \"*.sql\"",
    placeholder: "rg --files -g ...",
    feedback: "This maps SQL scope before asking Codex to reason about lineage."
  },
  {
    question: "Fill in the command that checks the Git working tree.",
    answer: "git status",
    placeholder: "git ...",
    feedback: "git status is the default preflight before and after Codex work."
  },
  {
    question: "Fill in the command that summarizes changed files before a full diff review.",
    answer: "git diff --stat",
    placeholder: "git diff ...",
    feedback: "git diff --stat gives a compact change-surface view."
  },
  {
    question: "Fill in the command that launches interactive Codex from the current folder.",
    answer: "codex.cmd",
    placeholder: "codex.cmd...",
    feedback: "Run codex.cmd from the repo root in Windows PowerShell so local context is correct."
  },
  {
    question: "Fill in the command that signs in to Codex CLI.",
    answer: "codex.cmd login",
    placeholder: "codex.cmd ...",
    feedback: "codex.cmd login starts the CLI authentication flow without hitting the blocked PowerShell shim."
  },
  {
    question: "Fill in the install command for the Codex CLI.",
    answer: "npm.cmd install -g @openai/codex",
    placeholder: "npm.cmd install ...",
    feedback: "Use npm.cmd in Windows PowerShell when npm.ps1 is blocked by execution policy."
  },
  {
    question: "Fill in the command pattern for a one-shot Codex run.",
    answer: "codex.cmd exec",
    placeholder: "codex.cmd ...",
    feedback: "codex.cmd exec is the one-shot mode for stable, repeatable tasks in Windows PowerShell."
  }
];

const codexRoundThreeQuizzes = [
  {
    question: "You are in a new repo and need a safe first Codex session. Type the first inspection prompt.",
    acceptedAnswers: [
      "Inspect this repo and give me a short plan before editing.",
      "Inspect this repo before editing and give me a short plan."
    ],
    answerLabel: "Inspect this repo and give me a short plan before editing.",
    placeholder: "Type the prompt",
    feedback: "A plan-first prompt reduces broad rewrites and forces local context."
  },
  {
    question: "Type the PowerShell command that confirms where Codex will start.",
    acceptedAnswers: ["Get-Location", "pwd"],
    answerLabel: "Get-Location",
    placeholder: "Current folder command",
    feedback: "Confirm the active folder before launching Codex."
  },
  {
    question: "Type the command that finds all SQL files in the repo.",
    acceptedAnswers: ["rg --files -g \"*.sql\"", "rg --files -g '*.sql'"],
    answerLabel: "rg --files -g \"*.sql\"",
    placeholder: "Find SQL files",
    feedback: "Finding SQL files is the first step in a lineage or review workflow."
  },
  {
    question: "Type the command that scans for common SQL clauses across the repo.",
    acceptedAnswers: ["rg -n \"from|join|group by|where\" .", "rg -n 'from|join|group by|where' ."],
    answerLabel: "rg -n \"from|join|group by|where\" .",
    placeholder: "Scan SQL clauses",
    feedback: "Clause scans help spot sources, joins, filters, and aggregation."
  },
  {
    question: "Before keeping Codex changes, type the command that summarizes changed files.",
    acceptedAnswers: ["git diff --stat"],
    answerLabel: "git diff --stat",
    placeholder: "Diff summary command",
    feedback: "Use the stat view before reviewing the full diff."
  },
  {
    question: "Type the command that inspects actual content changes.",
    acceptedAnswers: ["git diff"],
    answerLabel: "git diff",
    placeholder: "Full diff command",
    feedback: "The full diff is the reality check before keeping generated changes."
  },
  {
    question: "Type a one-shot command that writes a repo review to CODEX_REVIEW.md.",
    acceptedAnswers: [
      "codex.cmd exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
      "codex.cmd exec 'Review this repo for docs gaps and SQL risks' > CODEX_REVIEW.md"
    ],
    answerLabel: "codex.cmd exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
    placeholder: "codex.cmd exec ... > CODEX_REVIEW.md",
    feedback: "One-shot output should still be reviewed manually before commit or sharing."
  },
  {
    question: "Type the prompt fragment that tells Codex to preserve SQL behavior during cleanup.",
    acceptedAnswers: [
      "Refactor for readability only. Preserve behavior, filters, grain, and output schema.",
      "Refactor this SQL for readability only. Preserve output schema, row grain, join behavior, and filters."
    ],
    answerLabel: "Refactor for readability only. Preserve behavior, filters, grain, and output schema.",
    placeholder: "Type the guardrail",
    feedback: "SQL cleanup must preserve row grain, filters, joins, and output schema unless explicitly changed."
  },
  {
    question: "Type the final capstone review prompt before committing generated artifacts.",
    acceptedAnswers: [
      "Review the changed files without editing. Flag unsupported claims, missing validation, risky assumptions, and final cleanup before commit.",
      "Review the changed files without editing. Draft CODEX_REVIEW.md with changed files, unsupported claims, missing validation, risky assumptions, and final cleanup recommendations."
    ],
    answerLabel: "Review the changed files without editing. Flag unsupported claims, missing validation, risky assumptions, and final cleanup before commit.",
    placeholder: "Final review prompt",
    feedback: "The final pass should review the artifacts without creating another uncontrolled edit."
  }
];

const oracleSqlChoiceQuizzes = [
  {
    question: "What does SELECT * do in the first SQL lesson?",
    options: ["Returns every column from the chosen table", "Deletes every row", "Stages a Git file", "Creates a new Oracle schema"],
    answer: "Returns every column from the chosen table",
    feedback: "SELECT * is useful for inspection, but final reviewable SQL should usually name columns."
  },
  {
    question: "Which clause filters rows?",
    options: ["WHERE", "FROM", "ORDER BY", "SELECT"],
    answer: "WHERE",
    feedback: "WHERE limits which rows survive into the result set."
  },
  {
    question: "What does GROUP BY change?",
    options: ["The output grain", "The Git branch", "The file extension", "The SQL editor theme"],
    answer: "The output grain",
    feedback: "GROUP BY changes the result from detail rows to one row per group."
  },
  {
    question: "Why use explicit column names instead of SELECT * in final SQL?",
    options: ["The output schema is reviewable and stable", "It makes the database ignore filters", "It hides row counts", "It automatically commits the file"],
    answer: "The output schema is reviewable and stable",
    feedback: "Named columns help reviewers know exactly what the output contains."
  },
  {
    question: "What should you know before joining two repo SQL files?",
    options: ["The join key and row-grain risk", "Only the file color", "Only the branch name", "The monitor size"],
    answer: "The join key and row-grain risk",
    feedback: "Joins can duplicate rows if the key is not unique at the expected grain."
  },
  {
    question: "What does TRUNC(SYSDATE) - 7 represent in this lab?",
    options: ["A recent date window", "A Git reset", "A table alias", "A file rename"],
    answer: "A recent date window",
    feedback: "It is a common Oracle-style rolling date boundary."
  },
  {
    question: "Why use a CTE for the final query?",
    options: ["It separates readable steps", "It hides the FROM clause", "It prevents validation", "It changes PowerShell prompts"],
    answer: "It separates readable steps",
    feedback: "A CTE can make filtering, joining, and final aggregation easier to review."
  }
];

const oracleSqlRoundTwoQuizzes = [
  {
    question: "Fill in the starter command to inspect every column from the emergency response extract.",
    answer: "SELECT * FROM ccs_emergency_response_activity_extract",
    placeholder: "SELECT * FROM ...",
    feedback: "Start broad, then narrow once you understand the table."
  },
  {
    question: "Fill in the clause that filters rows to OPEN status.",
    answer: "WHERE activity_status = 'OPEN'",
    placeholder: "WHERE ...",
    feedback: "A WHERE clause limits the rows returned by the query."
  },
  {
    question: "Fill in the aggregation expression that counts rows.",
    answer: "COUNT(*)",
    placeholder: "COUNT...",
    feedback: "COUNT(*) counts rows in the current group."
  },
  {
    question: "Fill in the clause that groups the ZIP summary.",
    answer: "GROUP BY zip_code",
    placeholder: "GROUP BY ...",
    feedback: "Every non-aggregated selected column must be grouped."
  },
  {
    question: "Fill in the Oracle rolling date predicate used in the lab.",
    answer: "order_date >= TRUNC(SYSDATE) - 7",
    placeholder: "order_date >= ...",
    feedback: "This keeps the date window visible in the SQL."
  },
  {
    question: "Fill in the join condition between activity and service agreement data.",
    answer: "ON e.service_point_id = s.service_point_id",
    placeholder: "ON ...",
    feedback: "The join key should be explicit and reviewable."
  },
  {
    question: "Fill in the keyword that starts a common table expression.",
    answer: "WITH",
    placeholder: "SQL keyword",
    feedback: "WITH starts a CTE."
  }
];

const oracleSqlRoundThreeQuizzes = [
  {
    question: "Type a query that returns all columns from the starter emergency response extract.",
    acceptedAnswers: [
      "select * from ccs_emergency_response_activity_extract",
      "select * from ccs/sql/meters/ccs_emergency_response_activity_extract.sql"
    ],
    answerLabel: "SELECT * FROM ccs_emergency_response_activity_extract",
    placeholder: "SELECT * FROM ...",
    feedback: "This is the first broad inspection step."
  },
  {
    question: "Type the filter that keeps OPEN and PENDING statuses.",
    acceptedAnswers: [
      "where activity_status in ('OPEN', 'PENDING')",
      "where activity_status in ('OPEN','PENDING')"
    ],
    answerLabel: "WHERE activity_status IN ('OPEN', 'PENDING')",
    placeholder: "WHERE ...",
    feedback: "IN is clearer than a long chain of OR conditions for this case."
  },
  {
    question: "Type the grouped ZIP count query.",
    acceptedAnswers: [
      "select zip_code, count(*) as order_count from ccs_emergency_response_activity_extract group by zip_code",
      "select zip_code, count(*) from ccs_emergency_response_activity_extract group by zip_code"
    ],
    answerLabel: "SELECT zip_code, COUNT(*) AS order_count FROM ccs_emergency_response_activity_extract GROUP BY zip_code",
    placeholder: "ZIP count query",
    feedback: "The output grain is one row per ZIP code."
  },
  {
    question: "Type the join condition that connects emergency activity to service agreement context.",
    acceptedAnswers: ["on e.service_point_id = s.service_point_id"],
    answerLabel: "ON e.service_point_id = s.service_point_id",
    placeholder: "JOIN condition",
    feedback: "The aliases make the join source clear."
  },
  {
    question: "Type the final ORDER BY clause to show highest ZIP counts first.",
    acceptedAnswers: ["order by order_count desc", "order by count(*) desc"],
    answerLabel: "ORDER BY order_count DESC",
    placeholder: "ORDER BY ...",
    feedback: "Sort summaries so reviewers can scan the highest-count areas first."
  }
];

const conflictScenarios = [
  {
    id: "ccs-source-view",
    title: "CCS SQL source-view conflict",
    branch: "ccs-source-view-fix",
    conflictFile: "ccs/sql/meters/ccs_emergency_response_activity_extract.sql",
    baselineMessage: "Add CCS meters SQL baseline",
    mainMessage: "Point meters extract at curated CCS view",
    featureMessage: "Add meter status filters",
    mergeMessage: "Merge CCS source-view fix",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nPractice resolving a CCS SQL merge conflict safely.\n",
      "ccs/sql/meters/README.md": "# CCS meters SQL\n\nMeter and field activity query assets.\n",
      "ccs/sql/meters/ccs_emergency_response_activity_extract.sql":
        "select activity_id, premise_id, meter_id, activity_status\nfrom raw_ccs.emergency_response_activity;\n"
    },
    mainContent:
      "select activity_id, premise_id, meter_id, activity_status\nfrom curated_ccs.emergency_response_activity_vw;\n",
    featureContent:
      "select activity_id, premise_id, meter_id, activity_status\nfrom raw_ccs.emergency_response_activity\nwhere activity_status in ('Open', 'Completed');\n"
  },
  {
    id: "emergency-orders",
    title: "Emergency orders SQL conflict",
    branch: "emergency-orders-filter-fix",
    conflictFile: "ccs/sql/emergency_orders_prior_week.sql",
    baselineMessage: "Add emergency orders prior-week baseline",
    mainMessage: "Use governed CCS source view",
    featureMessage: "Apply prior completed week filter",
    mergeMessage: "Merge emergency orders filter fix",
    baselineFiles: {
      "README.md": "# Conflict drill\n\nResolve a SQL merge conflict before review.\n",
      "ccs/sql/emergency_orders_prior_week.sql":
        "select order_id, zip_code, status, completed_date\nfrom raw_ccs.emergency_orders\nwhere status in ('Open', 'Closed');\n",
      "validation-notes.md": "# Validation notes\n\nCompare row counts by completed week before publishing.\n"
    },
    mainContent:
      "select order_id, zip_code, status, completed_date\nfrom curated_ccs.emergency_orders_vw\nwhere status in ('Open', 'Closed');\n",
    featureContent:
      "select order_id, zip_code, status, completed_date\nfrom raw_ccs.emergency_orders\nwhere completed_date >= dateadd(day, -7, current_date)\n  and completed_date < current_date;\n"
  },
  {
    id: "oracle-sql-runbook",
    title: "Oracle SQL review runbook conflict",
    branch: "oracle-sql-runbook-update",
    conflictFile: "docs/runbooks/oracle_sql_review_runbook.md",
    baselineMessage: "Document Oracle SQL review baseline",
    mainMessage: "Align runbook with PR template",
    featureMessage: "Add meters review checklist",
    mergeMessage: "Merge Oracle SQL runbook update",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nResolve a documentation merge conflict before review.\n",
      "docs/runbooks/oracle_sql_review_runbook.md":
        "# Oracle SQL review runbook\n\nReview focus: readable SQL and clear validation notes\nReviewer: repo maintainer\n",
      ".azuredevops/pull_request_template.md": "# Pull Request\n\n## Summary\n## Validation\n"
    },
    mainContent:
      "# Oracle SQL review runbook\n\nReview focus: readable SQL, clear validation notes, and PR template alignment\nReviewer: repo maintainer\n",
    featureContent:
      "# Oracle SQL review runbook\n\nReview focus: readable SQL and clear validation notes\nMeters checklist: compare against neighboring CCS meters extracts\nReviewer: repo maintainer\n"
  },
  {
    id: "wacs-shared-lookup",
    title: "WACS shared lookup conflict",
    branch: "wacs-shared-lookup-update",
    conflictFile: "wacs/sql/shared/wacs_shared_erp_project_reference_lookup.sql",
    baselineMessage: "Add WACS shared lookup baseline",
    mainMessage: "Use governed ERP project source",
    featureMessage: "Add active project filter",
    mergeMessage: "Merge WACS shared lookup update",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nResolve a WACS SQL merge conflict before review.\n",
      "wacs/sql/shared/README.md": "# WACS shared SQL\n\nShared lookup and reference queries.\n",
      "wacs/sql/shared/wacs_shared_erp_project_reference_lookup.sql":
        "select project_id, project_number, project_name\nfrom raw_wacs.erp_project_reference;\n"
    },
    mainContent:
      "select project_id, project_number, project_name\nfrom curated_wacs.erp_project_reference_vw;\n",
    featureContent:
      "select project_id, project_number, project_name\nfrom raw_wacs.erp_project_reference\nwhere project_status = 'ACTIVE';\n"
  }
];

const commandProcessSteps = [
  {
    area: "identity",
    label: "Git identity",
    title: "Check commit author name",
    detail: "git config user.name shows the name Git will stamp on local commits."
  },
  {
    area: "identity",
    label: "Git identity",
    title: "Check commit author email",
    detail: "git config user.email shows the email Git will stamp on local commits. Azure DevOps sign-in is separate."
  },
  {
    area: "workspace",
    label: "Clone",
    title: "Clone the ADO repo",
    detail: "git clone may prompt Azure DevOps sign-in, then brings down files, history, and the origin remote."
  },
  {
    area: "shell",
    label: "Shell location",
    title: "Move into the repo",
    detail: "The prompt changes so commands run inside the cloned Oracle repository."
  },
  {
    area: "remote",
    label: "Remote",
    title: "Inspect origin",
    detail: "git remote -v shows where fetch and push traffic will go. git status is a recommended checkpoint here, not a required path step."
  },
  {
    area: "remote",
    label: "Pull latest",
    title: "Refresh main",
    detail: "git pull confirms the branch is current before new work starts."
  },
  {
    area: "branch",
    label: "Branch pointer",
    title: "Create a feature branch from main",
    detail: "Git adds a new branch pointer at current main and moves HEAD to it. Some teams call this forking off main."
  },
  {
    area: "working",
    label: "Working tree",
    title: "Add SQL on the task branch",
    detail: "The report SQL belongs to the current branch until it is committed. git status is recommended here when the learner wants a checkpoint."
  },
  {
    area: "diff",
    label: "Diff review",
    title: "Review the branch diff",
    detail: "git diff shows the exact SQL change before it is staged or committed."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage the branch change",
    detail: "git add prepares the SQL snapshot for review."
  },
  {
    area: "history",
    label: "Feature commit",
    title: "Commit on the branch",
    detail: "The feature branch now points to a new commit that main does not have yet."
  },
  {
    area: "remote",
    label: "Remote",
    title: "Publish the branch",
    detail: "git push creates the remote branch so Azure DevOps can open a pull request."
  },
  {
    area: "branch",
    label: "HEAD switch",
    title: "Return to main",
    detail: "HEAD moves back to main, which still points at the baseline commit."
  },
  {
    area: "merge",
    label: "Merge",
    title: "Fast-forward main",
    detail: "main moves forward to the feature commit because it has not diverged."
  }
];

const projectProcessSteps = [
  {
    area: "workspace",
    label: "Workspace",
    title: "Create project lab folder",
    detail: "PowerShell creates the training folder for the longer-project workflow."
  },
  {
    area: "shell",
    label: "Shell location",
    title: "Move into the project lab",
    detail: "The prompt changes so the simulator runs commands inside the project workspace."
  },
  {
    area: "repository",
    label: "Repository",
    title: "Initialize Git metadata",
    detail: "Git starts tracking project context from this folder."
  },
  {
    area: "working",
    label: "Project README",
    title: "Create the project README",
    detail: "The README states the goal and current starting point for the longer project."
  },
  {
    area: "working",
    label: "Decision index",
    title: "Create decision-index.md",
    detail: "The decision index keeps choices and rationale visible on main."
  },
  {
    area: "working",
    label: "Workstreams",
    title: "Create workstreams.md",
    detail: "Workstreams keep collaborators and parallel tracks coordinated. git status is a recommended checkpoint before staging."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage the project capsule",
    detail: "README, decision-index, and workstreams are staged as shared context."
  },
  {
    area: "history",
    label: "Main commit",
    title: "Commit capsule on main",
    detail: "The shared project context is now a main-branch checkpoint."
  },
  {
    area: "branch",
    label: "Workstream branch",
    title: "Create a workstream branch",
    detail: "Everyday work resumes on a focused branch after the capsule exists."
  },
  {
    area: "working",
    label: "Workstream note",
    title: "Update workstreams.md",
    detail: "The branch records progress for one workstream without muddying main. git status is recommended before diff review."
  },
  {
    area: "diff",
    label: "Diff review",
    title: "Review the workstream diff",
    detail: "git diff shows what reviewers will inspect before the workstream update is staged."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage workstream update",
    detail: "Only the intended workstream file is staged for the branch commit."
  },
  {
    area: "history",
    label: "Branch commit",
    title: "Commit workstream progress",
    detail: "The workstream branch now has a focused progress checkpoint."
  },
  {
    area: "remote",
    label: "Remote",
    title: "Publish the workstream branch",
    detail: "git push creates the remote branch so the workstream can move through PR review."
  },
  {
    area: "branch",
    label: "HEAD switch",
    title: "Return to main",
    detail: "HEAD moves back to the shared project context on main."
  },
  {
    area: "merge",
    label: "Merge",
    title: "Merge workstream update",
    detail: "main fast-forwards so the project map includes the latest workstream note."
  }
];

let state;
let flowPointerDrag = null;
let flowNativeDragActive = false;
let suppressNextFlowClick = false;
let devPlayback = null;
let devPlaybackTimer = null;
let practiceReplayActive = false;
const DEV_PLAYBACK_GIT_COMMAND = "__dev_playback_git__";
const DEV_PLAYBACK_CODEX_COMMAND = "__dev_playback_codex__";
const DEV_PLAYBACK_VSCODE_COMMAND = "__dev_playback_vscode__";
const DEV_PLAYBACK_SQL_COMMAND = "__dev_playback_sql__";
const WIZARD_GIT_COMMAND = "git wizard mode";
const WIZARD_CODEX_COMMAND = "codex wizard mode";
const WIZARD_VSCODE_COMMAND = "code --wizard mode";
const WIZARD_SQL_COMMAND = "sql wizard mode";

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(loadTheme());
  state = loadState();
  bindEvents();
  render();
});

function createInitialState() {
  return {
    ...createTrainingState(),
    inLesson: false
  };
}

function createTrainingState(moduleId = "git-basics") {
  return {
    schemaVersion: 6,
    inLesson: true,
    viewMode: "guided",
    activeModuleId: moduleId,
    guidedStep: 0,
    cwd: PS_ROOT,
    folders: [],
    initialized: false,
    commits: [],
    branches: { main: null },
    remoteBranches: {},
    mergeEvents: [],
    currentBranch: "main",
    branchLanes: { main: 0 },
    indexFiles: {},
    workingFiles: {},
    nextCommit: 0,
    editCounter: 1,
    lessonIndex: 0,
    expandedLessonIndex: null,
    repoExplorerOpen: true,
    repoExplorerTouched: false,
    explorerCollapsedFolders: [],
    explorerExpandedFolders: [],
    explorerExpandedFiles: [],
    flowCollapsedFiles: [],
    selectedCommitId: null,
    selectedFilePath: null,
    commandReplay: [],
    practiceMission: "orientation-path",
    practiceDifficulty: "guided",
    learnerProgress: normalizeLearnerProgress(state?.learnerProgress),
    taskFlags: createTaskFlags(),
    readyChecks: {},
    quizAnswers: {},
    quizSession: createQuizSession(moduleId),
    terminal: [
      {
        type: "note",
        text: "Ready. Type the highlighted command exactly, then press Enter."
      }
    ],
    pendingMerge: null,
    conflict: null,
    remoteUrl: ADO_REPO_URL
  };
}

function createCodexState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "codex",
    activeModuleId: codexLab.id,
    guidedStep: 0,
    codexSection: 0,
    cwd: CODEX_DEFAULT_CWD,
    codexCli: createCodexCliState(),
    quizSession: createQuizSession(codexLab.id),
    terminal: [
      {
        type: "note",
        text: `Windows PowerShell practice terminal. Profile: ${LOCAL_WINDOWS_USER}; Node ${LOCAL_NODE_VERSION}; npm ${LOCAL_NPM_VERSION}.`
      },
      {
        type: "note",
        text: `Practice path: ${codexLab.cliCommand} -> codex.cmd login -> cd ${ORACLE_REPO_ROOT} -> codex.cmd`
      }
    ]
  };
}

function createCodexCliState() {
  return {
    installed: false,
    loggedIn: false,
    sessionOpen: false,
    promptRuns: []
  };
}

function createCapstoneState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "capstone",
    activeModuleId: capstoneLab.id,
    guidedStep: 0,
    terminal: []
  };
}

function createVSCodeState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "vscode",
    activeModuleId: vscodeLab.id,
    guidedStep: 0,
    cwd: ORACLE_REPO_ROOT,
    vscodeSection: 0,
    vscodeCli: createVSCodeCliState(),
    terminal: [
      {
        type: "note",
        text: "VS Code terminal simulator ready. Try: help"
      },
      {
        type: "note",
        text: "Practice the editor workflow from the repo root: install extensions, inspect Git status, branch, diff, stage, and commit."
      }
    ]
  };
}

function createSqlState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "sql",
    activeModuleId: oracleSqlLab.id,
    guidedStep: 0,
    cwd: oracleSqlLab.repoRoot,
    sqlSection: 0,
    sqlWorksheet: createSqlWorksheetState(),
    quizSession: createQuizSession(oracleSqlLab.id),
    terminal: [
      {
        type: "note",
        text: "Oracle SQL worksheet ready. Start with: SELECT * FROM ccs_emergency_response_activity_extract"
      },
      {
        type: "note",
        text: "Use show files, describe <table>, or SELECT statements. Open How to for the worked simulator example."
      }
    ]
  };
}

function createSqlWorksheetState() {
  return {
    selectedFile: oracleSqlFiles[0]?.path || "",
    completedSections: [],
    queryLog: [],
    lastResult: createSqlResult(
      ["FILE_PATH", "TABLE_NAME", "STATUS"],
      oracleSqlFiles.map((file) => ({
        FILE_PATH: file.path,
        TABLE_NAME: file.table,
        STATUS: file.status
      })),
      "Repository SQL files loaded."
    )
  };
}

function createVSCodeCliState() {
  return {
    openedWorkspace: false,
    installedExtensions: [],
    branch: "main",
    activeFile: "",
    edited: false,
    staged: false,
    committed: false,
    conflictOpen: false,
    conflictResolved: false,
    missionLog: []
  };
}

function createLearnerProgressState() {
  return {
    badges: [],
    completedLabs: [],
    completedMissions: [],
    bestReadiness: 0,
    lastReadiness: 0,
    noHintCompletions: 0
  };
}

function createChallengeModeState() {
  return {
    activeId: practiceChallenges[0]?.id || "",
    started: false,
    commandLog: [],
    completedIds: [],
    score: 0,
    streak: 0,
    misses: 0,
    hintOpen: false,
    lastCompletedId: null
  };
}

function createTaskFlags() {
  return {
    status: false,
    staged: false,
    committed: false,
    branchCreated: false,
    branchCommitted: false,
    merged: false,
    pushed: false,
    conflictResolved: false
  };
}

function getOracleRepoBaselineFiles() {
  return {
    "README.md": "# Oracle repository\n\nTraining snapshot modeled on the Oracle repo structure.\n",
    "AGENTS.md": "# Oracle repo guidance\n\nUse repo-local conventions and keep changes reviewable.\n",
    ".azuredevops/pull_request_template.md": "# Pull Request\n\n## Summary\n## Validation\n## Reviewer focus\n",
    "ccs/sql/meters/README.md": "# CCS meters SQL\n\nMeter, field activity, and emergency response query assets.\n",
    "ccs/sql/meters/ccs_device_channel_multiplier_audit.sql":
      "select device_id, channel_id, multiplier\nfrom ccs_meter.channel_multiplier_audit;\n",
    "ccs/sql/meters/ccs_device_service_agreement_extract.sql":
      "select service_point_id, service_agreement_id, customer_class, start_date, end_date\nfrom ccs_meter.device_service_agreement;\n",
    "ccs/sql/meters/ccs_emergency_response_activity_extract.sql":
      "select activity_id, premise_id, service_point_id, meter_id, zip_code, activity_status, activity_type, order_date, completed_date\nfrom ccs_meter.emergency_response_activity;\n",
    "ccs/sql/meters/ccs_field_activity_appointment_performance.sql":
      "select appointment_id, activity_type, scheduled_date, completion_status\nfrom ccs_meter.field_activity_appointment;\n",
    "ccs/sql/meters/ccs_open_field_activity_extract.sql":
      "select activity_id, service_point_id, activity_status\nfrom ccs_meter.open_field_activity;\n",
    "docs/runbooks/oracle_sql_review_runbook.md":
      "# Oracle SQL review runbook\n\nReview SQL placement, naming, and validation notes before opening a PR.\n",
    "docs/sql_inventory.md": "# SQL inventory\n\nCatalog of promoted Oracle SQL assets by source area.\n",
    "fusion/sql/gl/fusion_gl_transactions_extract.sql":
      "select journal_id, ledger_name, accounting_date, entered_amount\nfrom fusion_gl.transactions;\n",
    "wacs/sql/work_orders/wacs_work_orders_open_work_orders.sql":
      "select work_order_id, project_number, status\nfrom wacs_work_orders.open_work_orders;\n"
  };
}

function createAdvancedState() {
  const baseFiles = getOracleRepoBaselineFiles();

  return {
    schemaVersion: 6,
    inLesson: true,
    viewMode: "practice",
    activeModuleId: "git-basics",
    guidedStep: modules[0].commands.length,
    cwd: "C:\\Training\\OracleGitLab",
    folders: [oracleLab.folder],
    initialized: true,
    commits: [
      {
        id: "c000",
        message: "Oracle repo baseline snapshot",
        parents: [],
        files: baseFiles,
        branch: "main",
        lane: 0,
        order: 0
      }
    ],
    branches: { main: "c000" },
    remoteBranches: { "origin/main": "c000" },
    mergeEvents: [],
    currentBranch: "main",
    branchLanes: { main: 0 },
    indexFiles: clone(baseFiles),
    workingFiles: clone(baseFiles),
    nextCommit: 1,
    editCounter: 1,
    lessonIndex: 0,
    expandedLessonIndex: null,
    repoExplorerOpen: true,
    repoExplorerTouched: false,
    explorerCollapsedFolders: [],
    explorerExpandedFolders: [],
    explorerExpandedFiles: [],
    flowCollapsedFiles: [],
    selectedCommitId: "c000",
    selectedFilePath: null,
    commandReplay: [],
    practiceMission: "orientation-path",
    practiceDifficulty: "guided",
    learnerProgress: createLearnerProgressState(),
    taskFlags: createTaskFlags(),
    readyChecks: {},
    quizAnswers: {},
    quizSession: createQuizSession("git-basics"),
    challengeMode: createChallengeModeState(),
    terminal: [
      {
        type: "note",
        text:
          "Lab ready. This is a local simulator, so commands update the model without touching real Git history."
      }
    ],
    pendingMerge: null,
    conflict: null
  };
}

function pickConflictScenario() {
  return conflictScenarios[Math.floor(Math.random() * conflictScenarios.length)];
}

function findConflictScenario(branch) {
  return conflictScenarios.find((scenario) => scenario.branch === branch);
}

function createConflictState(scenario = pickConflictScenario()) {
  const baseFiles = clone(scenario.baselineFiles);
  const mainFiles = clone(baseFiles);
  mainFiles[scenario.conflictFile] = scenario.mainContent;

  const featureFiles = clone(baseFiles);
  featureFiles[scenario.conflictFile] = scenario.featureContent;

  return {
    ...createAdvancedState(),
    initialized: true,
    inLesson: true,
    guidedStep: modules[0].commands.length,
    commits: [
      {
        id: "c000",
        message: scenario.baselineMessage,
        parents: [],
        files: baseFiles,
        branch: "main",
        lane: 0,
        order: 0
      },
      {
        id: "c001",
        message: scenario.mainMessage,
        parents: ["c000"],
        files: mainFiles,
        branch: "main",
        lane: 0,
        order: 1
      },
      {
        id: "c002",
        message: scenario.featureMessage,
        parents: ["c000"],
        files: featureFiles,
        branch: scenario.branch,
        lane: 1,
        order: 2
      }
    ],
    branches: { main: "c001", [scenario.branch]: "c002" },
    remoteBranches: { "origin/main": "c000" },
    mergeEvents: [],
    currentBranch: "main",
    branchLanes: { main: 0, [scenario.branch]: 1 },
    indexFiles: clone(mainFiles),
    workingFiles: clone(mainFiles),
    nextCommit: 3,
    editCounter: 1,
    lessonIndex: 4,
    conflictScenarioId: scenario.id,
    terminal: [
      {
        type: "note",
        text:
          `Conflict drill loaded: ${scenario.title}. Run git merge ${scenario.branch}, then resolve ${scenario.conflictFile}, stage it, and commit.`
      }
    ],
    pendingMerge: null,
    conflict: null
  };
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    if (suppressNextFlowClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressNextFlowClick = false;
      return;
    }

    const copyButton = event.target.closest("[data-copy-text]");
    if (copyButton) {
      event.preventDefault();
      event.stopPropagation();
      copyTextToClipboard(copyButton);
      return;
    }

    const commandFill = event.target.closest("[data-command-fill]");
    if (commandFill) {
      event.preventDefault();
      event.stopPropagation();
      handleCommandChip(commandFill);
      return;
    }

    const lessonButton = event.target.closest("[data-lesson]");
    if (lessonButton) {
      handleLessonSelection(lessonButton);
      return;
    }

    const quizButton = event.target.closest("[data-quiz]");
    if (quizButton) {
      handleQuizAnswer(quizButton.dataset.quiz, Number(quizButton.dataset.option));
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    handleAction(actionButton);
  });

  document.body.addEventListener("dragstart", handleFlowFileDragStart);
  document.body.addEventListener("dragend", handleFlowFileDragEnd);
  document.body.addEventListener("dragover", handleFlowDragOver);
  document.body.addEventListener("dragleave", handleFlowDragLeave);
  document.body.addEventListener("drop", handleFlowDrop);
  document.body.addEventListener("pointerdown", handleFlowPointerDown);
  document.body.addEventListener("pointermove", handleFlowPointerMove);
  document.body.addEventListener("pointerup", handleFlowPointerUp);
  document.body.addEventListener("pointercancel", handleFlowPointerCancel);

  document.body.addEventListener("submit", (event) => {
    const quizForm = event.target.closest("[data-quiz-form]");
    if (!quizForm) {
      return;
    }

    event.preventDefault();
    const input = quizForm.querySelector("[name='quiz-answer']");
    handleQuizTextAnswer(quizForm.dataset.quizForm, input?.value || "");
  });

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isHowToModalOpen()) {
      event.preventDefault();
      closeHowToModal();
      return;
    }

    if (event.key === "Tab" && isHowToModalOpen()) {
      trapModalFocus(event);
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const commandFill = event.target.closest("[data-command-fill]");
    if (commandFill) {
      event.preventDefault();
      handleCommandChip(commandFill);
      return;
    }

    const roleButton = event.target.closest("[role='button']");
    if (roleButton && !roleButton.closest("button")) {
      event.preventDefault();
      roleButton.click();
    }
  });

  document.getElementById("themeToggle").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTheme();
  });

  document.getElementById("commandForm").addEventListener("click", (event) => {
    if (!event.target.closest("button[type='submit']")) {
      return;
    }

    event.preventDefault();
    submitTerminalCommand();
  });

  document.getElementById("commandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitTerminalCommand();
  });

  document.getElementById("commandInput").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    submitTerminalCommand();
  });

  document.addEventListener("submit", (event) => {
    if (!event.target.closest("#vscodeCommandForm")) {
      return;
    }

    event.preventDefault();
    submitVSCodeCommand();
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.id !== "vscodeCommandInput" || event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    submitVSCodeCommand();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("button") || !event.target.closest("#vscodeTerminalOutput")) {
      return;
    }

    document.getElementById("vscodeCommandInput")?.focus();
  });

  document.getElementById("terminalOutput").addEventListener("click", (event) => {
    if (event.target.closest("button")) {
      return;
    }

    document.getElementById("commandInput").focus();
  });
}

function submitTerminalCommand() {
  const input = document.getElementById("commandInput");
  if (!input) {
    return;
  }

  runCommand(input.value);
  input.value = "";
  input.focus();
}

function submitVSCodeCommand() {
  const input = document.getElementById("vscodeCommandInput");
  if (!input) {
    return;
  }

  runCommand(input.value);
  input.value = "";
  queuePrimaryInputFocus();
}

function focusCommandInput() {
  const input = isVSCodeMode()
    ? document.getElementById("vscodeCommandInput") || document.getElementById("commandInput")
    : document.getElementById("commandInput");
  if (!input || input.closest("[hidden]")) {
    return;
  }
  input.focus({ preventScroll: true });
  input.setSelectionRange(input.value.length, input.value.length);
}

function queuePrimaryInputFocus() {
  if (typeof window === "undefined" || isHowToModalOpen()) {
    return;
  }
  window.setTimeout(() => {
    focusCommandInput();
  }, 0);
}

function handleLessonSelection(lessonButton) {
  const lessonIndex = Number(lessonButton.dataset.lesson);
  const expandedLessonIndex = getExpandedLessonIndex();
  state.lessonIndex = lessonIndex;
  state.expandedLessonIndex =
    lessonButton.dataset.lessonToggle === "true" && expandedLessonIndex === lessonIndex ? -1 : lessonIndex;
  saveState();
  render();
  queuePrimaryInputFocus();
}

function navigateGuidedLesson(delta) {
  const activeLessons = getActiveLessons();
  const current = Number.isInteger(state.lessonIndex) ? state.lessonIndex : getCurrentLessonIndex();
  const next = clampIndex(current + delta, activeLessons.length);
  const targetCommandIndex = getLessonStartCommandIndex(next);
  const direction = delta > 0 ? "Advanced" : "Returned";

  rebuildGuidedStateToCommand(targetCommandIndex, {
    intro: `${direction} to ${activeLessons[next]?.title || "the selected lesson"}. Prior commands were replayed so the repository matches this point.`,
    targetLessonIndex: next
  });
  typeCommandIntoIde(getActiveModule().commands[targetCommandIndex]?.cmd || "");
}

function handleCommandChip(button) {
  const command = button.dataset.commandFill;
  const commandIndex = Number(button.dataset.commandIndex);
  const canRewind =
    Number.isInteger(commandIndex) &&
    commandIndex >= 0 &&
    commandIndex < state.guidedStep &&
    state.inLesson &&
    !isPracticeMode();

  if (canRewind) {
    rewindToGuidedCommand(commandIndex);
  }

  typeCommandIntoIde(command);
}

function rewindToGuidedCommand(commandIndex) {
  rebuildGuidedStateToCommand(commandIndex, {
    intro: `Rewound to step ${Math.max(0, commandIndex) + 1}. Prior commands were replayed so the repository matches this point.`
  });
}

function rebuildGuidedStateToCommand(commandIndex, options = {}) {
  const active = getActiveModule();
  const targetIndex = Math.max(0, Math.min(commandIndex, active.commands.length));
  const moduleId = state.activeModuleId || "git-basics";
  const previousUiState = {
    activeModuleId: moduleId,
    quizSession: state.quizSession,
    repoExplorerOpen: state.repoExplorerOpen,
    repoExplorerTouched: state.repoExplorerTouched,
    explorerCollapsedFolders: state.explorerCollapsedFolders,
    explorerExpandedFolders: state.explorerExpandedFolders,
    explorerExpandedFiles: state.explorerExpandedFiles,
    flowCollapsedFiles: state.flowCollapsedFiles
  };

  state = {
    ...createTrainingState(moduleId),
    activeModuleId: moduleId,
    repoExplorerOpen: Boolean(previousUiState.repoExplorerOpen),
    repoExplorerTouched: Boolean(previousUiState.repoExplorerTouched),
    explorerCollapsedFolders: Array.isArray(previousUiState.explorerCollapsedFolders)
      ? [...previousUiState.explorerCollapsedFolders]
      : [],
    explorerExpandedFolders: Array.isArray(previousUiState.explorerExpandedFolders)
      ? [...previousUiState.explorerExpandedFolders]
      : [],
    explorerExpandedFiles: Array.isArray(previousUiState.explorerExpandedFiles)
      ? [...previousUiState.explorerExpandedFiles]
      : [],
    flowCollapsedFiles: Array.isArray(previousUiState.flowCollapsedFiles) ? [...previousUiState.flowCollapsedFiles] : [],
    quizSession: previousUiState.quizSession || createQuizSession(moduleId),
    terminal: [
      {
        type: "note",
        text: options.intro || `Moved to step ${targetIndex + 1}. Prior commands were replayed so the repository matches this point.`
      }
    ]
  };

  for (let index = 0; index < targetIndex; index += 1) {
    const replayCommand = active.commands[index];
    appendTerminal("prompt", `${getPrompt()} ${replayCommand.cmd}`);
    const result = executeCommand(replayCommand.cmd);

    if (result.type === "error") {
      appendTerminal("error", `Replay stopped at step ${index + 1}: ${result.text}`);
      break;
    }

    appendTerminal("success", `Replayed - ${replayCommand.desc}`);
    if (result.text) {
      appendTerminal(result.type, result.text);
    }
    state.guidedStep = index + 1;
  }

  state.guidedStep = targetIndex;
  state.lessonIndex = Number.isInteger(options.targetLessonIndex) ? options.targetLessonIndex : getCurrentLessonIndex();
  state.expandedLessonIndex = state.lessonIndex;
  appendTerminal("note", `Ready to run: ${active.commands[targetIndex]?.cmd || "lesson complete"}`);
  saveState();
  render();
}

function typeCommandIntoIde(command) {
  const input = document.getElementById("commandInput");
  if (!input || !command) {
    return;
  }

  input.value = command;
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function toggleExplorerFolder(button) {
  const path = button.dataset.path;
  if (!path) {
    return;
  }

  const scope = button.dataset.scope || "work";
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  setExplorerFolderExpanded(scope, path, !isExpanded);
}

function toggleExplorerFile(button) {
  const path = button.dataset.path;
  if (!path) {
    return;
  }

  const scope = button.dataset.scope || "work";
  const key = explorerKey(scope, path);
  ensureExplorerState();
  state.selectedFilePath = path;
  if (state.explorerExpandedFiles.includes(key)) {
    state.explorerExpandedFiles = state.explorerExpandedFiles.filter((item) => item !== key);
    return;
  }

  state.explorerExpandedFiles.push(key);
}

function toggleFlowFile(button) {
  const key = button.dataset.flowKey;
  if (!key) {
    return;
  }

  ensureFlowFileState();
  if (state.flowCollapsedFiles.includes(key)) {
    state.flowCollapsedFiles = state.flowCollapsedFiles.filter((item) => item !== key);
    return;
  }

  state.flowCollapsedFiles.push(key);
}

function openHowToModal() {
  const modal = document.getElementById("howToModal");
  if (!modal) {
    return;
  }

  renderHowToModalContent();
  const activeElement = document.activeElement;
  if (activeElement?.id) {
    modal.dataset.lastFocusSelector = `#${cssEscape(activeElement.id)}`;
  } else if (activeElement?.dataset?.action) {
    modal.dataset.lastFocusSelector = `[data-action="${cssEscape(activeElement.dataset.action)}"]`;
  } else {
    modal.dataset.lastFocusSelector = "";
  }
  modal.hidden = false;
  document.body.classList.add("modal-open");
  setAppShellModalState(true);
  modal.querySelector("button[data-action='close-how-to']")?.focus({ preventScroll: true });
  window.setTimeout(() => {
    modal.querySelector("button[data-action='close-how-to']")?.focus({ preventScroll: true });
  }, 0);
}

function closeHowToModal() {
  const modal = document.getElementById("howToModal");
  if (!modal) {
    return;
  }

  modal.hidden = true;
  document.body.classList.remove("modal-open");
  setAppShellModalState(false);
  const lastFocusSelector = modal.dataset.lastFocusSelector;
  const fallback = document.querySelector("[data-action='open-how-to']");
  const target = lastFocusSelector ? document.querySelector(lastFocusSelector) : fallback;
  (target || fallback)?.focus?.({ preventScroll: true });
}

function isHowToModalOpen() {
  const modal = document.getElementById("howToModal");
  return Boolean(modal && !modal.hidden);
}

function setAppShellModalState(active) {
  const shell = document.querySelector(".app-shell");
  if (!shell) {
    return;
  }

  if (active) {
    shell.setAttribute("inert", "");
    shell.setAttribute("aria-hidden", "true");
    return;
  }

  shell.removeAttribute("inert");
  shell.removeAttribute("aria-hidden");
}

function cssEscape(value) {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(String(value));
  }
  return String(value).replace(/["\\]/g, "\\$&");
}

function trapModalFocus(event) {
  const modal = document.getElementById("howToModal");
  if (!modal || modal.hidden) {
    return;
  }

  const focusable = [...modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter((node) => !node.disabled && !node.hidden);
  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const current = document.activeElement;

  if (event.shiftKey && current === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && current === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderHowToModalContent() {
  const content = getHowToContent();
  const kicker = document.getElementById("howToKicker");
  const title = document.getElementById("howToTitle");
  const summary = document.getElementById("howToSummary");
  const grid = document.getElementById("howToGrid");
  const footer = document.getElementById("howToFooter");

  if (kicker) {
    kicker.textContent = content.kicker;
  }
  if (title) {
    title.textContent = content.title;
  }
  if (summary) {
    summary.textContent = content.summary;
  }
  if (grid) {
    grid.innerHTML = content.steps
      .map(
        (step, index) => `
          <article class="${step.emphasis ? "emphasis" : ""}">
            <span>${index + 1}</span>
            <strong>${escapeHtml(step.title)}</strong>
            <p>${escapeHtml(step.body)}</p>
            ${renderHowToStepCommand(step)}
          </article>
        `
      )
      .join("");
  }
  if (footer) {
    footer.innerHTML = `
      <strong>${escapeHtml(content.footerLabel)}</strong>
      <span>${escapeHtml(content.footer)}</span>
    `;
  }
}

function renderHowToStepCommand(step) {
  if (!step.command) {
    return "";
  }

  const type = step.commandType || "real";
  const label =
    type === "simulator"
      ? "Simulator action"
      : type === "ui"
        ? "UI action"
        : type === "navigation"
          ? "Module or tab"
          : "Real command";

  return `
    <div class="howto-command howto-command-${type}">
      <span>${label}</span>
      <code>${escapeHtml(step.command)}</code>
    </div>
  `;
}

function getHowToContent() {
  if (!state || !state.inLesson) {
    return getPortalHowToContent();
  }

  if (isCodexMode()) {
    return getCodexHowToContent();
  }
  if (isVSCodeMode()) {
    return getVSCodeHowToContent();
  }
  if (isSqlMode()) {
    return getSqlHowToContent();
  }
  if (isPracticeMode()) {
    return getPracticeHowToContent();
  }
  if (isCapstoneMode()) {
    return getCapstoneHowToContent();
  }

  return getGuidedGitHowToContent();
}

function getPortalHowToContent() {
  return {
    kicker: "Course map",
    title: "How to use the learning platform",
    summary:
      "Use the recommended path when you want the shortest route to job-ready workflow practice. Open a lesson first, then use practice mode for recovery and repetition.",
    steps: [
      {
        title: "Start with the banner",
        body: "Use Git Workflow 1 first. It teaches the core work unit: ticket, branch, diff, commit, publish, PR.",
        command: "Git Workflow 1",
        commandType: "navigation",
        emphasis: true
      },
      {
        title: "Use Getting Started only when needed",
        body: "The right-side catalog holds optional Tools, Languages, and Concepts. Learners who know Codex, VS Code, or SQL can skip those and stay on the Git path.",
        command: "Tools / Languages / Concepts",
        commandType: "navigation"
      },
      {
        title: "Practice SQL in context",
        body: "Use Oracle SQL Lab only when SQL reasoning is part of the learner's gap. It starts with SELECT * and builds toward reviewable query logic.",
        command: "Oracle SQL Lab",
        commandType: "navigation"
      },
      {
        title: "Build the graph mental model",
        body: "Open Learn Git Branching after Workflow 1. It is better than this app for seeing commits, branches, merge, rebase, and remote pointers move.",
        command: "Git Workflow 2: Visual Branching Gym",
        commandType: "navigation"
      },
      {
        title: "Move to recovery practice",
        body: "Open the Git practice lab after the visual trainer. It covers wrong-branch, unstaged, dirty-switch, and conflict states against local file workflow.",
        command: "Git Workflow 3: Recovery and Real-File Drills",
        commandType: "navigation"
      }
    ],
    footerLabel: "Recommended path:",
    footer:
      "Primary path: Workflow 1 Ticket-to-PR -> Workflow 2 Visual Branching Gym -> Workflow 3 Recovery Drills -> Workflow 4 Project Capsule -> Workflow 5 Handoff. Getting Started modules are optional support."
  };
}

function getGuidedGitHowToContent() {
  const active = getActiveModule();
  const lessonsForModule = getActiveLessons();
  const lesson = lessonsForModule[getCurrentLessonIndex()] || lessonsForModule[0];
  const expected = active.commands[state.guidedStep];
  const done = Math.min(state.guidedStep, active.commands.length);
  return {
    kicker: "Active Git lesson",
    title: `How to run ${active.title}`,
    summary: `${lesson.title}: ${lesson.task}`,
    steps: [
      {
        title: "Follow the left learning path",
        body: "Open the current section to see the exact commands. Clicking a command fills it into the PowerShell prompt.",
        command: `${done}/${active.commands.length} commands complete`,
        commandType: "ui",
        emphasis: true
      },
      {
        title: "Type or run the next command",
        body: expected
          ? "Enter the next command in the PowerShell terminal. The repository graph, file explorer, and PR gate update from that command."
          : "The guided command list is complete. Use the graph and PR gate to explain what changed.",
        command: expected?.cmd || "git log --oneline",
        commandType: "real"
      },
      {
        title: "Start from the remote repo",
        body: "This lesson now begins with clone, remote inspection, and pull-before-branching so the workflow mirrors Azure DevOps repo work.",
        command: "git remote -v",
        commandType: "real"
      },
      {
        title: "Use inspection commands",
        body: "You can run status, branch, log, or diff commands during the lesson without losing your place.",
        command: "git status",
        commandType: "real"
      },
      {
        title: "Watch the PR gate",
        body: "The right-side ADO/PR panel shows whether context, branch, diff review, commit, publish, clean state, and merge are ready.",
        command: "git push",
        commandType: "real"
      },
    ],
    footerLabel: "Current goal:",
    footer: expected ? expected.desc : "Explain the branch, commit, publish, and merge story from the final graph."
  };
}

function getPracticeHowToContent() {
  const mission = getActivePracticeMission();
  return {
    kicker: "Active practice lab",
    title: "How to use Git practice mode",
    summary:
      "Practice mode is for independent reps. The simulator accepts Git commands, updates the live graph, and scores readiness from actual state.",
    steps: [
      {
        title: "Choose a mission",
        body: `Current mission: ${mission.title}. Read the objective, then decide which Git command proves the next state.`,
        command: mission.target,
        commandType: "ui",
        emphasis: true
      },
      {
        title: "Use the terminal as the source of truth",
        body: "Type commands into the PowerShell prompt. The graph, file explorer, command replay, and readiness panel all react to the command.",
        command: "git status",
        commandType: "real"
      },
      {
        title: "Publish before merge readiness",
        body: "Practice now includes the remote step. Push the branch so the simulated PR can exist outside your workstation.",
        command: "git push",
        commandType: "real"
      },
      {
        title: "Load failure states when ready",
        body: "Use Load conflict drill from this tab for randomized merge conflict practice after baseline branch work makes sense.",
        command: "Load conflict drill",
        commandType: "ui"
      },
      {
        title: "Use command replay",
        body: "Use command replay to inspect the path you took through the current mission.",
        command: "Command replay",
        commandType: "ui"
      }
    ],
    footerLabel: "Skill target:",
    footer: "Learners should recover from wrong branch, unstaged changes, dirty switches, and conflicts without guessing."
  };
}

function getCodexHowToContent() {
  const section = codexLab.sections[state.codexSection] || codexLab.sections[0];
  const firstCommand = section.steps?.[0]?.command || section.cards?.[0]?.command || "codex.cmd";
  return {
    kicker: "Active Codex lesson",
    title: "How to run the Codex lesson",
    summary: `${section.title}: ${section.intro || "Practice safe setup, prompting, repo inspection, and reviewable handoff artifacts."}`,
    steps: [
      {
        title: "Use the learning path order",
        body: "Move through setup, onboarding, prompting, ticket orientation, prompt library, handoff review, and safety.",
        command: "Next",
        commandType: "ui",
        emphasis: true
      },
      {
        title: "Practice in the mock CLI",
        body: "Type the section command into the Codex terminal. This lesson uses a simulator to teach sequence and judgment before real repo work.",
        command: firstCommand,
        commandType: "simulator"
      },
      {
        title: "Copy prompts deliberately",
        body: "Use copy buttons for reusable prompts, then adjust ticket text, repo area, expected output, and validation notes.",
        command: "Copy prompt",
        commandType: "ui"
      },
      {
        title: "Inspect before editing",
        body: "Codex should orient on files, risks, and assumptions before changing repo content.",
        command: "git status",
        commandType: "real"
      },
      {
        title: "Use machine-true commands later",
        body: "In real PowerShell on this workstation, use codex.cmd and npm.cmd when launcher scripts are blocked by execution policy.",
        command: "codex.cmd --version",
        commandType: "real"
      }
    ],
    footerLabel: "Rule:",
    footer: "Codex should improve judgment and speed, not hide Git state or validation responsibility."
  };
}

function getVSCodeHowToContent() {
  const section = vscodeLab.sections[state.vscodeSection] || vscodeLab.sections[0];
  return {
    kicker: "Active VS Code lab",
    title: "How to run the VS Code Lab",
    summary: `${section.title}: ${section.intro || "Practice editor setup, repo navigation, search, terminal, Source Control, diffs, and conflicts."}`,
    steps: [
      {
        title: "Start with extensions",
        body: "Install or recognize the required editor tools, then open the Oracle repo folder instead of a random file.",
        command: "code.cmd C:\\Repositories\\Oracle",
        commandType: "real",
        emphasis: true
      },
      {
        title: "Use Explorer and Search",
        body: "Find the SQL or markdown files in the repo tree. Search before editing so changes match existing patterns.",
        command: "Ctrl+Shift+F",
        commandType: "ui"
      },
      {
        title: "Use the integrated terminal",
        body: "Run Git from the VS Code terminal so Source Control, diffs, and branch state line up.",
        command: "git status",
        commandType: "real"
      },
      {
        title: "Review Source Control",
        body: "Inspect diffs before staging, stage the intended files only, then commit with a clear message.",
        command: "git diff",
        commandType: "real"
      },
    ],
    footerLabel: "Skill target:",
    footer: "Learners should know where files live, how to inspect diffs, and how editor state maps back to Git."
  };
}

function getSqlHowToContent() {
  const section = oracleSqlLab.sections[state.sqlSection] || oracleSqlLab.sections[0];
  const starter = section.query || "SELECT * FROM ccs_emergency_response_activity_extract;";
  return {
    kicker: "Active SQL lesson",
    title: "How to use the Oracle SQL worksheet",
    summary: `${section.title}: ${section.intro || "Run SELECT queries against repo-shaped Oracle SQL files and inspect the result grid."}`,
    steps: [
      {
        title: "Choose a repository SQL file",
        body: "Use the Connections panel to see the CCS SQL files modeled from the repo.",
        command: "show files",
        commandType: "ui",
        emphasis: true
      },
      {
        title: "Start broad",
        body: "Begin with SELECT * so learners see the grain and available columns before filtering.",
        command: starter,
        commandType: "real"
      },
      {
        title: "Run and read the result grid",
        body: "Use Run to return rows, then inspect columns, counts, and messages before moving to the next query.",
        command: "Run",
        commandType: "ui"
      },
      {
        title: "Describe before guessing",
        body: "Use describe when the table shape is unclear. This builds SQL reasoning instead of memorizing column names.",
        command: "describe ccs_emergency_response_activity_extract",
        commandType: "ui"
      },
    ],
    footerLabel: "Skill target:",
    footer: "Learners should explain output grain, filters, joins, and validation risks before treating a query as done."
  };
}

function getCapstoneHowToContent() {
  return {
    kicker: "Active capstone",
    title: "How to run Git Workflow 5",
    summary:
      "The capstone turns Codex-assisted repo inspection into durable review artifacts: notes, lineage, quality checks, and final review.",
    steps: [
      {
        title: "Start from read-only inspection",
        body: "Use the prompt library to ask Codex for repo orientation before creating artifacts.",
        command: "Inspect before editing",
        commandType: "ui",
        emphasis: true
      },
      {
        title: "Create durable files",
        body: "Complete REPO_NOTES, SQL_LINEAGE, DATA_QUALITY_REPORT, and CODEX_REVIEW rather than leaving the work in chat.",
        command: "Copy prompt",
        commandType: "ui"
      },
      {
        title: "Review the diff",
        body: "Use the terminal panel to inspect the changed-file surface before treating the kit as complete.",
        command: "git diff --stat",
        commandType: "real"
      },
      {
        title: "Use the prompt library",
        body: "Open the collapsible prompt panel for reusable prompts; copy them and tailor to the current repo question.",
        command: "Prompt library",
        commandType: "ui"
      }
    ],
    footerLabel: "Output:",
    footer: "A reviewer should be able to understand repo purpose, SQL lineage, data quality risks, and Codex assumptions from the files."
  };
}

function handleFlowFileDragStart(event) {
  const row = event.target.closest("[data-flow-file][draggable='true']");
  if (!row || !event.dataTransfer) {
    return;
  }

  const payload = {
    file: row.dataset.flowFile,
    location: row.dataset.flowLocation
  };
  const sourceCard = row.closest(".file-row") || row;

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("application/x-git-learning-file", JSON.stringify(payload));
  event.dataTransfer.setData("text/plain", payload.file);
  flowNativeDragActive = true;
  sourceCard.classList.add("dragging");
}

function handleFlowFileDragEnd() {
  flowNativeDragActive = false;
  flowPointerDrag = null;
  clearFlowDragState();
}

function handleFlowDragOver(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target) {
    return;
  }

  event.preventDefault();
  target.classList.add("drag-over");
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

function handleFlowDragLeave(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target || (event.relatedTarget && target.contains(event.relatedTarget))) {
    return;
  }

  target.classList.remove("drag-over");
}

function handleFlowDrop(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target || !event.dataTransfer) {
    return;
  }

  event.preventDefault();
  const payload = parseFlowDragPayload(event.dataTransfer.getData("application/x-git-learning-file"));
  clearFlowDragState();

  if (!payload?.file) {
    return;
  }

  const targetName = target.dataset.dropTarget;
  handleFlowVisualDrop(targetName, payload);
}

function handleFlowPointerDown(event) {
  if (event.button !== 0) {
    return;
  }

  const dragSource = event.target.closest("[data-flow-file]");
  if (!dragSource) {
    return;
  }
  const sourceCard = dragSource.closest(".file-row") || dragSource;

  flowPointerDrag = {
    file: dragSource.dataset.flowFile,
    location: dragSource.dataset.flowLocation,
    startX: event.clientX,
    startY: event.clientY,
    dragging: false,
    source: sourceCard
  };
}

function handleFlowPointerMove(event) {
  if (!flowPointerDrag || flowNativeDragActive) {
    return;
  }

  const deltaX = event.clientX - flowPointerDrag.startX;
  const deltaY = event.clientY - flowPointerDrag.startY;
  if (!flowPointerDrag.dragging && Math.hypot(deltaX, deltaY) < 8) {
    return;
  }

  event.preventDefault();
  flowPointerDrag.dragging = true;
  flowPointerDrag.source?.classList.add("dragging");
  clearFlowDropHighlights();

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-target]");
  if (target) {
    target.classList.add("drag-over");
  }
}

function handleFlowPointerUp(event) {
  if (!flowPointerDrag) {
    return;
  }

  const drag = flowPointerDrag;
  flowPointerDrag = null;
  if (flowNativeDragActive || !drag.dragging) {
    return;
  }

  event.preventDefault();
  suppressNextFlowClick = true;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-target]");
  clearFlowDragState();
  if (!target) {
    return;
  }

  handleFlowVisualDrop(target.dataset.dropTarget, drag);
}

function handleFlowPointerCancel() {
  flowPointerDrag = null;
  clearFlowDragState();
}

function handleFlowVisualDrop(targetName, payload) {
  if (targetName === "staging") {
    visualGitAdd(payload.file, payload.location);
    return;
  }

  if (targetName === "repository") {
    visualGitCommit(payload.file, payload.location);
  }
}

function visualGitAdd(file, location) {
  if (location !== "working") {
    appendTerminal("error", "Drop files from Step 1 into Step 2 to stage them with git add.");
    saveState();
    render();
    return;
  }

  const command = `git add ${file}`;
  appendTerminal("prompt", `${getPrompt()} ${command}`);
  const result = commandAdd([file]);
  appendTerminal(result.type, result.text);
  recordPracticeChallengeCommand(command, result);
  recordPracticeCommandEvent(command, result);

  if (result.type !== "error") {
    advanceGuidedStepForVisualCommand(command);
  }

  saveState();
  render();
}

function visualGitCommit(file, location) {
  if (location !== "staged") {
    appendTerminal("error", "Drop staged files from Step 2 into Step 3 to save the next commit.");
    saveState();
    render();
    return;
  }

  const status = getStatus();
  if (!status.staged.some((entry) => entry.name === file)) {
    appendTerminal("error", `${file} is not currently staged.`);
    saveState();
    render();
    return;
  }

  const expected = getActiveModule().commands[state.guidedStep];
  const command =
    expected && normalizeCommand(expected.cmd).startsWith("git commit ")
      ? expected.cmd
      : `git commit -m "${defaultCommitMessage()}"`;
  appendTerminal("prompt", `${getPrompt()} ${command}`);

  const result = commandCommit(tokenize(command).slice(2));
  appendTerminal(result.type, result.text);
  recordPracticeChallengeCommand(command, result);
  recordPracticeCommandEvent(command, result);

  if (result.type !== "error") {
    advanceGuidedStepForVisualCommand(command);
  }

  saveState();
  render();
}

function advanceGuidedStepForVisualCommand(command) {
  const expected = getActiveModule().commands[state.guidedStep];
  if (state.inLesson && expected && guidedCommandMatchesExpected(command, expected)) {
    appendTerminal("success", `Guided step complete - ${expected.desc}`);
    state.guidedStep += 1;
  }

  maybeAdvanceLesson();
}

function parseFlowDragPayload(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function clearFlowDragState() {
  clearFlowDropHighlights();
  document.querySelectorAll(".dragging, .drag-over").forEach((element) => {
    element.classList.remove("dragging", "drag-over");
  });
}

function clearFlowDropHighlights() {
  document.querySelectorAll(".drag-over").forEach((element) => {
    element.classList.remove("drag-over");
  });
}

function handleAction(button) {
  const action = button.dataset.action;
  if (devPlayback && action !== "run-command" && action !== "toggle-theme" && action !== "open-how-to" && action !== "close-how-to") {
    cancelDevPlayback();
  }

  if (action === "open-how-to") {
    openHowToModal();
    return;
  }

  if (action === "close-how-to") {
    closeHowToModal();
    return;
  }

  if (action === "start-lesson") {
    state = createTrainingState(button.dataset.moduleId || "git-basics");
    saveState();
    render();
    queuePrimaryInputFocus();
    announceStatus("Lab reset. Start again at step 1.");
    return;
  }

  if (action === "open-simulator") {
    state = createAdvancedState();
    saveState();
    render();
    queuePrimaryInputFocus();
    return;
  }

  if (action === "mark-visual-branching-complete") {
    markLabComplete(VISUAL_BRANCHING_LAB_ID);
    saveState();
    render();
    return;
  }

  if (action === "open-codex-lesson") {
    state = createCodexState();
    saveState();
    render();
    queuePrimaryInputFocus();
    return;
  }

  if (action === "open-capstone-lab") {
    state = createCapstoneState();
    saveState();
    render();
    return;
  }

  if (action === "open-vscode-lab") {
    state = createVSCodeState();
    saveState();
    render();
    queuePrimaryInputFocus();
    return;
  }

  if (action === "open-sql-lab") {
    state = createSqlState();
    saveState();
    render();
    queuePrimaryInputFocus();
    return;
  }

  if (action === "back-portal") {
    state.inLesson = false;
    saveState();
    render();
    return;
  }

  if (action === "reset") {
    const activeModuleId = state.activeModuleId || "git-basics";
    state = isCodexMode()
      ? createCodexState()
      : isCapstoneMode()
        ? createCapstoneState()
        : isVSCodeMode()
          ? createVSCodeState()
          : isSqlMode()
            ? createSqlState()
            : isPracticeMode()
              ? createAdvancedState()
              : state.inLesson
                ? createTrainingState(activeModuleId)
                : createInitialState();
    saveState();
    render();
    queuePrimaryInputFocus();
    return;
  }

  if (action === "run-command") {
    submitTerminalCommand();
    return;
  }

  if (action === "start-conflict") {
    state = createConflictState();
    state.practiceMission = "conflict-recovery";
    state.practiceReferenceOpen = false;
    saveState();
    render();
    return;
  }

  if (action === "toggle-practice-reference") {
    state.practiceReferenceOpen = !state.practiceReferenceOpen;
    saveState();
    render();
    return;
  }

  if (action === "practice-challenge-start") {
    startPracticeChallenge(button.dataset.challengeId);
    saveState();
    render();
    return;
  }

  if (action === "practice-challenge-select") {
    selectPracticeChallenge(button.dataset.challengeId);
    saveState();
    render();
    return;
  }

  if (action === "practice-challenge-next") {
    startNextPracticeChallenge();
    saveState();
    render();
    return;
  }

  if (action === "practice-challenge-hint") {
    togglePracticeChallengeHint();
    saveState();
    render();
    return;
  }

  if (action === "practice-challenge-reset") {
    resetPracticeChallenges();
    saveState();
    render();
    return;
  }

  if (action === "practice-mission-start") {
    state = createPracticeMissionState(button.dataset.missionId);
    saveState();
    render();
    return;
  }

  if (action === "practice-mission-random") {
    state = createPracticeMissionState(randomPracticeMissionId());
    saveState();
    render();
    return;
  }

  if (action === "practice-difficulty") {
    setPracticeDifficulty(button.dataset.difficulty);
    saveState();
    render();
    return;
  }

  if (action === "practice-replay-jump") {
    replayPracticeToCommand(Number(button.dataset.replayIndex));
    saveState();
    render();
    return;
  }

  if (action === "practice-replay-all") {
    replayPracticeToCommand(ensureCommandReplay().length - 1);
    saveState();
    render();
    return;
  }

  if (action === "practice-select-commit") {
    selectPracticeCommit(button.dataset.commitId);
    saveState();
    render();
    return;
  }

  if (action === "toggle-theme") {
    toggleTheme();
    return;
  }

  if (action === "toggle-repo-explorer") {
    state.repoExplorerOpen = !state.repoExplorerOpen;
    state.repoExplorerTouched = true;
    saveState();
    render();
    return;
  }

  if (action === "toggle-explorer-folder") {
    toggleExplorerFolder(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-explorer-file") {
    toggleExplorerFile(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-flow-file") {
    toggleFlowFile(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-ready-check") {
    toggleReadyCheck(button.dataset.readyKey);
    saveState();
    render();
    return;
  }

  if (action === "lesson-prev" || action === "lesson-next") {
    const delta = action === "lesson-next" ? 1 : -1;
    navigateGuidedLesson(delta);
    saveState();
    render();
    return;
  }

  if (action === "codex-prev" || action === "codex-next" || action === "codex-section") {
    const current = Number.isInteger(state.codexSection) ? state.codexSection : 0;
    const requested =
      action === "codex-section"
        ? Number(button.dataset.codexSection)
        : current + (action === "codex-next" ? 1 : -1);
    state.codexSection = clampIndex(requested, codexLab.sections.length);
    saveState();
    render();
    return;
  }

  if (action === "vscode-prev" || action === "vscode-next" || action === "vscode-section") {
    const current = Number.isInteger(state.vscodeSection) ? state.vscodeSection : 0;
    const requested =
      action === "vscode-section"
        ? Number(button.dataset.vscodeSection)
        : current + (action === "vscode-next" ? 1 : -1);
    state.vscodeSection = clampIndex(requested, vscodeLab.sections.length);
    saveState();
    render();
    return;
  }

  if (action === "sql-prev" || action === "sql-next" || action === "sql-section") {
    ensureSqlWorksheetState();
    const current = Number.isInteger(state.sqlSection) ? state.sqlSection : 0;
    const requested =
      action === "sql-section"
        ? Number(button.dataset.sqlSection)
        : current + (action === "sql-next" ? 1 : -1);
    state.sqlSection = clampIndex(requested, oracleSqlLab.sections.length);
    saveState();
    render();
    return;
  }

  if (action === "start-quiz-round") {
    const round = clampQuizRound(Number(button.dataset.round));
    state.quizSession = createQuizSession(state.activeModuleId, round);
    saveState();
    render();
    return;
  }

  if (action === "show-quiz-hint") {
    showQuizHint(button.dataset.quizId);
    saveState();
    render();
    return;
  }

  updateCommandPlaceholder();
}

function runCommand(rawCommand) {
  const command = String(rawCommand || "").trim();
  if (!command) {
    return;
  }

  if (isDevPlaybackCommand(command)) {
    runDevPlayback(command);
    return;
  }

  if (devPlayback) {
    cancelDevPlayback("Developer playback stopped because a manual command was entered.");
  }

  if (command.toLowerCase() === "clear") {
    state.terminal = [];
    saveState();
    render();
    announceStatus("Terminal cleared.");
    return;
  }

  if (isCodexMode()) {
    runCodexCommand(command);
    return;
  }

  if (isSqlMode()) {
    runSqlCommand(command);
    return;
  }

  if (isVSCodeMode()) {
    runVSCodeCommand(command);
    return;
  }

  appendTerminal("prompt", `${getPrompt()} ${command}`);

  const activeModule = getActiveModule();
  const expected = activeModule.commands[state.guidedStep];
  if (state.inLesson && !isPracticeMode() && expected && !isGuidedUtilityCommand(command, expected)) {
    if (!guidedCommandMatchesExpected(command, expected)) {
      appendTerminal("error", `Wrong command. Expected: ${expected.cmd}`);
      saveState();
      render();
      announceStatus(`Incorrect command. Expected ${expected.cmd}.`);
      return;
    }

    const result = executeCommand(command);
    if (result.type === "error") {
      appendTerminal(result.type, result.text);
      saveState();
      render();
      announceStatus(result.text);
      return;
    }

    appendTerminal("success", `OK - ${expected.desc}`);
    if (result.text) {
      appendTerminal(result.type, result.text);
    }
    state.guidedStep += 1;
    maybeAdvanceLesson();
    saveState();
    render();
    announceStatus(result.text || expected.desc);
    return;
  }

  const result = executeCommand(command);
  appendTerminal(result.type, result.text);
  recordPracticeChallengeCommand(command, result);
  recordPracticeCommandEvent(command, result);
  if (!isPracticeMode()) {
    maybeAdvanceLesson();
  }
  saveState();
  render();
  announceStatus(result.text);
}

function isDevPlaybackCommand(command) {
  return getAllDevPlaybackCommands().includes(normalizeCommand(command));
}

function runDevPlayback(command) {
  const normalized = normalizeCommand(command);
  const expectedDevPlaybackCommands = getExpectedDevPlaybackCommands();
  const prompt = isCodexMode() ? getCodexPrompt() : isSqlMode() ? getSqlPrompt() : getPrompt();
  appendTerminal("prompt", `${prompt} ${command}`);

  if (!expectedDevPlaybackCommands.includes(normalized)) {
    appendTerminal("note", getDevPlaybackUsageMessage());
    saveState();
    render();
    return;
  }

  if (isCodexMode()) {
    runCodexDevPlayback();
  } else if (isSqlMode()) {
    runSqlDevPlayback();
  } else if (isVSCodeMode()) {
    runVSCodeDevPlayback();
  } else if (isPracticeMode()) {
    runPracticeDevPlayback();
  } else if (state.inLesson) {
    runGuidedGitDevPlayback();
  } else {
    appendTerminal("note", "Open a lesson first, then use How to when you want the simulator walkthrough.");
  }

  saveState();
  render();
}

function getAllDevPlaybackCommands() {
  return [
    DEV_PLAYBACK_GIT_COMMAND,
    DEV_PLAYBACK_CODEX_COMMAND,
    DEV_PLAYBACK_VSCODE_COMMAND,
    DEV_PLAYBACK_SQL_COMMAND,
    WIZARD_GIT_COMMAND,
    WIZARD_CODEX_COMMAND,
    WIZARD_VSCODE_COMMAND,
    WIZARD_SQL_COMMAND
  ].map(normalizeCommand);
}

function getExpectedDevPlaybackCommands() {
  if (isCodexMode()) {
    return [DEV_PLAYBACK_CODEX_COMMAND, WIZARD_CODEX_COMMAND].map(normalizeCommand);
  }
  if (isVSCodeMode()) {
    return [DEV_PLAYBACK_VSCODE_COMMAND, WIZARD_VSCODE_COMMAND].map(normalizeCommand);
  }
  if (isSqlMode()) {
    return [DEV_PLAYBACK_SQL_COMMAND, WIZARD_SQL_COMMAND].map(normalizeCommand);
  }
  return [DEV_PLAYBACK_GIT_COMMAND, WIZARD_GIT_COMMAND].map(normalizeCommand);
}

function getDevPlaybackUsageMessage() {
  if (isCodexMode()) {
    return "This lesson uses codex wizard mode for developer playback.";
  }
  if (isVSCodeMode()) {
    return "This lesson uses code --wizard mode for developer playback.";
  }
  if (isSqlMode()) {
    return "This lesson uses sql wizard mode for developer playback.";
  }
  return "This lesson uses git wizard mode for developer playback.";
}

function runGuidedGitDevPlayback() {
  const active = getActiveModule();
  if (state.guidedStep >= active.commands.length) {
    appendTerminal("success", "Developer playback: this module is already complete.");
    return;
  }

  const start = state.guidedStep;
  const lessonTitle = getActiveLessons()[getCurrentLessonIndex()]?.title || `Step ${start + 1}`;
  const steps = [];
  for (let index = start; index < active.commands.length; index += 1) {
    const item = active.commands[index];
    steps.push({
      command: item.cmd,
      run: () => {
        appendTerminal("prompt", `${getPrompt()} ${item.cmd}`);
        const result = executeCommand(item.cmd);
        if (result.type === "error") {
          appendTerminal("error", `Developer playback stopped at step ${index + 1}: ${result.text}`);
          state.guidedStep = index;
          return false;
        }
        appendTerminal("success", `Developer playback ran - ${item.desc}`);
        if (result.text) {
          appendTerminal(result.type, result.text);
        }
        state.guidedStep = index + 1;
        maybeAdvanceLesson();
        return true;
      }
    });
  }

  startDevPlayback({
    label: `Developer playback: running ${active.title} from ${lessonTitle} through lab completion.`,
    steps,
    onComplete: () => {
      appendTerminal("note", "Developer playback: full lab complete.");
    }
  });
}

function runPracticeDevPlayback() {
  const playbackState = ensurePracticeDevPlaybackState();
  const sections = getPracticeDevPlaybackSections(playbackState.branchName);
  if (playbackState.section >= sections.length) {
    appendTerminal("success", "Developer playback: the practice demo path is already complete.");
    return;
  }

  startPracticeChallengeTrackerForDevPlayback();
  const startSection = playbackState.section;
  const steps = [];
  sections.slice(startSection).forEach((section, offset) => {
    const sectionIndex = startSection + offset;
    section.commands.forEach((command, commandIndex) => {
      const isLastInSection = commandIndex === section.commands.length - 1;
      steps.push({
        command,
        run: () => {
          appendTerminal("prompt", `${getPrompt()} ${command}`);
          const result = executeCommand(command);
          appendTerminal(result.type, result.text);
          recordPracticeChallengeCommand(command, result);
          recordPracticeCommandEvent(command, result);
          if (result.type === "error") {
            appendTerminal("error", "Developer playback stopped so the learner can correct the simulator state.");
            return false;
          }
          if (isLastInSection) {
            playbackState.section = sectionIndex + 1;
          }
          return true;
        }
      });
    });
  });

  startDevPlayback({
    label: `Developer playback: running the full practice lab from ${sections[startSection].title}.`,
    steps,
    onComplete: () => {
      appendTerminal("note", "Developer playback: practice demo complete.");
    }
  });
}

function startPracticeChallengeTrackerForDevPlayback() {
  const mode = ensureChallengeModeState();
  if (mode.started || getPracticeChallengeList().every((challenge) => mode.completedIds.includes(challenge.id))) {
    return;
  }

  const next = getPracticeChallengeList().find((challenge) => !mode.completedIds.includes(challenge.id));
  if (!next) {
    return;
  }

  mode.activeId = next.id;
  mode.started = true;
  mode.commandLog = [];
  mode.hintOpen = false;
  appendTerminal("note", `Challenge tracker following developer playback: ${next.title}.`);
}

function ensurePracticeDevPlaybackState() {
  if (!state.practiceDevPlayback || typeof state.practiceDevPlayback !== "object") {
    state.practiceDevPlayback = {
      section: 0,
      branchName: `feature/dev-playback-practice-${Math.max(1, state.nextCommit || 1)}`
    };
  }
  return state.practiceDevPlayback;
}

function getPracticeDevPlaybackSections(branchName) {
  return [
    {
      title: "Inspect baseline",
      commands: ["git status", "git branch", "git log --oneline"]
    },
    {
      title: "Create a branch",
      commands: [`git switch -c ${branchName}`]
    },
    {
      title: "Edit and inspect",
      commands: [`edit ${oracleLab.featureFile}`, "git status", "git diff"]
    },
    {
      title: "Stage and commit",
      commands: [
        `git add ${oracleLab.featureFile}`,
        `git commit -m "${oracleLab.featureCommitMessage}"`,
        `git push -u origin ${branchName}`,
        "git log --oneline"
      ]
    },
    {
      title: "Merge to main",
      commands: ["git switch main", `git merge ${branchName}`, "git log --oneline"]
    }
  ];
}

function normalizeChallengeModeObject(value) {
  const available = getPracticeChallengeList();
  const mode =
    value && typeof value === "object" && !Array.isArray(value)
      ? { ...createChallengeModeState(), ...value }
      : createChallengeModeState();
  mode.commandLog = Array.isArray(mode.commandLog) ? mode.commandLog : [];
  mode.completedIds = Array.isArray(mode.completedIds) ? mode.completedIds : [];
  mode.score = Number.isFinite(mode.score) ? mode.score : 0;
  mode.streak = Number.isFinite(mode.streak) ? mode.streak : 0;
  mode.misses = Number.isFinite(mode.misses) ? mode.misses : 0;
  mode.started = Boolean(mode.started);
  mode.hintOpen = Boolean(mode.hintOpen);

  if (!available.some((challenge) => challenge.id === mode.activeId)) {
    mode.activeId = available[0]?.id || "";
    mode.started = false;
    mode.commandLog = [];
  }

  mode.completedIds = mode.completedIds.filter((id, index, ids) => {
      return ids.indexOf(id) === index && available.some((challenge) => challenge.id === id);
  });

  return mode;
}

function ensureChallengeModeState() {
  const normalized = normalizeChallengeModeObject(state.challengeMode);
  if (state.challengeMode && typeof state.challengeMode === "object" && !Array.isArray(state.challengeMode)) {
    Object.assign(state.challengeMode, normalized);
  } else {
    state.challengeMode = normalized;
  }
  return state.challengeMode;
}

function getPracticeChallengeList() {
  return practiceChallenges;
}

function getPracticeMissionList() {
  return practiceMissions;
}

function getActivePracticeMission() {
  const missions = getPracticeMissionList();
  return missions.find((mission) => mission.id === state.practiceMission) || missions[0];
}

function randomPracticeMissionId() {
  const missions = getPracticeMissionList();
  if (!missions.length) {
    return "orientation-path";
  }
  const candidates = missions.filter((mission) => mission.id !== state.practiceMission);
  const pool = candidates.length ? candidates : missions;
  return pool[Math.floor(Math.random() * pool.length)].id;
}

function createPracticeMissionState(missionId = "orientation-path") {
  const previousProgress = normalizeLearnerProgress(state?.learnerProgress);
  const previousDifficulty = normalizePracticeDifficulty(state?.practiceDifficulty);
  const previousExplorer = {
    repoExplorerOpen: state?.repoExplorerOpen,
    repoExplorerTouched: state?.repoExplorerTouched,
    explorerCollapsedFolders: state?.explorerCollapsedFolders,
    explorerExpandedFolders: state?.explorerExpandedFolders,
    explorerExpandedFiles: state?.explorerExpandedFiles,
    flowCollapsedFiles: state?.flowCollapsedFiles
  };
  const mission = getPracticeMissionList().find((item) => item.id === missionId) || getPracticeMissionList()[0];
  let nextState = mission?.setup === "conflict" ? createConflictState(pickConflictScenario()) : createAdvancedState();

  nextState.practiceMission = mission?.id || "orientation-path";
  nextState.practiceDifficulty = previousDifficulty;
  nextState.learnerProgress = previousProgress;
  nextState.commandReplay = [];
  nextState.challengeMode = createChallengeModeState();
  nextState.selectedCommitId = nextState.branches?.[nextState.currentBranch] || nextState.commits?.[0]?.id || null;
  nextState.selectedFilePath = null;
  nextState.repoExplorerOpen = Boolean(previousExplorer.repoExplorerOpen ?? true);
  nextState.repoExplorerTouched = Boolean(previousExplorer.repoExplorerTouched);
  nextState.explorerCollapsedFolders = Array.isArray(previousExplorer.explorerCollapsedFolders)
    ? [...previousExplorer.explorerCollapsedFolders]
    : [];
  nextState.explorerExpandedFolders = Array.isArray(previousExplorer.explorerExpandedFolders)
    ? [...previousExplorer.explorerExpandedFolders]
    : [];
  nextState.explorerExpandedFiles = Array.isArray(previousExplorer.explorerExpandedFiles)
    ? [...previousExplorer.explorerExpandedFiles]
    : [];
  nextState.flowCollapsedFiles = Array.isArray(previousExplorer.flowCollapsedFiles)
    ? [...previousExplorer.flowCollapsedFiles]
    : [];

  applyPracticeMissionSetup(nextState, mission);
  nextState.terminal = [
    {
      type: "note",
      text: `Mission loaded: ${mission.title}. ${mission.prompt}`
    },
    {
      type: "note",
      text: mission.target
    }
  ];

  return nextState;
}

function applyPracticeMissionSetup(nextState, mission) {
  if (!mission) {
    return;
  }

  if (mission.setup === "unstaged" || mission.setup === "dirty-switch") {
    const branch = mission.setup === "dirty-switch" ? "feature/recovery-dirty-switch" : "feature/recovery-stage";
    const baseHead = nextState.branches.main || nextState.commits[0]?.id || null;
    const lane = nextPracticeLaneForState(nextState);
    nextState.branches[branch] = baseHead;
    nextState.branchLanes[branch] = lane;
    nextState.currentBranch = branch;
    nextState.indexFiles = clone(getFilesForCommitInState(nextState, baseHead));
    nextState.workingFiles = clone(nextState.indexFiles);
    nextState.workingFiles[oracleLab.featureFile] =
      `${nextState.workingFiles[oracleLab.featureFile] || "-- Emergency orders ZIP report\n"}\n-- Recovery drill edit: validate prior-week ZIP grouping.\n`;
    nextState.taskFlags.branchCreated = true;
    nextState.selectedFilePath = oracleLab.featureFile;
  }

  if (mission.setup === "conflict") {
    nextState.practiceMission = mission.id;
    nextState.lessonIndex = 4;
  }
}

function nextPracticeLaneForState(nextState) {
  return Math.max(0, ...Object.values(nextState.branchLanes || {})) + 1;
}

function getFilesForCommitInState(nextState, commitId) {
  return clone(nextState.commits?.find((commit) => commit.id === commitId)?.files || {});
}

function normalizePracticeDifficulty(value) {
  return practiceDifficultyModes.some((mode) => mode.id === value) ? value : "guided";
}

function setPracticeDifficulty(value) {
  state.practiceDifficulty = normalizePracticeDifficulty(value);
}

function normalizeLearnerProgress(value) {
  const progress =
    value && typeof value === "object" && !Array.isArray(value)
      ? { ...createLearnerProgressState(), ...value }
      : createLearnerProgressState();
  progress.badges = Array.isArray(progress.badges) ? uniqueSorted(progress.badges) : [];
  progress.completedLabs = Array.isArray(progress.completedLabs) ? uniqueSorted(progress.completedLabs) : [];
  progress.completedMissions = Array.isArray(progress.completedMissions) ? uniqueSorted(progress.completedMissions) : [];
  progress.bestReadiness = Number.isFinite(progress.bestReadiness) ? progress.bestReadiness : 0;
  progress.lastReadiness = Number.isFinite(progress.lastReadiness) ? progress.lastReadiness : 0;
  progress.noHintCompletions = Number.isFinite(progress.noHintCompletions) ? progress.noHintCompletions : 0;
  return progress;
}

function ensureLearnerProgress() {
  state.learnerProgress = normalizeLearnerProgress(state.learnerProgress);
  return state.learnerProgress;
}

function markLabComplete(labId) {
  const progress = ensureLearnerProgress();
  if (!progress.completedLabs.includes(labId)) {
    progress.completedLabs.push(labId);
    progress.completedLabs = uniqueSorted(progress.completedLabs);
  }
}

function syncLearnerLabProgress() {
  const progress = ensureLearnerProgress();
  const activeModuleId = state?.activeModuleId || "";
  const guidedComplete =
    state?.inLesson &&
    state?.viewMode === "guided" &&
    activeModuleId &&
    getModuleById(activeModuleId)?.commands &&
    (state.guidedStep >= getModuleById(activeModuleId).commands.length || state.taskFlags?.merged);

  if (guidedComplete && activeModuleId) {
    markLabComplete(activeModuleId);
  }

  if (progress.completedMissions.includes("orientation-path")) {
    markLabComplete("practice");
  }

  if (state?.viewMode === "capstone" && state?.inLesson) {
    const hasRepoReviewArtifacts = ["REPO_NOTES.md", "SQL_LINEAGE.md", "DATA_QUALITY_REPORT.md", "CODEX_REVIEW.md"].every((name) =>
      Object.keys(state.workingFiles || {}).some((path) => path.endsWith(name))
    );
    if (hasRepoReviewArtifacts) {
      markLabComplete(capstoneLab.id);
    }
  }

  return progress;
}

function getModuleById(moduleId) {
  return modules.find((module) => module.id === moduleId);
}

function isLabComplete(labId) {
  return syncLearnerLabProgress().completedLabs.includes(labId);
}

function getGitWorkflowPortalSteps() {
  const gitModule = modules[0];
  const projectModule = modules.find((module) => module.id === "project-work");
  return [
    {
      id: gitModule.id,
      title: gitModule.title,
      description: gitModule.description,
      action: "start-lesson",
      actionLabel: gitModule.startLabel || "Start lesson",
      moduleId: gitModule.id,
      track: ["Identity", "ADO sign-in", "Clone", "Remote", "Pull", "Branch from main", "Diff", "Commit", "Publish", "PR"]
    },
    {
      id: VISUAL_BRANCHING_LAB_ID,
      title: "Git Workflow 2: Visual Branching Gym",
      description:
        "Use the local Learn Git Branching trainer to build the graph mental model for commits, branches, merge, rebase, and remotes before recovery drills.",
      href: LEARN_GIT_BRANCHING_URL,
      actionLabel: "Open local visual trainer",
      track: ["Commit graph", "Branch", "Merge", "Rebase", "Remote"]
    },
    {
      id: "practice",
      title: "Git Workflow 3: Recovery and Real-File Drills",
      description: "Reinforce the flow with wrong-branch, dirty-state, conflict, replay, and PR-readiness habits.",
      action: "open-simulator",
      actionLabel: "Open practice lab",
      track: ["Status", "Diff", "Commit", "Push", "Recover", "Conflict", "Replay"]
    },
    {
      id: projectModule?.id || "project-work",
      title: projectModule?.title || "Git Workflow 4: Project Capsule and Workstreams",
      description:
        projectModule?.description ||
        "Create visible project context on main, then branch for day-to-day workstreams.",
      action: "start-lesson",
      actionLabel: projectModule?.startLabel || "Start lesson",
      moduleId: projectModule?.id || "project-work",
      track: ["Method", "Capsule", "Main", "Workstream", "Diff", "Publish", "Merge"]
    },
    {
      id: capstoneLab.id,
      title: capstoneLab.title,
      description: capstoneLab.description,
      action: "open-capstone-lab",
      actionLabel: "Open handoff workflow",
      track: ["Inspect", "Notes", "Lineage", "Quality", "Review", "Handoff"]
    }
  ];
}

function getNextGitWorkflowStep() {
  const steps = getGitWorkflowPortalSteps();
  return steps.find((step) => !isLabComplete(step.id)) || null;
}

function ensureCommandReplay() {
  state.commandReplay = Array.isArray(state.commandReplay) ? state.commandReplay : [];
  return state.commandReplay;
}

function recordPracticeCommandEvent(command, result) {
  if (!isPracticeMode() || practiceReplayActive) {
    return;
  }

  const replay = ensureCommandReplay();
  const status = state.initialized ? getStatus() : { clean: false, staged: [], unstaged: [], untracked: [] };
  replay.push({
    command: String(command || "").trim(),
    resultType: result?.type || "note",
    branch: state.currentBranch || "main",
    head: currentHeadLabel(),
    clean: Boolean(status.clean),
    open: status.unstaged.length + status.untracked.length,
    staged: status.staged.length
  });

  if (replay.length > 40) {
    state.commandReplay = replay.slice(-40);
  }

  updatePracticeAwards(command, result);
  maybeCompletePracticeMission();
}

function updatePracticeAwards(command, result) {
  const progress = ensureLearnerProgress();
  const normalized = normalizeCommand(command);
  const replay = ensureCommandReplay().map((entry) => normalizeCommand(entry.command));

  if (["git status", "git branch", "git log --oneline"].every((cmd) => replay.some((item) => commandMatches(item, cmd)))) {
    addBadge("repo-scout");
  }
  if (state.taskFlags?.branchCreated || Object.keys(state.branches || {}).some((branch) => branch !== "main")) {
    addBadge("branch-builder");
  }
  if (state.taskFlags?.branchCommitted) {
    addBadge("reviewable-commit");
  }
  if (state.taskFlags?.pushed || Object.keys(state.remoteBranches || {}).some((branch) => branch !== "origin/main")) {
    addBadge("branch-published");
  }
  if (state.taskFlags?.merged) {
    addBadge("merge-ready");
  }
  if (state.taskFlags?.conflictResolved || normalized.startsWith("resolve ")) {
    addBadge("conflict-resolver");
  }
  const readiness = calculatePRReadiness();
  progress.lastReadiness = readiness.score;
  progress.bestReadiness = Math.max(progress.bestReadiness || 0, readiness.score);
}

function addBadge(id) {
  const progress = ensureLearnerProgress();
  if (!progress.badges.includes(id)) {
    progress.badges.push(id);
  }
}

function maybeCompletePracticeMission() {
  const mission = getActivePracticeMission();
  if (!mission) {
    return;
  }
  const progress = ensureLearnerProgress();
  if (progress.completedMissions.includes(mission.id)) {
    return;
  }

  const replay = ensureCommandReplay().map((entry) => normalizeCommand(entry.command));
  const ran = (expected) => replay.some((entry) => commandMatches(entry, expected));
  const missionComplete =
    mission.id === "orientation-path"
      ? state.taskFlags?.merged && ran("git log --oneline")
      : mission.id === "wrong-branch-recovery"
        ? state.taskFlags?.branchCreated && state.taskFlags?.branchCommitted
        : mission.id === "unstaged-recovery"
          ? state.taskFlags?.branchCommitted
          : mission.id === "dirty-switch-recovery"
            ? state.taskFlags?.branchCommitted && (state.currentBranch === "main" || ran("git switch main"))
            : mission.id === "conflict-recovery"
              ? state.taskFlags?.conflictResolved && state.taskFlags?.committed
              : false;

  if (!missionComplete) {
    return;
  }

  progress.completedMissions.push(mission.id);
  appendTerminal("success", `Mission complete: ${mission.title}.`);
  appendTerminal("note", mission.success);
}

function calculatePRReadiness() {
  const replay = ensureCommandReplay().map((entry) => normalizeCommand(entry.command));
  const ran = (expected) => replay.some((entry) => commandMatches(entry, expected));
  const status = state.initialized ? getStatus() : { clean: false, staged: [], unstaged: [], untracked: [] };
  const checks = [
    { id: "inspect", label: "Baseline inspected", points: 12, complete: ran("git status") && ran("git branch") },
    { id: "branch", label: "Task branch created", points: 15, complete: Boolean(state.taskFlags?.branchCreated) || Object.keys(state.branches || {}).some((branch) => branch !== "main") },
    { id: "diff", label: "Change reviewed", points: 15, complete: ran("git diff") || ran("git diff --stat") },
    { id: "commit", label: "Reviewable commit saved", points: 15, complete: Boolean(state.taskFlags?.branchCommitted || state.taskFlags?.committed) },
    {
      id: "publish",
      label: "Branch published",
      points: 15,
      complete:
        Boolean(state.taskFlags?.pushed) ||
        Object.keys(state.remoteBranches || {}).some((branch) => branch !== "origin/main")
    },
    { id: "clean", label: "Working tree clean", points: 10, complete: Boolean(status.clean) && !state.pendingMerge },
    { id: "history", label: "History verified", points: 8, complete: ran("git log --oneline") },
    { id: "merge", label: "Merge or PR story complete", points: 10, complete: Boolean(state.taskFlags?.merged) }
  ];
  const score = Math.min(100, checks.reduce((total, check) => total + (check.complete ? check.points : 0), 0));
  return { score, checks };
}

function replayPracticeToCommand(index) {
  const replay = ensureCommandReplay();
  if (!replay.length || index < 0) {
    appendTerminal("note", "No practice commands have been captured yet.");
    return;
  }

  const missionId = state.practiceMission || "orientation-path";
  const difficulty = normalizePracticeDifficulty(state.practiceDifficulty);
  const progress = normalizeLearnerProgress(state.learnerProgress);
  const commands = replay.slice(0, Math.min(index, replay.length - 1) + 1).map((entry) => entry.command);
  const nextState = createPracticeMissionState(missionId);
  nextState.practiceDifficulty = difficulty;
  nextState.learnerProgress = progress;
  nextState.commandReplay = [];
  nextState.terminal = [
    {
      type: "note",
      text: `Replaying ${commands.length} captured command${commands.length === 1 ? "" : "s"} from the current mission.`
    }
  ];

  state = nextState;
  practiceReplayActive = true;
  for (const command of commands) {
    appendTerminal("prompt", `${getPrompt()} ${command}`);
    const result = executeCommand(command);
    appendTerminal(result.type, result.text);
    state.commandReplay.push({
      command,
      resultType: result?.type || "note",
      branch: state.currentBranch || "main",
      head: currentHeadLabel(),
      clean: state.initialized ? getStatus().clean : false,
      replayed: true
    });
    if (result.type === "error") {
      appendTerminal("error", "Replay stopped at the first command that no longer matches the rebuilt state.");
      break;
    }
  }
  practiceReplayActive = false;
  updatePracticeAwards(commands[commands.length - 1] || "", { type: "success" });
}

function selectPracticeCommit(commitId) {
  if (!commitId || !state.commits?.some((commit) => commit.id === commitId)) {
    return;
  }
  state.selectedCommitId = commitId;
  const files = changedFilesForCommit(commitId);
  state.selectedFilePath = files[0] || state.selectedFilePath || null;
  files.forEach((path) => expandExplorerFoldersForPath(path));
}

function expandExplorerFoldersForPath(path) {
  const parts = String(path || "").split(/[\\/]/).filter(Boolean);
  let current = "";
  parts.slice(0, -1).forEach((part) => {
    current = [current, part].filter(Boolean).join("/");
    setExplorerFolderExpanded("work", current, true);
  });
}

function changedFilesForCommit(commitId) {
  const commit = getCommitSafe(commitId);
  if (!commit) {
    return [];
  }
  const baseFiles = commit.parents?.[0] ? getCommitSafe(commit.parents[0])?.files || {} : {};
  return uniqueSorted(
    [...Object.keys(baseFiles), ...Object.keys(commit.files || {})].filter((name) => baseFiles[name] !== commit.files[name])
  );
}

function getCommitSafe(commitId) {
  return state.commits?.find((commit) => commit.id === commitId) || null;
}

function getActivePracticeChallenge() {
  const mode = ensureChallengeModeState();
  return getPracticeChallengeList().find((challenge) => challenge.id === mode.activeId) || getPracticeChallengeList()[0];
}

function startPracticeChallenge(challengeId) {
  if (!isPracticeMode()) {
    return;
  }

  const mode = ensureChallengeModeState();
  const challenge = getPracticeChallengeList().find((item) => item.id === challengeId) || getActivePracticeChallenge();
  if (!challenge) {
    return;
  }

  mode.activeId = challenge.id;
  mode.started = true;
  mode.commandLog = [];
  mode.hintOpen = false;
  mode.lastCompletedId = null;
  appendTerminal("note", `Challenge mode started: ${challenge.title}.`);
  maybeCompletePracticeChallenge();
}

function selectPracticeChallenge(challengeId) {
  const challenge = getPracticeChallengeList().find((item) => item.id === challengeId);
  if (!challenge) {
    return;
  }

  const mode = ensureChallengeModeState();
  mode.activeId = challenge.id;
  mode.started = false;
  mode.commandLog = [];
  mode.hintOpen = false;
  mode.lastCompletedId = null;
}

function startNextPracticeChallenge() {
  const mode = ensureChallengeModeState();
  const challenges = getPracticeChallengeList();
  const currentIndex = Math.max(0, challenges.findIndex((challenge) => challenge.id === mode.activeId));
  const next =
    challenges.slice(currentIndex + 1).find((challenge) => !mode.completedIds.includes(challenge.id)) ||
    challenges.find((challenge) => !mode.completedIds.includes(challenge.id)) ||
    challenges[(currentIndex + 1) % challenges.length];

  if (!next) {
    return;
  }

  startPracticeChallenge(next.id);
}

function togglePracticeChallengeHint() {
  const mode = ensureChallengeModeState();
  mode.hintOpen = !mode.hintOpen;
}

function resetPracticeChallenges() {
  state.challengeMode = createChallengeModeState();
  appendTerminal("note", "Challenge mode reset. Start a challenge when you are ready.");
}

function recordPracticeChallengeCommand(command, result) {
  if (!isPracticeMode()) {
    return;
  }

  const mode = ensureChallengeModeState();
  if (!mode.started) {
    return;
  }

  mode.commandLog.push({
    command: normalizeCommand(command),
    ok: result?.type !== "error"
  });

  if (result?.type === "error") {
    mode.misses += 1;
    mode.streak = 0;
  }

  maybeCompletePracticeChallenge();
}

function maybeCompletePracticeChallenge() {
  const mode = ensureChallengeModeState();
  const challenge = getActivePracticeChallenge();
  if (!mode.started || !challenge || mode.completedIds.includes(challenge.id)) {
    return;
  }

  const progress = getPracticeChallengeProgress(challenge);
  if (!progress.every((step) => step.complete)) {
    return;
  }

  const hintPenalty = mode.hintOpen ? 15 : 0;
  const missPenalty = Math.min(40, mode.misses * 8);
  const points = Math.max(25, 100 - hintPenalty - missPenalty);
  mode.completedIds.push(challenge.id);
  mode.score += points;
  mode.streak += 1;
  mode.started = false;
  mode.hintOpen = false;
  mode.lastCompletedId = challenge.id;
  if (state.practiceDifficulty === "no-hints") {
    addBadge("no-hints-run");
    const progressState = ensureLearnerProgress();
    progressState.noHintCompletions += 1;
  }
  appendTerminal("success", `Challenge complete: ${challenge.title}. +${points} points.`);
  appendTerminal("note", challenge.success);

  if (devPlayback) {
    const next = getPracticeChallengeList().find((item) => !mode.completedIds.includes(item.id));
    if (next) {
      mode.activeId = next.id;
      mode.started = true;
      mode.commandLog = [];
      mode.hintOpen = false;
      appendTerminal("note", `Challenge tracker advanced to: ${next.title}.`);
    }
  }
}

function getPracticeChallengeProgress(challenge = getActivePracticeChallenge()) {
  if (!challenge) {
    return [];
  }

  return challenge.steps.map((step) => ({
    ...step,
    complete: isPracticeChallengeStepComplete(step)
  }));
}

function isPracticeChallengeStepComplete(step) {
  const mode = ensureChallengeModeState();
  if (step.type === "command") {
    return mode.commandLog.some((entry) => {
      return entry.ok && step.commands.some((command) => commandMatches(entry.command, command));
    });
  }

  return practiceChallengeConditionMet(step.condition);
}

function commandMatches(actual, expected) {
  const normalizedActual = normalizeCommand(actual);
  const normalizedExpected = normalizeCommand(expected);
  if (normalizedActual === normalizedExpected) {
    return true;
  }

  if (normalizedExpected === "git diff") {
    return normalizedActual === "git diff --stat" || normalizedActual === "git diff --staged";
  }

  return false;
}

function practiceChallengeConditionMet(condition) {
  switch (condition) {
    case "branch-created":
      return Boolean(state.taskFlags?.branchCreated) || Object.keys(state.branches || {}).some((branch) => branch !== "main");
    case "off-main":
      return state.currentBranch !== "main";
    case "feature-edited":
      return state.workingFiles?.[oracleLab.featureFile] !== currentHeadFiles()[oracleLab.featureFile];
    case "feature-staged":
      return state.indexFiles?.[oracleLab.featureFile] === state.workingFiles?.[oracleLab.featureFile] &&
        state.indexFiles?.[oracleLab.featureFile] !== currentHeadFiles()[oracleLab.featureFile];
    case "branch-committed":
      return Boolean(state.taskFlags?.branchCommitted);
    case "published":
      return (
        Boolean(state.taskFlags?.pushed) ||
        Object.keys(state.remoteBranches || {}).some((branch) => branch !== "origin/main")
      );
    case "on-main-with-branch":
      return state.currentBranch === "main" && Object.keys(state.branches || {}).some((branch) => branch !== "main");
    case "merged":
      return Boolean(state.taskFlags?.merged);
    default:
      return false;
  }
}

function runVSCodeDevPlayback() {
  ensureVSCodeCliState();
  const sectionIndex = clampIndex(state.vscodeSection || 0, vscodeLab.sections.length);
  const section = vscodeLab.sections[sectionIndex];
  const steps = [];
  for (let index = sectionIndex; index < vscodeLab.sections.length; index += 1) {
    const commands = getVSCodeDevPlaybackCommands(index);
    commands.forEach((command, commandIndex) => {
      const isLastInSection = commandIndex === commands.length - 1;
      steps.push({
        command,
        run: () => {
          appendTerminal("prompt", `${getPrompt()} ${command}`);
          const result = executeVSCodeCommand(command);
          appendTerminal(result.type, result.text);
          recordVSCodeMissionCommand(command, result);
          const expectedConflict = isExpectedVSCodeDevPlaybackConflict(command, result);
          if (result.type === "error" && !expectedConflict) {
            appendTerminal("error", "Developer playback stopped so the learner can correct the simulator state.");
            return false;
          }
          if (expectedConflict) {
            appendTerminal("note", "Developer playback continuing through the expected conflict resolution practice.");
          }
          if (isLastInSection) {
            state.vscodeSection = clampIndex(index + 1, vscodeLab.sections.length);
          }
          return true;
        }
      });
    });
  }

  startDevPlayback({
    label: `Developer playback: running the full VS Code lab from ${section.title}.`,
    steps,
    onComplete: () => {
      appendTerminal("note", "Developer playback: VS Code lab complete.");
    }
  });
}

function runSqlDevPlayback() {
  ensureSqlWorksheetState();
  const sectionIndex = clampIndex(state.sqlSection || 0, oracleSqlLab.sections.length);
  const section = oracleSqlLab.sections[sectionIndex];
  const steps = [];

  for (let index = sectionIndex; index < oracleSqlLab.sections.length; index += 1) {
    const command = singleLineSql(oracleSqlLab.sections[index].query);
    steps.push({
      command,
      run: () => {
        appendTerminal("prompt", `${getSqlPrompt()} ${command}`);
        const result = executeSqlCommand(command);
        appendTerminal(result.type, result.text);
        if (result.result) {
          state.sqlWorksheet.lastResult = result.result;
        }
        if (result.type === "error") {
          appendTerminal("error", "Developer playback stopped so the learner can correct the worksheet query.");
          return false;
        }
        completeSqlSection(index, false);
        state.sqlSection = clampIndex(index + 1, oracleSqlLab.sections.length);
        return true;
      }
    });
  }

  startDevPlayback({
    label: `Developer playback: running the Oracle SQL lab from ${section.title}.`,
    steps,
    onComplete: () => {
      appendTerminal("note", "Developer playback: SQL lab complete.");
    }
  });
}

function getVSCodeDevPlaybackCommands(sectionIndex) {
  switch (sectionIndex) {
    case 0:
      return [...vscodeLab.extensions.map((extension) => extension.command), "code.cmd --list-extensions"];
    case 1:
      return [`code.cmd ${ORACLE_REPO_ROOT}`, "Get-Location", "git status"];
    case 2:
      return ['rg --files -g "*.sql"', `code.cmd --goto ${vscodeTargetSqlFile()}:1`];
    case 3:
      return [`edit ${vscodeTargetSqlFile()}`, "git diff"];
    case 4:
      return ["git status", `git add ${vscodeTargetSqlFile()}`, 'git commit -m "Update arrearage detail export header"', "git status", "git log --oneline"];
    default:
      return ["git status"];
  }
}

function isExpectedVSCodeDevPlaybackConflict(command, result) {
  return (
    normalizeCommand(command) === "git merge main" &&
    result?.type === "error" &&
    Boolean(state.vscodeCli?.conflictOpen)
  );
}

function runCodexDevPlayback() {
  ensureCodexCliState();
  const sectionIndex = clampIndex(state.codexSection || 0, codexLab.sections.length);
  const section = codexLab.sections[sectionIndex];
  const steps = [];
  for (let index = sectionIndex; index < codexLab.sections.length; index += 1) {
    const commands = getCodexDevPlaybackCommands(codexLab.sections[index]).flatMap((item) => splitCodexCommandLine(item));
    commands.forEach((command, commandIndex) => {
      const isLastInSection = commandIndex === commands.length - 1;
      steps.push({
        command,
        run: () => {
          appendTerminal("prompt", `${getCodexPrompt()} ${command}`);
          const result = executeCodexCommand(command);
          appendTerminal(result.type, result.text);
          if (result.type === "error") {
            appendTerminal("error", "Developer playback stopped so the learner can correct the setup state.");
            return false;
          }
          if (isLastInSection) {
            state.codexSection = clampIndex(index + 1, codexLab.sections.length);
          }
          return true;
        }
      });
    });
  }

  if (!steps.length) {
    appendTerminal("note", "This section has no CLI action. Move to the next section and try again.");
    state.codexSection = clampIndex(sectionIndex + 1, codexLab.sections.length);
    return;
  }

  startDevPlayback({
    label: `Developer playback: running the full Codex lesson from ${section.title}.`,
    steps,
    onComplete: () => {
      appendTerminal("note", "Developer playback: Codex lesson complete.");
    }
  });
}

function getCodexDevPlaybackCommands(section) {
  if (!section) {
    return [];
  }
  if (section.type === "install") {
    return section.steps.map((step) => step.command);
  }
  if (section.type === "workflow") {
    return section.cards
      .map((card) => card.command || card.prompt)
      .filter(Boolean);
  }
  if (section.type === "orientation") {
    return [section.prompt];
  }
  if (section.type === "prompting") {
    return [
      "Inspect this ADO ticket before editing. Use Purpose, Authority, Context, and Task. Return a short plan and open questions before changing files."
    ];
  }
  if (section.type === "safety") {
    return ["git status", "git diff --stat", "Before editing, list the branch, changed files, risks, and validation plan."];
  }
  return [];
}

function createSimpleDevPlaybackSteps(commands, executor, promptGetter) {
  return commands.map((command) => ({
    command,
    run: () => {
      appendTerminal("prompt", `${promptGetter()} ${command}`);
      const result = executor(command);
      appendTerminal(result.type, result.text);
      if (result.type === "error") {
        appendTerminal("error", "Developer playback stopped so the learner can correct the simulator state.");
        return false;
      }
      return true;
    }
  }));
}

function startDevPlayback({ label, steps, onComplete }) {
  cancelDevPlayback();
  devPlayback = {
    index: 0,
    steps: Array.isArray(steps) ? steps : [],
    onComplete
  };
  appendTerminal("note", `${label} Watch the prompt; each command will be typed and run one at a time.`);
  saveState();
  render();
  scheduleDevPlayback(650);
}

function scheduleDevPlayback(delay = 450) {
  if (!devPlayback) {
    return;
  }
  clearTimeout(devPlaybackTimer);
  devPlaybackTimer = window.setTimeout(runNextDevPlaybackStep, delay);
}

function runNextDevPlaybackStep() {
  const playback = devPlayback;
  if (!playback) {
    return;
  }

  if (playback.index >= playback.steps.length) {
    finishDevPlayback(playback);
    return;
  }

  const step = playback.steps[playback.index];
  typeDevPlaybackCommand(step.command, playback, () => {
    if (devPlayback !== playback) {
      return;
    }

    clearDevPlaybackInputVisual();
    const ok = step.run();
    if (!ok) {
      devPlayback = null;
      saveState();
      render();
      return;
    }

    playback.index += 1;
    if (playback.index >= playback.steps.length) {
      finishDevPlayback(playback);
      return;
    }

    saveState();
    render();
    scheduleDevPlayback(getDevPlaybackCommandPause(step.command));
  });
}

function finishDevPlayback(playback) {
  if (devPlayback !== playback) {
    return;
  }

  devPlayback = null;
  clearTimeout(devPlaybackTimer);
  devPlaybackTimer = null;
  clearDevPlaybackInputVisual();
  playback.onComplete?.();
  saveState();
  render();
}

function typeDevPlaybackCommand(command, playback, done) {
  const input = isVSCodeMode()
    ? document.getElementById("vscodeCommandInput") || document.getElementById("commandInput")
    : document.getElementById("commandInput");
  if (!input) {
    done();
    return;
  }

  const text = String(command || "");
  const delay = getDevPlaybackTypingDelay(text);
  let index = 0;
  input.value = "";
  input.focus();
  input.classList.add("dev-playback-typing");
  document.querySelector(".terminal-panel")?.classList.add("dev-playback-running");

  const tick = () => {
    if (devPlayback !== playback) {
      return;
    }

    index += 1;
    input.value = text.slice(0, index);
    input.setSelectionRange(input.value.length, input.value.length);
    if (index >= text.length) {
      devPlaybackTimer = window.setTimeout(done, 280);
      return;
    }

    devPlaybackTimer = window.setTimeout(tick, delay);
  };

  devPlaybackTimer = window.setTimeout(tick, delay);
}

function getDevPlaybackTypingDelay(command) {
  const length = String(command || "").length;
  if (length > 240) {
    return 2;
  }
  if (length > 100) {
    return 5;
  }
  return 18;
}

function getDevPlaybackCommandPause(command) {
  return String(command || "").length > 160 ? 600 : 450;
}

function cancelDevPlayback(message = "") {
  if (devPlaybackTimer) {
    clearTimeout(devPlaybackTimer);
  }
  devPlaybackTimer = null;
  devPlayback = null;
  clearDevPlaybackInputVisual();
  if (message) {
    appendTerminal("note", message);
  }
}

function clearDevPlaybackInputVisual() {
  const input = isVSCodeMode()
    ? document.getElementById("vscodeCommandInput") || document.getElementById("commandInput")
    : document.getElementById("commandInput");
  if (input) {
    input.value = "";
    input.classList.remove("dev-playback-typing");
  }
  document.querySelector(".terminal-panel")?.classList.remove("dev-playback-running");
}

function runCodexCommand(command) {
  ensureCodexCliState();
  appendTerminal("prompt", `${getCodexPrompt()} ${command}`);

  splitCodexCommandLine(command).forEach((part) => {
    const result = executeCodexCommand(part);
    appendTerminal(result.type, result.text);
  });

  saveState();
  render();
}

function runVSCodeCommand(command) {
  ensureVSCodeCliState();
  appendTerminal("prompt", `${getPrompt()} ${command}`);
  const result = executeVSCodeCommand(command);
  appendTerminal(result.type, result.text);
  recordVSCodeMissionCommand(command, result);
  saveState();
  render();
}

function runSqlCommand(command) {
  ensureSqlWorksheetState();
  appendTerminal("prompt", `${getSqlPrompt()} ${command}`);
  const result = executeSqlCommand(command);
  appendTerminal(result.type, result.text);

  if (result.result) {
    state.sqlWorksheet.lastResult = result.result;
  }

  recordSqlQuery(command, result);
  saveState();
  render();
}

function ensureSqlWorksheetState() {
  state.sqlWorksheet = {
    ...createSqlWorksheetState(),
    ...(state.sqlWorksheet && typeof state.sqlWorksheet === "object" ? state.sqlWorksheet : {})
  };
  state.sqlWorksheet.completedSections = Array.isArray(state.sqlWorksheet.completedSections)
    ? state.sqlWorksheet.completedSections
    : [];
  state.sqlWorksheet.queryLog = Array.isArray(state.sqlWorksheet.queryLog) ? state.sqlWorksheet.queryLog : [];
  if (!state.sqlWorksheet.lastResult || typeof state.sqlWorksheet.lastResult !== "object") {
    state.sqlWorksheet.lastResult = createSqlWorksheetState().lastResult;
  }
  state.sqlSection = clampIndex(state.sqlSection, oracleSqlLab.sections.length);
  return state.sqlWorksheet;
}

function executeSqlCommand(command) {
  ensureSqlWorksheetState();
  const text = String(command || "").trim();
  const normalized = normalizeSqlStatement(text);

  if (!text) {
    return { type: "note", text: "Type a SELECT statement, show files, describe <table>, or help." };
  }

  const easterEgg = getGitEasterEgg(text);
  if (easterEgg) {
    return easterEgg;
  }

  if (normalized === "help" || normalized === "sql help") {
    return {
      type: "note",
      text:
        [
          "Oracle SQL worksheet commands:",
          "  show files",
          "  show tables",
          "  describe ccs_emergency_response_activity_extract",
          "  SELECT * FROM ccs_emergency_response_activity_extract",
          "  SELECT activity_id, zip_code FROM ccs_emergency_response_activity_extract WHERE activity_status = 'OPEN'",
          "  SELECT zip_code, COUNT(*) AS order_count FROM ccs_emergency_response_activity_extract GROUP BY zip_code"
        ].join("\n")
    };
  }

  if (normalized === "show files" || normalized === "show tables") {
    const result = createSqlResult(
      ["FILE_PATH", "TABLE_NAME", "STATUS"],
      oracleSqlFiles.map((file) => ({
        FILE_PATH: file.path,
        TABLE_NAME: file.table,
        STATUS: file.status
      })),
      "Repository SQL files available in this simulator."
    );
    return { type: "success", text: formatSqlResultForTerminal(result), result };
  }

  if (normalized.startsWith("describe ") || normalized.startsWith("desc ")) {
    return describeSqlTable(text);
  }

  if (normalized.includes("[file name]")) {
    return {
      type: "note",
      text: "Replace [file name] with a repo table name, for example: ccs_emergency_response_activity_extract"
    };
  }

  if (!normalized.startsWith("select ") && !normalized.startsWith("with ")) {
    return { type: "error", text: "This worksheet only runs SELECT-style training queries. Type help for examples." };
  }

  if (normalized.startsWith("with ")) {
    return executeSqlCteQuery(text);
  }

  return executeSqlSelectStatement(text);
}

function describeSqlTable(command) {
  const tableName = resolveSqlTableName(command);
  const table = tableName ? oracleSqlTables[tableName] : null;
  if (!table) {
    return { type: "error", text: "Unknown table. Try show files to see the repository SQL targets." };
  }

  const result = createSqlResult(
    ["COLUMN_NAME", "DATA_TYPE", "NOTES"],
    table.columns.map((column) => ({
      COLUMN_NAME: column,
      DATA_TYPE: inferSqlColumnType(column),
      NOTES: column === "SERVICE_POINT_ID" ? "Join key in this lab" : column.endsWith("_DATE") ? "Oracle DATE-like field" : ""
    })),
    `${table.label}. Grain: ${table.grain}. Source: ${table.sourcePath}`
  );
  state.sqlWorksheet.selectedFile = table.sourcePath;
  return { type: "success", text: formatSqlResultForTerminal(result), result };
}

function executeSqlSelectStatement(command) {
  const tableName = resolveSqlTableName(command);
  const table = tableName ? oracleSqlTables[tableName] : null;
  if (!table) {
    return { type: "error", text: "Could not identify a repo SQL file/table. Try: show files" };
  }

  state.sqlWorksheet.selectedFile = table.sourcePath;

  if (normalizeSqlStatement(command).includes(" join ")) {
    return executeSqlJoinQuery(command);
  }

  if (isSqlAggregateQuery(command)) {
    return executeSqlAggregateQuery(command, tableName);
  }

  const rows = applySqlWhere(table.rows, command);
  const columns = parseSqlSelectedColumns(command, table.columns);
  try {
    const projected = projectSqlRows(applySqlOrder(rows, command), columns);
    const result = createSqlResult(columns, projected, `${projected.length} row${projected.length === 1 ? "" : "s"} returned from ${tableName}.`);
    return { type: "success", text: formatSqlResultForTerminal(result), result };
  } catch (error) {
    return { type: "error", text: error.message };
  }
}

function executeSqlJoinQuery(command) {
  const normalized = normalizeSqlStatement(command);
  if (!normalized.includes("service_point_id")) {
    return { type: "error", text: "The lab join must use service_point_id so reviewers can validate the key." };
  }

  const activity = oracleSqlTables.ccs_emergency_response_activity_extract;
  const service = oracleSqlTables.ccs_device_service_agreement_extract;
  const serviceByPoint = new Map(service.rows.map((row) => [row.SERVICE_POINT_ID, row]));
  const joined = activity.rows
    .map((row) => ({ ...row, ...(serviceByPoint.get(row.SERVICE_POINT_ID) || {}) }))
    .filter((row) => row.SERVICE_AGREEMENT_ID);
  const filtered = applySqlWhere(joined, command);
  const combinedColumns = uniqueSqlColumns([...activity.columns, ...service.columns]);
  const columns = parseSqlSelectedColumns(command, combinedColumns);
  try {
    const projected = projectSqlRows(applySqlOrder(filtered, command), columns);
    const result = createSqlResult(columns, projected, `${projected.length} joined row${projected.length === 1 ? "" : "s"} returned using service_point_id.`);
    state.sqlWorksheet.selectedFile = "ccs/sql/meters/ccs_device_service_agreement_extract.sql";
    return { type: "success", text: formatSqlResultForTerminal(result), result };
  } catch (error) {
    return { type: "error", text: error.message };
  }
}

function executeSqlAggregateQuery(command, tableName) {
  const table = oracleSqlTables[tableName];
  const rows = applySqlWhere(table.rows, command);
  const groupColumn = parseSqlGroupByColumn(command) || "ZIP_CODE";
  if (!table.columns.includes(groupColumn) && !rows.some((row) => Object.prototype.hasOwnProperty.call(row, groupColumn))) {
    return { type: "error", text: `Cannot group by ${groupColumn}; describe ${tableName} to inspect available columns.` };
  }

  const counts = new Map();
  rows.forEach((row) => {
    const key = row[groupColumn] || "(blank)";
    counts.set(key, (counts.get(key) || 0) + 1);
  });

  const resultRows = [...counts.entries()].map(([key, count]) => ({
    [groupColumn]: key,
    ORDER_COUNT: count
  }));
  const ordered = applySqlOrder(resultRows, command);
  const result = createSqlResult(
    [groupColumn, "ORDER_COUNT"],
    ordered,
    `${ordered.length} grouped row${ordered.length === 1 ? "" : "s"} returned. Output grain: one row per ${groupColumn.toLowerCase()}.`
  );
  return { type: "success", text: formatSqlResultForTerminal(result), result };
}

function executeSqlCteQuery(command) {
  const normalized = normalizeSqlStatement(command);
  if (!normalized.includes("prior_week") || !normalized.includes("ccs_emergency_response_activity_extract")) {
    return { type: "error", text: "This CTE lesson expects prior_week built from ccs_emergency_response_activity_extract." };
  }

  const rows = applySqlWhere(oracleSqlTables.ccs_emergency_response_activity_extract.rows, command);
  const counts = new Map();
  rows.forEach((row) => {
    counts.set(row.ZIP_CODE, (counts.get(row.ZIP_CODE) || 0) + 1);
  });

  const resultRows = [...counts.entries()]
    .map(([zipCode, count]) => ({ ZIP_CODE: zipCode, ORDER_COUNT: count }))
    .sort((a, b) => b.ORDER_COUNT - a.ORDER_COUNT || String(a.ZIP_CODE).localeCompare(String(b.ZIP_CODE)));
  const result = createSqlResult(
    ["ZIP_CODE", "ORDER_COUNT"],
    resultRows,
    "Review query returned the prior-week ZIP summary from the prior_week CTE."
  );
  state.sqlWorksheet.selectedFile = "ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql";
  return { type: "success", text: formatSqlResultForTerminal(result), result };
}

function recordSqlQuery(command, result) {
  ensureSqlWorksheetState();
  state.sqlWorksheet.queryLog.push({
    command,
    ok: result?.type !== "error",
    section: oracleSqlLab.sections[state.sqlSection]?.id || ""
  });
  if (state.sqlWorksheet.queryLog.length > 40) {
    state.sqlWorksheet.queryLog = state.sqlWorksheet.queryLog.slice(-40);
  }

  if (result?.type === "error") {
    return;
  }

  const sectionIndex = clampIndex(state.sqlSection, oracleSqlLab.sections.length);
  const section = oracleSqlLab.sections[sectionIndex];
  if (!isSqlSectionSatisfied(section, command, result)) {
    return;
  }

  completeSqlSection(sectionIndex, true);
}

function completeSqlSection(sectionIndex, announce = false) {
  ensureSqlWorksheetState();
  const section = oracleSqlLab.sections[sectionIndex];
  if (!section) {
    return;
  }

  if (!state.sqlWorksheet.completedSections.includes(section.id)) {
    state.sqlWorksheet.completedSections.push(section.id);
    if (announce) {
      appendTerminal("success", `SQL section complete - ${section.title}.`);
    }
  }

  if (sectionIndex === state.sqlSection && sectionIndex < oracleSqlLab.sections.length - 1) {
    state.sqlSection = sectionIndex + 1;
    if (announce) {
      appendTerminal("note", `Next SQL lesson: ${oracleSqlLab.sections[state.sqlSection].title}.`);
    }
  }
}

function isSqlSectionSatisfied(section, command, result) {
  if (!section || result?.type === "error") {
    return false;
  }

  const normalized = normalizeSqlStatement(command);
  const hasStarterTable = normalized.includes("ccs_emergency_response_activity_extract");
  switch (section.id) {
    case "select-all":
      return normalized.startsWith("select *") && hasStarterTable;
    case "select-columns":
      return hasStarterTable && !normalized.includes("select *") && ["activity_id", "zip_code", "activity_status"].every((part) => normalized.includes(part));
    case "filter-rows":
      return hasStarterTable && normalized.includes(" where ") && normalized.includes("activity_status");
    case "date-window":
      return hasStarterTable && normalized.includes("order_date >=") && normalized.includes("order by");
    case "aggregate":
      return hasStarterTable && normalized.includes("count(") && normalized.includes("group by zip_code");
    case "join-lookup":
      return normalized.includes(" join ") && normalized.includes("ccs_device_service_agreement_extract") && normalized.includes("service_point_id");
    case "cte-review":
      return normalized.startsWith("with ") && normalized.includes("prior_week") && normalized.includes("count(") && normalized.includes("group by zip_code");
    default:
      return false;
  }
}

function createSqlResult(columns, rows, message = "") {
  return {
    columns: Array.isArray(columns) ? columns : [],
    rows: Array.isArray(rows) ? rows : [],
    message
  };
}

function normalizeSqlStatement(value) {
  return String(value || "")
    .replace(/;+\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function resolveSqlTableName(command) {
  const normalized = normalizeSqlStatement(command);
  const direct = Object.keys(oracleSqlTables)
    .sort((a, b) => b.length - a.length)
    .find((table) => normalized.includes(table.toLowerCase()));
  if (direct) {
    return direct;
  }

  const fileMatch = oracleSqlFiles.find((file) => {
    const path = file.path.toLowerCase();
    const base = path.split("/").pop()?.replace(/\.sql$/i, "") || "";
    return normalized.includes(path) || normalized.includes(base);
  });

  return fileMatch?.table && oracleSqlTables[fileMatch.table] ? fileMatch.table : null;
}

function parseSqlSelectedColumns(command, fallbackColumns) {
  const selectMatch = String(command || "").match(/select\s+([\s\S]+?)\s+from/i);
  if (!selectMatch || selectMatch[1].includes("*")) {
    return fallbackColumns;
  }

  const columns = selectMatch[1]
    .split(",")
    .map(cleanSqlColumnExpression)
    .filter(Boolean);
  return columns.length ? uniqueSqlColumns(columns) : fallbackColumns;
}

function cleanSqlColumnExpression(expression) {
  const text = String(expression || "").trim();
  const alias = text.match(/\s+as\s+([A-Za-z0-9_]+)$/i)?.[1];
  if (alias) {
    return alias.toUpperCase();
  }
  if (/count\s*\(\s*\*\s*\)/i.test(text)) {
    return "ORDER_COUNT";
  }
  return text
    .replace(/^[A-Za-z0-9_]+\./, "")
    .replace(/["']/g, "")
    .trim()
    .toUpperCase();
}

function applySqlWhere(rows, command) {
  const normalized = normalizeSqlStatement(command);
  let filtered = [...rows];

  const statusIn = normalized.match(/activity_status\s+in\s*\(([^)]+)\)/i);
  const statusEq = normalized.match(/activity_status\s*=\s*'([^']+)'/i);
  if (statusIn) {
    const statuses = statusIn[1]
      .split(",")
      .map((item) => item.replace(/['"]/g, "").trim().toUpperCase())
      .filter(Boolean);
    filtered = filtered.filter((row) => statuses.includes(String(row.ACTIVITY_STATUS || "").toUpperCase()));
  } else if (statusEq) {
    const status = statusEq[1].toUpperCase();
    filtered = filtered.filter((row) => String(row.ACTIVITY_STATUS || "").toUpperCase() === status);
  }

  const activityTypeEq = normalized.match(/activity_type\s*=\s*'([^']+)'/i);
  if (activityTypeEq) {
    const activityType = activityTypeEq[1].toUpperCase();
    filtered = filtered.filter((row) => String(row.ACTIVITY_TYPE || "").toUpperCase() === activityType);
  }

  const zipEq = normalized.match(/zip_code\s*=\s*'([^']+)'/i);
  if (zipEq) {
    filtered = filtered.filter((row) => String(row.ZIP_CODE || "") === zipEq[1]);
  }

  const customerClassEq = normalized.match(/customer_class\s*=\s*'([^']+)'/i);
  if (customerClassEq) {
    const customerClass = customerClassEq[1].toUpperCase();
    filtered = filtered.filter((row) => String(row.CUSTOMER_CLASS || "").toUpperCase() === customerClass);
  }

  const dateLiteral = normalized.match(/order_date\s*>=\s*date\s*'(\d{4}-\d{2}-\d{2})'/i);
  const dateBoundary = normalized.includes("trunc(sysdate) - 7") ? "2026-05-05" : dateLiteral?.[1];
  if (dateBoundary) {
    filtered = filtered.filter((row) => !row.ORDER_DATE || String(row.ORDER_DATE) >= dateBoundary);
  }

  return filtered;
}

function isSqlAggregateQuery(command) {
  const normalized = normalizeSqlStatement(command);
  return normalized.includes("count(") && normalized.includes("group by");
}

function parseSqlGroupByColumn(command) {
  const match = normalizeSqlStatement(command).match(/group by\s+([a-z0-9_.]+)/i);
  return match ? cleanSqlColumnExpression(match[1]) : "";
}

function applySqlOrder(rows, command) {
  const normalized = normalizeSqlStatement(command);
  const match = normalized.match(/order by\s+([a-z0-9_().*]+)(\s+desc|\s+asc)?/i);
  if (!match) {
    return rows;
  }

  const column = cleanSqlColumnExpression(match[1]);
  const desc = match[2] && match[2].trim().toLowerCase() === "desc";
  return [...rows].sort((a, b) => {
    const left = a[column];
    const right = b[column];
    if (Number.isFinite(Number(left)) && Number.isFinite(Number(right))) {
      return desc ? Number(right) - Number(left) : Number(left) - Number(right);
    }
    return desc
      ? String(right ?? "").localeCompare(String(left ?? ""))
      : String(left ?? "").localeCompare(String(right ?? ""));
  });
}

function projectSqlRows(rows, columns) {
  const unknownColumns = columns.filter((column) => rows.some((row) => row && !Object.prototype.hasOwnProperty.call(row, column)));
  if (unknownColumns.length) {
    throw new Error(`Unknown column${unknownColumns.length === 1 ? "" : "s"}: ${unknownColumns.join(", ")}`);
  }

  return rows.map((row) => Object.fromEntries(columns.map((column) => [column, row[column]])));
}

function uniqueSqlColumns(columns) {
  return [...new Set(columns.filter(Boolean))];
}

function inferSqlColumnType(column) {
  if (column.endsWith("_DATE")) {
    return "DATE";
  }
  if (column.includes("COUNT")) {
    return "NUMBER";
  }
  return "VARCHAR2";
}

function formatSqlResultForTerminal(result) {
  const header = result.message || `${result.rows.length} row${result.rows.length === 1 ? "" : "s"} returned.`;
  return `${header}\n${formatSqlRowsAsText(result.rows, result.columns)}`;
}

function formatSqlRowsAsText(rows, columns, maxRows = 8) {
  if (!rows.length) {
    return "(no rows)";
  }

  const visibleRows = rows.slice(0, maxRows);
  const widths = columns.map((column) => {
    const longest = Math.max(
      String(column).length,
      ...visibleRows.map((row) => String(row[column] ?? "").length)
    );
    return Math.min(Math.max(longest, 6), 22);
  });
  const formatCell = (value, width) => truncate(String(value ?? ""), width).padEnd(width, " ");
  const header = columns.map((column, index) => formatCell(column, widths[index])).join(" | ");
  const divider = widths.map((width) => "-".repeat(width)).join("-+-");
  const body = visibleRows
    .map((row) => columns.map((column, index) => formatCell(row[column], widths[index])).join(" | "))
    .join("\n");
  const more = rows.length > visibleRows.length ? `\n... ${rows.length - visibleRows.length} more row(s)` : "";
  return `${header}\n${divider}\n${body}${more}`;
}

function ensureVSCodeCliState() {
  state.vscodeCli = {
    ...createVSCodeCliState(),
    ...(state.vscodeCli && typeof state.vscodeCli === "object" ? state.vscodeCli : {})
  };
  state.vscodeCli.installedExtensions = Array.isArray(state.vscodeCli.installedExtensions)
    ? state.vscodeCli.installedExtensions
    : [];
  state.vscodeCli.missionLog = Array.isArray(state.vscodeCli.missionLog) ? state.vscodeCli.missionLog : [];
}

function vscodeTargetSqlFile() {
  return "ccs/sql/accounts/ccs_arrearage_detail_report.sql";
}

function vscodeTargetFileName() {
  return vscodeTargetSqlFile().split("/").pop();
}

function getGitEasterEgg(command) {
  const normalized = normalizeCommand(command);
  if (normalized === "git money") {
    return {
      type: "success",
      text: "git paid. Direct deposit fast-forwarded; coffee budget remains untracked."
    };
  }
  if (normalized === "git snacks" || normalized === "git snack") {
    return {
      type: "success",
      text: "snak attak. Chips staged, salsa committed, crumbs ignored by .gitignore."
    };
  }
  if (normalized === "git a life") {
    return {
      type: "success",
      text:
        [
          "git a life",
          "",
          "  .-''''-.",
          " /        \\",
          "|  .--.  .-|",
          "| (    \\/  |",
          " \\  '--'  /",
          "  '-.__.-'",
          "    /||\\",
          "   /_||_\\",
          "",
          "No life found. Try committing to a hobby branch."
        ].join("\n")
    };
  }
  if (normalized === "git out of my swamp") {
    return {
      type: "success",
      text:
        [
          "git out of my swamp",
          "",
          "⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
          "⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆",
          "⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿",
          "⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀",
          "⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
          "⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀",
          "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉",
          "",
          "Ogres have layers. So does Git history."
        ].join("\n")
    };
  }
  return null;
}

function executeVSCodeCommand(command) {
  ensureVSCodeCliState();
  const text = String(command || "").trim();
  const normalized = normalizeCommand(text);
  const tokens = tokenize(text);
  const lower = tokens.map((token) => token.toLowerCase());
  const isCodeCommand = lower[0] === "code" || lower[0] === "code.cmd";
  const normalizedCodeArgs = isCodeCommand ? normalizeCommand(tokens.slice(1).join(" ")) : "";

  if (!text) {
    return { type: "note", text: "Type a VS Code or Git command." };
  }

  const easterEgg = getGitEasterEgg(text);
  if (easterEgg) {
    return easterEgg;
  }

  if (normalized === "help") {
    return {
      type: "note",
      text:
        [
          "VS Code lab simulator commands:",
          "  code.cmd .",
          "  code.cmd --install-extension ms-vscode.PowerShell",
          "  code.cmd --install-extension eamodio.gitlens",
          "  code.cmd --install-extension Oracle.sql-developer",
          "  code.cmd --list-extensions",
          `  code.cmd ${ORACLE_REPO_ROOT}`,
          `  code.cmd --goto ${vscodeTargetSqlFile()}:1`,
          "  rg --files -g \"*.sql\"",
          "  git status",
          `  edit ${vscodeTargetSqlFile()}`,
          "  git diff",
          `  git add ${vscodeTargetSqlFile()}`,
          "  git commit -m \"Update arrearage detail export header\"",
          "  gitlens history"
        ].join("\n")
    };
  }

  if (isCodeCommand && (normalizedCodeArgs === "." || normalizedCodeArgs === normalizeCommand(ORACLE_REPO_ROOT))) {
    state.vscodeCli.openedWorkspace = true;
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `VS Code opened ${ORACLE_REPO_ROOT}. Explorer, terminal, and Source Control now share repo context.` };
  }

  if (isCodeCommand && lower[1] === "--install-extension") {
    return installVSCodeExtension(tokens.slice(2).join(" "));
  }

  if (isCodeCommand && normalizedCodeArgs === "--list-extensions") {
    return {
      type: "success",
      text:
        state.vscodeCli.installedExtensions.length
          ? state.vscodeCli.installedExtensions.join("\n")
          : "No required extensions installed in this simulator yet."
    };
  }

  if (isCodeCommand && lower[1] === "--goto") {
    const target = tokens.slice(2).join(" ").trim();
    if (!target) {
      return { type: "error", text: `Specify a file, for example: code.cmd --goto ${vscodeTargetSqlFile()}:1` };
    }
    state.vscodeCli.activeFile = target.replace(/:\d+$/g, "");
    if (!target.includes(vscodeTargetSqlFile())) {
      return { type: "note", text: `Opened ${target}. For this lab, the main target file is ${vscodeTargetSqlFile()}.` };
    }
    return { type: "success", text: `Opened ${vscodeTargetSqlFile()} at the requested line. Compare it with neighboring SQL before editing.` };
  }

  if (lower[0] === "cd" || lower[0] === "set-location") {
    return commandVSCodeCd(tokens.slice(1));
  }

  if (normalized === "get-location" || normalized === "pwd") {
    return { type: "success", text: state.cwd || ORACLE_REPO_ROOT };
  }

  if (lower[0] === "rg" && lower[1] === "--files") {
    const sqlOnly = tokens.includes("-g") && tokens.some((token) => token.replaceAll("'", "").replaceAll('"', "") === "*.sql");
    return { type: "success", text: renderCodexFileSearch(sqlOnly) };
  }

  if (normalized === "git status" || normalized === "git status --short") {
    return { type: "success", text: renderVSCodeGitStatus(normalized.endsWith("--short")) };
  }

  if (normalized === "git branch") {
    return { type: "success", text: state.vscodeCli.branch === "main" ? "* main\n  feature/ccs-emergency-orders-zip-prior-week-demo" : "  main\n* feature/ccs-emergency-orders-zip-prior-week-demo" };
  }

  if ((lower[0] === "git" && lower[1] === "switch" && lower[2] === "-c") || (lower[0] === "git" && lower[1] === "checkout" && lower[2] === "-b")) {
    const branch = tokens.slice(3).join(" ").trim() || oracleLab.branchName;
    state.vscodeCli.branch = branch;
    return { type: "success", text: `Created and switched to branch ${branch}. The VS Code status bar now shows the task branch.` };
  }

  if (lower[0] === "edit") {
    const target = tokens.slice(1).join(" ").trim() || vscodeTargetSqlFile();
    state.vscodeCli.activeFile = target;
    state.vscodeCli.edited = true;
    state.vscodeCli.staged = false;
    state.vscodeCli.committed = false;
    return { type: "success", text: `Edited ${target}. Source Control now shows one changed SQL file.` };
  }

  if ((isCodeCommand && normalizedCodeArgs === normalizeCommand(vscodeTargetSqlFile())) || isCodeCommand && text.includes(vscodeTargetSqlFile())) {
    state.vscodeCli.activeFile = vscodeTargetSqlFile();
    state.vscodeCli.edited = true;
    state.vscodeCli.staged = false;
    return { type: "success", text: `Opened and marked ${vscodeTargetSqlFile()} as edited for this simulator. Run git diff next.` };
  }

  if (normalized === "git diff" || normalized === "git diff --staged") {
    if (state.vscodeCli.conflictOpen) {
      return {
        type: "note",
        text:
          [
          `diff -- ${vscodeTargetSqlFile()}`,
            "<<<<<<< HEAD",
            "where activity_status = 'OPEN'",
            "=======",
            "where activity_status in ('OPEN', 'PENDING')",
            ">>>>>>> main"
          ].join("\n")
      };
    }
    if (!state.vscodeCli.edited) {
      return { type: "note", text: `No file edits yet. Try: edit ${vscodeTargetSqlFile()}` };
    }
    if (normalized === "git diff --staged" && !state.vscodeCli.staged) {
      return { type: "note", text: "No staged diff yet. Stage the intended file first." };
    }
    return {
      type: "success",
      text:
        [
          `diff -- ${vscodeTargetSqlFile()}`,
          "+-- EXPORT NAME: ARREARAGE_DETAIL.csv",
          "+-- REFRESH: Fabric Lakehouse arrearage detail ingestion"
        ].join("\n")
    };
  }

  if (lower[0] === "git" && lower[1] === "add") {
    if (!state.vscodeCli.edited && !state.vscodeCli.conflictResolved) {
      return { type: "note", text: "Nothing to stage yet. Edit a file or resolve a conflict first." };
    }
    state.vscodeCli.staged = true;
    return { type: "success", text: "Staged the intended file. Source Control now shows it under Staged Changes." };
  }

  if (lower[0] === "git" && lower[1] === "commit") {
    if (!state.vscodeCli.staged) {
      return { type: "error", text: "No staged changes. Stage the intended file before committing." };
    }
    state.vscodeCli.committed = true;
    state.vscodeCli.edited = false;
    state.vscodeCli.staged = false;
    state.vscodeCli.conflictOpen = false;
    state.vscodeCli.conflictResolved = false;
    return { type: "success", text: "Created commit c002. VS Code Source Control is clean and the terminal agrees." };
  }

  if (normalized === "git log --oneline") {
    return {
      type: "success",
      text:
        state.vscodeCli.committed
          ? "c002 Update arrearage detail export header\nc001 Add ticket context\nc000 Oracle repo baseline"
          : "c001 Add ticket context\nc000 Oracle repo baseline"
    };
  }

  if (normalized === "gitlens history" || normalized === "gitlens inspect") {
    if (!state.vscodeCli.installedExtensions.includes("eamodio.gitlens")) {
      return { type: "error", text: "GitLens is not installed yet. Install eamodio.gitlens first." };
    }
    return {
      type: "success",
      text:
        state.vscodeCli.committed
          ? "GitLens history: c002 Update arrearage detail export header -> c001 Add ticket context -> c000 Oracle repo baseline"
          : "GitLens history: c001 Add ticket context -> c000 Oracle repo baseline"
    };
  }

  if (normalized === "git merge main") {
    state.vscodeCli.conflictOpen = true;
    state.vscodeCli.conflictResolved = false;
    state.vscodeCli.edited = true;
    state.vscodeCli.staged = false;
    return { type: "error", text: `CONFLICT (content): Merge conflict in ${vscodeTargetSqlFile()}. Use the editor conflict actions, then run: resolve conflict` };
  }

  if (normalized === "resolve conflict") {
    if (!state.vscodeCli.conflictOpen) {
      return { type: "note", text: "No conflict is open. Run git merge main to load the conflict example." };
    }
    state.vscodeCli.conflictOpen = false;
    state.vscodeCli.conflictResolved = true;
    state.vscodeCli.edited = true;
    return { type: "success", text: "Conflict markers removed. Stage and commit the resolved file." };
  }

  return { type: "error", text: "Command not recognized in the VS Code simulator. Type help for supported commands." };
}

function installVSCodeExtension(extensionId) {
  const cleaned = String(extensionId || "").trim().replace(/^["']|["']$/g, "");
  const extension = vscodeLab.extensions.find((item) => item.id.toLowerCase() === cleaned.toLowerCase());
  if (!extension) {
    return { type: "error", text: `Unknown required extension: ${extensionId}. Type help for the required extension commands.` };
  }

  if (!state.vscodeCli.installedExtensions.includes(extension.id)) {
    state.vscodeCli.installedExtensions.push(extension.id);
  }

  return { type: "success", text: `${extension.name} installed. ${extension.reason}` };
}

function recordVSCodeMissionCommand(command, result) {
  if (!isVSCodeMode()) {
    return;
  }
  ensureVSCodeCliState();
  state.vscodeCli.missionLog.push({
    command: normalizeCommand(command),
    ok: result?.type !== "error"
  });
  if (state.vscodeCli.missionLog.length > 40) {
    state.vscodeCli.missionLog = state.vscodeCli.missionLog.slice(-40);
  }
}

function vscodeRan(expected) {
  ensureVSCodeCliState();
  return state.vscodeCli.missionLog.some((entry) => entry.ok && commandMatches(entry.command, expected));
}

function getVSCodeMissionSteps() {
  ensureVSCodeCliState();
  const installedRequired = vscodeLab.extensions.every((extension) =>
    state.vscodeCli.installedExtensions.includes(extension.id)
  );
  return [
    {
      label: "Required extensions installed",
      detail: "PowerShell, GitLens, and Oracle SQL Developer are available.",
      complete: installedRequired
    },
    {
      label: "Repo opened as a folder",
      detail: "Explorer, terminal, Source Control, and Codex share one workspace.",
      complete: Boolean(state.vscodeCli.openedWorkspace) && normalizePathForCompare(state.cwd) === normalizePathForCompare(ORACLE_REPO_ROOT)
    },
    {
      label: "SQL file opened",
      detail: "Explorer or Quick Open was used to open the target SQL file.",
      complete: vscodeRan(`code.cmd --goto ${vscodeTargetSqlFile()}:1`) || vscodeRan(`code --goto ${vscodeTargetSqlFile()}:1`) || state.vscodeCli.activeFile === vscodeTargetSqlFile()
    },
    {
      label: "Diff reviewed",
      detail: "The learner inspected changed lines before staging.",
      complete: vscodeRan("git diff") || vscodeRan("git diff --staged")
    },
    {
      label: "Source Control staged intentionally",
      detail: "Only the intended SQL file is ready for commit.",
      complete: Boolean(state.vscodeCli.staged || state.vscodeCli.committed)
    },
    {
      label: "Commit created",
      detail: "The change has a reviewable checkpoint.",
      complete: Boolean(state.vscodeCli.committed)
    }
  ];
}

function renderVSCodeMissionPanel() {
  const steps = getVSCodeMissionSteps();
  const complete = steps.filter((step) => step.complete).length;
  return `
    <section class="vscode-mission-panel" aria-label="VS Code workflow missions">
      <div class="vscode-mission-header">
        <div>
          <span class="section-kicker">Editor missions</span>
          <h3>${complete}/${steps.length} complete</h3>
        </div>
        <code>VS Code workflow</code>
      </div>
      <div class="vscode-mission-list">
        ${steps
          .map(
            (step, index) => `
              <article class="${step.complete ? "complete" : ""}">
                <span>${step.complete ? "Done" : index + 1}</span>
                <div>
                  <strong>${escapeHtml(step.label)}</strong>
                  <p>${escapeHtml(step.detail)}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function commandVSCodeCd(args) {
  const target = args.join(" ").trim();
  if (!target) {
    return { type: "error", text: `Specify a folder, for example: cd ${ORACLE_REPO_ROOT}` };
  }

  const normalizedTarget = target.replaceAll("/", "\\").replace(/^["']|["']$/g, "");
  if (normalizePathForCompare(normalizedTarget) === normalizePathForCompare(ORACLE_REPO_ROOT)) {
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `Location changed to ${ORACLE_REPO_ROOT}` };
  }

  return { type: "error", text: `This simulator is scoped to ${ORACLE_REPO_ROOT}.` };
}

function renderVSCodeGitStatus(short = false) {
  ensureVSCodeCliState();
  const file = vscodeTargetSqlFile();
  if (short) {
    if (state.vscodeCli.conflictOpen) {
      return `UU ${file}`;
    }
    if (state.vscodeCli.staged) {
      return `M  ${file}`;
    }
    if (state.vscodeCli.edited || state.vscodeCli.conflictResolved) {
      return ` M ${file}`;
    }
    return "";
  }

  if (state.vscodeCli.conflictOpen) {
    return [
      `On branch ${state.vscodeCli.branch}`,
      "You have unmerged paths.",
      "",
      "Unmerged paths:",
      `  both modified: ${file}`,
      "",
      "Fix conflicts and run git add."
    ].join("\n");
  }

  if (state.vscodeCli.staged) {
    return [
      `On branch ${state.vscodeCli.branch}`,
      "Changes to be committed:",
      `  modified: ${file}`
    ].join("\n");
  }

  if (state.vscodeCli.edited || state.vscodeCli.conflictResolved) {
    return [
      `On branch ${state.vscodeCli.branch}`,
      "Changes not staged for commit:",
      `  modified: ${file}`
    ].join("\n");
  }

  return [`On branch ${state.vscodeCli.branch}`, "nothing to commit, working tree clean"].join("\n");
}

function splitCodexCommandLine(command) {
  const text = String(command || "").trim();
  if (!text || /^codex(?:\.cmd)?\s+(exec\s+)?["']?/i.test(text)) {
    return [text].filter(Boolean);
  }
  return text
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);
}

function executeCodexCommand(command) {
  ensureCodexCliState();
  const text = String(command || "").trim();
  const normalized = normalizeCommand(text);
  const tokens = tokenize(text);
  const lower = tokens.map((token) => token.toLowerCase());

  if (!text) {
    return { type: "note", text: "Type a setup command or Codex prompt." };
  }

  const easterEgg = getGitEasterEgg(text);
  if (easterEgg) {
    return easterEgg;
  }

  if (normalized === "help" || normalized === "codex help" || normalized === "codex.cmd help") {
    return {
      type: "note",
      text:
        [
          "Windows PowerShell practice commands:",
          "  whoami",
          "  node --version",
          "  npm --version",
          "  npm.cmd --version",
          "  codex --version",
          "  codex.cmd --version",
          `  ${codexLab.cliCommand}`,
          "  codex.cmd login",
          `  cd ${ORACLE_REPO_ROOT}`,
          "  Get-Location",
          "  Get-ChildItem -Force",
          "  rg --files",
          "  rg --files -g \"*.sql\"",
          "  git status",
          "  codex.cmd",
          "  codex.cmd exec \"Review this repo for docs gaps\"",
          "  exit"
        ].join("\n")
    };
  }

  if (normalized === "whoami") {
    return { type: "success", text: LOCAL_WINDOWS_USER };
  }

  if (normalized === "who am i" || normalized === "who iam i") {
    return { type: "error", text: "PowerShell uses whoami with no spaces: whoami" };
  }

  if (normalized === "node --version") {
    return { type: "success", text: LOCAL_NODE_VERSION };
  }

  if (normalized === "npm --version") {
    return { type: "error", text: POWERSHELL_NPM_SHIM_BLOCKER };
  }

  if (normalized === "npm.cmd --version") {
    return { type: "success", text: LOCAL_NPM_VERSION };
  }

  if (lower[0] === "npm") {
    return { type: "error", text: POWERSHELL_NPM_SHIM_BLOCKER };
  }

  if (normalized === "codex --version") {
    return { type: "error", text: POWERSHELL_CODEX_SHIM_BLOCKER };
  }

  if (normalized === "codex.cmd --version") {
    state.codexCli.installed = true;
    return { type: "success", text: LOCAL_CODEX_VERSION };
  }

  if (normalized === normalizeCommand(codexLab.cliCommand)) {
    state.codexCli.installed = true;
    return {
      type: "success",
      text:
        [
          "npm reports @openai/codex is available globally.",
          `Verified CLI shim: codex.cmd --version -> ${LOCAL_CODEX_VERSION}`,
          "Next: codex.cmd login"
        ].join("\n")
    };
  }

  if (normalized === "codex --upgrade" || normalized === "codex upgrade") {
    return { type: "error", text: POWERSHELL_CODEX_SHIM_BLOCKER };
  }

  if (normalized === "codex.cmd --upgrade" || normalized === "codex.cmd upgrade") {
    if (!state.codexCli.installed) {
      return { type: "error", text: "Codex is not installed yet. Run the install command first." };
    }
    return { type: "success", text: "Codex CLI is up to date in this practice terminal." };
  }

  if (normalized === "codex login") {
    return { type: "error", text: POWERSHELL_CODEX_SHIM_BLOCKER };
  }

  if (normalized === "codex.cmd login") {
    if (!state.codexCli.installed) {
      return { type: "error", text: "Confirm Codex first: codex.cmd --version or npm.cmd install -g @openai/codex" };
    }
    state.codexCli.loggedIn = true;
    return { type: "success", text: "Browser sign-in completed. Codex is authenticated for this practice terminal." };
  }

  if (lower[0] === "cd" || lower[0] === "set-location") {
    return commandCodexCd(tokens.slice(1));
  }

  if (normalized === "get-location" || normalized === "pwd") {
    return { type: "success", text: state.cwd || CODEX_DEFAULT_CWD };
  }

  if (["get-childitem -force", "dir", "ls"].includes(normalized)) {
    return { type: "success", text: renderCodexDirectoryListing() };
  }

  if (lower[0] === "get-content") {
    return {
      type: "success",
      text:
        [
          "# Repo notes",
          "- Purpose: Oracle analytics training workspace.",
          "- Key folders: ccs, docs, fusion, projects, wacs.",
          "- Review checkpoint: inspect generated notes before committing."
        ].join("\n")
    };
  }

  if (lower[0] === "rg" && lower[1] === "--files") {
    const sqlOnly = tokens.includes("-g") && tokens.some((token) => token.replaceAll("'", "").replaceAll('"', "") === "*.sql");
    return { type: "success", text: renderCodexFileSearch(sqlOnly) };
  }

  if (normalized === "git diff" || normalized === "git diff --stat") {
    if (!isCodexRepoRoot()) {
      return { type: "error", text: "fatal: not a git repository. Navigate to C:\\Repositories\\Oracle first." };
    }
    return { type: "success", text: "No local file changes in this practice terminal." };
  }

  if (normalized === "git status") {
    if (!isCodexRepoRoot()) {
      return { type: "error", text: "fatal: not a git repository. Navigate to C:\\Repositories\\Oracle first." };
    }
    return {
      type: "success",
      text:
        [
          "On branch feature/codex-training-demo",
          "Your branch is up to date with origin/feature/codex-training-demo.",
          "nothing to commit, working tree clean"
        ].join("\n")
    };
  }

  if (normalized === "git branch") {
    return { type: "success", text: "  main\n* feature/codex-training-demo" };
  }

  if (normalized === "exit") {
    if (!state.codexCli.sessionOpen) {
      return { type: "note", text: "No Codex session is open." };
    }
    state.codexCli.sessionOpen = false;
    return { type: "success", text: "Closed Codex session. Back to PowerShell." };
  }

  if (lower[0] === "codex") {
    return { type: "error", text: POWERSHELL_CODEX_SHIM_BLOCKER };
  }

  if (lower[0] === "codex.cmd") {
    return commandCodex(tokens.slice(1), text);
  }

  if (state.codexCli.sessionOpen) {
    return runCodexPrompt(text, "interactive");
  }

  if (looksLikeCodexPrompt(text)) {
    return {
      type: "note",
      text: "This looks like a prompt. Start Codex first with codex.cmd, or run it as: codex.cmd \"your prompt\"."
    };
  }

  return { type: "error", text: "Command not recognized in this PowerShell practice terminal. Type help for supported commands." };
}

function commandCodexCd(args) {
  const target = args.join(" ").trim();
  if (!target) {
    return { type: "error", text: "Specify a folder, for example: cd C:\\Repositories\\Oracle" };
  }

  const normalizedTarget = target.replaceAll("/", "\\").replace(/^["']|["']$/g, "");
  const current = state.cwd || CODEX_DEFAULT_CWD;
  if (normalizedTarget === "..") {
    state.cwd = current.split("\\").slice(0, -1).join("\\") || "C:\\";
    return { type: "success", text: `Location changed to ${state.cwd}` };
  }

  if (normalizePathForCompare(normalizedTarget) === normalizePathForCompare(ORACLE_REPO_ROOT)) {
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `Location changed to ${ORACLE_REPO_ROOT}` };
  }

  if (normalizePathForCompare(normalizedTarget) === normalizePathForCompare("C:\\Repositories")) {
    state.cwd = "C:\\Repositories";
    return { type: "success", text: "Location changed to C:\\Repositories" };
  }

  if (normalizedTarget.toLowerCase() === "oracle" && normalizePathForCompare(current) === normalizePathForCompare("C:\\Repositories")) {
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `Location changed to ${ORACLE_REPO_ROOT}` };
  }

  return { type: "error", text: `Cannot find path '${target}' in this simulator. Try cd ${ORACLE_REPO_ROOT}` };
}

function commandCodex(args, rawText) {
  if (!state.codexCli.installed) {
    return { type: "error", text: "Codex is not confirmed yet. Run: codex.cmd --version" };
  }
  if (!state.codexCli.loggedIn) {
    return { type: "error", text: "Codex is not authenticated yet. Run: codex.cmd login" };
  }
  if (!isCodexRepoRoot()) {
    return { type: "error", text: `Navigate to the repo root first: cd ${ORACLE_REPO_ROOT}` };
  }

  if (!args.length) {
    state.codexCli.sessionOpen = true;
    return {
      type: "success",
      text: "Codex session started in the Oracle repo. Paste a prompt, or type exit to close the session."
    };
  }

  const mode = args[0]?.toLowerCase() === "exec" ? "exec" : "one-shot";
  const prompt = args[0]?.toLowerCase() === "exec" ? args.slice(1).join(" ") : args.join(" ");
  if (!prompt.trim()) {
    return { type: "error", text: `Provide a prompt, for example: codex.cmd ${mode === "exec" ? "exec " : ""}"Inspect this repo"` };
  }

  return runCodexPrompt(prompt, mode, rawText);
}

function runCodexPrompt(prompt, mode = "interactive") {
  const response = simulateCodexPromptResponse(prompt, mode);
  state.codexCli.promptRuns.push({
    prompt,
    mode,
    cwd: state.cwd || CODEX_DEFAULT_CWD
  });
  return { type: "success", text: response };
}

function simulateCodexPromptResponse(prompt, mode) {
  const normalized = String(prompt).toLowerCase();
  const prefix = mode === "exec" ? "codex.cmd exec practice response" : "Codex practice response";
  if (normalized.includes("ado") || normalized.includes("ticket")) {
    return [
      `${prefix}: ADO orientation draft`,
      "1. Restate the request in plain language.",
      "2. Infer requirements separately from assumptions.",
      "3. Search likely Oracle repo areas before editing.",
      "4. Propose a branch name and PR validation notes."
    ].join("\n");
  }
  if (normalized.includes("sql") || normalized.includes("lineage")) {
    return [
      `${prefix}: SQL review plan`,
      "- Identify source tables, joins, filters, and output grain.",
      "- Compare nearby SQL files before changing behavior.",
      "- Capture assumptions and validation gaps before commit."
    ].join("\n");
  }
  if (normalized.includes("diff") || normalized.includes("review") || normalized.includes("risk")) {
    return [
      `${prefix}: review checkpoint`,
      "- Review changed files before commit.",
      "- Flag unsupported claims, missing validation, and behavior risks.",
      "- Keep the final PR summary tied to file evidence."
    ].join("\n");
  }
  if (normalized.includes("inspect") || normalized.includes("plan")) {
    return [
      `${prefix}: repo orientation plan`,
      "- Confirm current folder and Git branch.",
      "- Map files with rg --files.",
      "- Identify likely entry points and validation commands.",
      "- Ask before broad edits or uncertain assumptions."
    ].join("\n");
  }
  return [
    `${prefix}: prompt accepted`,
    "I would inspect local context, produce a short plan, keep edits narrow, and report validation plus residual risks."
  ].join("\n");
}

function looksLikeCodexPrompt(text) {
  return /\b(inspect|review|summarize|refactor|draft|identify|explain|analyze|prompt|ticket)\b/i.test(text);
}

function renderCodexDirectoryListing() {
  if (isCodexRepoRoot()) {
    return [".azuredevops", "ccs", "docs", "fusion", "projects", "tests", "wacs", "AGENTS.md", "README.md"].join("\n");
  }
  if (normalizePathForCompare(state.cwd || "") === normalizePathForCompare("C:\\Repositories")) {
    return "Oracle";
  }
  return "No repo files here yet. Use: cd C:\\Repositories\\Oracle";
}

function renderCodexFileSearch(sqlOnly = false) {
  if (!isCodexRepoRoot()) {
    return "No files found because the current folder is not the Oracle repo root.";
  }

  const files = flattenRepoMapFiles(oracleRepoMap);
  const filtered = sqlOnly ? files.filter((file) => file.toLowerCase().endsWith(".sql")) : files;
  return filtered.slice(0, 18).join("\n");
}

function flattenRepoMapFiles(items, parentPath = "") {
  return items.flatMap((item) => {
    const itemPath = item.path || [parentPath, item.name].filter(Boolean).join("/");
    if (item.type === "file") {
      return [itemPath];
    }
    return flattenRepoMapFiles(item.children || [], itemPath);
  });
}

function ensureCodexCliState() {
  state.codexCli = {
    ...createCodexCliState(),
    ...(state.codexCli && typeof state.codexCli === "object" ? state.codexCli : {})
  };
  state.codexCli.promptRuns = Array.isArray(state.codexCli.promptRuns) ? state.codexCli.promptRuns : [];
  if (!state.cwd || normalizePathForCompare(state.cwd) === normalizePathForCompare(CODEX_OLD_DEFAULT_CWD)) {
    state.cwd = CODEX_DEFAULT_CWD;
  }
  return state.codexCli;
}

function getCodexPrompt() {
  ensureCodexCliState();
  return state.codexCli.sessionOpen ? "codex>" : `PS ${state.cwd || CODEX_DEFAULT_CWD}>`;
}

function isCodexRepoRoot() {
  return normalizePathForCompare(state.cwd || "") === normalizePathForCompare(ORACLE_REPO_ROOT);
}

function normalizePathForCompare(path) {
  return String(path || "").replaceAll("/", "\\").replace(/\\+$/g, "").toLowerCase();
}

function executeCommand(command) {
  const easterEgg = getGitEasterEgg(command);
  if (easterEgg) {
    return easterEgg;
  }

  const outFile = parseOutFile(command);
  if (outFile) {
    return commandOutFile(outFile);
  }

  const tokens = tokenize(command);
  const lower = tokens.map((token) => token.toLowerCase());

  if (lower[0] === "help" || (lower[0] === "git" && lower[1] === "help")) {
    return {
      type: "note",
      text:
        [
          "Supported commands:",
          `  git clone ${ADO_REPO_URL}`,
          "  git config --global user.name",
          "  git config --global user.email",
          "  git remote -v",
          "  git status",
          "  git diff | git diff --stat | git diff --staged",
          "  git add <file> | git add .",
          '  git commit -m "message"',
          "  git branch | git branch <name>",
          "  git switch <branch> | git switch -c <branch>",
          "  git merge <branch>",
          "  git log --oneline",
          "  git push | git pull",
          "  git restore --staged <file>",
          "  mkdir <folder>",
          "  cd <folder>",
          "  git init",
          `  "${oracleLab.firstFileContent}" | Out-File README.md`,
          "  edit <file>",
          "  resolve <file>",
          "  clear"
        ].join("\n")
    };
  }

  if (lower[0] === "mkdir") {
    return commandMkdir(tokens.slice(1));
  }

  if (lower[0] === "cd") {
    return commandCd(tokens.slice(1));
  }

  if (lower[0] === "edit") {
    return commandEdit(tokens.slice(1));
  }

  if (lower[0] === "resolve") {
    return commandResolve(tokens.slice(1));
  }

  if (lower[0] !== "git") {
    return {
      type: "error",
      text: "Command not recognized. Use help to list supported simulator commands."
    };
  }

  switch (lower[1]) {
    case "clone":
      return commandClone(tokens.slice(2));
    case "config":
      return commandConfig(tokens.slice(2));
    case "init":
      return commandInit();
    case "remote":
      return commandRemote(tokens.slice(2));
    case "status":
      return commandStatus();
    case "diff":
      return commandDiff(tokens.slice(2));
    case "add":
      return commandAdd(tokens.slice(2));
    case "commit":
      return commandCommit(tokens.slice(2));
    case "branch":
      return commandBranch(tokens.slice(2));
    case "switch":
      return commandSwitch(tokens.slice(2));
    case "checkout":
      return commandSwitch(tokens.slice(2));
    case "merge":
      return commandMerge(tokens.slice(2));
    case "log":
      return commandLog(tokens.slice(2));
    case "push":
      return commandPush();
    case "pull":
      return commandPull();
    case "restore":
      return commandRestore(tokens.slice(2));
    default:
      return {
        type: "error",
        text: `git ${tokens[1] || ""} is not implemented in this lab. Use help for supported commands.`
      };
  }
}

function commandMkdir(args) {
  const folder = args[0];
  if (!folder) {
    return { type: "error", text: "Specify a folder name." };
  }

  if (!state.folders.includes(folder)) {
    state.folders.push(folder);
  }

  return { type: "success", text: `Directory created: ${folder}` };
}

function commandCd(args) {
  const folder = args[0];
  if (!folder) {
    return { type: "error", text: "Specify a folder to enter." };
  }

  if (!state.folders.includes(folder)) {
    return { type: "error", text: `Cannot find path '${folder}' because it does not exist.` };
  }

  state.cwd = `${PS_ROOT}\\${toTitleFolder(folder)}`;
  return { type: "success", text: `Location changed to ${state.cwd}` };
}

function commandInit() {
  if (state.initialized) {
    return { type: "note", text: "Reinitialized existing Git repository." };
  }

  state.initialized = true;
  state.currentBranch = "main";
  state.branches = { main: null };
  state.branchLanes = { main: 0 };
  state.remoteBranches = {};
  state.indexFiles = {};
  state.workingFiles = {};
  state.commits = [];
  state.nextCommit = 0;

  return { type: "success", text: "Initialized empty Git repository in .git/" };
}

function commandConfig(args) {
  const normalized = args.map((arg) => arg.toLowerCase());
  const isGlobal = normalized[0] === "--global";
  const key = isGlobal ? args[1] : args[0];
  const value = isGlobal ? args.slice(2).join(" ") : args.slice(1).join(" ");
  const normalizedKey = String(key || "").toLowerCase();

  if (!key) {
    return {
      type: "error",
      text: "Specify a config key. Try git config --global user.name or git config --global user.email."
    };
  }

  if (value) {
    if (normalizedKey === "user.name") {
      state.gitIdentity = { ...(state.gitIdentity || {}), name: value.replace(/^['\"]|['\"]$/g, "") };
      return { type: "success", text: `Configured user.name=${state.gitIdentity.name}` };
    }
    if (normalizedKey === "user.email") {
      state.gitIdentity = { ...(state.gitIdentity || {}), email: value.replace(/^['\"]|['\"]$/g, "") };
      return { type: "success", text: `Configured user.email=${state.gitIdentity.email}` };
    }
  }

  if (normalizedKey === "user.name") {
    return { type: "success", text: state.gitIdentity?.name || "putnambrownej" };
  }

  if (normalizedKey === "user.email") {
    return { type: "success", text: state.gitIdentity?.email || "putnam.browne@deltautilities.com" };
  }

  return {
    type: "error",
    text: "This lab only models user.name and user.email. Azure DevOps sign-in happens during remote clone, fetch, push, and PR actions."
  };
}

function commandClone(args) {
  const remoteUrl = args[0];
  if (!remoteUrl) {
    return { type: "error", text: "Specify the Azure DevOps clone URL." };
  }

  if (state.initialized) {
    return { type: "note", text: `Repository already cloned. Use cd ${CLONED_REPO_FOLDER} and inspect the existing repo.` };
  }

  const baseFiles = getOracleRepoBaselineFiles();
  const rootCommit = {
    id: "c000",
    message: "Oracle repo baseline snapshot",
    parents: [],
    files: clone(baseFiles),
    branch: "main",
    lane: 0,
    order: 0
  };

  if (!state.folders.includes(CLONED_REPO_FOLDER)) {
    state.folders.push(CLONED_REPO_FOLDER);
  }

  state.initialized = true;
  state.currentBranch = "main";
  state.branches = { main: rootCommit.id };
  state.branchLanes = { main: 0 };
  state.remoteBranches = { "origin/main": rootCommit.id };
  state.remoteUrl = remoteUrl;
  state.indexFiles = clone(baseFiles);
  state.workingFiles = clone(baseFiles);
  state.commits = [rootCommit];
  state.nextCommit = 1;
  state.selectedCommitId = rootCommit.id;
  state.pendingMerge = null;
  state.conflict = null;
  return {
    type: "success",
    text: `Authenticated to Azure DevOps, cloned Oracle into ${CLONED_REPO_FOLDER}, and configured origin.`
  };
}

function commandRemote(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Clone or initialize a repo first." };
  }

  const subcommand = (args[0] || "-v").toLowerCase();
  if (subcommand !== "-v") {
    return { type: "error", text: "This lab supports git remote -v." };
  }

  const remoteUrl = state.remoteUrl || ADO_REPO_URL;
  return {
    type: "success",
    text: [`origin\t${remoteUrl} (fetch)`, `origin\t${remoteUrl} (push)`].join("\n")
  };
}

function commandOutFile(outFile) {
  if (!state.initialized) {
    return { type: "error", text: "Create a Git repository first with git init." };
  }

  state.workingFiles[outFile.file] = `${outFile.content}\n`;
  state.selectedFilePath = outFile.file;
  return { type: "success", text: `Created ${outFile.file}` };
}

function commandStatus() {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  state.taskFlags.status = true;
  const status = getStatus();
  const lines = [`On branch ${state.currentBranch}`];

  if (!hasHeadCommit()) {
    lines.push("No commits yet");
  }

  if (state.conflict) {
    lines.push("You have unmerged paths.");
    lines.push(`  unresolved: ${state.conflict.files.join(", ")}`);
  }

  if (state.pendingMerge && !state.conflict) {
    lines.push(`All conflicts fixed but you are still merging ${state.pendingMerge.source}.`);
  }

  if (status.staged.length) {
    lines.push("Changes to be committed:");
    status.staged.forEach((entry) => lines.push(`  ${entry.stagedType}: ${entry.name}`));
  }

  if (status.unstaged.length) {
    lines.push("Changes not staged for commit:");
    status.unstaged.forEach((entry) => lines.push(`  ${entry.unstagedType}: ${entry.name}`));
  }

  if (status.untracked.length) {
    lines.push("Untracked files:");
    status.untracked.forEach((entry) => lines.push(`  ${entry.name}`));
  }

  if (status.clean && !state.pendingMerge) {
    lines.push("nothing to commit, working tree clean");
  }

  return {
    type: status.clean ? "success" : "note",
    text: lines.join("\n")
  };
}

function commandDiff(args = []) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  const staged = args.includes("--staged") || args.includes("--cached");
  const statOnly = args.includes("--stat");
  const beforeFiles = staged ? currentHeadFiles() : state.indexFiles;
  const afterFiles = staged ? state.indexFiles : state.workingFiles;
  const names = uniqueSorted([...Object.keys(beforeFiles), ...Object.keys(afterFiles)]);
  const changes = names
    .map((name) => ({
      name,
      before: beforeFiles[name],
      after: afterFiles[name]
    }))
    .filter((entry) => entry.before !== entry.after);

  if (!changes.length) {
    return { type: "success", text: staged ? "No staged changes to show." : "No unstaged changes to show." };
  }

  if (statOnly) {
    return {
      type: "note",
      text: changes
        .map((entry) => `${entry.name} | ${estimateChangedLines(entry.before, entry.after)} +`)
        .join("\n")
    };
  }

  const lines = [];
  changes.forEach((entry) => {
    const kind = changeType(entry.before, entry.after);
    lines.push(`diff --git a/${entry.name} b/${entry.name}`);
    lines.push(`${kind}: ${entry.name}`);
    lines.push(`--- ${entry.before === undefined ? "/dev/null" : `a/${entry.name}`}`);
    lines.push(`+++ ${entry.after === undefined ? "/dev/null" : `b/${entry.name}`}`);
    lines.push("@@ simulator diff @@");
    previewDiffLines(entry.after === undefined ? entry.before : entry.after, entry.after === undefined ? "-" : "+").forEach((line) => lines.push(line));
  });

  return { type: "note", text: lines.join("\n") };
}

function commandAdd(paths) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!paths.length) {
    return { type: "error", text: "Nothing specified. Use git add <file> or git add ." };
  }

  const selected = expandPaths(paths);
  if (!selected.length) {
    return { type: "error", text: "No matching files found in the working tree." };
  }

  const changed = selected.filter((name) => state.workingFiles[name] !== state.indexFiles[name]);
  if (!changed.length) {
    return { type: "note", text: "No changes to stage. The working tree already matches the index." };
  }

  changed.forEach((name) => {
    if (state.workingFiles[name] === undefined) {
      delete state.indexFiles[name];
    } else {
      state.indexFiles[name] = state.workingFiles[name];
    }
  });

  state.taskFlags.staged = getStatus().staged.length > 0 || state.taskFlags.staged;
  return {
    type: "success",
    text: `Staged ${changed.length} file${changed.length === 1 ? "" : "s"}: ${changed.join(", ")}`
  };
}

function commandCommit(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (state.conflict) {
    return {
      type: "error",
      text: "Resolve all conflict markers before committing the merge."
    };
  }

  const status = getStatus();
  if (!status.staged.length && !state.pendingMerge) {
    return {
      type: "error",
      text: "No staged changes to commit. Use git add before git commit."
    };
  }

  const message = extractCommitMessage(args) || defaultCommitMessage();
  const parents = state.pendingMerge
    ? [state.pendingMerge.targetHead, state.pendingMerge.sourceHead]
    : hasHeadCommit()
      ? [headId()]
      : [];

  const commit = createCommitFromFiles(message, parents, clone(state.indexFiles));
  state.branches[state.currentBranch] = commit.id;
  state.indexFiles = clone(commit.files);
  state.selectedCommitId = commit.id;

  if (state.pendingMerge) {
    state.workingFiles = clone(commit.files);
    state.taskFlags.merged = true;
    state.pendingMerge = null;
  }

  state.taskFlags.committed = true;
  if (state.currentBranch !== "main") {
    state.taskFlags.branchCommitted = true;
  }

  return {
    type: "success",
    text: `[${state.currentBranch} ${commit.id}] ${message}`
  };
}

function commandBranch(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!args.length) {
    const lines = Object.keys(state.branches)
      .sort()
      .map((name) => `${name === state.currentBranch ? "*" : " "} ${name} ${state.branches[name] || "(no commits yet)"}`);
    return { type: "success", text: lines.join("\n") };
  }

  const name = args[0];
  return createBranch(name, false);
}

function commandSwitch(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!args.length) {
    return { type: "error", text: "Specify a branch name." };
  }

  if (args[0] === "-c" || args[0] === "-b") {
    if (!args[1]) {
      return { type: "error", text: "Specify a new branch name." };
    }
    return createBranch(args[1], true);
  }

  const branch = args[0];
  if (!Object.prototype.hasOwnProperty.call(state.branches, branch)) {
    return { type: "error", text: `Branch not found: ${branch}` };
  }

  const status = getStatus();
  if (!status.clean || state.pendingMerge) {
    return {
      type: "error",
      text: "Working tree has open changes. Commit, stage, or reset the lab before switching branches."
    };
  }

  state.currentBranch = branch;
  const files = currentHeadFiles();
  state.indexFiles = clone(files);
  state.workingFiles = clone(files);
  state.pendingMerge = null;
  state.conflict = null;

  return { type: "success", text: `Switched to branch ${branch}` };
}

function commandMerge(args) {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "error", text: "Create at least one commit before merging branches." };
  }

  const source = args[0];
  if (!source) {
    return { type: "error", text: "Specify a branch to merge." };
  }

  if (!Object.prototype.hasOwnProperty.call(state.branches, source) || !state.branches[source]) {
    return { type: "error", text: `Branch not found: ${source}` };
  }

  if (source === state.currentBranch) {
    return { type: "success", text: "Already up to date." };
  }

  const status = getStatus();
  if (!status.clean || state.pendingMerge) {
    return {
      type: "error",
      text: "Commit or resolve current changes before starting a merge."
    };
  }

  const targetHead = headId();
  const sourceHead = state.branches[source];

  if (isAncestor(sourceHead, targetHead)) {
    return { type: "success", text: "Already up to date." };
  }

  if (isAncestor(targetHead, sourceHead)) {
    const sourceCommit = getCommit(sourceHead);
    recordMergeEvent({
      type: "fast-forward",
      target: state.currentBranch,
      source,
      from: targetHead,
      to: sourceHead
    });
    state.branches[state.currentBranch] = sourceHead;
    state.indexFiles = clone(sourceCommit.files);
    state.workingFiles = clone(sourceCommit.files);
    state.selectedCommitId = sourceHead;
    state.taskFlags.merged = true;
    return {
      type: "success",
      text: `Fast-forward\n${targetHead}..${sourceHead}  ${source} -> ${state.currentBranch}`
    };
  }

  const baseId = getMergeBase(targetHead, sourceHead);
  const conflicts = findConflicts(baseId, targetHead, sourceHead);
  if (conflicts.length) {
    const scenario = findConflictScenario(source);
    const mergeMessage = scenario?.mergeMessage || `Merge branch '${source}'`;
    const targetFiles = clone(getCommit(targetHead).files);
    const sourceFiles = getCommit(sourceHead).files;
    conflicts.forEach((file) => {
      targetFiles[file] = [
        "<<<<<<< HEAD",
        getCommit(targetHead).files[file] || "",
        "=======",
        sourceFiles[file] || "",
        `>>>>>>> ${source}`
      ].join("\n");
    });

    state.workingFiles = targetFiles;
    state.indexFiles = clone(getCommit(targetHead).files);
    state.pendingMerge = { source, sourceHead, targetHead, mergeMessage };
    state.conflict = { files: conflicts, source, sourceHead, targetHead, mergeMessage };

    return {
      type: "error",
      text:
        [
          `CONFLICT: ${conflicts.join(", ")}`,
          "Automatic merge failed. Fix conflicts, then run:",
          `  resolve ${conflicts[0]}`,
          `  git add ${conflicts[0]}`,
          `  git commit -m "${mergeMessage}"`
        ].join("\n")
    };
  }

  const mergedFiles = mergeSnapshots(baseId, targetHead, sourceHead);
  const scenario = findConflictScenario(source);
  const commit = createCommitFromFiles(scenario?.mergeMessage || `Merge branch '${source}'`, [targetHead, sourceHead], mergedFiles);
  recordMergeEvent({
    type: "merge-commit",
    target: state.currentBranch,
    source,
    from: targetHead,
    sourceHead,
    to: commit.id
  });
  state.branches[state.currentBranch] = commit.id;
  state.indexFiles = clone(commit.files);
  state.workingFiles = clone(commit.files);
  state.selectedCommitId = commit.id;
  state.taskFlags.merged = true;

  return {
    type: "success",
    text: `Merge made commit ${commit.id}.`
  };
}

function commandLog(args) {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "note", text: "No commits yet." };
  }

  const oneline = args.includes("--oneline");
  const commits = reachableCommits(headId());
  const lines = commits.map((commit) => {
    const branches = branchLabelsForCommit(commit.id);
    const labels = branches.length ? ` (${branches.join(", ")})` : "";
    return oneline
      ? `${commit.id}${labels} ${commit.message}`
      : `commit ${commit.id}${labels}\n    ${commit.message}`;
  });
  return { type: "success", text: lines.join("\n") };
}

function commandPush() {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "error", text: "Create a commit before pushing." };
  }

  if (state.pendingMerge || state.conflict) {
    return { type: "error", text: "Finish the merge before pushing." };
  }

  const remoteName = `origin/${state.currentBranch}`;
  state.remoteBranches[remoteName] = headId();
  state.taskFlags.pushed = true;
  return {
    type: "success",
    text: `Authenticated to Azure DevOps and pushed ${state.currentBranch} to ${remoteName} at ${headId()}.`
  };
}

function commandPull() {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  const remoteName = `origin/${state.currentBranch}`;
  const remoteHead = state.remoteBranches[remoteName];
  if (!remoteHead) {
    return { type: "note", text: `${remoteName} does not exist yet. Use git push to publish it.` };
  }

  if (remoteHead === headId()) {
    return { type: "success", text: "Already up to date." };
  }

  if (isAncestor(headId(), remoteHead)) {
    const remoteCommit = getCommit(remoteHead);
    state.branches[state.currentBranch] = remoteHead;
    state.indexFiles = clone(remoteCommit.files);
    state.workingFiles = clone(remoteCommit.files);
    return { type: "success", text: `Fast-forwarded ${state.currentBranch} to ${remoteHead}.` };
  }

  return {
    type: "note",
    text: "Remote and local branches diverged. In real Git, pull would need a merge or rebase."
  };
}

function commandRestore(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (args[0] !== "--staged") {
    return { type: "error", text: "This lab supports git restore --staged <file>." };
  }

  const file = args[1];
  if (!file) {
    return { type: "error", text: "Specify a file to unstage." };
  }

  const headFiles = currentHeadFiles();
  if (headFiles[file] === undefined) {
    delete state.indexFiles[file];
  } else {
    state.indexFiles[file] = headFiles[file];
  }

  return { type: "success", text: `Unstaged ${file}.` };
}

function commandEdit(args) {
  if (!state.initialized) {
    return { type: "error", text: "Create a Git repository first with git init." };
  }

  const file = args[0];
  if (!file) {
    return { type: "error", text: "Specify a file to edit." };
  }

  editFile(file);
  state.selectedFilePath = file;
  return { type: "note", text: `Edited ${file}. Use git status to inspect the working tree.` };
}

function commandResolve(args) {
  const file = args[0];
  if (!file) {
    return { type: "error", text: "Specify a conflicted file to resolve." };
  }

  if (!state.conflict || !state.conflict.files.includes(file)) {
    return { type: "error", text: `${file} is not marked as conflicted.` };
  }

  const mergeMessage = state.conflict.mergeMessage || state.pendingMerge?.mergeMessage;
  const targetContent = getCommit(state.conflict.targetHead).files[file] || "";
  const sourceContent = getCommit(state.conflict.sourceHead).files[file] || "";
  state.workingFiles[file] = mergeUniqueLines(targetContent, sourceContent);
  state.selectedFilePath = file;
  state.conflict.files = state.conflict.files.filter((name) => name !== file);

  if (!state.conflict.files.length) {
    state.conflict = null;
    state.taskFlags.conflictResolved = true;
  }

  return {
    type: "success",
    text: `Resolved ${file}. Stage it with git add ${file}, then commit with git commit -m "${mergeMessage || defaultCommitMessage()}".`
  };
}

function createBranch(name, switchTo) {
  if (!hasHeadCommit()) {
    return { type: "error", text: "Create the first commit before creating additional branches." };
  }

  if (!isValidBranchName(name)) {
    return {
      type: "error",
      text: "Branch names in this lab can use letters, numbers, dots, dashes, underscores, and slashes."
    };
  }

  if (Object.prototype.hasOwnProperty.call(state.branches, name)) {
    return { type: "error", text: `Branch already exists: ${name}` };
  }

  state.branches[name] = headId();
  state.branchLanes[name] = nextLane();
  state.taskFlags.branchCreated = true;

  if (switchTo) {
    state.currentBranch = name;
    return {
      type: "success",
      text: `Created branch ${name} from ${headId()} and switched to it. This is the safe branch-from-main checkpoint.`
    };
  }

  return { type: "success", text: `Created branch ${name} at ${headId()}.` };
}

function editFile(file) {
  const next = state.editCounter++;
  const existing = state.workingFiles[file];
  if (existing === undefined) {
    state.workingFiles[file] =
      `# ${file}\n\nCreated in the working tree.\nLocal edit ${next}: document the Oracle repo asset change.\n`;
    return;
  }

  const separator = existing.endsWith("\n") ? "" : "\n";
  state.workingFiles[file] =
    `${existing}${separator}Local edit ${next}: refine Oracle repo asset.\n`;
}

function extractCommitMessage(args) {
  const index = args.findIndex((arg) => arg === "-m" || arg === "--message");
  if (index === -1) {
    return "";
  }
  return args[index + 1] || "";
}

function defaultCommitMessage() {
  if (state.pendingMerge) {
    return state.pendingMerge.mergeMessage || `Merge branch '${state.pendingMerge.source}'`;
  }
  return "Update tracked files";
}

function createCommitFromFiles(message, parents, files) {
  const commit = {
    id: `c${String(state.nextCommit).padStart(3, "0")}`,
    message,
    parents,
    files: clone(files),
    branch: state.currentBranch,
    lane: state.branchLanes[state.currentBranch] || 0,
    order: state.commits.length
  };
  state.nextCommit += 1;
  state.commits.push(commit);
  return commit;
}

function ensureMergeEvents() {
  if (!Array.isArray(state.mergeEvents)) {
    state.mergeEvents = [];
  }
  return state.mergeEvents;
}

function recordMergeEvent(event) {
  const events = ensureMergeEvents();
  events.push({
    order: events.length,
    ...event
  });
}

function getStatus() {
  const headFiles = currentHeadFiles();
  const names = uniqueSorted([
    ...Object.keys(headFiles),
    ...Object.keys(state.indexFiles),
    ...Object.keys(state.workingFiles)
  ]);

  const entries = names.map((name) => {
    const head = headFiles[name];
    const index = state.indexFiles[name];
    const working = state.workingFiles[name];
    const stagedType = index === head ? null : changeType(head, index);
    const untracked = head === undefined && index === undefined && working !== undefined;
    const unstagedType = untracked || working === index ? null : changeType(index, working);

    return {
      name,
      stagedType,
      unstagedType,
      untracked,
      conflicted: Boolean(state.conflict && state.conflict.files.includes(name)),
      working
    };
  });

  const staged = entries.filter((entry) => entry.stagedType);
  const untracked = entries.filter((entry) => entry.untracked);
  const unstaged = entries.filter((entry) => entry.unstagedType && !entry.untracked);

  return {
    entries,
    staged,
    unstaged,
    untracked,
    clean: !staged.length && !unstaged.length && !untracked.length && !state.conflict
  };
}

function changeType(before, after) {
  if (before === undefined && after !== undefined) {
    return "new file";
  }
  if (before !== undefined && after === undefined) {
    return "deleted";
  }
  return "modified";
}

function estimateChangedLines(before, after) {
  const beforeCount = before === undefined ? 0 : String(before).split("\n").filter(Boolean).length;
  const afterCount = after === undefined ? 0 : String(after).split("\n").filter(Boolean).length;
  return Math.max(1, Math.abs(afterCount - beforeCount) || afterCount || beforeCount);
}

function previewDiffLines(content, marker) {
  const lines = String(content || "")
    .split("\n")
    .filter(Boolean)
    .slice(0, 6);
  return lines.length ? lines.map((line) => `${marker} ${line}`) : [`${marker} <empty>`];
}

function expandPaths(paths) {
  if (paths.includes(".") || paths.includes("-A") || paths.includes("--all")) {
    return uniqueSorted([...Object.keys(state.workingFiles), ...Object.keys(state.indexFiles)]);
  }

  return uniqueSorted(
    paths.filter((file) => state.workingFiles[file] !== undefined || state.indexFiles[file] !== undefined)
  );
}

function isAncestor(ancestorId, descendantId) {
  const stack = [descendantId];
  const seen = new Set();

  while (stack.length) {
    const id = stack.pop();
    if (id === ancestorId) {
      return true;
    }
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const commit = getCommit(id);
    commit.parents.forEach((parent) => stack.push(parent));
  }

  return false;
}

function getMergeBase(targetId, sourceId) {
  const targetAncestors = new Set(reachableCommits(targetId).map((commit) => commit.id));
  return reachableCommits(sourceId).find((commit) => targetAncestors.has(commit.id))?.id || targetId;
}

function findConflicts(baseId, targetId, sourceId) {
  const base = getCommit(baseId).files;
  const target = getCommit(targetId).files;
  const source = getCommit(sourceId).files;
  const names = uniqueSorted([...Object.keys(base), ...Object.keys(target), ...Object.keys(source)]);

  return names.filter((name) => {
    const targetChanged = target[name] !== base[name];
    const sourceChanged = source[name] !== base[name];
    return targetChanged && sourceChanged && target[name] !== source[name];
  });
}

function mergeSnapshots(baseId, targetId, sourceId) {
  const base = getCommit(baseId).files;
  const target = clone(getCommit(targetId).files);
  const source = getCommit(sourceId).files;
  const names = uniqueSorted([...Object.keys(base), ...Object.keys(target), ...Object.keys(source)]);

  names.forEach((name) => {
    const sourceChanged = source[name] !== base[name];
    const targetChanged = target[name] !== base[name];
    if (sourceChanged && !targetChanged) {
      if (source[name] === undefined) {
        delete target[name];
      } else {
        target[name] = source[name];
      }
    }
  });

  return target;
}

function reachableCommits(startId) {
  const result = [];
  const seen = new Set();

  function visit(id) {
    if (!id || seen.has(id)) {
      return;
    }
    seen.add(id);
    const commit = getCommit(id);
    result.push(commit);
    commit.parents.forEach(visit);
  }

  visit(startId);
  return result.sort((a, b) => b.order - a.order);
}

function mergeUniqueLines(targetContent, sourceContent) {
  const lines = [];
  [targetContent, sourceContent].forEach((content) => {
    String(content)
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter(Boolean)
      .forEach((line) => {
        if (!lines.includes(line)) {
          lines.push(line);
        }
      });
  });
  lines.push("Resolution: reviewed combined rule set before publish");
  return `${lines.join("\n")}\n`;
}

function maybeAdvanceLesson() {
  const activeLessons = getActiveLessons();
  const active = activeLessons[state.lessonIndex];
  if (!active || !active.complete(state) || state.lessonIndex >= activeLessons.length - 1) {
    return;
  }

  const next = activeLessons[state.lessonIndex + 1];
  state.lessonIndex += 1;
  state.expandedLessonIndex = state.lessonIndex;
  appendTerminal("note", `Lesson complete. Next: ${next.title}.`);
}

function render() {
  updateThemeButton();
  renderPortal();

  const portalView = document.getElementById("portalView");
  const statusStrip = document.getElementById("statusStrip");
  const labView = document.getElementById("labView");
  const practiceMode = isPracticeMode();
  const codexMode = isCodexMode();
  const capstoneMode = isCapstoneMode();
  const vscodeMode = isVSCodeMode();
  const sqlMode = isSqlMode();
  portalView.hidden = Boolean(state.inLesson);
  statusStrip.hidden = !state.inLesson || practiceMode || codexMode || capstoneMode || vscodeMode || sqlMode;
  labView.hidden = !state.inLesson;
  labView.classList.toggle("practice-workspace", practiceMode);
  labView.classList.toggle("codex-workspace", codexMode);
  labView.classList.toggle("capstone-workspace", capstoneMode);
  labView.classList.toggle("vscode-workspace", vscodeMode);
  labView.classList.toggle("sql-workspace", sqlMode);
  labView.classList.toggle("git-workspace", !practiceMode && !codexMode && !capstoneMode && !vscodeMode && !sqlMode);
  document.querySelector(".terminal-panel")?.classList.toggle("sql-terminal-panel", sqlMode);
  updateTopbarContextActions(practiceMode);

  if (!state.inLesson) {
    return;
  }

  if (codexMode) {
    renderCodexWorkspace();
    return;
  }

  if (capstoneMode) {
    renderCapstoneWorkspace();
    return;
  }

  if (vscodeMode) {
    renderVSCodeWorkspace();
    return;
  }

  if (sqlMode) {
    renderSqlWorkspace();
    return;
  }

  renderRepositoryDirectory();

  if (practiceMode) {
    renderPracticeWorkspace();
    return;
  }

  renderStatusStrip();
  renderLessons();
  renderGuidedCommands();
  renderTerminal();
  renderQuiz();
}

function updateTopbarContextActions(practiceMode) {
  const conflictButton = document.querySelector('[data-action="start-conflict"]');
  const referenceButton = document.querySelector('[data-action="toggle-practice-reference"]');
  const conflictRow = conflictButton?.closest(".topbar-action-secondary");
  if (conflictButton) {
    conflictButton.hidden = !practiceMode;
  }
  if (referenceButton) {
    referenceButton.hidden = !practiceMode;
    referenceButton.setAttribute("aria-expanded", String(Boolean(practiceMode && state.practiceReferenceOpen)));
    referenceButton.classList.toggle("active", Boolean(practiceMode && state.practiceReferenceOpen));
  }
  if (conflictRow) {
    conflictRow.hidden = !practiceMode;
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch (error) {
    return "light";
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch (error) {
    // Theme still applies for this session if storage is unavailable.
  }
  updateThemeButton();
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

function updateThemeButton() {
  const button = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  if (!button || !label) {
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";
  const targetTheme = isDark ? "light" : "dark";
  const targetLabel = targetTheme === "dark" ? "Dark" : "Light";
  button.setAttribute("aria-pressed", String(isDark));
  button.setAttribute("aria-label", `Switch to ${targetTheme} mode`);
  button.setAttribute("title", `Switch to ${targetTheme} mode`);
  label.textContent = targetLabel;
}

function renderPortal() {
  const gitModule = modules[0];
  const projectModule = modules.find((module) => module.id === "project-work");
  document.getElementById("portalView").innerHTML = `
    ${renderResumeWorkItemPanel(gitModule)}
    <div class="course-stack primary-course-stack">
      <details class="path-section path-section-group" open>
        <summary class="path-section-header">
          <div>
            <span class="section-kicker">Primary path</span>
            <h2>Git workflow labs</h2>
            <p>Start here first. Build the ticket-to-branch-to-PR loop before using the support modules.</p>
          </div>
          <div class="path-section-meta">
            <span class="path-count">5 Git-focused modules</span>
            <em aria-hidden="true"></em>
          </div>
        </summary>
        <div class="path-section-body">
          ${renderCourseCard(gitModule)}
          ${renderVisualBranchingCourseCard()}
          ${renderPracticeCourseCard()}
          ${projectModule ? renderCourseCard(projectModule) : ""}
          ${renderCapstoneCourseCard()}
        </div>
      </details>
    </div>
    <aside class="course-side getting-started-side">
      ${renderGettingStartedCatalog(gitModule, projectModule)}
    </aside>
  `;
}

function renderGettingStartedCatalog(gitModule, projectModule) {
  return `
    <section class="course-section catalog-intro">
      <span class="section-kicker">Optional support path</span>
      <h3>Getting Started</h3>
      <p>Open these only when the learner needs tool or SQL context. Most first runs should stay on the Git path.</p>
    </section>
    <details class="catalog-group">
      <summary>
        <span>Tools</span>
        <strong>Codex and VS Code</strong>
        <em>2 modules</em>
      </summary>
      <div class="catalog-card-grid">
        ${renderCatalogCard({
          label: "Codex",
          title: codexLab.title,
          description: "Setup, login, prompt discipline, safe repo inspection, and reviewable handoff notes.",
          meta: `${codexLab.time} · ${codexLab.level}`,
          action: "open-codex-lesson",
          actionLabel: "Open lesson",
          secondaryHref: codexLab.setupUrl,
          secondaryLabel: "Download"
        })}
        ${renderCatalogCard({
          label: "VS Code",
          title: vscodeLab.title,
          description: "Explorer, search, terminal, Source Control, diffs, commits, conflicts, and extensions.",
          meta: `${vscodeLab.time} · ${vscodeLab.level}`,
          action: "open-vscode-lab",
          actionLabel: "Open lab",
          secondaryHref: vscodeLab.setupUrl,
          secondaryLabel: "Get VS Code"
        })}
      </div>
    </details>
    <details class="catalog-group">
      <summary>
        <span>Languages</span>
        <strong>Oracle SQL</strong>
        <em>1 module</em>
      </summary>
      <div class="catalog-card-grid">
        ${renderCatalogCard({
          label: "SQL",
          title: oracleSqlLab.title,
          description: "Start with SELECT *, then filter, aggregate, join, and build a review-ready query.",
          meta: `${oracleSqlLab.time} · ${oracleSqlLab.level}`,
          action: "open-sql-lab",
          actionLabel: "Open SQL Lab"
        })}
      </div>
    </details>
    <details class="catalog-group">
      <summary>
        <span>Concepts</span>
        <strong>ADO, Git terms, and repo habits</strong>
        <em>Reference</em>
      </summary>
      <div class="concept-reference-grid">
        <article>
          <h4>Git + ADO steps</h4>
          <ol class="compact-list">
            ${gitModule.labSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </article>
        ${
          projectModule
            ? `<article>
                <h4>Project workflow</h4>
                <ol class="compact-list">
                  ${projectModule.labSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ol>
              </article>`
            : ""
        }
        <article>
          <h4>ADO methodologies</h4>
          <ul class="compact-list">
            <li>Use case 1: ticket -> branch -> PR.</li>
            <li>Use case 2: project capsule on main, then workstream branches.</li>
            <li>Add <code>workstreams.md</code> when work has parallel tracks.</li>
          </ul>
        </article>
        <article>
          <h4>Git glossary</h4>
          ${renderCompactGlossary()}
        </article>
      </div>
    </details>
  `;
}

function renderCatalogCard({ label, title, description, meta, action, actionLabel, secondaryHref, secondaryLabel }) {
  return `
    <article class="catalog-card">
      <div>
        <span class="catalog-chip">${escapeHtml(label)}</span>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(description)}</p>
        <small>${escapeHtml(meta)}</small>
      </div>
      <div class="catalog-actions">
        <button class="text-button" type="button" data-action="${escapeAttribute(action)}">${escapeHtml(actionLabel)}</button>
        ${
          secondaryHref
            ? `<a class="text-button catalog-link" href="${escapeAttribute(secondaryHref)}" target="_blank" rel="noreferrer">${escapeHtml(secondaryLabel)}</a>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderPracticeCourseCard() {
  const complete = isLabComplete("practice");
  return `
    <article class="course-card practice-course-card ${complete ? "complete" : ""}">
      <span class="section-kicker">Practice lab</span>
      <h2>Git Workflow 3: Recovery and Real-File Drills</h2>
      <p>Use this after the visual trainer for wrong-branch, dirty-state, conflict, command replay, and PR-readiness reps.</p>
      <div class="course-meta">
        <span class="pill blue">Practice</span>
        <span class="pill green">30 min</span>
        <span class="pill gray">Local recovery drills</span>
        ${complete ? '<span class="pill green">Complete</span>' : ""}
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-simulator">
          <span aria-hidden="true">P</span>
          <span>${escapeHtml(complete ? "Review practice lab" : "Open practice lab")}</span>
        </button>
      </div>
    </article>
  `;
}

function renderVisualBranchingCourseCard() {
  const complete = isLabComplete(VISUAL_BRANCHING_LAB_ID);
  return `
    <article class="course-card visual-branching-course-card ${complete ? "complete" : ""}">
      <div class="course-card-topline">
        <span class="section-kicker">Visual trainer</span>
        ${complete ? '<span class="pill green">Complete</span>' : '<span class="pill amber">Recommended after Workflow 1</span>'}
      </div>
      <h2>Git Workflow 2: Visual Branching Gym</h2>
      <p>Use the local Learn Git Branching trainer to make commits, branches, merge, rebase, and remotes visible before recovery drills.</p>
      <div class="visual-branching-note">
        <strong>Best fit</strong>
        <span>Great for graph intuition. Keep this lab for local file workflow, PR readiness, and conflict cleanup.</span>
      </div>
      <div class="course-meta">
        <span class="pill blue">External</span>
        <span class="pill green">25 min</span>
        <span class="pill gray">MIT licensed</span>
      </div>
      <div class="portal-actions">
        <a class="icon-button primary-button" href="${escapeAttribute(LEARN_GIT_BRANCHING_URL)}" target="_blank" rel="noreferrer">
          <span aria-hidden="true">2</span>
          <span>Open local trainer</span>
        </a>
        <button class="icon-button secondary" type="button" data-action="mark-visual-branching-complete">
          <span aria-hidden="true">OK</span>
          <span>${escapeHtml(complete ? "Marked done" : "Mark done")}</span>
        </button>
        <a class="text-button catalog-link" href="${escapeAttribute(LEARN_GIT_BRANCHING_REPO_URL)}" target="_blank" rel="noreferrer">Source</a>
      </div>
    </article>
  `;
}

function renderCompactGlossary() {
  return `
    <dl class="compact-glossary">
      ${glossaryTerms
        .slice(0, 8)
        .map((item) => `<div><dt>${escapeHtml(item.term)}</dt><dd>${escapeHtml(item.meaning)}</dd></div>`)
        .join("")}
    </dl>
  `;
}

function renderResumeWorkItemPanel(gitModule) {
  const nextStep = getNextGitWorkflowStep();
  const allComplete = !nextStep;
  const leadStep = nextStep || getGitWorkflowPortalSteps().at(-1);
  const heading = allComplete ? "Git workflow path complete" : `Next step: ${leadStep.title}`;
  const body = allComplete
    ? "You completed the Git workflow path. Reopen any lab for review, extra reps, or handoff practice."
    : leadStep.description;
  return `
    <section class="resume-work-card">
      <div>
        <span class="resume-work-badge">${allComplete ? "Complete" : "Next step"}</span>
        <span class="section-kicker">Recommended next work item</span>
        <h2>${escapeHtml(heading)}</h2>
        <p>${escapeHtml(body)}</p>
        <div class="resume-work-track" aria-label="Recommended sequence">
          ${leadStep.track.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
      <div class="resume-work-actions">
        ${
          allComplete
            ? `<button class="icon-button primary-button" type="button" data-action="open-simulator">
                <span aria-hidden="true">P</span>
                <span>Open practice lab</span>
              </button>`
            : `${renderPortalStepButton(leadStep, true)}
              ${
                leadStep.id === VISUAL_BRANCHING_LAB_ID
                  ? `<button class="icon-button secondary" type="button" data-action="mark-visual-branching-complete">
                      <span aria-hidden="true">OK</span>
                      <span>Mark visual practice done</span>
                    </button>`
                  : ""
              }`
        }
      </div>
    </section>
  `;
}

function renderPortalStepButton(step, primary = false) {
  const actionClass = primary ? "icon-button primary-button" : "icon-button secondary";
  const dataModule = step.moduleId ? ` data-module-id="${escapeAttribute(step.moduleId)}"` : "";
  const icon =
    step.id === VISUAL_BRANCHING_LAB_ID
      ? "2"
      : step.id === "practice"
        ? "3"
        : step.id === capstoneLab.id
          ? "5"
          : step.id === "project-work"
            ? "4"
            : "1";
  if (step.href) {
    return `
      <a class="${actionClass}" href="${escapeAttribute(step.href)}" target="_blank" rel="noreferrer">
        <span aria-hidden="true">${icon}</span>
        <span>${escapeHtml(step.actionLabel || step.title)}</span>
      </a>
    `;
  }
  return `
    <button class="${actionClass}" type="button" data-action="${escapeAttribute(step.action)}"${dataModule}>
      <span aria-hidden="true">${icon}</span>
      <span>${escapeHtml(step.title)}</span>
    </button>
  `;
}

function renderCourseCard(module) {
  const complete = isLabComplete(module.id);
  return `
    <article class="course-card ${complete ? "complete" : ""}">
      <span class="section-kicker">Training module</span>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(module.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(module.level)}</span>
        <span class="pill green">${escapeHtml(module.time)}</span>
        <span class="pill gray">${escapeHtml(module.labTitle)}</span>
        ${complete ? '<span class="pill green">Complete</span>' : ""}
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="start-lesson" data-module-id="${escapeAttribute(module.id)}">
          <span aria-hidden="true">S</span>
          <span>${escapeHtml(complete ? "Review lesson" : module.startLabel || "Start Lesson")}</span>
        </button>
      </div>
    </article>
  `;
}

function renderCapstoneCourseCard() {
  const complete = isLabComplete(capstoneLab.id);
  return `
    <article class="course-card capstone-course-card ${complete ? "complete" : ""}">
      <div class="course-card-topline">
        <span class="section-kicker">Final Git workflow</span>
        ${complete ? '<span class="pill green">Complete</span>' : '<span class="pill amber">Optional after Workflow 4</span>'}
      </div>
      <h2>${escapeHtml(capstoneLab.title)}</h2>
      <p>${escapeHtml(capstoneLab.description)}</p>
      <div class="capstone-deliverable-strip" aria-label="Workflow 4 deliverables">
        ${capstoneLab.deliverables.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="course-meta">
        <span class="pill blue">Review</span>
        <span class="pill green">${escapeHtml(capstoneLab.time)}</span>
        <span class="pill gray">Handoff package</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-capstone-lab">
          <span aria-hidden="true">4</span>
          <span>${escapeHtml(complete ? "Review handoff workflow" : "Open handoff workflow")}</span>
        </button>
      </div>
    </article>
  `;
}

function renderVSCodeCourseCard() {
  return `
    <article class="course-card vscode-course-card">
      <span class="section-kicker">Brief lab</span>
      <h2>${escapeHtml(vscodeLab.title)}</h2>
      <p>${escapeHtml(vscodeLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(vscodeLab.level)}</span>
        <span class="pill green">${escapeHtml(vscodeLab.time)}</span>
        <span class="pill gray">${escapeHtml(vscodeLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-vscode-lab">
          <span aria-hidden="true">V</span>
          <span>Open VS Code lab</span>
        </button>
        <a class="icon-button secondary" href="${escapeAttribute(vscodeLab.setupUrl)}" target="_blank" rel="noreferrer">
          <span aria-hidden="true">D</span>
          <span>Get VS Code</span>
        </a>
      </div>
    </article>
  `;
}

function renderSqlCourseCard() {
  return `
    <article class="course-card sql-course-card">
      <span class="section-kicker">Data module</span>
      <h2>${escapeHtml(oracleSqlLab.title)}</h2>
      <p>${escapeHtml(oracleSqlLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(oracleSqlLab.level)}</span>
        <span class="pill green">${escapeHtml(oracleSqlLab.time)}</span>
        <span class="pill gray">${escapeHtml(oracleSqlLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-sql-lab">
          <span aria-hidden="true">Q</span>
          <span>Open SQL Lab</span>
        </button>
      </div>
    </article>
  `;
}

function renderCodexCourseCard() {
  return `
    <article class="course-card codex-course-card">
      <span class="section-kicker">Separate tool</span>
      <h2>${escapeHtml(codexLab.title)}</h2>
      <p>${escapeHtml(codexLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(codexLab.level)}</span>
        <span class="pill green">${escapeHtml(codexLab.time)}</span>
        <span class="pill gray">${escapeHtml(codexLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-codex-lesson">
          <span aria-hidden="true">R</span>
          <span>Open Codex lesson</span>
        </button>
        <a class="icon-button secondary" href="${escapeAttribute(codexLab.setupUrl)}" target="_blank" rel="noreferrer">
          <span aria-hidden="true">C</span>
          <span>Get Codex</span>
        </a>
      </div>
    </article>
  `;
}

function renderStatusStrip() {
  const status = getStatus();
  const headLabel = currentHeadLabel();
  const remote = state.remoteBranches[`origin/${state.currentBranch}`];
  const remoteText = remote ? (remote === headId() ? "synced" : "not pushed") : "not published";
  const initializedText = state.initialized ? state.currentBranch : "not initialized";

  document.getElementById("statusStrip").innerHTML = [
    metric("Branch", initializedText),
    metric("HEAD", headLabel),
    metric("Working tree", status.clean ? "clean" : "changes open", status.clean ? "good" : "warn"),
    metric("Staged", String(status.staged.length), status.staged.length ? "good" : ""),
    metric("Remote", remoteText, remoteText === "synced" ? "good" : "warn")
  ].join("");
}

function metric(label, value, tone = "") {
  return `<div class="metric ${tone}"><b>${escapeHtml(label)}</b><span>${escapeHtml(value)}</span></div>`;
}

function renderLessons() {
  const activeLessons = getActiveLessons();
  const completed = activeLessons.filter((lesson) => lesson.complete(state)).length;
  const currentLessonIndex = getCurrentLessonIndex();
  const expandedLessonIndex = getExpandedLessonIndex();
  const showFirstMove = state.inLesson && !isPracticeMode() && !isCodexMode() && !isVSCodeMode() && !isSqlMode() && !isCapstoneMode();
  document.getElementById("lessonProgress").textContent = `${completed} of ${activeLessons.length} complete`;

  document.getElementById("lessonList").innerHTML = activeLessons
    .map((lesson, index) => {
      const complete = lesson.complete(state);
      const active = index === currentLessonIndex;
      const expanded = index === expandedLessonIndex;
      const tooltip = getLessonPathTooltip(lesson, index, expanded);
      return `
        <article class="lesson-button ${active ? "active" : ""} ${complete ? "complete" : ""}" role="button" tabindex="0" data-lesson="${index}" data-lesson-toggle="true" aria-expanded="${expanded}"${titleAttribute(tooltip)} aria-label="${escapeAttribute(tooltip)}">
          <span>${complete ? "Complete" : `Step ${index + 1}`}</span>
          <strong>${escapeHtml(lesson.title)}</strong>
          ${renderLessonCommandSummary(index, expanded)}
        </article>
      `;
    })
    .join("");

  const visibleLessonIndex = Math.min(state.lessonIndex, activeLessons.length - 1);
  const lesson = activeLessons[visibleLessonIndex] || activeLessons[0];
  const modeMeta = getLessonSurfaceMeta();
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">Current concept</span>
    <h2>${escapeHtml(lesson.title)}</h2>
    <p>${escapeHtml(lesson.concept)}</p>
    <div class="lesson-surface-card">
      <div>
        <span class="section-kicker">Learning surface</span>
        <strong>${escapeHtml(modeMeta.title)}</strong>
        <p>${escapeHtml(modeMeta.summary)}</p>
      </div>
      <ul class="lesson-surface-list">
        ${modeMeta.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    </div>
    <div class="lesson-task">
      <strong>Task</strong>
      <span>${escapeHtml(lesson.task)}</span>
      <code>${escapeHtml(lesson.hint)}</code>
    </div>
    ${
      showFirstMove
        ? `<div class="lesson-first-move">
            <strong>First move</strong>
            <span>Run the highlighted command first. Use the glossary and quiz after the terminal, status strip, and guided command area make sense.</span>
          </div>`
        : ""
    }
    <details class="lesson-glossary-drawer">
      <summary>
        <span class="section-kicker">Glossary</span>
        <strong>Plain-English Git terms</strong>
      </summary>
      <section class="lesson-glossary" aria-label="Git glossary">
        ${renderGlossary()}
      </section>
    </details>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="lesson-prev" ${visibleLessonIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="lesson-next" ${visibleLessonIndex === activeLessons.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  updateCommandPlaceholder();
}

function getLessonPathTooltip(lesson, index, expanded) {
  const commands = getActiveLessonCommandGroups()[index]
    ?.map((commandIndex) => getActiveModule().commands[commandIndex]?.cmd)
    .filter(Boolean) || [];
  const commandHint = expanded
    ? "Click any command chip to copy it into the PowerShell terminal, or type it yourself."
    : "Open this step to see its commands. Then click a command chip to fill the PowerShell terminal, or type it yourself.";

  return [
    lesson.title,
    lesson.concept,
    `Task: ${lesson.task}`,
    commandHint,
    commands.length ? `Commands: ${commands.join(" -> ")}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function getLessonSurfaceMeta() {
  if (isPracticeMode()) {
    return {
      title: "Simulated repository with real Git syntax",
      summary: "Use this mode for reps, recovery, and branch-state debugging without touching a live repo.",
      points: [
        "Git commands are real Git-shaped commands.",
        "Conflict drills and replay controls are simulator features.",
        "Success means you can explain the state change, not just type the command."
      ]
    };
  }

  if (isCodexMode()) {
    return {
      title: "Mock CLI for tool onboarding",
      summary: "This mode teaches setup sequence, prompting habits, and repo judgment before real workstation use.",
      points: [
        "Lesson scripts are simulator actions.",
        "Real workstation commands on this machine should prefer codex.cmd and npm.cmd in PowerShell.",
        "Treat prompt quality and validation notes as the real skill."
      ]
    };
  }

  if (isVSCodeMode()) {
    return {
      title: "Editor workflow with repo-shaped tasks",
      summary: "This mode teaches where to look, how to inspect, and how editor actions map back to Git.",
      points: [
        "VS Code steps model real editor behavior.",
        "The mock workspace is safe; the Git commands remain real.",
        "Open the repo folder first, then search and diff before editing."
      ]
    };
  }

  if (isSqlMode()) {
    return {
      title: "Oracle-style worksheet simulator",
      summary: "This mode teaches SQL reasoning, review habits, and Oracle-flavored workflow on stable fixture data.",
      points: [
        "SQL syntax should stay real and reviewable.",
        "Buttons like Run and file discovery panels are simulator UI.",
        "Explain grain, filters, joins, and validation risk before calling a query done."
      ]
    };
  }

  if (isCapstoneMode()) {
    return {
      title: "Artifact-first capstone workflow",
      summary: "This mode turns repo inspection into durable notes, lineage, and review outputs instead of chat-only conclusions.",
      points: [
        "Prompts and copy actions are workspace helpers.",
        "The quality bar is whether another analyst could reuse the artifact.",
        "Stay read-only until the task proves a file change is necessary."
      ]
    };
  }

  return {
    title: "Guided Git workflow simulator",
    summary: "This mode uses a safe repo model to teach the real Git path from clone through branch publish and PR readiness.",
    points: [
      "Highlighted Git commands are real.",
      "The terminal is the primary learner action surface.",
      "Goal: clone, branch, diff, commit, publish, PR readiness."
    ]
  };
}

function renderGlossary() {
  return `
    <div class="glossary-table" role="table" aria-label="Git glossary">
      <div class="glossary-row glossary-head" role="row">
        <span role="columnheader">Term</span>
        <span role="columnheader">Plain-English meaning</span>
      </div>
      ${glossaryTerms
        .map(
          (item) => `
            <div class="glossary-row" role="row">
              <strong role="cell">${escapeHtml(item.term)}</strong>
              <span role="cell">${escapeHtml(item.meaning)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function getCurrentLessonIndex() {
  const active = getActiveModule();
  const activeLessons = getActiveLessons();
  const commandGroups = getActiveLessonCommandGroups();

  if (state.guidedStep >= active.commands.length) {
    return activeLessons.length - 1;
  }

  const lessonIndex = commandGroups.findIndex((indexes) => indexes.includes(state.guidedStep));
  return lessonIndex === -1 ? Math.min(state.lessonIndex, activeLessons.length - 1) : lessonIndex;
}

function getExpandedLessonIndex() {
  if (Number.isInteger(state.expandedLessonIndex) && state.expandedLessonIndex < getActiveLessons().length) {
    return state.expandedLessonIndex;
  }

  return getCurrentLessonIndex();
}

function getLessonStartCommandIndex(lessonIndex) {
  const group = getActiveLessonCommandGroups()[lessonIndex] || [];
  return Number.isInteger(group[0]) ? group[0] : 0;
}

function renderLessonCommandSummary(lessonIndex, expanded) {
  const active = getActiveModule();
  const indexes = getActiveLessonCommandGroups()[lessonIndex] || [];
  const done = indexes.filter((index) => index < state.guidedStep).length;
  const total = indexes.length;

  if (!expanded) {
    return `<em class="lesson-command-count">${done}/${total} commands</em>`;
  }

  return `
    <div class="lesson-command-stack">
      ${indexes
        .map((commandIndex) => {
          const command = active.commands[commandIndex];
          if (!command) {
            return "";
          }
          const status =
            commandIndex < state.guidedStep ? "done" : commandIndex === state.guidedStep ? "now" : "next";
          const label = status === "done" ? "Back" : status === "now" ? "Now" : "Next";
          const tooltip =
            status === "done"
              ? `Rewind to this command and rebuild the lab state.\nYou can also type it manually in the PowerShell terminal.\n\n${command.cmd}`
              : `Click to fill this command into the PowerShell terminal, or type it manually.\n\n${command.cmd}`;
          return `
            <button class="mini-command ${status}" type="button" data-command-index="${commandIndex}" data-command-fill="${escapeAttribute(command.cmd)}"${titleAttribute(tooltip)}>
              <b>${label}</b>
              <code>${escapeHtml(command.cmd)}</code>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function getActiveScenarioSpec() {
  if (state.activeModuleId === "project-work") {
    return {
      kind: "Project capsule",
      title: "CCS dimensional modeling continuation",
      request: "Create durable project context on main, then branch a focused workstream update for review.",
      branch: projectLab.branchName,
      contextFiles: [projectLab.readmeFile, projectLab.decisionFile, projectLab.workstreamsFile],
      changedFiles: [projectLab.workstreamsFile],
      acceptance: [
        "README and decision-index are visible on main",
        "Workstream change is isolated on a branch",
        "Diff is reviewed before commit",
        "Branch is published for PR review",
        "Merge story is clear"
      ]
    };
  }

  return {
    kind: "ADO ticket",
    title: oracleLab.ticketTitle,
    request: "Build a reviewable CCS emergency-orders-by-ZIP prior-week SQL asset from a ticket-sized request.",
    branch: oracleLab.branchName,
    contextFiles: [oracleLab.firstFile],
    changedFiles: [oracleLab.featureFile],
    acceptance: [
      "Ticket context captured",
      "Task branch created from main",
      "SQL diff reviewed before commit",
      "Branch published for PR review",
      "Validation and reviewer focus are explainable"
    ]
  };
}

function terminalCommandRan(expected) {
  const expectedNormalized = normalizeCommand(expected);
  return (state.terminal || []).some((line) => {
    if (line.type !== "prompt") {
      return false;
    }
    const text = String(line.text || "")
      .replace(/^PS\s+.*?>\s*/i, "")
      .replace(/^SQL>\s*/i, "")
      .replace(/^codex>\s*/i, "");
    const normalized = normalizeCommand(text);
    return normalized === expectedNormalized || commandMatches(normalized, expectedNormalized);
  });
}

function fileExistsInScenario(path) {
  return Boolean(
    Object.prototype.hasOwnProperty.call(state.workingFiles || {}, path) ||
      Object.prototype.hasOwnProperty.call(state.indexFiles || {}, path) ||
      Object.prototype.hasOwnProperty.call(currentHeadFiles(), path) ||
      (state.commits || []).some((commit) => Object.prototype.hasOwnProperty.call(commit.files || {}, path))
  );
}

function calculateScenarioGates() {
  const scenario = getActiveScenarioSpec();
  const hasBranch = Object.keys(state.branches || {}).some((branch) => branch !== "main");
  const status = state.initialized ? getStatus() : { clean: false };
  return [
    {
      label: state.activeModuleId === "project-work" ? "Project context exists" : "Ticket context exists",
      complete: scenario.contextFiles.every((path) => fileExistsInScenario(path))
    },
    { label: "Task branch exists", complete: Boolean(state.taskFlags?.branchCreated) || hasBranch },
    { label: "Diff reviewed", complete: terminalCommandRan("git diff") || terminalCommandRan("git diff --stat") },
    { label: "Branch commit saved", complete: Boolean(state.taskFlags?.branchCommitted) },
    {
      label: "Branch published",
      complete:
        Boolean(state.taskFlags?.pushed) ||
        Object.keys(state.remoteBranches || {}).some((branch) => branch !== "origin/main")
    },
    { label: "Working tree clean", complete: Boolean(status.clean) && !state.pendingMerge && !state.conflict },
    { label: "Merged to main", complete: Boolean(state.taskFlags?.merged) }
  ];
}

function renderGuidedScenarioPanel(layout = "default") {
  if (isPracticeMode() || isCodexMode() || isVSCodeMode() || isSqlMode() || isCapstoneMode()) {
    return "";
  }

  const scenario = getActiveScenarioSpec();
  const gates = calculateScenarioGates();
  const complete = gates.filter((gate) => gate.complete).length;
  return `
    <section class="scenario-panel ${layout === "sidebar" ? "sidebar" : ""}" aria-label="ADO ticket and pull request readiness">
      <details class="scenario-card scenario-drawer scenario-ticket-card">
        <summary class="scenario-card-summary">
          <div>
            <span class="section-kicker">${escapeHtml(scenario.kind)}</span>
            <h3>${escapeHtml(scenario.title)}</h3>
          </div>
        </summary>
        <div class="scenario-drawer-body">
          <p>${escapeHtml(scenario.request)}</p>
          <div class="scenario-file-list">
            <span>Target branch</span>
            <code>${escapeHtml(scenario.branch)}</code>
            <span>Files in scope</span>
            ${[...scenario.contextFiles, ...scenario.changedFiles].map((path) => `<code>${escapeHtml(path)}</code>`).join("")}
          </div>
        </div>
      </details>
      <details class="scenario-card scenario-drawer scenario-pr-card">
        <summary class="scenario-card-summary">
          <div>
            <span class="section-kicker">Simulated PR gate</span>
            <h3>${complete}/${gates.length} ready</h3>
          </div>
          <strong>${escapeHtml(currentHeadLabel())}</strong>
        </summary>
        <div class="scenario-drawer-body">
          <div class="scenario-progress-track" aria-hidden="true">
            <span style="width: ${(complete / gates.length) * 100}%"></span>
          </div>
          <div class="scenario-checks">
            ${gates
              .map(
                (gate) => `
                  <span class="scenario-check ${gate.complete ? "complete" : ""}">
                    ${gate.complete ? "Done" : "Open"} ${escapeHtml(gate.label)}
                  </span>
                `
              )
              .join("")}
          </div>
        </div>
      </details>
    </section>
  `;
}

function renderRepositoryDirectory() {
  const panel = document.getElementById("repoDirectoryPanel");
  if (!panel) {
    return;
  }

  const open = state.repoExplorerTouched ? Boolean(state.repoExplorerOpen) : true;
  panel.innerHTML = `
    <button class="repo-explorer-toggle" type="button" data-action="toggle-repo-explorer" aria-expanded="${open}"${titleAttribute("Show or hide the Oracle repository explorer")}>
      <span aria-hidden="true">${open ? "v" : ">"}</span>
      <strong>Repository Explorer</strong>
      <code>${escapeHtml(ORACLE_REPO_ROOT)}</code>
      <em>${open ? "Hide" : "Show"}</em>
    </button>
    <div class="repo-explorer-window ${open ? "open" : "collapsed"}">
      <div class="repo-explorer-titlebar">
        <span>EXPLORER</span>
        <strong aria-hidden="true">...</strong>
      </div>
      ${renderLabCreatedFilesSection()}
      <div class="repo-explorer-section">
        <div class="repo-explorer-section-title">
          <span aria-hidden="true">v</span>
          <strong>ORACLE REPOSITORY</strong>
          <small>main</small>
        </div>
        ${renderRepoMapItems(oracleRepoMap)}
      </div>
      <div class="repo-explorer-footer">
        <span>Simulator workspace</span>
        <code>${escapeHtml(state.cwd || `${PS_ROOT}\\${getModuleFolderDisplay()}`)}</code>
      </div>
    </div>
  `;
}

function renderLabCreatedFilesSection() {
  const paths = getActiveRepoPaths();
  if (!paths.length) {
    return "";
  }

  const createdCount = paths.filter((path) => labPathStatus(path).label !== "planned").length;
  return `
    <div class="repo-explorer-section lab-created-section">
      <div class="repo-explorer-section-title">
        <span aria-hidden="true">v</span>
        <strong>FILES CREATED IN THIS LAB</strong>
        <small>${createdCount}/${paths.length}</small>
      </div>
      ${paths.map((path) => renderLabCreatedFileRow(path)).join("")}
    </div>
  `;
}

function renderLabCreatedFileRow(path) {
  const status = labPathStatus(path);
  const fileName = path.split(/[\\/]/).filter(Boolean).pop() || path;
  const fullPath = `${ORACLE_REPO_ROOT}\\${path.replaceAll("/", "\\")}`;
  const rowTitle = `${fullPath}\n${status.label}\nThis file appears here as the learner creates, stages, and commits it.`;
  return `
    <div class="repo-map-row repo-explorer-item file ${escapeAttribute(status.tone)} selected lab-target lab-created-file" style="--depth: 0"${titleAttribute(rowTitle)}>
      <span class="repo-explorer-chevron" aria-hidden="true"></span>
      <span class="repo-map-kind file">${escapeHtml(fileKind(fileName))}</span>
      <div>
        <strong>${escapeHtml(fileName)}</strong>
        <code>${escapeHtml(path)}</code>
      </div>
      <span class="repo-map-status">${escapeHtml(status.label)}</span>
    </div>
  `;
}

function renderRepoMapItems(items, depth = 0, parentPath = "") {
  return items
    .map((item) => {
      const itemPath = item.path || [parentPath, item.name].filter(Boolean).join("/");
      const status = repoMapItemStatus(item, itemPath);
      const fullPath = `${ORACLE_REPO_ROOT}\\${itemPath.replaceAll("/", "\\")}`;
      const hasChildren = Boolean(item.children?.length);
      const expanded = hasChildren && isRepoMapExpanded(item, itemPath);
      const children = expanded ? renderRepoMapItems(item.children, depth + 1, itemPath) : "";
      const selectedCommitFiles = state.selectedCommitId ? changedFilesForCommit(state.selectedCommitId) : [];
      const graphFileSelected = item.path && selectedCommitFiles.includes(item.path);
      const selectedFileInside =
        hasChildren &&
        (String(state.selectedFilePath || "").startsWith(`${itemPath}/`) ||
          selectedCommitFiles.some((path) => path.startsWith(`${itemPath}/`)));
      const selected =
        getActiveRepoContainerPaths().includes(itemPath) ||
        Boolean(item.path && isActiveLabPath(item.path)) ||
        itemPath === state.selectedFilePath ||
        graphFileSelected ||
        selectedFileInside;
      const rowTag = "button";
      const rowAttributes = hasChildren
        ? ` type="button" data-action="toggle-explorer-folder" data-scope="repo" data-path="${escapeAttribute(itemPath)}" aria-expanded="${expanded}"`
        : ` type="button" data-action="toggle-explorer-file" data-scope="repo" data-path="${escapeAttribute(itemPath)}" aria-expanded="${isExplorerFileExpanded("repo", itemPath)}"`;
      return `
        <${rowTag} class="repo-map-row repo-explorer-item ${escapeAttribute(item.type)} ${escapeAttribute(status.tone)} ${selected ? "selected" : ""} ${item.labTarget ? "lab-target" : ""}" style="--depth: ${depth}"${rowAttributes}${titleAttribute(`${fullPath}\n${status.label}\n${item.note || ""}`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${hasChildren ? (expanded ? "v" : ">") : ""}</span>
          <span class="repo-map-kind ${escapeAttribute(item.type)}">${item.type === "folder" ? "" : fileKind(item.name)}</span>
          <div>
            <strong>${escapeHtml(item.name)}</strong>
          </div>
          <span class="repo-map-status">${escapeHtml(status.label)}</span>
        </${rowTag}>
        ${children}
      `;
    })
    .join("");
}

function isRepoMapExpanded(item, itemPath) {
  const activeRepoPaths = getActiveRepoPaths();
  const activeContainers = getActiveRepoContainerPaths();
  const defaultExpanded = (
    itemPath === ".azuredevops" ||
    activeContainers.includes(itemPath) ||
    activeRepoPaths.some((path) => path.startsWith(`${itemPath}/`)) ||
    item.labTarget === "container"
  );

  return isExplorerFolderExpanded("repo", itemPath, defaultExpanded);
}

function ensureExplorerState() {
  state.explorerCollapsedFolders = Array.isArray(state.explorerCollapsedFolders) ? state.explorerCollapsedFolders : [];
  state.explorerExpandedFolders = Array.isArray(state.explorerExpandedFolders) ? state.explorerExpandedFolders : [];
  state.explorerExpandedFiles = Array.isArray(state.explorerExpandedFiles) ? state.explorerExpandedFiles : [];
}

function explorerKey(scope, path) {
  return `${scope}:${path}`;
}

function isExplorerFolderExpanded(scope, path, defaultExpanded) {
  ensureExplorerState();
  const key = explorerKey(scope, path);
  if (state.explorerCollapsedFolders.includes(key)) {
    return false;
  }
  if (state.explorerExpandedFolders.includes(key)) {
    return true;
  }
  return Boolean(defaultExpanded);
}

function setExplorerFolderExpanded(scope, path, expanded) {
  ensureExplorerState();
  const key = explorerKey(scope, path);
  state.explorerCollapsedFolders = state.explorerCollapsedFolders.filter((item) => item !== key);
  state.explorerExpandedFolders = state.explorerExpandedFolders.filter((item) => item !== key);

  if (expanded) {
    state.explorerExpandedFolders.push(key);
  } else {
    state.explorerCollapsedFolders.push(key);
  }
}

function isExplorerFileExpanded(scope, path) {
  ensureExplorerState();
  return state.explorerExpandedFiles.includes(explorerKey(scope, path));
}

function ensureFlowFileState() {
  state.flowCollapsedFiles = Array.isArray(state.flowCollapsedFiles) ? state.flowCollapsedFiles : [];
}

function isFlowFileExpanded(key) {
  ensureFlowFileState();
  return !state.flowCollapsedFiles.includes(key);
}

function repoMapItemStatus(item, itemPath) {
  if (item.path) {
    return labPathStatus(item.path);
  }

  if (
    item.labTarget === "container" ||
    getActiveRepoContainerPaths().includes(itemPath) ||
    getActiveRepoPaths().some((path) => path.startsWith(`${itemPath}/`))
  ) {
    return { label: "target path", tone: "green" };
  }

  return { label: item.type === "folder" ? "repo area" : "reference", tone: "gray" };
}

function labPathStatus(path) {
  if (!state.initialized) {
    return { label: "planned", tone: "amber" };
  }

  const entry = getStatus().entries.find((item) => item.name === path);
  if (entry?.conflicted) {
    return { label: "conflict", tone: "red" };
  }
  if (entry?.stagedType) {
    return { label: "staged", tone: "blue" };
  }
  if (entry?.untracked || entry?.unstagedType) {
    return { label: "open change", tone: "amber" };
  }
  if (entry?.working !== undefined) {
    return { label: "in tree", tone: "green" };
  }
  if (state.commits.some((commit) => Object.prototype.hasOwnProperty.call(commit.files, path))) {
    return { label: "committed", tone: "green" };
  }

  return { label: "planned", tone: "amber" };
}

function renderPathFocusCard(label, path, description, status) {
  return `
    <div class="repo-focus-card ${escapeAttribute(status.tone)}"${titleAttribute(`${label}\n${path}\n${description}`)}>
      <div>
        <strong>${escapeHtml(label)}</strong>
        <span class="repo-map-status">${escapeHtml(status.label)}</span>
      </div>
      <code>${escapeHtml(path)}</code>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function fileKind(name) {
  const extension = String(name).split(".").pop()?.toLowerCase();
  if (extension === "sql") {
    return "sql";
  }
  if (extension === "md") {
    return "md";
  }
  return "file";
}

function renderPracticeWorkspace() {
  setGuidedPanelMode("practice", "Open the live graph and mission reference");
  renderPracticeGraph();
  renderPracticeChallengePanel();
  renderPowerShellReferencePanel();
  renderTerminal();
}

function renderCodexWorkspace() {
  setGuidedPanelMode("codex", "Open lesson explanation and command reference");
  const sectionIndex = clampIndex(state.codexSection, codexLab.sections.length);
  const section = codexLab.sections[sectionIndex];
  document.getElementById("lessonProgress").textContent = `${codexLab.sections.length} lesson sections`;
  document.getElementById("lessonList").innerHTML = codexLab.sections
    .map(
      (section, index) => `
        <article class="lesson-button ${index === sectionIndex ? "active" : ""} ${index < sectionIndex ? "complete" : ""}" role="button" tabindex="0" data-action="codex-section" data-codex-section="${index}" aria-expanded="${index === sectionIndex}">
          <span>Section ${index + 1}</span>
          <strong>${escapeHtml(section.title)}</strong>
          <em class="lesson-command-count">${escapeHtml(section.kicker)}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">Codex lesson</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(codexLessonTaskText(section))}</span>
      <code>${escapeHtml(section.type === "install" ? codexLab.cliCommand : codexLessonReference(section))}</code>
    </div>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="codex-prev" ${sectionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="codex-next" ${sectionIndex === codexLab.sections.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = "Codex Lesson";
  document.getElementById("guidedProgress").textContent = `Section ${sectionIndex + 1} of ${codexLab.sections.length}`;
  document.querySelector(".guided-panel .section-kicker").textContent = "Separate lesson";
  document.getElementById("processMap").innerHTML = renderCodexLessonContent(sectionIndex);
  document.getElementById("guidedCommands").innerHTML = "";

  renderCodexTerminal(section);

  renderQuiz();
  prependCodexPromptLibraryToQuizPanel();

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function renderCodexTerminal(section) {
  ensureCodexCliState();
  const form = document.getElementById("commandForm");
  const output = document.getElementById("terminalOutput");
  const history = document.getElementById("terminalHistory");
  const input = document.getElementById("commandInput");
  if (form) {
    form.hidden = false;
  }

  document.querySelector(".terminal-panel .section-kicker").textContent = "Windows PowerShell practice";
  document.querySelector(".terminal-panel h2").textContent = "Codex setup terminal";
  document.querySelector(".terminal-note").innerHTML = `
    <a href="${escapeAttribute(codexLab.setupUrl)}" target="_blank" rel="noreferrer">Official setup page</a>
    <span class="codex-cli-state">${renderCodexCliStateText()}</span>
  `;
  document.getElementById("promptLabel").textContent = getCodexPrompt();
  if (input) {
    input.placeholder = codexCliPlaceholder(section);
  }
  history.innerHTML = state.terminal
    .map((line) => `<div class="terminal-line ${line.type}">${escapeHtml(line.text)}</div>`)
    .join("");
  output.scrollTop = output.scrollHeight;
}

function renderCodexCliStateText() {
  ensureCodexCliState();
  const parts = [
    state.codexCli.installed ? "installed" : "not installed",
    state.codexCli.loggedIn ? "logged in" : "not logged in",
    isCodexRepoRoot() ? "repo root" : "outside repo"
  ];
  if (state.codexCli.sessionOpen) {
    parts.push("session open");
  }
  return parts.join(" | ");
}

function codexCliPlaceholder(section) {
  ensureCodexCliState();
  if (!state.codexCli.installed) {
    return codexLab.cliCommand;
  }
  if (!state.codexCli.loggedIn) {
    return "codex.cmd login";
  }
  if (!isCodexRepoRoot()) {
    return `cd ${ORACLE_REPO_ROOT}`;
  }
  if (!state.codexCli.sessionOpen && section?.prompt) {
    return "codex.cmd";
  }
  if (state.codexCli.sessionOpen) {
    return "Paste a prompt, or type exit";
  }
  return "codex.cmd";
}

function renderCapstoneWorkspace() {
  setGuidedPanelMode("capstone", "Open deliverable workflow and repo guidance");
  const section = capstoneLab.section;
  document.getElementById("lessonProgress").textContent = `${capstoneLab.deliverables.length} deliverables`;
  document.getElementById("lessonList").innerHTML = capstoneLab.deliverables
    .map(
      (item, index) => `
        <article class="lesson-button complete" aria-label="Deliverable ${index + 1}">
          <span>Deliverable ${index + 1}</span>
          <strong>${escapeHtml(item)}</strong>
          <em class="lesson-command-count">${index === 0 ? "repo map" : index === 1 ? "lineage" : index === 2 ? "quality" : "review"}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">${escapeHtml(section.kicker)}</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(section.task)}</span>
      <code>${escapeHtml(section.reference)}</code>
    </div>
    <section class="lesson-glossary" aria-label="Capstone workflow">
      <div class="lesson-glossary-header">
        <span class="section-kicker">Lab shape</span>
        <strong>Reviewable artifact chain</strong>
      </div>
      <ol class="capstone-side-list">
        <li>Inspect the repo before writing.</li>
        <li>Create one file per milestone.</li>
        <li>Review the generated files before staging.</li>
        <li>Use Git to commit only the validated artifact set.</li>
      </ol>
    </section>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = capstoneLab.title;
  document.getElementById("guidedProgress").textContent = "Capstone";
  document.querySelector(".guided-panel .section-kicker").textContent = "Repo review kit";
  document.getElementById("processMap").innerHTML = renderCodexWorkflowSection(section);
  document.getElementById("guidedCommands").innerHTML = "";

  const form = document.getElementById("commandForm");
  if (form) {
    form.hidden = true;
  }
  document.querySelector(".terminal-panel .section-kicker").textContent = "Git checkpoint";
  document.querySelector(".terminal-panel h2").textContent = "Commands to recognize";
  document.querySelector(".terminal-note").innerHTML = "Use these after the artifacts are reviewed.";
  document.getElementById("terminalHistory").innerHTML = `
    <div class="terminal-line note">This capstone is a simulated workflow. The copy buttons put prompts on your clipboard.</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git status</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git diff --stat</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git add REPO_NOTES.md SQL_LINEAGE.md DATA_QUALITY_REPORT.md CODEX_REVIEW.md</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git commit -m "Add handoff review package"</div>
  `;

  document.getElementById("quizScore").textContent = "Capstone reference";
  document.querySelector(".quiz-panel .section-kicker").textContent = "Prompt library";
  document.getElementById("quizList").innerHTML = `
    ${renderCodexPromptLibraryPanel(true)}
    ${renderCapstoneDeliverablesPanel()}
    ${renderCapstoneGitReferencePanel()}
    ${renderCodexPracticePacksPanel()}
  `;

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function codexLessonTaskText(section) {
  if (section.type === "install") {
    return "Install once, authenticate, then launch Codex from the repo root.";
  }
  if (section.type === "prompting") {
    return "Build a PACT prompt: Purpose, Authority, Context, Task.";
  }
  if (section.type === "orientation") {
    return "Use Codex to clarify the request before asking it to edit files.";
  }
  if (section.type === "workflow") {
    return section.task || "Practice a repeatable Codex workflow with a review checkpoint.";
  }
  return "Keep Git branch safety, review, and validation visible.";
}

function codexLessonReference(section) {
  if (section.reference) {
    return section.reference;
  }
  if (section.type === "prompting") {
    return "Purpose + Authority + Context + Task";
  }
  if (section.type === "orientation") {
    return "Before suggesting code changes, help me orient.";
  }
  return "git status";
}

function renderVSCodeWorkspace() {
  setGuidedPanelMode("vscode", "Open editor walkthrough and supporting reference");
  const sectionIndex = clampIndex(state.vscodeSection, vscodeLab.sections.length);
  const section = vscodeLab.sections[sectionIndex];
  document.getElementById("lessonProgress").textContent = `${vscodeLab.sections.length} lab sections`;
  document.getElementById("lessonList").innerHTML = vscodeLab.sections
    .map(
      (item, index) => `
        <article class="lesson-button ${index === sectionIndex ? "active" : ""} ${index < sectionIndex ? "complete" : ""}" role="button" tabindex="0" data-action="vscode-section" data-vscode-section="${index}" aria-expanded="${index === sectionIndex}">
          <span>Section ${index + 1}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <em class="lesson-command-count">${escapeHtml(item.kicker)}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">VS Code lab</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(section.callout)}</span>
      <code>${escapeHtml(section.command || "git status")}</code>
    </div>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="vscode-prev" ${sectionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="vscode-next" ${sectionIndex === vscodeLab.sections.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = "VS Code Lab";
  document.getElementById("guidedProgress").textContent = `Section ${sectionIndex + 1} of ${vscodeLab.sections.length}`;
  document.querySelector(".guided-panel .section-kicker").textContent = "Editor orientation";
  document.getElementById("processMap").innerHTML = renderVSCodeLessonContent(sectionIndex);
  document.getElementById("guidedCommands").innerHTML = "";

  ensureVSCodeCliState();
  document.getElementById("terminalHistory").innerHTML = "";
  document.getElementById("commandInput").placeholder = "Use the VS Code terminal in the editor mock";

  document.getElementById("quizScore").textContent = "VS Code checklist";
  document.querySelector(".quiz-panel .section-kicker").textContent = "Quick checks";
  document.getElementById("quizList").innerHTML = `
    ${renderVSCodeMissionPanel()}
    <article class="quiz-card codex-check-card">
      <strong>Before changing files</strong>
      <p>Confirm the opened folder is <code>C:\\Repositories\\Oracle</code>, required extensions are installed, and Explorer shows the Oracle repo tree.</p>
    </article>
    <article class="quiz-card codex-check-card">
      <strong>Before committing</strong>
      <p>Review Source Control and <code>git diff</code> so only the intended SQL file is staged.</p>
    </article>
    <article class="quiz-card codex-check-card">
      <strong>After committing</strong>
      <p>Run <code>git status</code> and confirm VS Code and Git both show a clean working tree.</p>
    </article>
  `;

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function renderSqlWorkspace() {
  setGuidedPanelMode("sql", "Open SQL walkthrough and worked lesson guidance");
  ensureSqlWorksheetState();
  const sectionIndex = clampIndex(state.sqlSection, oracleSqlLab.sections.length);
  const section = oracleSqlLab.sections[sectionIndex];
  const completedCount = oracleSqlLab.sections.filter((item) => state.sqlWorksheet.completedSections.includes(item.id)).length;

  document.getElementById("lessonProgress").textContent = `${completedCount} of ${oracleSqlLab.sections.length} complete`;
  document.getElementById("lessonList").innerHTML = oracleSqlLab.sections
    .map((item, index) => {
      const complete = state.sqlWorksheet.completedSections.includes(item.id);
      return `
        <article class="lesson-button ${index === sectionIndex ? "active" : ""} ${complete ? "complete" : ""}" role="button" tabindex="0" data-action="sql-section" data-sql-section="${index}" aria-expanded="${index === sectionIndex}">
          <span>${complete ? "Complete" : `Section ${index + 1}`}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <em class="lesson-command-count">${escapeHtml(item.kicker)}</em>
        </article>
      `;
    })
    .join("");

  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">Oracle SQL lab</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(section.task)}</span>
      <code>${escapeHtml(singleLineSql(section.query))}</code>
    </div>
    <section class="lesson-glossary" aria-label="SQL terms">
      <div class="lesson-glossary-header">
        <span class="section-kicker">SQL glossary</span>
        <strong>Plain-English Oracle SQL terms</strong>
      </div>
      ${renderSqlGlossary()}
    </section>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="sql-prev" ${sectionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="sql-next" ${sectionIndex === oracleSqlLab.sections.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = "Oracle SQL Worksheet";
  document.getElementById("guidedProgress").textContent = `Section ${sectionIndex + 1} of ${oracleSqlLab.sections.length}`;
  document.querySelector(".guided-panel .section-kicker").textContent = "Interactive SQL";
  document.getElementById("processMap").innerHTML = renderSqlLessonContent(sectionIndex);
  document.getElementById("guidedCommands").innerHTML = renderSqlCommandPalette(section);

  renderSqlTerminal(section);
  renderQuiz();

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function renderSqlLessonContent(sectionIndex) {
  const section = oracleSqlLab.sections[sectionIndex] || oracleSqlLab.sections[0];
  return `
    <div class="sql-lesson-content">
      <section class="sql-ide" aria-label="Mock Oracle SQL IDE">
        <div class="sql-ide-titlebar">
          <span>Oracle SQL Developer for VS Code</span>
          <div class="sql-title-meta">
            <strong>ORACLE_DEV</strong>
            <em>${escapeHtml(oracleSqlLab.repoRoot)}</em>
          </div>
        </div>
        <div class="sql-ide-menubar" aria-label="SQL IDE menu">
          <span>File</span>
          <span>Edit</span>
          <span>Run</span>
          <span>Explain Plan</span>
          <span>Connections</span>
          <span>Source Control</span>
        </div>
        <div class="sql-ide-body">
          <nav class="sql-activity-bar" aria-label="IDE activity bar">
            <span class="active" title="Explorer">EX</span>
            <span title="Search">SR</span>
            <span title="Source Control">SC</span>
            <span title="SQL worksheet">SQL</span>
          </nav>
          <aside class="sql-file-tree" aria-label="Repository SQL files">
            <div class="sql-file-tree-heading">
              <span class="section-kicker">Connections</span>
              <strong>ORACLE_DEV</strong>
              <em>CCS / SQL / METERS</em>
            </div>
            <div class="sql-tree-node open"><span>v</span><strong>Oracle database</strong></div>
            <div class="sql-tree-node indent open"><span>v</span><strong>CCS_METER</strong></div>
            <div class="sql-tree-node indent-2"><span>></span><strong>Tables</strong></div>
            <div class="sql-tree-node indent-2 open"><span>v</span><strong>Repository SQL files</strong></div>
            ${oracleSqlFiles.map(renderSqlFileTreeItem).join("")}
          </aside>
          <section class="sql-editor-pane">
            <div class="sql-editor-tabs">
              <span class="active">${escapeHtml(sqlActiveFileName())}</span>
              <span>Worksheet.sql</span>
            </div>
            <div class="sql-worksheet-toolbar" aria-label="Worksheet toolbar">
              <button class="sql-run-button" type="button" data-command-fill="${escapeAttribute(singleLineSql(section.query))}">Run</button>
              <button type="button" data-command-fill="DESCRIBE ${escapeAttribute(resolveSqlTableName(section.query) || oracleSqlFiles[0].table)}">Describe</button>
              <button class="disabled" type="button" disabled>Explain</button>
              <button class="disabled" type="button" disabled>Commit</button>
              <button class="disabled" type="button" disabled>Rollback</button>
              <span class="sql-connection-pill">ORACLE_DEV</span>
              <span class="sql-connection-pill">CCS_METER</span>
              <span class="sql-autocommit">Autocommit off</span>
            </div>
            <div class="sql-breadcrumbs">
              <span>Oracle</span>
              <span>CCS</span>
              <span>sql</span>
              <span>meters</span>
              <strong>${escapeHtml(sqlActiveFileName())}</strong>
            </div>
            <div class="sql-code-editor" role="textbox" aria-label="SQL worksheet text">
              ${renderSqlEditorLines(section.query)}
            </div>
          </section>
        </div>
        ${renderSqlResultPanel()}
      </section>
      <section class="sql-helper-grid">
        <article>
          <span class="section-kicker">Concept</span>
          <strong>${escapeHtml(section.kicker)}</strong>
          <p>${escapeHtml(section.intro)}</p>
        </article>
        <article>
          <span class="section-kicker">Objectives</span>
          <ul>
            ${section.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      </section>
    </div>
  `;
}

function renderSqlFileTreeItem(file) {
  const selected = state.sqlWorksheet?.selectedFile === file.path;
  return `
    <button class="sql-file-row ${selected ? "active" : ""}" type="button" data-command-fill="SELECT * FROM ${escapeAttribute(file.table)}"${titleAttribute(`${file.path}\n${file.note}`)}>
      <span class="sql-object-icon">SQL</span>
      <div>
        <strong>${escapeHtml(file.path.split("/").pop())}</strong>
        <em>${escapeHtml(file.table)}</em>
      </div>
      <small>${escapeHtml(file.status)}</small>
    </button>
  `;
}

function renderSqlResultPanel() {
  ensureSqlWorksheetState();
  const result = state.sqlWorksheet.lastResult || createSqlWorksheetState().lastResult;
  const columns = result.columns || [];
  const rows = result.rows || [];
  return `
    <section class="sql-result-panel" aria-label="SQL result grid">
      <div class="sql-result-tabs" role="tablist" aria-label="SQL output tabs">
        <span class="active" role="tab" aria-selected="true">Results</span>
        <span role="tab" aria-selected="false">Script Output</span>
        <span role="tab" aria-selected="false">Explain</span>
        <span role="tab" aria-selected="false">Messages</span>
      </div>
      <div class="sql-result-meta">
        <strong>${escapeHtml(result.message || "Statement executed.")}</strong>
        <span>${rows.length} row${rows.length === 1 ? "" : "s"} fetched | 00:00.018</span>
      </div>
      <div class="sql-result-scroll">
        <table class="sql-result-grid">
          <thead>
            <tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                  <tr>
                    ${columns.map((column) => `<td>${escapeHtml(row[column] ?? "")}</td>`).join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSqlEditorLines(query) {
  return String(query || "")
    .split(/\r?\n/)
    .map(
      (line, index) => `
        <div class="sql-editor-line">
          <span class="sql-line-number">${index + 1}</span>
          <code>${highlightSqlLine(line)}</code>
        </div>
      `
    )
    .join("");
}

function highlightSqlLine(line) {
  let escaped = escapeHtml(line);
  escaped = escaped.replace(/\b(GROUP BY|ORDER BY)\b/gi, (match) => `<span class="sql-token keyword">${match}</span>`);
  escaped = escaped.replace(/\b(SELECT|FROM|WHERE|JOIN|ON|WITH|AS|COUNT|IN|AND|DESC|DATE|TRUNC|SYSDATE)\b/gi, (match) => `<span class="sql-token keyword">${match}</span>`);
  escaped = escaped.replace(/\b([a-z][a-z0-9_]*\.)/gi, (match) => `<span class="sql-token alias">${match}</span>`);
  return escaped;
}

function renderSqlCommandPalette(section) {
  const helpers = [
    { label: "Lesson query", command: section.query },
    { label: "Show repo files", command: "show files" },
    { label: "Describe starter table", command: "DESCRIBE ccs_emergency_response_activity_extract" }
  ];
  return `
    <section class="sql-command-palette" aria-label="SQL query shortcuts">
      <span class="section-kicker">Click to type into the worksheet</span>
      <div class="sql-command-grid">
        ${helpers
          .map(
            (item) => `
              <button class="sql-command-card" type="button" data-command-fill="${escapeAttribute(singleLineSql(item.command))}"${titleAttribute(`Type into SQL worksheet:\n${singleLineSql(item.command)}`)}>
                <strong>${escapeHtml(item.label)}</strong>
                <code>${escapeHtml(singleLineSql(item.command))}</code>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSqlTerminal(section) {
  ensureSqlWorksheetState();
  const form = document.getElementById("commandForm");
  const output = document.getElementById("terminalOutput");
  const history = document.getElementById("terminalHistory");
  const input = document.getElementById("commandInput");
  const panel = document.querySelector(".terminal-panel");
  if (form) {
    form.hidden = false;
  }
  panel?.classList.add("sql-terminal-panel");

  document.querySelector(".terminal-panel .section-kicker").textContent = "Oracle SQL worksheet";
  document.querySelector(".terminal-panel h2").textContent = "Edit and run SQL statements";
  document.querySelector(".terminal-note").innerHTML = `Try <code>SELECT * FROM ${escapeHtml(oracleSqlFiles[0].table)}</code> or <code>show files</code>`;
  document.getElementById("promptLabel").textContent = "SQL";
  const runButton = form?.querySelector('button[data-action="run-command"]');
  if (runButton) {
    runButton.textContent = "Run statement";
  }
  if (input) {
    input.placeholder = singleLineSql(section.query);
  }
  history.innerHTML = renderSqlWorksheetRunner();
  output.scrollTop = output.scrollHeight;
}

function renderSqlWorksheetRunner() {
  ensureSqlWorksheetState();
  const result = state.sqlWorksheet.lastResult || createSqlWorksheetState().lastResult;
  const recent = state.terminal.slice(-8);
  const historyRows = recent.length
    ? recent.map(renderSqlRunnerHistoryLine).join("")
    : `<div class="sql-runner-empty">Run the lesson query or type <strong>show files</strong> to inspect the simulated Oracle repo tables.</div>`;
  return `
    <div class="sql-runner-shell">
      <div class="sql-runner-tabbar" aria-label="SQL worksheet runner tabs">
        <span class="active">Worksheet.sql</span>
        <span>Query History</span>
        <span>DBMS Output</span>
      </div>
      <div class="sql-runner-history" aria-label="Recent SQL statements and messages">
        ${historyRows}
      </div>
      <div class="sql-runner-status">
        <strong>${escapeHtml(result.message || "Ready.")}</strong>
        <span>${result.rows?.length || 0} rows | read-only simulator</span>
      </div>
      ${renderSqlResultPanel()}
    </div>
  `;
}

function renderSqlRunnerHistoryLine(line) {
  const type = line?.type || "note";
  const text = String(line?.text || "");
  if (type === "prompt") {
    return `
      <div class="sql-runner-line statement">
        <span>SQL</span>
        <code>${escapeHtml(text.replace(/^SQL>\s*/i, ""))}</code>
      </div>
    `;
  }

  return `
    <div class="sql-runner-line ${escapeAttribute(type)}">
      <span>${escapeHtml(type)}</span>
      <code>${escapeHtml(summarizeSqlRunnerMessage(text))}</code>
    </div>
  `;
}

function summarizeSqlRunnerMessage(text) {
  const value = String(text || "").trim();
  if (!value) {
    return "Ready.";
  }
  const firstLine = value.split(/\r?\n/).find((line) => line.trim());
  if (!firstLine) {
    return value;
  }
  if (/^\+[-+]+\+$/.test(firstLine.trim()) || firstLine.includes("|")) {
    return "Statement executed. Review the Results tab below.";
  }
  return firstLine.length > 160 ? `${firstLine.slice(0, 157)}...` : firstLine;
}

function renderSqlGlossary() {
  const terms = [
    ["SELECT", "Chooses which columns appear in the output"],
    ["FROM", "Names the file/table the rows come from"],
    ["WHERE", "Filters rows before they reach the result"],
    ["ORDER BY", "Sorts the visible result"],
    ["GROUP BY", "Changes the result grain into one row per group"],
    ["JOIN", "Adds context from another file/table using a key"],
    ["CTE", "A named query step that starts with WITH"]
  ];
  return `
    <div class="glossary-table" role="table" aria-label="SQL glossary">
      <div class="glossary-row glossary-head" role="row">
        <span role="columnheader">Term</span>
        <span role="columnheader">Plain-English meaning</span>
      </div>
      ${terms
        .map(
          ([term, meaning]) => `
            <div class="glossary-row" role="row">
              <strong role="cell">${escapeHtml(term)}</strong>
              <span role="cell">${escapeHtml(meaning)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function sqlActiveFileName() {
  ensureSqlWorksheetState();
  const selected = state.sqlWorksheet.selectedFile || oracleSqlFiles[0]?.path || "Worksheet.sql";
  return selected.split("/").pop();
}

function singleLineSql(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function renderVSCodeLessonContent(sectionIndex) {
  const section = vscodeLab.sections[sectionIndex] || vscodeLab.sections[0];
  return `
    <div class="codex-lesson-content vscode-lesson-content">
      <section class="vscode-lesson-section">
        ${renderVSCodeUserStory()}
        <div class="vscode-step-brief">
          <span class="section-kicker">${escapeHtml(section.kicker)}</span>
          <h3>${escapeHtml(section.title)}</h3>
          <p>${escapeHtml(section.intro)}</p>
          <ol>
            ${section.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
          <div class="codex-formula">${escapeHtml(section.callout)}</div>
        </div>
        ${renderVSCodeMock(sectionIndex)}
      </section>
      ${renderVSCodeSupportPanel(sectionIndex)}
      ${renderVSCodeShortcutGrid()}
    </div>
  `;
}

function renderVSCodeUserStory() {
  return `
    <article class="vscode-user-story" aria-label="VS Code lab user story">
      <div>
        <span class="section-kicker">User story</span>
        <h3>Small SQL handoff fix before refresh</h3>
      </div>
      <p><strong>As a ${escapeHtml(vscodeLab.story.role)},</strong> ${escapeHtml(vscodeLab.story.need)}</p>
      <p>${escapeHtml(vscodeLab.story.background)}</p>
      <p><strong>Done means:</strong> ${escapeHtml(vscodeLab.story.outcome)}</p>
    </article>
  `;
}

function renderVSCodeMock(sectionIndex) {
  ensureVSCodeCliState();
  const openFiles = vscodeOpenFiles(sectionIndex);
  const activePanel = sectionIndex === 0 ? "extensions" : sectionIndex >= 3 ? "source" : "explorer";
  const activeFile = openFiles[openFiles.length - 1] || vscodeTargetFileName();
  const workspaceOpen = Boolean(state.vscodeCli.openedWorkspace) || sectionIndex > 0;
  const terminalCommand = sectionIndex === 0
    ? "code.cmd --install-extension ms-vscode.PowerShell"
    : sectionIndex === 1
      ? `code.cmd ${ORACLE_REPO_ROOT}`
      : sectionIndex === 2
        ? `code.cmd --goto ${vscodeTargetSqlFile()}:1`
        : sectionIndex === 3
          ? `edit ${vscodeTargetSqlFile()}`
          : `git add ${vscodeTargetSqlFile()}`;
  return `
    <div class="vscode-mock" aria-label="Mock VS Code workspace">
      <div class="vscode-titlebar">
        <span class="vscode-logo">VS</span>
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
        <strong>Repositories</strong>
      </div>
      <div class="vscode-body">
        <div class="vscode-activity" aria-hidden="true">
          ${[
            ["explorer", "EX"],
            ["search", "SR"],
            ["source", "SC"],
            ["extensions", "XT"]
          ].map(([id, label]) => `<span class="${activePanel === id ? "active" : ""}">${label}</span>`).join("")}
        </div>
        <div class="vscode-explorer">
          ${renderVSCodeSidebar(sectionIndex)}
        </div>
        <div class="vscode-editor">
          <div class="vscode-tabs">
            ${openFiles.map((file, index) => `<span class="${index === openFiles.length - 1 ? "active" : ""}">${escapeHtml(file)}</span>`).join("")}
          </div>
          <div class="vscode-breadcrumbs">Oracle &gt; ccs &gt; sql &gt; accounts &gt; ${escapeHtml(activeFile)}</div>
          <div class="vscode-editor-main">
            <pre><code>${escapeHtml(vscodeEditorSnippet(sectionIndex))}</code></pre>
            <div class="vscode-minimap" aria-hidden="true">
              ${Array.from({ length: 22 }, (_, index) => `<i style="width:${35 + ((index * 17) % 52)}%"></i>`).join("")}
            </div>
          </div>
        </div>
        <aside class="vscode-chat-panel">
          <div>
            <span class="section-kicker">Codex</span>
            <strong>Chat</strong>
          </div>
          <p>${escapeHtml(vscodeChatHint(sectionIndex))}</p>
        </aside>
        <div class="vscode-bottom-panel">
          <div class="vscode-panel-tabs">
            <span>PROBLEMS ${state.vscodeCli.edited ? "1" : "0"}</span>
            <span>OUTPUT</span>
            <span class="active">TERMINAL</span>
            <span>PORTS</span>
            <span>QUERY RESULTS</span>
            <span>SOURCE CONTROL</span>
          </div>
          <div class="vscode-terminal-output" id="vscodeTerminalOutput" aria-live="polite">
            ${renderVSCodeTerminalHistory(terminalCommand)}
            <form class="vscode-command-form" id="vscodeCommandForm">
              <label class="sr-only" for="vscodeCommandInput">VS Code terminal command</label>
              <span aria-hidden="true">PS C:\\Repositories\\Oracle&gt;</span>
              <input id="vscodeCommandInput" name="vscodeCommand" autocomplete="off" spellcheck="false" placeholder="${escapeAttribute(`Try: ${terminalCommand}`)}" />
              <button type="submit">Run</button>
            </form>
          </div>
        </div>
      </div>
      <div class="vscode-status">
        <span>${workspaceOpen ? "Oracle" : "No folder opened"}</span>
        <span>${escapeHtml(state.vscodeCli.branch || "main")}</span>
        <span>${escapeHtml(vscodeStatusSummary())}</span>
        <span>SQL</span>
        <span>PowerShell</span>
      </div>
    </div>
  `;
}

function renderVSCodeTerminalHistory(suggestedCommand) {
  const history = state.terminal.length
    ? state.terminal
    : [
        { type: "note", text: `Type ${suggestedCommand}, then press Enter.` },
        { type: "note", text: "This is the VS Code integrated terminal. It is the interactive surface for this lab." }
      ];

  return history
    .slice(-12)
    .map((line) => `<div class="terminal-line ${line.type}">${escapeHtml(line.text)}</div>`)
    .join("");
}

function vscodeOpenFiles(sectionIndex) {
  if (sectionIndex === 0) {
    return ["Extensions", "Required tools"];
  }
  if (sectionIndex === 1) {
    return ["Welcome", "Oracle"];
  }
  if (sectionIndex === 2) {
    return ["README.md", vscodeTargetFileName()];
  }
  if (sectionIndex === 3) {
    return ["ccs_master_collections_process_report.sql", vscodeTargetFileName()];
  }
  return ["Source Control", vscodeTargetFileName()];
}

function renderVSCodeSidebar(sectionIndex) {
  if (sectionIndex === 0) {
    return `
      <strong>EXTENSIONS</strong>
      <span>REQUIRED</span>
      ${vscodeLab.extensions
        .map(
          (extension) => `
            <p class="vscode-extension-row ${state.vscodeCli?.installedExtensions?.includes(extension.id) ? "active" : ""}">
              ${escapeHtml(extension.name)}
            </p>
          `
        )
        .join("")}
    `;
  }

  if (sectionIndex >= 3) {
    return `
      <strong>SOURCE CONTROL</strong>
      <span>CHANGES</span>
      <div class="vscode-source-control">
        ${renderVSCodeSourceRepo("azure-devops", "main", "1", true)}
        ${renderVSCodeSourceRepo("Billed and Unbilled Revenue", "main", "0", false)}
        ${renderVSCodeSourceRepo("CoE", "docs/sql-standard-coe", "0", false)}
        ${renderVSCodeSourceRepo("Oracle", state.vscodeCli?.branch || "main", state.vscodeCli?.edited || state.vscodeCli?.staged ? "1" : "0", true)}
      </div>
      <div class="vscode-graph">
        <strong>GRAPH</strong>
        <p><span></span>Merged PR 94: ccs: preserve collection event source</p>
        <p><span></span>Merged PR 92: docs: Update AGENTS.md</p>
        <p><span></span>${state.vscodeCli?.committed ? "c002 Update arrearage detail export header" : "docs: open Oracle repo workflow notes"}</p>
        <p><span></span>c001 Add ticket context</p>
      </div>
    `;
  }

  return `
    <strong>EXPLORER</strong>
    <span>${sectionIndex === 1 ? "OPEN FOLDER" : "REPOSITORIES"}</span>
    ${renderVSCodeExplorerTree(sectionIndex)}
  `;
}

function renderVSCodeSourceRepo(name, branch, changes, expanded) {
  const changed = name === "Oracle" && (state.vscodeCli?.edited || state.vscodeCli?.staged);
  return `
    <div class="vscode-source-repo ${expanded ? "open" : ""}">
      <p>
        <span>${expanded ? "v" : ">"}</span>
        <strong>${escapeHtml(name)}</strong>
        <small>${escapeHtml(branch)}</small>
      </p>
      ${
        changed
          ? `
            <div class="vscode-source-change ${state.vscodeCli?.staged ? "staged" : ""}">
              <small>${state.vscodeCli?.staged ? "STAGED" : "M"}</small>
              <span>${escapeHtml(vscodeTargetFileName())}</span>
            </div>
          `
          : `<button type="button" disabled>${changes === "0" ? "Commit" : "Sync Changes"}</button>`
      }
    </div>
  `;
}

function renderVSCodeExplorerTree(sectionIndex) {
  if (sectionIndex === 1 && !state.vscodeCli.openedWorkspace) {
    return `
      <code>C:\\Repositories</code>
      <p>_codex_temp_git_check</p>
      <p>DU-putnam-browne-Delta</p>
      <p class="active">Oracle</p>
      <p>Fabric</p>
      <p>GitHub</p>
    `;
  }

  const targetActive = sectionIndex >= 2 || state.vscodeCli.activeFile === vscodeTargetSqlFile();
  return `
    <code>C:\\Repositories\\Oracle</code>
    <p class="vscode-tree-folder open">v .azuredevops</p>
    <p class="vscode-tree-folder open">v ccs</p>
    <p class="vscode-tree-folder indent">› bip</p>
    <p class="vscode-tree-folder indent open">v sql</p>
    <p class="vscode-tree-folder indent-2 active-folder">v accounts</p>
    <p class="indent-3 ${targetActive ? "active" : ""}">${escapeHtml(vscodeTargetFileName())}</p>
    <p class="indent-3">ccs_master_collections_process_report.sql</p>
    <p class="indent-3">ccs_paystar_arrearage_contacts.sql</p>
    <p class="vscode-tree-folder indent-2">› billing</p>
    <p class="vscode-tree-folder indent-2">› meters</p>
    <p>README.md</p>
    <p>AGENTS.md</p>
  `;
}

function vscodeEditorSnippet(sectionIndex) {
  if (sectionIndex === 0) {
    return vscodeLab.extensions
      .map((extension) => `${extension.command}\n# ${extension.reason}`)
      .join("\n\n");
  }
  if (sectionIndex === 1) {
    return [
      "File > Open Folder",
      "C:\\Repositories\\Oracle",
      "",
      "Confirm:",
      "- Explorer shows repo folders",
      "- Status bar shows branch",
      "- Integrated terminal starts at the repo root"
    ].join("\n");
  }
  if (sectionIndex === 2) {
    return [
      "-- NAME EXPORT YYYYMMDD_ARREARAGE_DETAIL.csv",
      "-- LOAD TO SharePoint Data Connection Sources",
      "-- REFRESH Fabric Lakehouse ARREARAGE_DETAIL",
      "",
      "WITH aging_data AS (",
      "    SELECT",
      "        sa_id,",
      "        NVL(cur_amt, 0) AS current_amount",
      "    FROM ccs_billing.arrearage_detail",
      ")",
      "SELECT *",
      "FROM aging_data;"
    ].join("\n");
  }
  if (sectionIndex === 3) {
    return [
      "-- Diff view",
      "+ -- EXPORT OWNER: Data Analytics",
      "+ -- VALIDATION: compare row counts to prior refresh",
      "",
      "WITH aging_data AS (",
      "    SELECT sa_id, NVL(cur_amt, 0) AS current_amount",
      "    FROM ccs_billing.arrearage_detail",
      ")",
      "",
      "Source Control: one changed SQL file."
    ].join("\n");
  }
  return [
    "Source Control",
    "",
    state.vscodeCli.staged ? "STAGED CHANGES" : "CHANGES",
    vscodeTargetSqlFile(),
    "",
    "Terminal:",
    `git add ${vscodeTargetSqlFile()}`,
    'git commit -m "Update arrearage detail export header"',
    "git status"
  ].join("\n");
}

function vscodeChatHint(sectionIndex) {
  if (sectionIndex <= 1) {
    return "After the repo folder is open, Codex and VS Code see the same workspace context.";
  }
  if (sectionIndex === 2) {
    return "Ask for orientation only after you have opened the relevant SQL and checked neighboring files.";
  }
  if (sectionIndex === 3) {
    return "Use Codex for review prompts, but inspect the diff yourself before staging.";
  }
  return "A clean commit is the checkpoint. PR notes come after the local repo state is clear.";
}

function renderVSCodeSupportPanel(sectionIndex) {
  if (sectionIndex === 0) {
    return `
      <section class="vscode-reference-panel">
        <div>
          <span class="section-kicker">Required extensions</span>
          <h3>Install these before repo work</h3>
        </div>
        <div class="vscode-extension-grid">
          ${vscodeLab.extensions
            .map(
              (extension) => `
                <article>
                  <strong>${escapeHtml(extension.name)}</strong>
                  <p>${escapeHtml(extension.reason)}</p>
                  <code>${escapeHtml(extension.command)}</code>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  const cards = [
    ["Repo context", "Open the folder root so Explorer, terminal, Source Control, and Codex all see the same workspace."],
    ["Explorer discipline", "Navigate through ccs > sql > accounts so the learner understands where the file lives in the repo."],
    ["Open before editing", "Open the SQL file and compare neighboring reports before changing content."],
    ["Reviewable diffs", "Use Source Control and git diff to inspect changed files, stage intentionally, and avoid unrelated formatting churn."],
    ["Local checkpoint", "Commit only after VS Code and git status agree on the staged change."]
  ];

  return `
    <section class="vscode-reference-panel">
      ${cards
        .slice(Math.max(0, sectionIndex - 1), Math.max(0, sectionIndex - 1) + 2)
        .map(
          ([title, detail]) => `
            <article>
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(detail)}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function vscodeStatusSummary() {
  ensureVSCodeCliState();
  if (state.vscodeCli.conflictOpen) {
    return "1 conflict";
  }
  if (state.vscodeCli.staged) {
    return "1 staged";
  }
  if (state.vscodeCli.edited || state.vscodeCli.conflictResolved) {
    return "1 change";
  }
  if (state.vscodeCli.committed) {
    return "clean after commit";
  }
  return "Oracle repo";
}

function renderVSCodeShortcutGrid() {
  return `
    <section class="vscode-shortcuts" aria-label="VS Code shortcuts">
      ${vscodeLab.shortcuts
        .map(
          ([label, value]) => `
            <article>
              <strong>${escapeHtml(label)}</strong>
              <code>${escapeHtml(value)}</code>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCodexLessonContent(sectionIndex = null) {
  const [install, prompting, orientation, safety] = codexLab.sections;
  if (sectionIndex !== null) {
    const section = codexLab.sections[sectionIndex] || install;
    if (section.type === "install") {
      return renderCodexInstallSection(section);
    }
    if (section.type === "prompting") {
      return renderCodexPromptingSection(section);
    }
    if (section.type === "orientation") {
      return renderCodexOrientationSection(section);
    }
    if (section.type === "safety") {
      return renderCodexSafetySection(section);
    }
    if (section.type === "workflow") {
      return renderCodexWorkflowSection(section);
    }
  }

  return `
    <div class="codex-lesson-content">
      ${codexLab.sections.map((section) => renderCodexLessonContent(codexLab.sections.indexOf(section))).join("")}
    </div>
  `;
}

function renderCodexInstallSection(install) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(install.kicker)}</span>
        <h3>${escapeHtml(install.title)}</h3>
        <p>${escapeHtml(install.intro)}</p>
        <div class="codex-install-grid">
          ${install.steps
            .map(
              (step, index) => `
                <article class="codex-install-step">
                  <span>${index + 1}</span>
                  <div>
                    <h4>${escapeHtml(step.label)}</h4>
                    ${renderCliFillButton(step.command, "Type command")}
                    <p>${escapeHtml(step.detail)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="codex-cli-note">
          <strong>Update command</strong>
          ${renderCliFillButton(install.updateCommand, "Type update command")}
        </div>
        <ul class="codex-note-list">
          ${install.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
        </ul>
        ${renderCodexReadyChecklist(install)}
      </section>
    </div>
  `;
}

function renderCodexPromptingSection(prompting) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(prompting.kicker)}</span>
        <h3>${escapeHtml(prompting.title)}</h3>
        <p>${escapeHtml(prompting.intro)}</p>
        <div class="prompt-grid">
          ${prompting.items
            .map(
              ([letter, meaning]) => `
                <article class="prompt-card">
                  <strong>${escapeHtml(letter.slice(0, 1))}</strong>
                  <div>
                    <h4>${escapeHtml(letter)}</h4>
                    <p>${escapeHtml(meaning)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="codex-formula">${escapeHtml(prompting.formula)}</div>
        ${renderCodexReadyChecklist(prompting)}
      </section>
    </div>
  `;
}

function renderCodexOrientationSection(orientation) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section two-column">
        <div>
          <span class="section-kicker">${escapeHtml(orientation.kicker)}</span>
          <h3>${escapeHtml(orientation.title)}</h3>
          <p>${escapeHtml(orientation.intro)}</p>
          <ul>
            ${orientation.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
          </ul>
        </div>
        ${renderCopyablePrompt(orientation.prompt, true)}
        ${renderCodexReadyChecklist(orientation)}
      </section>
    </div>
  `;
}

function renderCodexSafetySection(safety) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section two-column">
        <div>
          <span class="section-kicker">${escapeHtml(safety.kicker)}</span>
          <h3>${escapeHtml(safety.title)}</h3>
          <p>${escapeHtml(safety.intro)}</p>
          <h4>Before editing</h4>
          <ul>
            ${safety.beforeEditing.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="codex-safety-panel">
          <h4>If work takes more than one day</h4>
          <ul>
            ${safety.longerWork.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        ${renderCodexSafetyHabits()}
        ${renderCodexCommonMistakes()}
        ${renderCodexMicroChallenges()}
        <div class="codex-formula wide">${escapeHtml(safety.footer)}</div>
        ${renderCodexReadyChecklist(safety)}
      </section>
    </div>
  `;
}

function renderCodexSafetyHabits() {
  return `
    <section class="codex-compact-panel wide" aria-label="Codex safety habits">
      <div class="codex-compact-header">
        <span class="section-kicker">Safety habits</span>
        <strong>Default operating rhythm</strong>
      </div>
      <div class="codex-compact-grid">
        ${codexSafetyHabits
          .map(
            (habit) => `
              <article class="codex-mini-card">
                <strong>${escapeHtml(habit.title)}</strong>
                <p>${escapeHtml(habit.detail)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCodexCommonMistakes() {
  return `
    <section class="codex-compact-panel wide" aria-label="Common Codex mistakes">
      <div class="codex-compact-header">
        <span class="section-kicker">Common mistakes</span>
        <strong>Failure modes to catch early</strong>
      </div>
      <div class="codex-compact-grid">
        ${codexCommonMistakes
          .map(
            (mistake) => `
              <article class="codex-mini-card warning">
                <strong>${escapeHtml(mistake.title)}</strong>
                <p>${escapeHtml(mistake.detail)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCodexMicroChallenges() {
  return `
    <section class="codex-compact-panel wide" aria-label="Codex micro challenges">
      <div class="codex-compact-header">
        <span class="section-kicker">Micro challenges</span>
        <strong>Small practice checks, not another lab</strong>
      </div>
      <div class="codex-compact-grid">
        ${codexMicroChallenges
          .map(
            (challenge) => `
              <article class="codex-mini-card">
                <strong>${escapeHtml(challenge.title)}</strong>
                <p>${escapeHtml(challenge.prompt)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCodexWorkflowSection(section) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(section.kicker)}</span>
        <h3>${escapeHtml(section.title)}</h3>
        <p>${escapeHtml(section.intro)}</p>
        <div class="codex-install-grid">
          ${section.cards
            .map(
              (card, index) => `
                <article class="codex-install-step codex-workflow-card">
                  <span>${index + 1}</span>
                  <div>
                    <h4>${escapeHtml(card.label)}</h4>
                    ${card.command ? renderCliFillButton(card.command, "Type command") : ""}
                    ${card.prompt ? renderCopyablePrompt(card.prompt, isCodexMode()) : ""}
                    ${card.detail ? `<p>${escapeHtml(card.detail)}</p>` : ""}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        ${section.formula ? `<div class="codex-formula">${escapeHtml(section.formula)}</div>` : ""}
        ${renderCodexReadyChecklist(section)}
      </section>
    </div>
  `;
}

function renderCodexReadyChecklist(section) {
  if (!Array.isArray(section.readyChecklist) || !section.readyChecklist.length) {
    return "";
  }

  const completeCount = section.readyChecklist.filter((_, index) => isReadyCheckComplete(codexReadyCheckKey(section, index))).length;
  return `
    <div class="codex-ready-list">
      <div class="codex-ready-header">
        <h4>Ready to move on</h4>
        <span>${completeCount} of ${section.readyChecklist.length}</span>
      </div>
      ${section.readyChecklist
        .map((item, index) => {
          const key = codexReadyCheckKey(section, index);
          const done = isReadyCheckComplete(key);
          return `
            <button class="codex-ready-item ${done ? "done" : ""}" type="button" data-action="toggle-ready-check" data-ready-key="${escapeAttribute(key)}" aria-pressed="${done}">
              <span class="codex-ready-box">${done ? "OK" : ""}</span>
              <span>${escapeHtml(item)}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function prependCodexPromptLibraryToQuizPanel() {
  const quizList = document.getElementById("quizList");
  if (!quizList) {
    return;
  }
  quizList.innerHTML = `${renderCodexPromptLibraryPanel()}${quizList.innerHTML}`;
}

function renderCodexPromptLibraryPanel(open = false) {
  return `
    <details class="codex-reference-panel" ${open ? "open" : ""}>
      <summary>
        <span>
          <strong>Prompt library</strong>
          <em>Copy-ready Codex prompts</em>
        </span>
      </summary>
      <div class="codex-reference-body">
        ${codexPromptLibrary
          .map(
            (group, index) => `
              <details class="codex-reference-group" ${index === 0 ? "open" : ""}>
                <summary>${escapeHtml(group.group)}</summary>
                <div class="codex-reference-items">
                  ${group.prompts.map(renderPromptLibraryItem).join("")}
                </div>
              </details>
            `
          )
          .join("")}
      </div>
    </details>
  `;
}

function renderPromptLibraryItem(item) {
  const promptText = item.text || "";
  return `
    <article class="codex-reference-item">
      <div class="codex-reference-item-header">
        <strong>${escapeHtml(item.label)}</strong>
        <div class="codex-reference-actions">
          ${renderCopyButton(promptText, "Copy prompt")}
          <button class="copy-prompt-button prompt-type-button" type="button" data-command-fill="${escapeAttribute(singleLinePrompt(promptText))}"${titleAttribute(`Type into the mock CLI:\n${singleLinePrompt(promptText)}`)}>
            Type prompt
          </button>
        </div>
      </div>
      <pre><code>${escapeHtml(promptText)}</code></pre>
    </article>
  `;
}

function renderCapstoneDeliverablesPanel() {
  return `
    <section class="capstone-deliverables" aria-label="Capstone deliverables">
      <h3>What the lab produces</h3>
      ${capstoneLab.deliverables
        .map(
          (item) => `
            <article>
              <strong>${escapeHtml(item)}</strong>
              <span>${escapeHtml(capstoneDeliverableMeaning(item))}</span>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCapstoneGitReferencePanel() {
  const commands = [
    "git status",
    "git diff --stat",
    "git add REPO_NOTES.md SQL_LINEAGE.md DATA_QUALITY_REPORT.md CODEX_REVIEW.md",
    'git commit -m "Add handoff review package"'
  ];
  return `
    <details class="codex-reference-panel">
      <summary>
        <span>
          <strong>Git checkpoint commands</strong>
          <em>Use after the capstone artifacts are reviewed.</em>
        </span>
      </summary>
      <div class="codex-reference-body">
        <article class="codex-reference-item">
          <div class="codex-reference-item-header">
            <strong>Recognize the review checkpoint flow</strong>
            <em>Status, diff summary, stage only reviewed files, then commit.</em>
          </div>
          <pre><code>${commands.map((command) => `PS ${ORACLE_REPO_ROOT}> ${command}`).map(escapeHtml).join("\n")}</code></pre>
        </article>
      </div>
    </details>
  `;
}

function renderCodexPracticePacksPanel(open = false) {
  return `
    <details class="codex-reference-panel" ${open ? "open" : ""}>
      <summary>
        <span>
          <strong>Optional practice packs</strong>
          <em>Lightweight sandbox ideas from the Codex training lab</em>
        </span>
      </summary>
      <div class="codex-reference-items">
        ${codexPracticePacks
          .map(
            (pack) => `
              <article class="codex-reference-item">
                <div class="codex-reference-item-header">
                  <strong>${escapeHtml(pack.title)}</strong>
                  <em>${escapeHtml(pack.objective)}</em>
                  <div class="codex-reference-actions">
                    ${renderCopyButton(pack.prompt, "Copy prompt")}
                    <button class="copy-prompt-button prompt-type-button" type="button" data-command-fill="${escapeAttribute(singleLinePrompt(pack.prompt))}"${titleAttribute(`Type into the mock CLI:\n${singleLinePrompt(pack.prompt)}`)}>
                      Type prompt
                    </button>
                  </div>
                </div>
                <pre><code>${escapeHtml(pack.prompt)}</code></pre>
              </article>
            `
          )
          .join("")}
      </div>
    </details>
  `;
}

function capstoneDeliverableMeaning(name) {
  if (name === "REPO_NOTES.md") {
    return "Purpose, folders, commands, assumptions, risks, and open questions.";
  }
  if (name === "SQL_LINEAGE.md") {
    return "Sources, grain, joins, filters, grouping, and logic risks.";
  }
  if (name === "DATA_QUALITY_REPORT.md") {
    return "Missing values, duplicate risks, categories, dates, and follow-ups.";
  }
  return "Final file review, missing validation, risky assumptions, and cleanup before commit.";
}

function renderCopyablePrompt(text, includeCliButton = false) {
  return `
    <div class="copyable-prompt">
      ${renderCopyButton(text)}
      ${includeCliButton ? renderCliFillButton(singleLinePrompt(text), "Type prompt") : ""}
      <pre class="codex-prompt-example"><code>${escapeHtml(text)}</code></pre>
    </div>
  `;
}

function renderCopyButton(text, label = "Copy") {
  return `<button class="copy-prompt-button" type="button" data-copy-text="${escapeAttribute(text)}">${escapeHtml(label)}</button>`;
}

function renderCliFillButton(command, label = "Type in CLI") {
  return `
    <button class="cli-fill-button" type="button" data-command-fill="${escapeAttribute(command)}"${titleAttribute(`Type into the mock CLI:\n${command}`)}>
      <code>${escapeHtml(command)}</code>
      <span>${escapeHtml(label)}</span>
    </button>
  `;
}

function singleLinePrompt(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

async function copyTextToClipboard(button) {
  const text = button.dataset.copyText || "";
  const originalLabel = button.dataset.copyLabel || button.textContent || "Copy";
  button.dataset.copyLabel = originalLabel;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      copyTextFallback(text);
    }
    button.textContent = "Copied";
  } catch (error) {
    button.textContent = "Copy failed";
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1400);
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function codexReadyCheckKey(section, itemIndex) {
  return `codex:${slugify(section.title)}:${itemIndex}`;
}

function ensureReadyChecks() {
  if (!state.readyChecks || typeof state.readyChecks !== "object" || Array.isArray(state.readyChecks)) {
    state.readyChecks = {};
  }
  return state.readyChecks;
}

function isReadyCheckComplete(key) {
  return Boolean(ensureReadyChecks()[key]);
}

function toggleReadyCheck(key) {
  if (!key) {
    return;
  }
  const checks = ensureReadyChecks();
  if (checks[key]) {
    delete checks[key];
  } else {
    checks[key] = true;
  }
}

function renderPracticeGraph() {
  document.getElementById("guidedTitle").textContent = "Practice cockpit";
  document.getElementById("guidedProgress").textContent = state.initialized
    ? `${state.currentBranch} @ ${currentHeadLabel()}`
    : "Not initialized";
  document.getElementById("processMap").innerHTML = `
    <details class="practice-graph-drawer">
      <summary>
        <div>
          <span class="section-kicker">Repository graph</span>
          <strong>Open graph only when you need branch state</strong>
        </div>
        <em>${escapeHtml(state.initialized ? `${state.currentBranch} @ ${currentHeadLabel()}` : "Not initialized")}</em>
      </summary>
      <div class="practice-graph-body">
        ${renderDynamicBranchGraph()}
      </div>
    </details>
  `;
  document.getElementById("guidedCommands").innerHTML = "";
  document.querySelector(".guided-panel .section-kicker").textContent = "Practice lab";
}

function renderPracticeMissionPanel() {
  const mission = getActivePracticeMission();
  const progress = ensureLearnerProgress();
  const difficulty = normalizePracticeDifficulty(state.practiceDifficulty);
  return `
    <details class="practice-drawer practice-mission-panel" aria-label="Practice mission selector">
      <summary class="practice-drawer-summary">
        <div>
          <span class="section-kicker">Current scenario</span>
          <strong>${escapeHtml(mission.title)}</strong>
          <small>${escapeHtml(mission.target)}</small>
        </div>
      </summary>
      <div class="practice-drawer-body">
        <div class="practice-mission-toolbar">
          <p>${escapeHtml(mission.prompt)}</p>
          <button class="text-button" type="button" data-action="practice-mission-random">Random mission</button>
        </div>
        <div class="practice-mission-grid">
          ${getPracticeMissionList()
            .map((item) => {
              const active = item.id === mission.id;
              const done = progress.completedMissions.includes(item.id);
              return `
                <button class="practice-mission-card ${active ? "active" : ""} ${done ? "complete" : ""}" type="button" data-action="practice-mission-start" data-mission-id="${escapeAttribute(item.id)}"${titleAttribute(`${item.title}\n${item.prompt}\n${item.target}`)}>
                  <span>${escapeHtml(done ? "Done" : item.level)}</span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <em>${escapeHtml(item.target)}</em>
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="practice-difficulty-row" aria-label="Practice support mode">
          ${practiceDifficultyModes
            .map(
              (item) => `
                <button class="practice-difficulty ${item.id === difficulty ? "active" : ""}" type="button" data-action="practice-difficulty" data-difficulty="${escapeAttribute(item.id)}"${titleAttribute(item.desc)}>
                  ${escapeHtml(item.label)}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </details>
  `;
}

function renderPracticeReadinessPanel() {
  const readiness = calculatePRReadiness();
  const progress = ensureLearnerProgress();
  const selectedCommit = getCommitSafe(state.selectedCommitId);
  const selectedFiles = state.selectedCommitId ? changedFilesForCommit(state.selectedCommitId) : [];
  const hasReplay = ensureCommandReplay().length > 0;
  const hasSelectedCommit = Boolean(selectedCommit);
  return `
    <details class="practice-drawer practice-readiness-panel" ${hasReplay ? "open" : ""} aria-label="Practice progress">
      <summary class="practice-drawer-summary">
        <div>
          <span class="section-kicker">Skill readiness</span>
          <strong>${readiness.score}</strong>
          <small>best ${Math.max(progress.bestReadiness || 0, readiness.score)} - replay ${hasReplay ? "available" : "empty"}</small>
        </div>
      </summary>
      <div class="practice-drawer-body">
        <div class="practice-readiness-score">
          <div>
            <span class="section-kicker">Skill readiness</span>
            <strong>${readiness.score}</strong>
            <small>best ${Math.max(progress.bestReadiness || 0, readiness.score)}</small>
          </div>
          <div class="readiness-checks">
            ${readiness.checks
              .map((check) => `<span class="${check.complete ? "complete" : ""}">${escapeHtml(check.label)}</span>`)
              .join("")}
          </div>
        </div>
        ${renderPracticeBadges()}
        ${renderPracticeReplayTimeline()}
        ${
          selectedCommit
            ? `
              <div class="graph-selection-card">
                <span class="section-kicker">Selected commit</span>
                <strong>${escapeHtml(selectedCommit.id)}</strong>
                <p>${escapeHtml(selectedCommit.message)}</p>
                <em>${selectedFiles.length ? selectedFiles.map((file) => truncateLabel(file, 38)).join(", ") : "No file delta detected"}</em>
              </div>
            `
            : ""
        }
      </div>
    </details>
  `;
}

function renderPracticeBadges() {
  const progress = ensureLearnerProgress();
  return `
    <div class="practice-badge-row" aria-label="Earned badges">
      ${practiceBadgeDefinitions
        .map((badge) => {
          const earned = progress.badges.includes(badge.id);
          return `
            <span class="practice-badge ${earned ? "earned" : ""}"${titleAttribute(`${badge.label}\n${badge.desc}`)}>
              ${escapeHtml(earned ? badge.label : `Locked: ${badge.label}`)}
            </span>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderPracticeReplayTimeline() {
  const replay = ensureCommandReplay();
  if (!replay.length) {
    return `
      <div class="practice-replay empty">
        <span class="section-kicker">Command replay</span>
        <p>Run commands in the PowerShell IDE and they will appear here as a replayable timeline.</p>
      </div>
    `;
  }

  return `
    <div class="practice-replay">
      <div class="practice-replay-header">
        <span class="section-kicker">Command replay</span>
        <button class="text-button subtle" type="button" data-action="practice-replay-all">Replay all</button>
      </div>
      <div class="practice-replay-track">
        ${replay
          .map(
            (entry, index) => `
              <button class="practice-replay-step ${entry.resultType === "error" ? "error" : ""}" type="button" data-action="practice-replay-jump" data-replay-index="${index}"${titleAttribute(`${entry.command}\n${entry.branch} @ ${entry.head}\n${entry.clean ? "clean" : "open changes"}`)}>
                <span>${index + 1}</span>
                <code>${escapeHtml(truncateLabel(entry.command, 34))}</code>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPracticeChallengePanel() {
  const target = document.getElementById("guidedCommands");
  if (!target) {
    return;
  }

  const mode = ensureChallengeModeState();
  const challenges = getPracticeChallengeList();
  const challenge = getActivePracticeChallenge();
  const progress = getPracticeChallengeProgress(challenge);
  const complete = challenge ? mode.completedIds.includes(challenge.id) : false;
  const allComplete = challenges.every((item) => mode.completedIds.includes(item.id));
  const completeCount = mode.completedIds.length;
  const actionLabel = complete ? "Replay" : mode.started ? "Running" : "Start";
  const allowHints = normalizePracticeDifficulty(state.practiceDifficulty) !== "no-hints";

  target.innerHTML = `
    ${renderPracticeRunStory()}
    <div class="practice-control-grid">
      ${renderPracticeMissionPanel()}
      ${renderPracticeReadinessPanel()}
    </div>
    <details class="practice-drawer challenge-panel" ${mode.started || completeCount > 0 ? "open" : ""} aria-label="Practice challenge mode">
      <summary class="practice-drawer-summary">
        <div>
          <span class="section-kicker">Challenge mode</span>
          <strong>Practice objectives</strong>
          <small>${completeCount}/${challenges.length} complete · ${mode.score} pts · ${mode.misses} misses</small>
        </div>
      </summary>
      <div class="practice-drawer-body">
        <div class="challenge-header">
          <div>
            <span class="section-kicker">Challenge mode</span>
            <h3>Practice objectives</h3>
          </div>
          <div class="challenge-stats" aria-label="Challenge score">
            <span>${completeCount}/${challenges.length} complete</span>
            <span>${mode.score} pts</span>
            <span>${mode.misses} misses</span>
          </div>
        </div>
        <div class="challenge-track">
          ${challenges
            .map((item, index) => {
              const isActive = item.id === mode.activeId;
              const isDone = mode.completedIds.includes(item.id);
              const label = isDone ? "Done" : `${index + 1}`;
              return `
                <button class="challenge-token ${isActive ? "active" : ""} ${isDone ? "complete" : ""}" type="button" data-action="practice-challenge-select" data-challenge-id="${escapeAttribute(item.id)}"${titleAttribute(`${item.title}\n${item.prompt}`)}>
                  <span>${escapeHtml(label)}</span>
                  <strong>${escapeHtml(item.title)}</strong>
                </button>
              `;
            })
            .join("")}
        </div>
        ${
          challenge
            ? `
              <article class="challenge-card ${complete ? "complete" : mode.started ? "active" : ""}">
                <div class="challenge-card-copy">
                  <span class="pill ${complete ? "green" : mode.started ? "amber" : "blue"}">${escapeHtml(challenge.level)}</span>
                  <div>
                    <h4>${escapeHtml(challenge.title)}</h4>
                    <p>${escapeHtml(challenge.prompt)}</p>
                  </div>
                </div>
                <div class="challenge-scenario-grid">
                  <section>
                    <span class="section-kicker">Scenario</span>
                    <p>${escapeHtml(challenge.scenario || challenge.prompt)}</p>
                  </section>
                  <section>
                    <span class="section-kicker">Expected proof</span>
                    <p>${escapeHtml(challenge.expected || challenge.success)}</p>
                  </section>
                </div>
                <ol class="challenge-steps">
                  ${progress.map((step, index) => renderPracticeChallengeStep(step, index)).join("")}
                </ol>
                ${
                  allowHints && mode.hintOpen && !complete
                    ? `<div class="challenge-hint"><strong>Hint</strong><span>${escapeHtml(challenge.hint)}</span></div>`
                    : ""
                }
                <div class="challenge-actions">
                  <button class="text-button" type="button" data-action="practice-challenge-start" data-challenge-id="${escapeAttribute(challenge.id)}" ${mode.started && !complete ? "disabled" : ""}>${escapeHtml(actionLabel)}</button>
                  ${
                    allowHints
                      ? `<button class="text-button" type="button" data-action="practice-challenge-hint" ${complete ? "disabled" : ""}>${mode.hintOpen ? "Hide hint" : "Hint"}</button>`
                      : `<span class="challenge-no-hint">No-hints mode</span>`
                  }
                  <button class="text-button" type="button" data-action="practice-challenge-next" ${allComplete ? "disabled" : ""}>Next challenge</button>
                  <button class="text-button subtle" type="button" data-action="practice-challenge-reset">Reset score</button>
                </div>
              </article>
            `
            : `<div class="empty-state">No challenges available.</div>`
        }
      </div>
    </details>
  `;
}

function renderPracticeRunStory() {
  const mission = getActivePracticeMission();
  const readiness = calculatePRReadiness();
  const status = getStatus();
  const cleanText = status.clean ? "clean" : "changes open";
  return `
    <section class="practice-run-story" aria-label="Practice lab story">
      <div>
        <span class="section-kicker">What this page is for</span>
        <h3>Practice the ticket-to-PR loop without touching a live repo.</h3>
        <p>${escapeHtml(mission.prompt)} Use the PowerShell IDE below, then prove your branch, diff, commit, publish, and merge story.</p>
      </div>
      <ol>
        <li><span>1</span><strong>Pick scenario</strong><em>${escapeHtml(mission.title)}</em></li>
        <li><span>2</span><strong>Run commands</strong><em>Terminal is the work surface</em></li>
        <li><span>3</span><strong>Prove readiness</strong><em>${readiness.score}/10 - ${escapeHtml(cleanText)}</em></li>
      </ol>
    </section>
  `;
}

function renderPracticeChallengeStep(step, index) {
  return `
    <li class="${step.complete ? "complete" : ""}">
      <span>${step.complete ? "Done" : index + 1}</span>
      <strong>${escapeHtml(step.label)}</strong>
    </li>
  `;
}

function renderPowerShellReferencePanel() {
  const repoFlow = document.querySelector(".repo-flow");
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");
  if (!repoFlow || !workingZone || !stagingZone || !repositoryZone) {
    return;
  }

  repoFlow.className = "repo-flow practice-reference-panel";
  repoFlow.setAttribute("aria-label", "PowerShell and Git reference");
  workingZone.className = "flow-zone powershell-reference-zone";
  stagingZone.className = "flow-zone";
  repositoryZone.className = "flow-zone";
  stagingZone.innerHTML = "";
  repositoryZone.innerHTML = "";

  workingZone.innerHTML = `
    <details class="practice-reference-drawer" id="practiceReferenceDrawer" ${state.practiceReferenceOpen ? "open" : ""}>
      <summary class="practice-reference-toggle" aria-hidden="true" tabindex="-1">
        <span>Reference</span>
      </summary>
      <div class="practice-reference-shell">
        <div class="reference-heading">
          <div>
            <span class="section-kicker">PowerShell reference</span>
            <h3>Terms and command options</h3>
          </div>
          <strong>Click a command to type it</strong>
        </div>
        <section class="reference-block" aria-label="Key Git and PowerShell terms">
          <h4>Plain-English terms</h4>
          <div class="reference-term-list">
            ${powershellReferenceTerms
              .map(
                (item) => `
                  <article>
                    <strong>${escapeHtml(item.term)}</strong>
                    <span>${escapeHtml(item.meaning)}</span>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
        <section class="reference-block" aria-label="PowerShell command options">
          <h4>Commands to try</h4>
          <div class="reference-command-groups">
            ${powershellReferenceCommands.map(renderPowerShellCommandGroup).join("")}
          </div>
        </section>
      </div>
    </details>
  `;
}

function renderPowerShellCommandGroup(group) {
  return `
    <div class="reference-command-group">
      <strong>${escapeHtml(group.group)}</strong>
      <div class="reference-command-list">
        ${group.commands
          .map(
            (item) => `
              <button class="reference-command" type="button" data-command-fill="${escapeAttribute(item.cmd)}"${titleAttribute(`Type this command into the PowerShell prompt:\n${item.cmd}`)}>
                <code>${escapeHtml(item.cmd)}</code>
                <span>${escapeHtml(item.desc)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRepositoryTree() {
  const status = getStatus();
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");
  const files = status.entries.filter((entry) => entry.working !== undefined);

  workingZone.className = "flow-zone repo-tree-panel";
  stagingZone.className = "flow-zone";
  repositoryZone.className = "flow-zone";
  stagingZone.innerHTML = "";
  repositoryZone.innerHTML = "";

  workingZone.innerHTML = `
    <div class="repo-explorer-window repo-explorer-embedded open">
      <div class="repo-explorer-titlebar">
        <span>EXPLORER</span>
        <strong aria-hidden="true">...</strong>
      </div>
      <div class="repo-explorer-section">
        <div class="repo-explorer-section-title">
          <span aria-hidden="true">v</span>
          <strong>ORACLE WORKING TREE</strong>
          <small>${files.length} file${files.length === 1 ? "" : "s"}</small>
        </div>
        <div class="repo-tree">
          ${files.length ? renderFileTree(files) : `<div class="repo-explorer-empty"${titleAttribute("No files are visible yet. Try edit README.md or create a file with Out-File.")}>No files are visible yet. Try <code>edit README.md</code>.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderDynamicBranchGraph() {
  if (!state.initialized) {
    return `<div class="empty-state"${titleAttribute("Run git init to create repository history.")}>Run <code>git init</code> to start the repository graph.</div>`;
  }

  const commits = [...state.commits].sort((a, b) => a.order - b.order);
  if (!commits.length) {
    return `<div class="empty-state"${titleAttribute("No commits yet. Stage a file and commit it to create the first graph node.")}>No commits yet. Stage a file and commit it to create the first graph node.</div>`;
  }

  const maxLane = Math.max(0, ...commits.map((commit) => commit.lane || 0), ...Object.values(state.branchLanes || {}));
  const graphStartX = 168;
  const graphGap = 180;
  const laneLineStart = 150;
  const laneGap = 96;
  const laneTop = 104;
  const width = Math.max(860, graphStartX + (commits.length - 1) * graphGap + 260);
  const height = Math.max(250, laneTop + maxLane * laneGap + 116);
  const positions = new Map(
    commits.map((commit, index) => [
      commit.id,
      {
        x: graphStartX + index * graphGap,
        y: laneTop + (commit.lane || 0) * laneGap
      }
    ])
  );

  const laneY = (lane) => laneTop + lane * laneGap;

  const laneLines = Array.from({ length: maxLane + 1 }, (_, lane) => {
    const y = laneY(lane);
    const label = laneLabel(lane);
    return `
      <text x="18" y="${y + 5}" class="repo-graph-lane-label">
        <title>${escapeSvg(label)}</title>
        ${escapeSvg(truncateLabel(label, 22))}
      </text>
      <line x1="${laneLineStart}" y1="${y}" x2="${width - 70}" y2="${y}" class="repo-graph-lane">
        <title>${escapeSvg(label)}</title>
      </line>
    `;
  }).join("");

  const parentPaths = commits
    .flatMap((commit) =>
      commit.parents.map((parentId, parentIndex) => {
        const from = positions.get(parentId);
        const to = positions.get(commit.id);
        if (!from || !to) {
          return "";
        }
        const midX = from.x + (to.x - from.x) / 2;
        const edgeClass = parentIndex > 0 ? "repo-graph-edge merge-parent" : "repo-graph-edge";
        if (Math.abs(from.y - to.y) < 4) {
          return `<line x1="${from.x + 21}" y1="${from.y}" x2="${to.x - 21}" y2="${to.y}" class="${edgeClass}"></line>`;
        }
        return `<path d="M ${from.x + 21} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 21} ${to.y}" class="${edgeClass}"></path>`;
      })
    )
    .join("");

  const branchStubs = Object.entries(state.branchLanes || {})
    .map(([branch, lane]) => {
      if (lane === 0 || commits.some((commit) => commit.lane === lane)) {
        return "";
      }

      const headPosition = positions.get(state.branches?.[branch]);
      if (!headPosition) {
        return "";
      }

      const y = laneY(lane);
      const endX = Math.min(width - 80, headPosition.x + 110);
      return `<path d="M ${headPosition.x + 21} ${headPosition.y} C ${headPosition.x + 72} ${headPosition.y}, ${headPosition.x + 72} ${y}, ${endX} ${y}" class="repo-graph-edge branch-stub"><title>${escapeSvg(`${branch} starts from ${state.branches?.[branch]}`)}</title></path>`;
    })
    .join("");

  const mergeEventPaths = getGraphMergeEvents()
    .map((event) => renderGraphMergeEvent(event, positions, laneY, width))
    .join("");

  const nodes = commits
    .map((commit) => {
      const position = positions.get(commit.id);
      const labels = branchLabelsForCommit(commit.id);
      const selected = commit.id === state.selectedCommitId;
      return `
        <g class="repo-graph-node ${selected ? "selected" : ""}" data-action="practice-select-commit" data-commit-id="${escapeAttribute(commit.id)}" tabindex="0" role="button">
          <circle cx="${position.x}" cy="${position.y}" r="18" class="${commit.id === headId() ? "repo-graph-commit head" : "repo-graph-commit"}">
            <title>${escapeSvg(`${commit.id}: ${commit.message}${labels.length ? ` (${labels.join(", ")})` : ""}`)}</title>
          </circle>
          <text x="${position.x}" y="${position.y + 4}" class="repo-graph-commit-id">${escapeSvg(commit.id)}</text>
        </g>
      `;
    })
    .join("");

  const pointerLabels = commits.map((commit) => renderGraphPointerLabels(commit, positions)).join("");

  return `
    <div class="repo-graph-card">
      <svg class="repo-graph-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Dynamic Git branch graph">
        <title>${escapeSvg(`Current branch ${state.currentBranch}, HEAD ${currentHeadLabel()}`)}</title>
        <defs>
          <marker id="repoGraphArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" class="repo-graph-arrow"></path>
          </marker>
        </defs>
        ${laneLines}
        ${parentPaths}
        ${branchStubs}
        ${mergeEventPaths}
        ${nodes}
        ${pointerLabels}
      </svg>
    </div>
  `;
}

function getGraphMergeEvents() {
  const events = Array.isArray(state.mergeEvents) ? state.mergeEvents : [];
  const hasMainFastForward = events.some((event) => event.type === "fast-forward" && event.target === "main");
  const mainHead = state.branches?.main;
  const mainCommit = mainHead ? state.commits.find((commit) => commit.id === mainHead) : null;
  if (
    !hasMainFastForward &&
    mainCommit &&
    mainCommit.lane !== (state.branchLanes?.main || 0) &&
    mainCommit.branch !== "main"
  ) {
    return [
      ...events,
      {
        type: "fast-forward",
        target: "main",
        source: mainCommit.branch,
        from: mainCommit.parents?.[0] || mainHead,
        to: mainHead,
        inferred: true
      }
    ];
  }
  return events;
}

function renderGraphMergeEvent(event, positions, laneY, width) {
  if (event.type !== "fast-forward") {
    return "";
  }

  const to = positions.get(event.to);
  if (!to) {
    return "";
  }

  const targetLane = state.branchLanes?.[event.target] ?? 0;
  const targetY = laneY(targetLane);
  if (Math.abs(to.y - targetY) < 4) {
    return "";
  }

  const endX = Math.min(width - 76, to.x + 92);
  const midX = to.x + 58;
  return `
    <path d="M ${to.x + 20} ${to.y} C ${midX} ${to.y}, ${midX} ${targetY}, ${endX} ${targetY}" class="repo-graph-edge fast-forward" marker-end="url(#repoGraphArrow)">
      <title>${escapeSvg(`${event.target} fast-forwarded from ${event.from} to ${event.to}${event.source ? ` through ${event.source}` : ""}`)}</title>
    </path>
  `;
}

function renderGraphPointerLabels(commit, positions) {
  const position = positions.get(commit.id);
  if (!position) {
    return "";
  }

  const labels = branchLabelsForCommit(commit.id);
  if (!labels.length) {
    return "";
  }

  return labels
    .slice(0, 4)
    .map((label, index) => {
      const display = truncateLabel(label, label.startsWith("HEAD") ? 24 : 20);
      const width = Math.max(70, Math.min(168, display.length * 7 + 18));
      const x = Math.max(12, position.x - width / 2);
      const y = Math.max(12, position.y - 50 - index * 23);
      const tone = label.startsWith("HEAD") ? "head" : label.startsWith("origin/") ? "remote" : "branch";
      return `
        <g class="repo-graph-pointer ${tone}">
          <rect x="${x}" y="${y}" width="${width}" height="18" rx="9">
            <title>${escapeSvg(label)}</title>
          </rect>
          <text x="${x + width / 2}" y="${y + 13}">${escapeSvg(display)}</text>
        </g>
      `;
    })
    .join("");
}

function laneLabel(lane) {
  const labels = Object.entries(state.branchLanes || {})
    .filter(([, branchLane]) => branchLane === lane)
    .map(([branch]) => branch);
  return labels.length ? labels.join(", ") : `lane ${lane + 1}`;
}

function renderFileTree(entries) {
  const root = { folders: new Map(), files: [] };

  entries.forEach((entry) => {
    const parts = entry.name.split(/[\\/]/).filter(Boolean);
    let node = root;
    parts.slice(0, -1).forEach((part) => {
      if (!node.folders.has(part)) {
        node.folders.set(part, { folders: new Map(), files: [] });
      }
      node = node.folders.get(part);
    });
    node.files.push({ ...entry, displayName: parts[parts.length - 1] || entry.name });
  });

  return renderFileTreeNode(root, 0);
}

function renderFileTreeNode(node, depth, parentPath = "") {
  const selectedCommitFiles = new Set(state.selectedCommitId ? changedFilesForCommit(state.selectedCommitId) : []);
  const folders = [...node.folders.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, child]) => {
      const folderPath = [parentPath, name].filter(Boolean).join("/");
      const count = countTreeFiles(child);
      const expanded = isExplorerFolderExpanded("work", folderPath, true);
      return `
        <button class="repo-tree-folder" type="button" data-action="toggle-explorer-folder" data-scope="work" data-path="${escapeAttribute(folderPath)}" aria-expanded="${expanded}" style="--depth: ${depth}"${titleAttribute(`${folderPath}\n${expanded ? "Collapse" : "Expand"} folder`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="repo-map-kind folder" aria-hidden="true"></span>
          <strong${titleAttribute(name)}>${escapeHtml(name)}</strong>
          <small>${count}</small>
        </button>
        ${expanded ? renderFileTreeNode(child, depth + 1, folderPath) : ""}
      `;
    })
    .join("");

  const files = node.files
    .sort((a, b) => a.displayName.localeCompare(b.displayName))
    .map((entry) => {
      const status = workingStatus(entry);
      const selected =
        isActiveLabPath(entry.name) || entry.name === state.selectedFilePath || selectedCommitFiles.has(entry.name)
          ? " selected"
          : "";
      const expanded = isExplorerFileExpanded("work", entry.name);
      const preview = expanded
        ? `
          <pre class="repo-tree-preview" style="--depth: ${depth + 1}"${titleAttribute(entry.working || "")}>${escapeHtml(firstLines(entry.working, 8))}</pre>
        `
        : "";
      return `
        <button class="repo-tree-file${selected} ${expanded ? "open" : ""}" type="button" data-action="toggle-explorer-file" data-scope="work" data-path="${escapeAttribute(entry.name)}" aria-expanded="${expanded}" style="--depth: ${depth}"${titleAttribute(`${entry.name}\n${status.label}${entry.working ? `\n\n${entry.working}` : ""}`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="repo-map-kind file" aria-hidden="true">${escapeHtml(fileKind(entry.displayName))}</span>
          <strong>${escapeHtml(entry.displayName)}</strong>
          <span class="pill ${status.tone}">${escapeHtml(status.label)}</span>
        </button>
        ${preview}
      `;
    })
    .join("");

  return `${folders}${files}`;
}

function countTreeFiles(node) {
  return node.files.length + [...node.folders.values()].reduce((total, child) => total + countTreeFiles(child), 0);
}

function truncateLabel(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, Math.max(0, maxLength - 3))}...` : text;
}

function renderZones() {
  const status = getStatus();
  const head = hasHeadCommit() ? getCommit(headId()) : null;
  const activeArea = getCurrentProcessArea();
  document.querySelector(".repo-flow").className = "repo-flow";
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");

  delete workingZone.dataset.dropTarget;
  stagingZone.dataset.dropTarget = "staging";
  repositoryZone.dataset.dropTarget = "repository";
  workingZone.className = `flow-zone ${["working", "status", "branch"].includes(activeArea) ? "active-zone" : ""}`;
  stagingZone.className = `flow-zone ${activeArea === "staging" ? "active-zone" : ""}`;
  repositoryZone.className = `flow-zone ${["repository", "history", "merge"].includes(activeArea) ? "active-zone" : ""}`;

  workingZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 1</span>
        <h3>Files being edited</h3>
        <p>Your current files on disk. These are not saved to Git history until staged and committed.</p>
      </div>
      <small>${status.unstaged.length + status.untracked.length} open</small>
    </div>
    <div class="file-list">
      ${renderWorkingFiles(status.entries)}
    </div>
  `;

  stagingZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 2</span>
        <h3>Selected for next commit</h3>
        <p>Files moved here with git add. This is the exact snapshot the next commit will save.</p>
      </div>
      <small>${status.staged.length} staged</small>
    </div>
    <div class="file-list">
      ${
        status.staged.length
          ? status.staged.map((entry) => renderStagedFile(entry)).join("")
          : `<div class="empty-state"${titleAttribute("Nothing selected yet. Run git add <file> or git add . to choose what the next commit will include.")}>Nothing selected yet. Run <code>git add</code> to choose what the next commit will include.</div>`
      }
    </div>
  `;

  repositoryZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 3</span>
        <h3>Saved commit history</h3>
        <p>Commits are permanent checkpoints. Branches point to these saved snapshots.</p>
      </div>
      <small>${head ? head.id : state.initialized ? "no commits" : "not initialized"}</small>
    </div>
    ${head ? renderCommitSnapshot(head) : renderEmptyRepository()}
  `;
}

function renderEmptyRepository() {
  const text = state.initialized
    ? "No commits saved yet. After git commit, the saved snapshot will appear here."
    : "No Git repository yet. Run git init during the guided lab.";
  return `<div class="empty-state"${titleAttribute(text)}>${escapeHtml(text)}</div>`;
}

function renderWorkingFiles(entries) {
  const workingEntries = entries.filter((entry) => entry.working !== undefined);
  if (!workingEntries.length) {
    return `<div class="empty-state"${titleAttribute("No files in the working tree.")}>No files in the working tree.</div>`;
  }

  return workingEntries
    .map((entry) => {
      const status = workingStatus(entry);
      return renderFileRow(entry.name, status.label, status.tone, entry.working, "", {
        zone: "working",
        draggable: true,
        dragLocation: "working"
      });
    })
    .join("");
}

function renderStagedFile(entry) {
  const content = state.indexFiles[entry.name] || "";
  return renderFileRow(
    entry.name,
    entry.stagedType,
    entry.stagedType === "new file" ? "green" : "blue",
    content,
    "",
    {
      zone: "staged",
      draggable: true,
      dragLocation: "staged"
    }
  );
}

function renderCommitSnapshot(commit) {
  const files = Object.keys(commit.files)
    .sort()
    .map((name) => renderFileRow(name, "committed", "green", commit.files[name], "", { zone: "repository" }))
    .join("");

  return `
    <div class="file-row">
      <div class="file-main">
        <span class="file-name"${titleAttribute(commit.message)}>${escapeHtml(commit.message)}</span>
        <span class="pill blue"${titleAttribute(commit.parents.length ? `${commit.parents.length} parent${commit.parents.length > 1 ? "s" : ""}` : "root")}>${commit.parents.length ? `${commit.parents.length} parent${commit.parents.length > 1 ? "s" : ""}` : "root"}</span>
      </div>
      <div class="file-preview"${titleAttribute(`Commit ${commit.id} on ${commit.branch}. This card is the latest saved checkpoint.`)}>Latest saved checkpoint: commit ${escapeHtml(commit.id)} on ${escapeHtml(commit.branch)}</div>
    </div>
    <div class="file-list">${files}</div>
  `;
}

function workingStatus(entry) {
  if (entry.conflicted) {
    return { label: "conflict", tone: "red" };
  }
  if (entry.untracked) {
    return { label: "untracked", tone: "amber" };
  }
  if (entry.unstagedType) {
    return { label: entry.unstagedType, tone: "amber" };
  }
  if (entry.stagedType) {
    return { label: "staged", tone: "blue" };
  }
  return { label: "clean", tone: "gray" };
}

function renderFileRow(name, label, tone, content, actions, options = {}) {
  const preview = firstLines(content, 3);
  const rowTitle = `${name}\n${label}${content ? `\n\n${content}` : ""}`;
  const zone = options.zone || "flow";
  const flowKey = `${zone}:${name}`;
  const expanded = isFlowFileExpanded(flowKey);
  const draggable = Boolean(options.draggable);
  const dragAttributes = draggable
    ? ` draggable="true" data-flow-file="${escapeAttribute(name)}" data-flow-location="${escapeAttribute(options.dragLocation || zone)}"`
    : "";
  return `
    <article class="file-row ${expanded ? "open" : "collapsed"} ${draggable ? "draggable" : ""}"${dragAttributes}${titleAttribute(rowTitle)}>
      <button class="file-main file-card-toggle" type="button" data-action="toggle-flow-file" data-flow-key="${escapeAttribute(flowKey)}" aria-expanded="${expanded}"${dragAttributes}>
        <span class="file-title-wrap">
          <span class="file-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="file-name"${titleAttribute(name)}>${escapeHtml(name)}</span>
        </span>
        <span class="pill ${tone}"${titleAttribute(label)}>${escapeHtml(label)}</span>
      </button>
      ${expanded ? `<div class="file-preview"${titleAttribute(content || preview)}>${escapeHtml(preview)}</div>` : ""}
      ${actions ? `<div class="file-actions">${actions}</div>` : ""}
    </article>
  `;
}

function renderGuidedCommands() {
  setGuidedPanelMode("guided-git", "Open guided map and command reference");
  const active = getActiveModule();
  const total = active.commands.length;
  const current = active.commands[state.guidedStep];
  const activeLessons = getActiveLessons();
  const currentLesson = activeLessons[getCurrentLessonIndex()] || activeLessons[0];
  document.querySelector(".guided-panel .section-kicker").textContent = "Guided lab";
  document.getElementById("guidedTitle").textContent = active.labTitle;
  document.getElementById("guidedProgress").textContent =
    state.guidedStep >= total ? "Complete" : `Step ${state.guidedStep + 1} of ${total}`;
  renderProcessMap(active);

  document.getElementById("guidedCommands").innerHTML = current
    ? `
      <article class="current-command-card">
        <span class="pill amber"${titleAttribute("Type next")}>Type next</span>
        <div>
          <strong${titleAttribute(currentLesson.title)}>${escapeHtml(currentLesson.title)}</strong>
          <p${titleAttribute(current.desc)}>${escapeHtml(current.desc)}</p>
          ${renderRecommendedCommands(current)}
        </div>
        <code${titleAttribute(current.cmd)}>${escapeHtml(current.cmd)}</code>
      </article>
    `
    : `
      <article class="current-command-card complete">
        <span class="pill green"${titleAttribute("Complete")}>Complete</span>
        <div>
          <strong${titleAttribute("Guided command path complete")}>Guided command path complete</strong>
          <p${titleAttribute("The branch has been merged back into main. The terminal history is the learner's audit trail.")}>The branch has been merged back into main. The terminal history is the learner's audit trail.</p>
        </div>
        <code${titleAttribute("git log --oneline")}>git log --oneline</code>
      </article>
    `;
}

function renderRecommendedCommands(command) {
  const recommended = Array.isArray(command?.recommended) ? command.recommended : [];
  if (!recommended.length) {
    return "";
  }

  return `
    <div class="recommended-commands" aria-label="Recommended optional commands">
      <span>Recommended, not required</span>
      ${recommended
        .map(
          (item) => `
            <button type="button" data-command-fill="${escapeAttribute(item.cmd)}"${titleAttribute(item.desc || item.cmd)}>
              <code>${escapeHtml(item.cmd)}</code>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function setGuidedPanelMode(mode, hintText) {
  const drawer = document.getElementById("guidedPanelDrawer");
  const hint = document.getElementById("guidedPanelHint");
  if (!drawer) {
    return;
  }

  if (drawer.dataset.mode !== mode) {
    drawer.open = !["guided-git", "codex"].includes(mode);
    drawer.dataset.mode = mode;
  }

  if (hint) {
    hint.textContent = hintText;
  }
}

function renderProcessMap(active) {
  const total = active.commands.length;
  const selectedIndex = Math.min(state.guidedStep, total - 1);
  const processSteps = getProcessStepsForModule(active.id);
  const selected = processSteps[selectedIndex] || processSteps[0];
  const selectedCommand = active.commands[selectedIndex];
  const isComplete = state.guidedStep >= total;

  document.getElementById("processMap").innerHTML = `
    <div class="process-summary ${isComplete ? "complete" : ""}">
      <div>
        <span class="section-kicker"${titleAttribute(isComplete ? "Process complete" : "Current location")}>${isComplete ? "Process complete" : "Current location"}</span>
        <h3${titleAttribute(isComplete ? "Branch merged into main" : selected.title)}>${escapeHtml(isComplete ? "Branch merged into main" : selected.title)}</h3>
      </div>
      <p${titleAttribute(
        isComplete
          ? "The repository now has main, a feature branch, and a commit that main reached through a fast-forward merge."
          : selected.detail
      )}>${escapeHtml(
        isComplete
          ? "The repository now has main, a feature branch, and a commit that main reached through a fast-forward merge."
          : selected.detail
      )}</p>
      <code${titleAttribute(isComplete ? "git log --oneline" : selectedCommand.cmd)}>${escapeHtml(isComplete ? "git log --oneline" : selectedCommand.cmd)}</code>
    </div>
    ${renderBranchBuilder(active)}
    <div class="process-rail" style="--step-count: ${total}">
      ${active.commands
        .map((command, index) => {
          const process = processSteps[index] || {
            area: "workspace",
            label: "Command",
            title: command.desc,
            detail: ""
          };
          const statusClass =
            index < state.guidedStep ? "complete" : index === state.guidedStep ? "active" : "";
          return `
            <article class="process-step ${statusClass}" aria-label="Step ${index + 1}: ${escapeAttribute(process.label)}">
              <div class="process-dot"><span>${index + 1}</span></div>
              <div class="process-card">
                <span${titleAttribute(process.label)}>${escapeHtml(process.label)}</span>
                <strong${titleAttribute(process.title)}>${escapeHtml(process.title)}</strong>
                <code${titleAttribute(command.cmd)}>${escapeHtml(command.cmd)}</code>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderBranchBuilder(active) {
  const step = state.guidedStep;
  const total = active.commands.length;
  const hasRepo = state.initialized || step >= 3;
  const headLabel = hasRepo ? `HEAD -> ${state.currentBranch}` : "HEAD unavailable";
  const currentCommand = active.commands[Math.min(step, total - 1)]?.cmd || "git log --oneline";
  const graph = builderGraphLayout();

  return `
    <div class="branch-builder">
      <div class="branch-builder-header">
        <div>
          <span class="section-kicker">Branch builder</span>
          <h3>${escapeHtml(branchBuilderTitle(step, total, active))}</h3>
        </div>
        <span class="pill ${hasRepo ? "blue" : "gray"}">${escapeHtml(headLabel)}</span>
      </div>
      <svg class="branch-builder-svg" viewBox="0 0 ${graph.width} ${graph.height}" style="min-height: ${graph.height}px" role="img" aria-label="Live branch diagram">
        <title>${escapeSvg(`Live branch diagram. Current branch ${state.currentBranch}. Current command: ${currentCommand}`)}</title>
        <defs>
          <marker id="arrowHead" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <polygon points="0 0, 9 3.5, 0 7" class="branch-arrow-head"></polygon>
          </marker>
        </defs>
        ${renderBuilderGraph(graph, hasRepo)}
      </svg>
    </div>
  `;
}

function builderGraphLayout() {
  const commits = [...state.commits].sort((a, b) => a.order - b.order);
  const lanes = Object.values(state.branchLanes || { main: 0 });
  const maxLane = Math.max(0, ...commits.map((commit) => commit.lane || 0), ...lanes);
  const graphLeft = 128;
  const graphGap = 185;
  const graphTop = 72;
  const laneGap = 96;
  const width = Math.max(860, graphLeft + Math.max(1, commits.length - 1) * graphGap + 220);
  const height = Math.max(230, graphTop + maxLane * laneGap + 96);
  const positions = new Map(
    commits.map((commit, index) => [
      commit.id,
      {
        x: graphLeft + index * graphGap,
        y: graphTop + (commit.lane || 0) * laneGap
      }
    ])
  );

  return { commits, maxLane, width, height, graphLeft, graphGap, graphTop, laneGap, positions };
}

function renderBuilderGraph(graph, hasRepo) {
  return `
    ${renderBuilderLanes(graph, hasRepo)}
    ${renderBuilderParentEdges(graph)}
    ${renderBuilderBranchStubs(graph)}
    ${renderBuilderFastForward(graph)}
    ${renderBuilderEmptyCommitHint(graph, hasRepo)}
    ${renderBuilderNodes(graph)}
  `;
}

function renderBuilderLanes(graph, hasRepo) {
  return Array.from({ length: graph.maxLane + 1 }, (_, lane) => {
    const y = builderLaneY(graph, lane);
    const label = builderLaneLabel(lane);
    const laneClass = hasRepo ? builderLaneClass(lane) : "muted";
    const laneStartX = lane === 0 ? 70 : graph.graphLeft + 60;
    return `
      <line x1="${laneStartX}" y1="${y}" x2="${graph.width - 96}" y2="${y}" class="branch-lane ${laneClass}">
        <title>${escapeSvg(label)}</title>
      </line>
    `;
  }).join("");
}

function renderBuilderParentEdges(graph) {
  return graph.commits
    .flatMap((commit) =>
      commit.parents.map((parentId, parentIndex) => {
        const from = graph.positions.get(parentId);
        const to = graph.positions.get(commit.id);
        if (!from || !to) {
          return "";
        }
        const midX = from.x + (to.x - from.x) / 2;
        const edgeClass = parentIndex > 0 ? "builder-edge merge-parent" : "builder-edge";
        return `<path d="M ${from.x + 18} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 18} ${to.y}" class="${edgeClass}"><title>${escapeSvg(parentIndex > 0 ? `merge parent ${parentId} into ${commit.id}` : `${parentId} to ${commit.id}`)}</title></path>`;
      })
    )
    .join("");
}

function renderBuilderBranchStubs(graph) {
  return Object.entries(state.branchLanes || {})
    .map(([branch, lane]) => {
      if (lane === 0 || graph.commits.some((commit) => commit.lane === lane)) {
        return "";
      }

      const head = state.branches?.[branch];
      const headPosition = graph.positions.get(head);
      if (!headPosition) {
        return "";
      }

      const y = builderLaneY(graph, lane);
      const endX = Math.min(graph.width - 120, headPosition.x + 110);
      return `<path d="M ${headPosition.x + 18} ${headPosition.y} C ${headPosition.x + 62} ${headPosition.y}, ${headPosition.x + 62} ${y}, ${endX} ${y}" class="builder-branch-stub"><title>${escapeSvg(`${branch} starts from ${head}`)}</title></path>`;
    })
    .join("");
}

function renderBuilderFastForward(graph) {
  const mainHead = state.branches?.main;
  const commit = graph.commits.find((item) => item.id === mainHead);
  const position = graph.positions.get(mainHead);

  if (!commit || !position || (commit.lane || 0) === 0) {
    return "";
  }

  const mainY = builderLaneY(graph, 0);
  const projectedX = Math.min(graph.width - 120, position.x + 132);
  const curveMidX = position.x + (projectedX - position.x) * 0.65;

  return `
    <path d="M ${position.x + 18} ${position.y} C ${curveMidX} ${position.y}, ${curveMidX} ${mainY}, ${projectedX - 18} ${mainY}" class="builder-fast-forward">
      <title>${escapeSvg(`main fast-forwarded to ${mainHead}`)}</title>
    </path>
    <circle cx="${projectedX}" cy="${mainY}" r="15" class="builder-commit head ghost">
      <title>${escapeSvg(`main now includes ${mainHead}`)}</title>
    </circle>
  `;
}

function renderBuilderEmptyCommitHint(graph, hasRepo) {
  if (!hasRepo || graph.commits.length) {
    return "";
  }

  const y = builderLaneY(graph, 0);
  return `
    <circle cx="300" cy="${y}" r="12" class="builder-empty-node">
      <title>${escapeSvg("main has no commits yet")}</title>
    </circle>
  `;
}

function renderBuilderNodes(graph) {
  return graph.commits
    .map((commit) => {
      const position = graph.positions.get(commit.id);
      const labels = branchLabelsForCommit(commit.id);
      return `
        <g class="builder-node">
          <circle cx="${position.x}" cy="${position.y}" r="16" class="${commit.id === headId() ? "builder-commit head" : "builder-commit"}">
            <title>${escapeSvg(`${commit.id}: ${commit.message}${labels.length ? ` (${labels.join(", ")})` : ""}`)}</title>
          </circle>
        </g>
      `;
    })
    .join("");
}

function builderLaneY(graph, lane) {
  return graph.graphTop + lane * graph.laneGap;
}

function builderLaneLabel(lane) {
  const labels = Object.entries(state.branchLanes || {})
    .filter(([, branchLane]) => branchLane === lane)
    .map(([branch]) => branch);
  return labels.length ? labels.join(", ") : `lane ${lane + 1}`;
}

function builderLaneClass(lane) {
  return lane === 0 ? "main" : "feature";
}

function branchBuilderTitle(step, total, active = getActiveModule()) {
  if (step >= total) {
    return "main now includes the branch work";
  }
  if (active.id === "project-work") {
    if (step < 3) {
      return "Build the project workspace";
    }
    if (step < 9) {
      return "Commit the project capsule on main";
    }
    if (step < 14) {
      return "Branch a workstream from the capsule";
    }
    return "Bring the workstream update back to main";
  }
  if (step < 3) {
    return "Build the project before Git can track it";
  }
  if (step < 7) {
    return "Create the first main branch commit";
  }
  if (step < 12) {
    return "Branch away from main and make feature work";
  }
  return "Bring the feature branch back to main";
}

function renderTerminal() {
  const output = document.getElementById("terminalOutput");
  const history = document.getElementById("terminalHistory");
  const form = document.getElementById("commandForm");
  const runButton = form?.querySelector('button[data-action="run-command"]');
  if (form) {
    form.hidden = false;
  }
  if (runButton) {
    runButton.tabIndex = -1;
    runButton.setAttribute("aria-hidden", "true");
  }
  renderTerminalHeader();
  document.getElementById("promptLabel").textContent = getPrompt();
  history.innerHTML = state.terminal
    .map((line) => `<div class="terminal-line ${line.type}">${escapeHtml(line.text)}</div>`)
    .join("");
  output.scrollTop = output.scrollHeight;
  updateCommandPlaceholder();
}

function renderTerminalHeader() {
  const panel = document.querySelector(".terminal-panel");
  if (!panel) {
    return;
  }

  const kicker = panel.querySelector(".section-kicker");
  const heading = panel.querySelector("h2");
  const note = panel.querySelector(".terminal-note");
  if (!kicker || !heading || !note) {
    return;
  }

  if (isPracticeMode()) {
    kicker.textContent = "PowerShell IDE";
    heading.textContent = "Practice against the simulated repository";
    note.innerHTML = 'Try <code>git status</code>, <code>git branch</code>, or <code>git log --oneline</code>. Use <strong>How to</strong> for the simulator walkthrough.';
    return;
  }

  kicker.textContent = "PowerShell terminal";
  heading.textContent = "Type commands into the prompt";
  note.innerHTML = 'Type <code>help</code> for supported commands';
}

function updateCommandPlaceholder() {
  const input = document.getElementById("commandInput");
  if (!input) {
    return;
  }

  const expected = getActiveModule().commands[state.guidedStep];
  input.placeholder = expected ? `Type exactly: ${expected.cmd}` : "Type a command such as git status";
}

function renderQuiz() {
  const guidedGitSidebar = !isPracticeMode() && !isCodexMode() && !isVSCodeMode() && !isSqlMode() && !isCapstoneMode();
  document.querySelector(".quiz-panel .section-kicker").textContent = guidedGitSidebar ? "Context and checks" : "Knowledge checks";
  const session = ensureQuizSession();
  const round = clampQuizRound(session.round);
  const quizBank = getQuizBank(state?.activeModuleId, round);
  const quizById = new Map(quizBank.map((quiz) => [quiz.id, quiz]));
  const correctCount = session.correctIds.filter((id) => quizById.has(id)).length;
  const missedCount = session.missedIds.filter((id) => quizById.has(id)).length;
  const quizOpen = correctCount > 0 || missedCount > 0 || session.round > 1;
  const sidebarContext = guidedGitSidebar ? renderGuidedScenarioPanel("sidebar") : "";

  document.getElementById("quizScore").innerHTML = `
    <span>${escapeHtml(getQuizRoundName(round))}</span>
    <span>Correct ${correctCount}</span>
    <span>Missed ${missedCount}</span>
  `;

  const activeQuizIds = session.activeIds.filter((id) => quizById.has(id));
  if (!activeQuizIds.length) {
    document.getElementById("quizList").innerHTML = `
      ${sidebarContext}
      <details class="quiz-drawer" open>
        <summary>
          <span class="section-kicker">Checks complete</span>
          <strong>Review your results</strong>
        </summary>
        ${renderQuizEmptyState(round, correctCount, missedCount)}
      </details>
    `;
    return;
  }

  document.getElementById("quizList").innerHTML = `
    ${sidebarContext}
    <details class="quiz-drawer" ${quizOpen ? "open" : ""}>
      <summary>
        <span class="section-kicker">Optional check</span>
        <strong>Open knowledge checks when you want recall practice</strong>
      </summary>
      <div class="quiz-drawer-body">
        ${activeQuizIds
          .map((quizId) => {
            const quiz = quizById.get(quizId);
            const attempt = session.attempts[quizId] || {};
            const selected = attempt.selected;
            const isExiting = attempt.status === "exiting";
            const isMissed = attempt.status === "missed";
            const questionId = `quiz-question-${quiz.id}`;
            return `
              <article class="quiz-card ${isExiting ? "is-exiting" : ""} ${isMissed ? "is-missed" : ""}" aria-labelledby="${escapeAttribute(questionId)}">
                <h3 id="${escapeAttribute(questionId)}">${escapeHtml(quiz.question)}</h3>
                ${renderQuizAnswerControl(quiz, session, attempt, selected, isExiting, questionId)}
                ${
                  isExiting
                    ? `<p class="quiz-feedback">${escapeHtml(quiz.feedback)}</p>`
                    : isMissed
                      ? renderQuizRecoveryPanel(quiz, round, attempt)
                      : ""
                }
              </article>
            `;
          })
          .join("")}
      </div>
    </details>
  `;
}

function renderQuizEmptyState(round, correctCount, missedCount) {
  const canAdvance = correctCount >= QUIZ_ROUND_UNLOCK_SCORE && round < QUIZ_ROUND_COUNT;
  const nextRound = clampQuizRound(round + 1);
  return `
    <div class="quiz-empty">
      <strong>${canAdvance ? `${escapeHtml(getQuizRoundName(round))} complete` : "Knowledge checks complete"}</strong>
      <span>${correctCount} correct, ${missedCount} missed</span>
      ${
        canAdvance
          ? `<button class="quiz-round-button" type="button" data-action="start-quiz-round" data-round="${nextRound}">
              Start ${escapeHtml(getQuizRoundName(nextRound))}
            </button>`
          : round >= QUIZ_ROUND_COUNT
            ? `<span>All rounds complete. You are ready for the lab flow.</span>`
            : ""
      }
    </div>
  `;
}

function renderQuizAnswerControl(quiz, session, attempt, selected, isExiting, questionId) {
  if (quiz.type !== "choice") {
    const typedValue = attempt.typed || "";
    const round = clampQuizRound(session.round);
    const showGhostAnswer = Boolean(
      (attempt.showHint || shouldRevealQuizAnswer(attempt)) &&
        round === 2 &&
        quiz.type === "fill" &&
        quiz.answerLabel
    );
    const placeholder = showGhostAnswer ? quiz.answerLabel : quiz.placeholder || "Type your answer";
    return `
      <form class="quiz-text-form" data-quiz-form="${escapeAttribute(quiz.id)}" aria-labelledby="${escapeAttribute(questionId)}">
        <input
          class="${showGhostAnswer ? "quiz-ghost-answer" : ""}"
          type="text"
          name="quiz-answer"
          value="${escapeAttribute(typedValue)}"
          placeholder="${escapeAttribute(placeholder)}"
          aria-label="${escapeAttribute(`Answer for: ${quiz.question}`)}"
          autocomplete="off"
          ${isExiting ? "disabled" : ""}
        />
        <button class="quiz-text-submit" type="submit" ${isExiting ? "disabled" : ""}>Check</button>
      </form>
    `;
  }

  const optionOrder = getQuizOptionOrder(session, quiz);
  return `
    <div class="quiz-options" role="group" aria-labelledby="${escapeAttribute(questionId)}">
      ${optionOrder
        .map((optionIndex) => {
          const option = quiz.options[optionIndex];
          const answered = selected !== undefined;
          const isSelected = selected === optionIndex;
          const isRevealed = shouldRevealQuizAnswer(attempt) && optionIndex === quiz.answerIndex;
          const className = [
            answered && isSelected ? (optionIndex === quiz.answerIndex ? "correct" : "wrong") : "",
            isRevealed ? "revealed" : ""
          ]
            .filter(Boolean)
            .join(" ");
          return `
            <button class="quiz-option ${className}" type="button" data-quiz="${escapeAttribute(quiz.id)}" data-option="${optionIndex}" ${isExiting ? "disabled" : ""}>
              ${escapeHtml(option)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderQuizRecoveryPanel(quiz, round, attempt) {
  if (attempt.status !== "missed") {
    return "";
  }

  const revealAnswer = shouldRevealQuizAnswer(attempt);
  const wrongCount = getQuizWrongCount(attempt);
  const answerLabel = getQuizAnswerLabel(quiz);

  if (!attempt.showHint && !revealAnswer) {
    return `
      <button class="quiz-hint-button" type="button" data-action="show-quiz-hint" data-quiz-id="${escapeAttribute(quiz.id)}">
        Show hint
      </button>
    `;
  }

  const isRoundTwoFill = round === 2 && quiz.type === "fill";
  const hintText = isRoundTwoFill
    ? "Retype the grey command shown in the answer box."
    : getQuizHintText(quiz);
  const hintMarkup = attempt.showHint || revealAnswer
    ? `
      <div class="quiz-hint-panel">
        <strong>${revealAnswer ? `Hint after ${wrongCount} misses` : "Hint"}</strong>
        <span>${escapeHtml(hintText)}</span>
        ${isRoundTwoFill && answerLabel ? `<code>${escapeHtml(answerLabel)}</code>` : ""}
      </div>
    `
    : "";

  return `
    ${hintMarkup}
    ${revealAnswer ? renderQuizAnswerReveal(quiz, answerLabel) : ""}
  `;
}

function getQuizHintText(quiz) {
  if (quiz.hint) {
    return quiz.hint;
  }

  if (quiz.type === "choice" && quiz.feedback) {
    return quiz.feedback;
  }

  const label = getQuizAnswerLabel(quiz);
  if (!label) {
    return "Review the question wording, then try the safest Git or PowerShell inspection command first.";
  }

  const normalized = String(label).trim();
  const firstWord = normalized.split(/\s+/)[0] || "";
  if (firstWord) {
    return `Start with ${firstWord}; use the full command or prompt that fits the scenario.`;
  }

  return "Use the command or prompt that directly answers the scenario.";
}

function renderQuizAnswerReveal(quiz, answerLabel) {
  if (!answerLabel) {
    return "";
  }

  const label = quiz.type === "choice" ? "Correct answer" : "Answer";
  return `
    <div class="quiz-answer-panel">
      <strong>${escapeHtml(label)}</strong>
      <code>${escapeHtml(answerLabel)}</code>
    </div>
  `;
}

function getQuizAnswerLabel(quiz) {
  if (quiz.type === "choice") {
    return quiz.options?.[quiz.answerIndex] || "";
  }
  return quiz.answerLabel || quiz.acceptedAnswers?.[0] || "";
}

function getQuizWrongCount(attempt) {
  const count = Number(attempt?.wrongCount);
  return Number.isFinite(count) ? Math.max(0, count) : attempt?.status === "missed" ? 1 : 0;
}

function shouldRevealQuizAnswer(attempt) {
  return Boolean(attempt?.revealAnswer || getQuizWrongCount(attempt) >= 2);
}

function getQuizBank(moduleId = state?.activeModuleId || "git-basics", round = state?.quizSession?.round || 1) {
  const quizRound = clampQuizRound(round);
  if (moduleId === codexLab.id) {
    const codexRoundItems =
      quizRound === 1
        ? codexChoiceQuizzes
        : quizRound === 2
          ? codexRoundTwoQuizzes.map((quiz) => ({ type: "fill", ...quiz }))
          : codexRoundThreeQuizzes.map((quiz) => ({ type: "freeform", ...quiz }));
    return normalizeQuizItems(codexRoundItems, quizRound);
  }

  if (moduleId === oracleSqlLab.id) {
    const sqlRoundItems =
      quizRound === 1
        ? oracleSqlChoiceQuizzes
        : quizRound === 2
          ? oracleSqlRoundTwoQuizzes.map((quiz) => ({ type: "fill", ...quiz }))
          : oracleSqlRoundThreeQuizzes.map((quiz) => ({ type: "freeform", ...quiz }));
    return normalizeQuizItems(sqlRoundItems, quizRound);
  }

  const active = modules.find((module) => module.id === moduleId) || modules[0];
  const primaryItems = active.quiz || [];
  const roundItems =
    quizRound === 1
      ? primaryItems.length
        ? [...primaryItems, ...quizzes]
        : quizzes
      : quizRound === 2
        ? roundTwoQuizzes.map((quiz) => ({ type: "fill", ...quiz }))
        : roundThreeQuizzes.map((quiz) => ({ type: "freeform", ...quiz }));
  return normalizeQuizItems(roundItems, quizRound);
}

function normalizeQuizItems(roundItems, quizRound) {
  const seenQuestions = new Set();
  return roundItems
    .map((quiz, index) => {
      const questionKey = slugify(quiz.question);
      if (seenQuestions.has(questionKey)) {
        return null;
      }
      seenQuestions.add(questionKey);

      const type = quiz.type || "choice";
      const id = `r${quizRound}-q-${index}-${questionKey}`;

      if (type === "choice") {
        const answerIndex =
          typeof quiz.answer === "number"
            ? quiz.answer
            : quiz.options.findIndex((option) => option === quiz.answer);

        if (answerIndex < 0) {
          return null;
        }

        return {
          id,
          type,
          question: quiz.question,
          options: quiz.options,
          answerIndex,
          hint: quiz.hint || "",
          feedback: quiz.feedback || "Correct. Keep going."
        };
      }

      return {
        id,
        type,
        question: quiz.question,
        acceptedAnswers: quiz.acceptedAnswers || [quiz.answer].filter(Boolean),
        acceptedPrefixes: quiz.acceptedPrefixes || [],
        answerLabel: quiz.answerLabel || quiz.answer || quiz.acceptedAnswers?.[0] || "",
        placeholder: quiz.placeholder || "Type your answer",
        hint: quiz.hint || "",
        feedback: quiz.feedback || "Correct. Keep going."
      };
    })
    .filter(Boolean);
}

function createQuizSession(moduleId = "git-basics", round = 1) {
  const quizRound = clampQuizRound(round);
  const quizBank = getQuizBank(moduleId, quizRound);
  const order = shuffleArray(quizBank.map((quiz) => quiz.id));
  return {
    version: QUIZ_SESSION_VERSION,
    round: quizRound,
    activeIds: order.slice(0, QUIZ_VISIBLE_COUNT),
    queueIds: order.slice(QUIZ_VISIBLE_COUNT),
    correctIds: [],
    missedIds: [],
    attempts: {},
    optionOrderVersion: QUIZ_OPTION_ORDER_VERSION,
    optionOrders: Object.fromEntries(
      quizBank.filter((quiz) => quiz.type === "choice").map((quiz) => [quiz.id, shuffledOptionIndexes(quiz)])
    )
  };
}

function ensureQuizSession() {
  if (!state.quizSession) {
    state.quizSession = createQuizSession(state.activeModuleId);
  }

  const session = state.quizSession;
  session.version = QUIZ_SESSION_VERSION;
  session.round = clampQuizRound(session.round);

  const quizBank = getQuizBank(state.activeModuleId, session.round);
  const bankIds = quizBank.map((quiz) => quiz.id);
  const bankSet = new Set(bankIds);

  session.activeIds = sanitizeQuizIds(session.activeIds, bankSet);
  session.queueIds = sanitizeQuizIds(session.queueIds, bankSet);
  session.correctIds = sanitizeQuizIds(session.correctIds, bankSet);
  session.missedIds = sanitizeQuizIds(session.missedIds, bankSet);
  session.attempts = session.attempts && typeof session.attempts === "object" ? session.attempts : {};
  session.optionOrders = session.optionOrders && typeof session.optionOrders === "object" ? session.optionOrders : {};
  if (session.optionOrderVersion !== QUIZ_OPTION_ORDER_VERSION) {
    session.optionOrders = {};
    session.optionOrderVersion = QUIZ_OPTION_ORDER_VERSION;
  }

  Object.keys(session.attempts).forEach((id) => {
    if (!bankSet.has(id)) {
      delete session.attempts[id];
    }
  });

  Object.keys(session.optionOrders).forEach((id) => {
    if (!bankSet.has(id)) {
      delete session.optionOrders[id];
    }
  });

  quizBank.forEach((quiz) => {
    if (quiz.type === "choice") {
      getQuizOptionOrder(session, quiz);
    }
  });

  const tracked = new Set([...session.activeIds, ...session.queueIds, ...session.correctIds]);
  const untracked = bankIds.filter((id) => !tracked.has(id));
  session.queueIds.push(...shuffleArray(untracked));
  fillQuizSlots(session);
  return session;
}

function handleQuizAnswer(quizId, optionIndex) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  if (!quiz || quiz.type !== "choice" || Number.isNaN(optionIndex)) {
    return;
  }

  const existingAttempt = session.attempts[quizId] || {};
  if (existingAttempt.status === "exiting" || session.correctIds.includes(quizId)) {
    return;
  }

  const isCorrect = optionIndex === quiz.answerIndex;
  const wrongCount = isCorrect ? 0 : getQuizWrongCount(existingAttempt) + 1;
  session.attempts[quizId] = {
    selected: optionIndex,
    status: isCorrect ? "exiting" : "missed",
    wrongCount,
    showHint: !isCorrect && (Boolean(existingAttempt.showHint) || wrongCount >= 2),
    revealAnswer: !isCorrect && wrongCount >= 2
  };

  if (isCorrect) {
    addUnique(session.correctIds, quizId);
  } else {
    addUnique(session.missedIds, quizId);
  }

  saveState();
  render();

  if (!isCorrect) {
    announceStatus(`Incorrect. ${getQuizHintText(quiz)}`);
    return;
  }

  announceStatus(`Correct. ${quiz.feedback || "Keep going."}`);
  scheduleQuizCompletion(quizId);
}

function showQuizHint(quizId) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  if (!quiz) {
    return;
  }

  const attempt = session.attempts[quizId] || {};
  if (attempt.status !== "missed") {
    return;
  }

  const round = clampQuizRound(session.round);
  session.attempts[quizId] = {
    ...attempt,
    typed: quiz.type !== "choice" && round === 2 && quiz.type === "fill" ? "" : attempt.typed || "",
    showHint: true
  };
  announceStatus(`Hint shown. ${getQuizHintText(quiz)}`);
}

function handleQuizTextAnswer(quizId, value) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  const typed = String(value || "").trim();
  if (!quiz || quiz.type === "choice" || !typed) {
    return;
  }

  const existingAttempt = session.attempts[quizId] || {};
  if (existingAttempt.status === "exiting" || session.correctIds.includes(quizId)) {
    return;
  }

  const isCorrect = isQuizTextCorrect(quiz, typed);
  const wrongCount = isCorrect ? 0 : getQuizWrongCount(existingAttempt) + 1;
  session.attempts[quizId] = {
    typed,
    status: isCorrect ? "exiting" : "missed",
    wrongCount,
    showHint: !isCorrect && (Boolean(existingAttempt.showHint) || wrongCount >= 2),
    revealAnswer: !isCorrect && wrongCount >= 2
  };

  if (isCorrect) {
    addUnique(session.correctIds, quizId);
  } else {
    addUnique(session.missedIds, quizId);
  }

  saveState();
  render();

  if (isCorrect) {
    announceStatus(`Correct. ${quiz.feedback || "Keep going."}`);
    scheduleQuizCompletion(quizId);
    return;
  }

  announceStatus(`Incorrect. ${getQuizHintText(quiz)}`);
}

function isQuizTextCorrect(quiz, value) {
  const normalized = normalizeQuizText(value);
  if (!normalized) {
    return false;
  }

  if (Array.isArray(quiz.requiredTerms) && quiz.requiredTerms.length) {
    return quiz.requiredTerms.every((term) => normalized.includes(normalizeQuizText(term)));
  }

  return (quiz.acceptedAnswers || [])
    .filter(Boolean)
    .some((answer) => normalizeQuizText(answer) === normalized) ||
    (quiz.acceptedPrefixes || [])
      .filter(Boolean)
      .some((prefix) => {
        const normalizedPrefix = normalizeQuizText(prefix);
        return normalized.startsWith(`${normalizedPrefix} `) && normalized.length > normalizedPrefix.length + 1;
      });
}

function normalizeQuizText(value) {
  return normalizeCommand(value).replace(/\s+/g, " ").trim();
}

function scheduleQuizCompletion(quizId) {
  const schedule =
    typeof window !== "undefined" && typeof window.setTimeout === "function"
      ? window.setTimeout.bind(window)
      : typeof setTimeout === "function"
        ? setTimeout
        : null;

  if (!schedule) {
    completeQuizQuestion(quizId);
    saveState();
    render();
    return;
  }

  schedule(() => {
    const currentAttempt = state.quizSession?.attempts?.[quizId];
    if (currentAttempt?.status !== "exiting") {
      return;
    }
    completeQuizQuestion(quizId);
    saveState();
    render();
  }, QUIZ_EXIT_DELAY_MS);
}

function completeQuizQuestion(quizId) {
  const session = ensureQuizSession();
  session.activeIds = session.activeIds.filter((id) => id !== quizId);
  delete session.attempts[quizId];
  fillQuizSlots(session);
}

function fillQuizSlots(session) {
  while (session.activeIds.length < QUIZ_VISIBLE_COUNT && session.queueIds.length) {
    const nextId = session.queueIds.shift();
    if (!session.correctIds.includes(nextId) && !session.activeIds.includes(nextId)) {
      session.activeIds.push(nextId);
    }
  }
}

function sanitizeQuizIds(ids, bankSet) {
  const seen = new Set();
  return (Array.isArray(ids) ? ids : []).filter((id) => {
    if (!bankSet.has(id) || seen.has(id)) {
      return false;
    }
    seen.add(id);
    return true;
  });
}

function clampQuizRound(round) {
  const numericRound = Number(round);
  if (!Number.isInteger(numericRound)) {
    return 1;
  }
  return Math.min(QUIZ_ROUND_COUNT, Math.max(1, numericRound));
}

function getQuizRoundName(round) {
  const labels = {
    1: "Round 1",
    2: "Round 2: command fill-ins",
    3: "Round 3: scenario mode"
  };
  return labels[clampQuizRound(round)] || labels[1];
}

function getQuizOptionOrder(session, quiz) {
  if (!Array.isArray(quiz.options) || !quiz.options.length) {
    return [];
  }

  const order = session.optionOrders?.[quiz.id];
  const valid =
    Array.isArray(order) &&
    order.length === quiz.options.length &&
    new Set(order).size === quiz.options.length &&
    order.every((index) => Number.isInteger(index) && index >= 0 && index < quiz.options.length);

  if (valid) {
    return order;
  }

  session.optionOrders = session.optionOrders && typeof session.optionOrders === "object" ? session.optionOrders : {};
  session.optionOrders[quiz.id] = shuffledOptionIndexes(quiz);
  return session.optionOrders[quiz.id];
}

function shuffledOptionIndexes(quiz) {
  if (!Array.isArray(quiz.options) || !quiz.options.length) {
    return [];
  }

  const order = shuffleArray(quiz.options.map((_, index) => index));
  if (order.length > 1 && order[0] === quiz.answerIndex) {
    const swapIndex = 1 + Math.floor(Math.random() * (order.length - 1));
    [order[0], order[swapIndex]] = [order[swapIndex], order[0]];
  }
  return order;
}

function addUnique(items, item) {
  if (!items.includes(item)) {
    items.push(item);
  }
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function clampIndex(value, length) {
  const last = Math.max(0, length - 1);
  return Math.max(0, Math.min(last, Number.isFinite(value) ? value : 0));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getActiveModule() {
  return modules.find((module) => module.id === state.activeModuleId) || modules[0];
}

function getLessonsForModule(moduleId) {
  return moduleId === "project-work" ? projectLessons : lessons;
}

function getActiveLessons() {
  return getLessonsForModule(state?.activeModuleId || "git-basics");
}

function getLessonCommandGroupsForModule(moduleId) {
  return moduleId === "project-work" ? projectLessonCommandGroups : lessonCommandGroups;
}

function getActiveLessonCommandGroups() {
  return getLessonCommandGroupsForModule(state?.activeModuleId || "git-basics");
}

function getProcessStepsForModule(moduleId) {
  return moduleId === "project-work" ? projectProcessSteps : commandProcessSteps;
}

function getModuleFolder(module = getActiveModule()) {
  return module.folder || oracleLab.folder;
}

function getModuleFolderDisplay(module = getActiveModule()) {
  return module.folderDisplay || oracleLab.folderDisplay;
}

function getActiveRepoPaths() {
  const active = getActiveModule();
  return active.repoPaths || [oracleLab.firstFile, oracleLab.featureFile];
}

function getActiveRepoContainerPaths() {
  const active = getActiveModule();
  return active.repoContainerPaths || ["ccs/sql/meters"];
}

function isActiveLabPath(path) {
  return getActiveRepoPaths().includes(path);
}

function isPracticeMode() {
  return Boolean(state?.inLesson && state.viewMode === "practice");
}

function isCodexMode() {
  return Boolean(state?.inLesson && state.viewMode === "codex");
}

function isCapstoneMode() {
  return Boolean(state?.inLesson && state.viewMode === "capstone");
}

function isVSCodeMode() {
  return Boolean(state?.inLesson && state.viewMode === "vscode");
}

function isSqlMode() {
  return Boolean(state?.inLesson && state.viewMode === "sql");
}

function getPrompt() {
  return state.cwd ? `PS ${state.cwd}>` : PS_PROMPT;
}

function getSqlPrompt() {
  return "SQL>";
}

function getCurrentProcessArea() {
  const active = getActiveModule();
  if (!active || state.guidedStep >= active.commands.length) {
    return "history";
  }
  const steps = active.id === "project-work" ? projectProcessSteps : commandProcessSteps;
  return (steps[state.guidedStep] || steps[0]).area;
}

function normalizeCommand(command) {
  return tokenize(String(command).trim()).join(" ").replace(/\s+/g, " ").toLowerCase();
}

function guidedCommandMatchesExpected(command, expected) {
  if (!expected?.cmd) {
    return false;
  }

  const normalized = normalizeCommand(command);
  const expectedNormalized = normalizeCommand(expected.cmd);
  if (normalized === expectedNormalized || commandMatches(normalized, expectedNormalized)) {
    return true;
  }

  const expectedText = String(expected.cmd || "").trim();
  const switchCreate = expectedText.match(/^git\s+switch\s+-c\s+(.+)$/i);
  if (switchCreate) {
    return normalized === normalizeCommand(`git checkout -b ${switchCreate[1]}`);
  }

  const switchBranch = expectedText.match(/^git\s+switch\s+(.+)$/i);
  if (switchBranch) {
    return normalized === normalizeCommand(`git checkout ${switchBranch[1]}`);
  }

  if (expectedNormalized.startsWith("git add ") && normalized === "git add .") {
    return true;
  }

  if (expectedNormalized.startsWith("git commit -m ") && normalized.startsWith("git commit -m ")) {
    return true;
  }

  if (expectedNormalized.startsWith("git push ") && normalized.startsWith("git push")) {
    return true;
  }

  if (expectedNormalized === "git pull" && normalized.startsWith("git pull")) {
    return true;
  }

    if (expectedNormalized === "git remote -v" && normalized.startsWith("git remote")) {
      return true;
    }

    if (expectedNormalized.startsWith("git config ") && normalized.startsWith("git config ")) {
      return expectedNormalized.includes("user.name")
        ? normalized.includes("user.name")
        : expectedNormalized.includes("user.email")
          ? normalized.includes("user.email")
          : normalized === expectedNormalized;
    }

    if (expectedNormalized.startsWith("git clone ") && normalized.startsWith("git clone ")) {
      return true;
    }

  return false;
}

function isGuidedUtilityCommand(command, expected = null) {
  const normalized = normalizeCommand(command);
  if (expected && guidedCommandMatchesExpected(command, expected)) {
    return false;
  }

  return [
    "help",
    "git help",
    "git status",
    "git branch",
    "git log",
    "git log --oneline",
    "git diff",
    "git diff --stat",
    "git diff --staged"
  ].includes(normalized);
}

function hasHeadCommit() {
  const id = headId();
  return Boolean(id && state.commits.some((commit) => commit.id === id));
}

function currentHeadFiles() {
  return hasHeadCommit() ? getCommit(headId()).files : {};
}

function currentHeadLabel() {
  return hasHeadCommit() ? headId() : "no commits";
}

function parseOutFile(command) {
  const match = String(command).match(/^"([^"]*)"\s*\|\s*Out-File\s+(.+)$/i);
  if (!match) {
    return null;
  }

  return {
    content: match[1],
    file: match[2].trim()
  };
}

function toTitleFolder(folder) {
  return String(folder)
    .split("-")
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function branchLabelsForCommit(commitId) {
  const local = Object.entries(state.branches)
    .filter(([, id]) => id === commitId)
    .map(([name]) => (name === state.currentBranch ? `HEAD -> ${name}` : name));
  const remote = Object.entries(state.remoteBranches)
    .filter(([, id]) => id === commitId)
    .map(([name]) => name);
  return [...local, ...remote];
}

function appendTerminal(type, text) {
  state.terminal.push({ type, text });
  if (state.terminal.length > 80) {
    state.terminal = state.terminal.slice(-80);
  }
}

function announceStatus(text) {
  const region = document.getElementById("appAnnouncement");
  if (!region) {
    return;
  }

  region.textContent = "";
  const message = String(text || "").trim();
  if (!message) {
    return;
  }

  if (typeof window !== "undefined" && typeof window.setTimeout === "function") {
    window.setTimeout(() => {
      region.textContent = message;
    }, 0);
    return;
  }

  region.textContent = message;
}

function headId() {
  return state.branches[state.currentBranch];
}

function getCommit(id) {
  const commit = state.commits.find((item) => item.id === id);
  if (!commit) {
    throw new Error(`Commit not found: ${id}`);
  }
  return commit;
}

function nextLane() {
  return Math.max(0, ...Object.values(state.branchLanes)) + 1;
}

function isValidBranchName(name) {
  return /^[A-Za-z0-9._/-]+$/.test(name);
}

function firstLines(content, count) {
  return String(content || "")
    .split(/\r?\n/)
    .slice(0, count)
    .join("\n");
}

function truncate(value, length) {
  const text = String(value);
  return text.length > length ? `${text.slice(0, length - 3)}...` : text;
}

function tokenize(input) {
  const matches = String(input).match(/"([^"]*)"|'([^']*)'|[^\s]+/g) || [];
  return matches.map((token) => {
    if (
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith("'") && token.endsWith("'"))
    ) {
      return token.slice(1, -1);
    }
    return token;
  });
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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

function titleAttribute(value) {
  const text = String(value ?? "").trim();
  if (!text) {
    return "";
  }
  return ` title="${escapeAttribute(text).replaceAll("\r\n", "&#10;").replaceAll("\n", "&#10;")}"`;
}

function escapeSvg(value) {
  return escapeHtml(value);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Unable to save lab state", error);
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.schemaVersion === 6 && parsed.commits && parsed.branches) {
        parsed.taskFlags = parsed.taskFlags || createTaskFlags();
        parsed.cwd = parsed.cwd || PS_ROOT;
        parsed.folders = parsed.folders || [];
        parsed.initialized = Boolean(parsed.initialized);
        parsed.remoteUrl = parsed.remoteUrl || ADO_REPO_URL;
        parsed.activeModuleId = parsed.activeModuleId || "git-basics";
        parsed.guidedStep = parsed.guidedStep || 0;
        parsed.inLesson = Boolean(parsed.inLesson);
        parsed.viewMode = ["practice", "codex", "capstone", "vscode", "sql"].includes(parsed.viewMode) ? parsed.viewMode : "guided";
        parsed.codexSection = clampIndex(parsed.codexSection, codexLab.sections.length);
        parsed.codexCli = {
          ...createCodexCliState(),
          ...(parsed.codexCli && typeof parsed.codexCli === "object" ? parsed.codexCli : {})
        };
        parsed.codexCli.promptRuns = Array.isArray(parsed.codexCli.promptRuns) ? parsed.codexCli.promptRuns : [];
        if (
          parsed.viewMode === "codex" &&
          (!parsed.cwd ||
            parsed.cwd === PS_ROOT ||
            normalizePathForCompare(parsed.cwd) === normalizePathForCompare(CODEX_OLD_DEFAULT_CWD))
        ) {
          parsed.cwd = CODEX_DEFAULT_CWD;
        }
        parsed.vscodeSection = clampIndex(parsed.vscodeSection, vscodeLab.sections.length);
        parsed.vscodeCli = {
          ...createVSCodeCliState(),
          ...(parsed.vscodeCli && typeof parsed.vscodeCli === "object" ? parsed.vscodeCli : {})
        };
        parsed.vscodeCli.installedExtensions = Array.isArray(parsed.vscodeCli.installedExtensions)
          ? parsed.vscodeCli.installedExtensions
          : [];
        parsed.vscodeCli.missionLog = Array.isArray(parsed.vscodeCli.missionLog) ? parsed.vscodeCli.missionLog : [];
        parsed.sqlSection = clampIndex(parsed.sqlSection, oracleSqlLab.sections.length);
        parsed.sqlWorksheet = {
          ...createSqlWorksheetState(),
          ...(parsed.sqlWorksheet && typeof parsed.sqlWorksheet === "object" ? parsed.sqlWorksheet : {})
        };
        parsed.sqlWorksheet.completedSections = Array.isArray(parsed.sqlWorksheet.completedSections)
          ? parsed.sqlWorksheet.completedSections.filter((id) => oracleSqlLab.sections.some((section) => section.id === id))
          : [];
        parsed.sqlWorksheet.queryLog = Array.isArray(parsed.sqlWorksheet.queryLog) ? parsed.sqlWorksheet.queryLog : [];
        parsed.repoExplorerOpen = Boolean(parsed.repoExplorerOpen);
        parsed.repoExplorerTouched = Boolean(parsed.repoExplorerTouched);
        if (parsed.viewMode === "guided" && !parsed.repoExplorerTouched) {
          parsed.repoExplorerOpen = true;
        }
        parsed.explorerCollapsedFolders = Array.isArray(parsed.explorerCollapsedFolders) ? parsed.explorerCollapsedFolders : [];
        parsed.explorerExpandedFolders = Array.isArray(parsed.explorerExpandedFolders) ? parsed.explorerExpandedFolders : [];
        parsed.explorerExpandedFiles = Array.isArray(parsed.explorerExpandedFiles) ? parsed.explorerExpandedFiles : [];
        parsed.flowCollapsedFiles = Array.isArray(parsed.flowCollapsedFiles) ? parsed.flowCollapsedFiles : [];
        parsed.mergeEvents = Array.isArray(parsed.mergeEvents) ? parsed.mergeEvents : [];
        parsed.selectedCommitId =
          parsed.selectedCommitId && parsed.commits.some((commit) => commit.id === parsed.selectedCommitId)
            ? parsed.selectedCommitId
            : parsed.branches?.[parsed.currentBranch] || parsed.commits?.[0]?.id || null;
        parsed.selectedFilePath = typeof parsed.selectedFilePath === "string" ? parsed.selectedFilePath : null;
        parsed.commandReplay = Array.isArray(parsed.commandReplay) ? parsed.commandReplay : [];
        parsed.practiceMission = getPracticeMissionList().some((mission) => mission.id === parsed.practiceMission)
          ? parsed.practiceMission
          : "orientation-path";
        parsed.practiceDifficulty = normalizePracticeDifficulty(parsed.practiceDifficulty);
        parsed.learnerProgress = normalizeLearnerProgress(parsed.learnerProgress);
        parsed.readyChecks =
          parsed.readyChecks && typeof parsed.readyChecks === "object" && !Array.isArray(parsed.readyChecks)
            ? parsed.readyChecks
            : {};
        parsed.challengeMode = normalizeChallengeModeObject(parsed.challengeMode);
        parsed.expandedLessonIndex = Number.isInteger(parsed.expandedLessonIndex) ? parsed.expandedLessonIndex : null;
        if (parsed.expandedLessonIndex < -1 || parsed.expandedLessonIndex >= getLessonsForModule(parsed.activeModuleId).length) {
          parsed.expandedLessonIndex = null;
        }
        parsed.quizSession = parsed.quizSession || createQuizSession(parsed.activeModuleId);
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Unable to load lab state", error);
  }
  return createInitialState();
}
