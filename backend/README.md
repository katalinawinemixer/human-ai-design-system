# Human-AI Design System Backend

This folder is reserved for future backend work. The current project is frontend-only, but the repo is organized with a backend area so future APIs and model-behavior services have a clear home.

## Planned Responsibilities

```text
Eval scenario storage
Prompt and response version history
Model behavior scoring data
Feedback event capture
Source-document metadata
Exportable case-study or eval reports
```

## Current Status

There is no backend server yet. The frontend currently uses local static example data in `../frontend/src/App.tsx`.

## Future Local Run Pattern

When a backend exists, it should follow this convention:

```bash
cd backend
bun install
bun dev
```

The API should use a predictable local URL:

```text
http://127.0.0.1:4000
```

## Future API Shape

Likely routes:

```text
GET  /api/health
GET  /api/eval-scenarios
GET  /api/prompts
GET  /api/responses
POST /api/feedback
POST /api/reports/export
```
