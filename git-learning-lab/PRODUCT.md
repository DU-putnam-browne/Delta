# Product

## Register

product

## Users
Primary users are Delta Utilities analyst-side technical learners who need practical, work-adjacent enablement rather than generic classroom training. The default learner is a beginner analyst or adjacent contributor working in data and analytics, usually cautious about breaking something, short on time, and learning in order to become more effective in real delivery work. Typical roles include data analysts, data scientists, data engineers, data architects, SQL-focused contractors, and other analytics contributors who operate inside Microsoft and Oracle-heavy workflows.

Users are not exploring for fun. They are trying to become competent enough to work safely and independently in a Delta environment. They need guided repetition, real-world command and workflow accuracy, clear recovery paths, and enough context to understand why a step matters without being buried in theory.

## Product Purpose
Analyst Engineering Enablement Lab is a scalable static learning environment for teaching practical engineering-adjacent skills used by Delta Utilities analytics teams. It should help learners build confidence through realistic, safe practice across multiple paths such as Git fundamentals, tool setup and usage, and Oracle SQL.

The product exists to shorten the path from uncertainty to useful competence. It should let a learner open the environment, understand where to start, complete a guided path, and leave feeling able to perform the same class of work in a real repo or toolchain with less supervision.

Success means:
- learners understand the workflow, not just isolated commands
- learners can explain what they are doing and why
- learners know the next real-world step after the simulation
- module paths can be added over time without turning the environment into a cluttered course catalog

## Brand Personality
- practical
- grounded
- enabling

The tone should feel like a competent internal operator showing another teammate how to work safely and effectively. It should be clear, direct, calm, and respectful of the learner's intelligence. It should avoid classroom fluff, over-polished marketing language, and fake enthusiasm.

The product name should be treated as `Analyst Engineering Enablement Lab`, with Git Learning Lab understood as an older, narrower frame that the environment is growing beyond.

## Anti-references
- generic LMS dashboards that feel like compliance training
- flashy bootcamp marketing sites that over-promise mastery
- terminal cosplay interfaces that look technical but do not teach real habits
- dense documentation portals that expect learners to read everything before acting
- playful or patronizing onboarding that undercuts the seriousness of the work

## Design Principles
- Teach the next real move. Every screen should make the next action obvious and keep the learner moving toward practical competence.
- Keep the environment safe but honest. Simulated actions are fine, but the product must clearly distinguish between simulator behavior and real-world commands, constraints, and outcomes.
- Optimize for time to confidence. Each module should have a clear aha moment tied to a practical capability, not a vague sense of exposure.
- Support the primary path, do not compete with it. Secondary references, quizzes, glossaries, and support modules should help when needed and stay out of the way when not needed.
- Scale by module, not by clutter. New learning paths should slot into a clear structure with their own outcomes and aha moments without bloating the first-run experience.

## Accessibility & Inclusion
The interface should be usable by beginners under mild stress, distraction, or uncertainty. Clarity, strong hierarchy, and low-friction wayfinding matter more than visual cleverness. Instructions should use plain language, keep jargon contextual, and avoid assuming prior Git, SQL, or tooling fluency.

The environment should support keyboard-first use, visible focus, understandable status feedback, and responsive layouts that preserve task clarity on smaller screens. Reduced cognitive load is a first-order accessibility goal for this product because many users will be learning unfamiliar technical concepts while also trying not to make mistakes.

## Module Aha Moments
The product should treat aha moments as module-level outcomes, not one global product moment.

- Git path:
  The learner understands Git fundamentals well enough to explain and complete the local workflow of making changes, committing to the local repository, pushing to their branch, and creating a pull request to merge into `main`.

- Tool path (Codex and VS Code):
  The learner has installed the tools, completed initial setup, and feels comfortable using them in day-to-day Delta work without needing step-by-step handholding for every session.

- Oracle SQL path:
  The learner can work productively with Oracle-flavored SQL at their level, whether they are new to SQL fundamentals or already know SQL but need to understand Oracle-specific differences and repo-shaped query work.

## Audience Defaults And Extension Strategy
The default audience should remain the beginner analyst persona unless a module explicitly targets a more advanced role. Role-specific variants may be added later, but the product should not depend on role branching to be useful. The baseline experience should serve the broad Delta data and analytics audience first, then layer specialization only where it materially improves learning outcomes.
