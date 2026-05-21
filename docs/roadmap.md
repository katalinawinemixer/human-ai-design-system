# Project Roadmap

This roadmap keeps the portfolio system organized as it grows. The current repo is the shared foundation; follow-on projects should reuse its patterns instead of becoming scattered one-off prototypes.

## Phase 1: Human-AI Design System

Status: complete

Goal: build and document reusable AI-native interface primitives.

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
- README showcase with screenshots from the live prototype
- Scenario library with clinical diligence, model-behavior review, and research synthesis examples
- Interactive hero scenario switcher
- Component API reference
- Usage notes for each primitive
- Short README demo GIF
- Reusable scenario fixture structure for follow-on projects
- Accessibility notes for keyboard behavior, labels, contrast, and review states
- Mobile README screenshots

## Phase 2: Model Behavior Studio

Status: in progress

Goal: create a product prototype for comparing, scoring, and tuning AI response behavior.

Building blocks from this repo:

- Prompt history panel
- Response comparison workspace
- Evaluation scorecard
- Human feedback controls

Completed so far:

- First Model Behavior Studio section in the live frontend
- Behavior profile switcher
- Prompt playground surface
- Side-by-side response comparison
- Scoring rubric for grounding, calibration, usefulness, and tone
- Prompt history tied to the active profile
- Lightweight eval report panel

Remaining Phase 2 work:

- Make the prompt playground editable with local state.
- Add richer profile metadata and filtering.
- Expand comparison to support more candidate responses.
- Create a fuller exportable eval report view.
- Decide whether saved evals or profile persistence need a backend.

## Phase 3: TrialSense

Status: planned

Goal: create a clinical-trial diligence workbench grounded in source evidence and operational risk.

Planned building blocks from this repo:

- Source citation cards
- Confidence meter
- Agent activity timeline
- Human review banner

Potential features:

- Trial text intake
- Risk flags
- Missing-context questions
- Feasibility and eligibility review
- Investor-style diligence summary

## Repository Rules

- Keep root-level files minimal and high-level.
- Keep runnable app code inside `frontend/`.
- Keep future API and data-service work inside `backend/`.
- Keep case-study, roadmap, and portfolio notes inside `docs/`.
- Add new UI primitives under `frontend/src/components/`.
- Add page-level sections under `frontend/src/sections/`.
- Add static content and examples under `frontend/src/data/`.
- Keep component rationale and state models in `docs/component-specs.md`.
