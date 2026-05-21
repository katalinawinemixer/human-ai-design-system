# Project Roadmap

This roadmap keeps the portfolio system organized as it grows. The current repo is the shared foundation; follow-on projects should reuse its patterns instead of becoming scattered one-off prototypes.

## Phase 1: Human-AI Design System

Status: in progress

Goal: build and document reusable AI-native interface primitives.

Current scope:

- Source citation cards
- Confidence meter
- Human feedback controls
- Agent activity timeline
- Evaluation scorecard
- Prompt history panel
- Response comparison workspace
- Human review banner

Next improvements:

- Add screenshots and a short demo GIF.
- Add a visual inventory page for every component state.
- Add sample scenarios beyond clinical-trial diligence.
- Add a small data layer so examples are easier to swap.

## Phase 2: Model Behavior Studio

Status: planned

Goal: create a product prototype for comparing, scoring, and tuning AI response behavior.

Planned building blocks from this repo:

- Prompt history panel
- Response comparison workspace
- Evaluation scorecard
- Human feedback controls

Potential features:

- Prompt playground
- Behavior profiles
- Side-by-side response comparison
- Scoring rubric for grounding, calibration, usefulness, and tone
- Exportable eval report

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
