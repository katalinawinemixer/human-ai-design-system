# Project Roadmap

This roadmap keeps the prototype organized as it grows. The current repo is the shared foundation; follow-on work should reuse its patterns instead of becoming scattered one-off screens.

## Phase 1: Human-AI Design System

Status: complete

Goal: build and document reusable AI interface primitives.

Completed scope:

- Source citation cards
- Confidence meter
- Human feedback controls
- Agent activity timeline
- Evaluation scorecard
- Prompt history panel
- Response comparison workspace
- Human review banner
- Component specification section with jobs, states, and reuse paths
- Visual inventory section for component state examples
- README screenshots from the live prototype
- Scenario library with clinical diligence, model-behavior review, and research synthesis examples
- Interactive hero scenario switcher
- Component API reference
- Usage notes for each primitive
- Short README demo GIF
- Reusable scenario fixture structure for follow-on projects
- Accessibility notes for keyboard behavior, labels, contrast, and review states
- Mobile README screenshots

## Phase 2: Model Behavior Studio

Status: complete

Goal: create a product prototype for comparing, scoring, and tuning AI response behavior.

Building blocks from this repo:

- Prompt history panel
- Response comparison workspace
- Evaluation scorecard
- Human feedback controls

Completed so far:

- First Model Behavior Studio section in the live frontend
- Behavior profile switcher
- Profile filters for baseline, review, and blocked states
- Editable prompt playground surface with save status
- Three-way response comparison
- Selectable response winners
- Scoring rubric for grounding, calibration, usefulness, and tone
- Prompt history tied to the active profile, including saved prompt drafts
- Export-style eval report panel with source set, run count, prompt state, selected response, decision, risk, next eval, and export scope
- Generated export preview for the active behavior profile
- Downloadable `.txt` export artifact
- Desktop and mobile README screenshots for the studio surface
- Backend decision: no backend required for this static prototype

Future polish:

- Refresh screenshots when the studio surface changes.
- Add persistence only if saved eval history becomes important enough to justify backend scope.

## Phase 3: TrialSense

Status: complete

Goal: create a clinical-trial diligence workbench grounded in source evidence and operational risk.

Building blocks from this repo:

- Source citation cards
- Confidence meter
- Agent activity timeline
- Human review banner

Completed so far:

- Trial text intake
- Risk flags
- Missing-context questions
- Feasibility and eligibility review
- Investor-style diligence summary
- Evidence trail with source citations
- Human review gate for unsupported feasibility claims
- Fuller trial source packet view
- Downloadable `.txt` diligence summary output
- Mobile README screenshot
- Backend decision: no backend required for this static prototype

Future polish:

- Refresh screenshots when TrialSense changes.
- Add persistence only if saved review history becomes important enough to justify backend scope.

## Future Backlog

Future work after the three completed surfaces is tracked in `docs/future-backlog.md` so the public GitHub Issues count does not make optional polish look like defects.

Use GitHub Issues only for active bugs, active implementation tasks, or scoped work that is ready to be picked up immediately.

## Repository Rules

- Keep root-level files minimal and high-level.
- Keep runnable app code inside `frontend/`.
- Keep future API and data-service work inside `backend/`.
- Keep case-study, roadmap, and implementation notes inside `docs/`.
- Add new UI primitives under `frontend/src/components/`.
- Add page-level sections under `frontend/src/sections/`.
- Add static content and examples under `frontend/src/data/`.
- Keep component rationale and state models in `docs/component-specs.md`.
