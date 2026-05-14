# Handoffs

Use this folder for meaningful project handoffs that explain what changed, why it changed, what to inspect next, and which decisions are still open.

## Naming

Use this pattern:

```text
YYYY-MM-DD-recipient-topic-handoff.md
```

Rules:

- Use the handoff date in `YYYY-MM-DD` format.
- Use lowercase words separated by hyphens.
- Include the recipient or audience when known.
- Include a short topic that explains the workstream.
- End with `handoff.md`.
- Avoid vague names such as `notes.md`, `handoff-final.md`, or `ROBERT_HANDOFF.md`.

Examples:

```text
2026-05-13-robert-lab-module-flow-handoff.md
2026-05-13-team-ui-hardening-handoff.md
2026-05-13-sql-module-review-handoff.md
```

## What to Include

- BLUF
- recent commit context
- critical functional changes
- critical UX/content changes
- files worth reviewing
- validation commands
- risks, assumptions, and open questions

Keep handoffs practical. They should help another builder pick up the work without rereading the whole chat history.
