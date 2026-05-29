# Human-AI Design System Frontend

This is the React frontend for Human-AI Design System. It presents reusable interface primitives for AI products where users need to understand evidence, confidence, feedback, model behavior, and human review.

## Run It

```bash
bun install
bun dev
```

The app starts at:

```text
http://localhost:5173
```

If that port is busy, Vite will choose the next available local port.

## Deployment

The frontend is deployed to GitHub Pages from the repository root workflow:

```text
../.github/workflows/deploy-pages.yml
```

The workflow builds this app with a GitHub Pages base path:

```text
/human-ai-design-system/
```

The built files are published to the repository's `gh-pages` branch.

## Current Sections

```text
Hero                 AI review workspace preview
Get started          Task-based paths and local run commands
Product surfaces     Component foundation, model review, and TrialSense
System overview      Implementation notes and reuse rationale
Component library    Catalog, states, reuse paths, and live examples
States and motion    Review-state examples with pauseable motion
Scenario library     Example data across review workflows
Model Behavior Studio Response comparison and eval report workflow
TrialSense           Clinical-trial diligence workflow
System intent        Design principles around trust, confidence, and review
Component specs      Component jobs, states, and reuse paths
Visual inventory     Component state examples
Resources            Links to project docs in GitHub
```

## Source Structure

```text
src/App.tsx                 Page composition
src/components/             Reusable UI primitives
src/sections/               Full-page content sections
src/data/                   Static design-system content and examples
src/App.css                 App-specific layout and component styles
src/index.css               Global tokens, typography, and reset styles
```

## Included Components

```text
Source citation cards
Confidence meter
Human feedback controls
Agent activity timeline
Evaluation scorecard
Prompt history panel
Response comparison workspace
Human review banner
```

## Design Direction

The interface is intentionally not a generic chatbot. It is built around AI product decisions: what evidence was used, which claims are inferred, how confidence is calibrated, and when a human should intervene.

The sample content uses clinical-trial diligence scenarios because those examples connect the interface patterns to real operational judgment.

The page uses a persistent section rail, task-based get-started cards, a practical component catalog, and pauseable state-motion examples so the prototype behaves more like a working design-system resource than a single long case-study page.

## Verification

```bash
bun run lint
bun run test
bun run build
```

## Tech Stack

```text
React
TypeScript
Vite
Bun
lucide-react
Plain CSS with CSS variables
```
