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

## Current Sections

```text
Hero                 AI review workspace preview
Portfolio case study What the system proves and how it supports future projects
System intent        Design principles around trust, confidence, and evaluation
Component library    Reusable AI-native interface patterns
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

## Verification

```bash
bun run lint
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
