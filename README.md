# Human-AI Design System

Human-AI Design System is a portfolio project for AI-native product interfaces: source-grounded answers, uncertainty states, human feedback, model evaluation, prompt history, response comparison, agent activity, and human review.

It is the first project in a designer portfolio sequence. The goal is to show a live coded prototype, strong visual and interaction craft, model-behavior judgment, and a reusable foundation for future AI product work.

## Live Demo

```text
https://katalinawinemixer.github.io/human-ai-design-system/
```

The demo is deployed from `frontend/` through GitHub Actions and GitHub Pages.

## Project Structure

```text
frontend/   React, TypeScript, and Vite design-system prototype
backend/    Reserved for future APIs, eval data, and model-behavior services
docs/       Case-study notes and portfolio documentation
.github/    CI and GitHub Pages deployment workflows
```

## What It Shows

- A polished AI product surface built in code.
- Interface primitives for evidence, uncertainty, feedback, evals, and review.
- Component specifications with state models and reuse paths.
- A reusable system that can support multiple AI product concepts.
- Clinical-trial diligence examples that connect the design work to real operator judgment.

## Portfolio Sequence

This repo is the foundation for two planned follow-on projects:

- **Model Behavior Studio**: a workspace for comparing, scoring, and tuning AI response behavior.
- **TrialSense**: a clinical-trial diligence workbench for source-grounded review of trial design, feasibility, and operational risk.

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

The current repo contains a working frontend prototype, project documentation, CI, and a GitHub Pages deployment workflow that publishes the built app to the `gh-pages` branch. There is no backend service yet; the `backend/` folder is intentionally reserved so the repository stays organized as the project grows.

## Documentation

- `docs/case-study.md`: portfolio case-study draft
- `docs/component-specs.md`: component jobs, states, and reuse paths
- `docs/roadmap.md`: project sequence, future phases, and repository organization rules
