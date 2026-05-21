# Human-AI Design System

A reusable design system for AI-native product interfaces: source-grounded answers, uncertainty states, human feedback, model evaluation, prompt history, and agent activity.

This project is the first piece in a small portfolio ecosystem aimed at AI product design roles. The goal is to make model behavior visible enough that a user can decide when to trust, challenge, compare, or escalate an AI output.

It is intentionally coded as a live React prototype rather than a static mockup. The system is meant to demonstrate product taste, design-system thinking, and comfort designing around model behavior, evaluation, feedback, and uncertainty.

## Why this exists

Many AI demos make the model feel magical, but hide the actual product decisions: what evidence was used, which claims are inferred, how confidence is calibrated, and how humans can improve the system. This design system turns those decisions into reusable interface primitives.

## Portfolio thesis

The project is designed to support a Thinking Machines-style designer portfolio: polished AI interface craft, coded prototypes, model-behavior judgment, and a clear domain point of view.

What this prototype is meant to prove:

- I can design and ship a working AI product surface in code.
- I can turn model behavior concerns into visible interface states.
- I can think in reusable systems, not one-off screens.
- I can connect AI product design to clinical-trial diligence and operational risk.

## Included components

- Source citation cards
- Confidence meter
- Human feedback controls
- Agent activity timeline
- Evaluation scorecard
- Prompt history panel
- Response comparison workspace
- Human review banner

## Built for reuse

The components are intentionally shaped for two follow-on projects:

- **Model Behavior Studio**: a tool for comparing, scoring, and tuning AI response behavior.
- **TrialSense**: an AI clinical-trial diligence workbench for source-grounded review of trial design, feasibility, and risk.

## Design decisions

- **Trust is treated as a workflow**: evidence, confidence, and review state appear where decisions are being made.
- **Model behavior is inspectable**: prompt versions, response comparisons, eval scores, and feedback controls make AI behavior easier to discuss with product and research teams.
- **Clinical examples stay grounded**: sample content uses trial feasibility and eligibility risk so the interface has a real domain point of view.
- **The system can move into product work**: the same primitives can support model evaluation workflows and clinical diligence workflows.

## Design principles

- **Behavior is part of the interface**: prompts, outputs, rubrics, and feedback states should be designed surfaces.
- **Confidence is not decoration**: uncertainty should appear next to the decision it affects.
- **Evaluation stays visible**: scorecards and review states make quality measurable while a prototype is still evolving.

## Tech stack

- React
- TypeScript
- Vite
- Bun
- lucide-react

## Run locally

```bash
bun install
bun dev
```

## Verification

```bash
bun run lint
bun run build
```

## Next iterations

- Split the primitives into reusable component files.
- Add screenshots and a short case-study writeup for the GitHub repo.
- Use the component system inside Model Behavior Studio.
- Use the clinical-trial patterns inside TrialSense.
