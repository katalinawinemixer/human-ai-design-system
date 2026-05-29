# Human-AI Design System

A React prototype of reusable UI patterns for AI products: citations, confidence, feedback, evals, prompt history, response comparison, agent activity, and human review.

The repo includes a component gallery, a model-behavior review workspace, and a clinical-trial diligence workbench that reuse the same interaction patterns in different contexts.

## Live Demo

```text
https://katalinawinemixer.github.io/human-ai-design-system/
```

The demo is deployed from `frontend/` through GitHub Actions and GitHub Pages.

## What This Demonstrates

- Evidence states that show where an AI answer came from.
- Confidence and uncertainty patterns that make risk visible.
- Human feedback controls for correcting, approving, or escalating an output.
- Prompt history and response comparison views for reviewing model behavior.
- Eval scorecards and downloadable review output.
- Agent activity timelines that show progress without hiding work.
- Clinical-trial diligence screens grounded in feasibility, eligibility, source gaps, and operational risk.

## What's Included

- `Human-AI Design System`: reusable components for trust, review, evidence, and evaluation states.
- `Model Behavior Studio`: an example workspace for comparing, scoring, and tuning candidate AI responses.
- `TrialSense`: an example clinical-trial diligence workbench for reviewing trial design, feasibility, and source support.
- A scenario library showing the same patterns across clinical diligence, model-behavior review, and research synthesis.
- Component specs, usage notes, accessibility notes, and current implementation docs.
- CI and GitHub Pages deployment so the project can be reviewed as a working frontend prototype.

## Screenshots

### Demo

![Short demo of the Human-AI Design System](docs/assets/demo/human-ai-design-system-demo.gif)

### Main Interface

![Human-AI Design System hero interface](docs/assets/screenshots/hero.png)

### Component Specs

![Component specs with jobs, states, and reuse paths](docs/assets/screenshots/system-specs.png)

### Scenario Library

![Scenario library across clinical diligence, model behavior, and research synthesis](docs/assets/screenshots/scenario-library.png)

### Model Behavior Studio

![Model Behavior Studio product surface](docs/assets/screenshots/model-behavior-studio.png)

### TrialSense

![TrialSense clinical diligence workbench](docs/assets/screenshots/trialsense.png)

### Visual Inventory

![Visual inventory of component states](docs/assets/screenshots/visual-inventory.png)

### Mobile Views

![Mobile view of TrialSense](docs/assets/screenshots/mobile-trialsense.png)

![Mobile view of the Human-AI Design System hero](docs/assets/screenshots/mobile-hero.png)

![Mobile view of the scenario library](docs/assets/screenshots/mobile-scenario-library.png)

![Mobile view of the Model Behavior Studio](docs/assets/screenshots/mobile-model-behavior-studio.png)

## Project Structure

```text
frontend/   React, TypeScript, and Vite frontend prototype
backend/    Reserved for future APIs, eval data, and model-behavior services
docs/       Case-study notes and implementation documentation
.github/    CI and GitHub Pages deployment workflows
```

## Run Locally

Start the frontend app:

```bash
cd frontend
bun install
bun dev
```

The frontend usually runs at:

```text
http://localhost:5173
```

If that port is busy, Vite will choose the next available local port.

## Verification

From the frontend folder:

```bash
cd frontend
bun run lint
bun run test
bun run build
```

GitHub Actions also runs frontend lint and build checks on pushes and pull requests.

## Tech Stack

- React
- TypeScript
- Vite
- Bun
- lucide-react
- Plain CSS with CSS variables

## Status

This is a working frontend prototype with static fixtures and local UI state. There is no backend service yet; `backend/` is reserved for future APIs, eval data, and model-behavior services.

Optional future work is tracked in `docs/future-backlog.md` so the public issue tracker stays reserved for active bugs or scoped implementation work.

## Documentation

- `docs/accessibility-notes.md`: keyboard, label, contrast, and review-state guidance
- `docs/case-study.md`: case-study draft
- `docs/component-api.md`: current component props and usage surface
- `docs/component-specs.md`: component jobs, states, and reuse paths
- `docs/future-backlog.md`: optional future polish ideas kept out of the public issue count
- `docs/model-behavior-studio.md`: Model Behavior Studio plan and current implementation
- `docs/roadmap.md`: project sequence and repository organization rules
- `docs/scenario-fixtures.md`: reusable scenario data structure
- `docs/trialsense.md`: TrialSense plan and current implementation
- `docs/usage-notes.md`: when to use each AI-interface primitive
