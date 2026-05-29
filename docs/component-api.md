# Component API

This is a lightweight reference for the current frontend primitives. The API is intentionally small because this is still a static prototype, not a packaged component library.

## CitationCard

Path: `frontend/src/components/CitationCard.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `citation.title` | `string` | Claim or source-card heading |
| `citation.source` | `string` | Source label shown in the card metadata |
| `citation.quote` | `string` | Supporting evidence or review note |
| `citation.confidence` | `string` | Human-readable confidence label |
| `citation.tone` | `'evidence' \| 'caution'` | Visual treatment for supported versus cautionary evidence |

## ConfidenceMeter

Path: `frontend/src/components/ConfidenceMeter.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `label` | `string` | Visible confidence label |
| `value` | `number` | Meter width and aria percentage |
| `description` | `string` | Plain-language confidence rationale |

## FeedbackBar

Path: `frontend/src/components/FeedbackBar.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `status` | `string` | Feedback state text |
| `selected` | `'useful' \| 'speculative' \| 'unhelpful'` | Highlighted feedback control |

## AgentTimeline

Path: `frontend/src/components/AgentTimeline.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `entries` | `[label, detail, state][]` | Timeline rows where `state` maps to visual state classes |

Supported timeline states:

- `done`
- `active`
- `waiting`
- `error`

## EvalScorecard

Path: `frontend/src/components/EvalScorecard.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `rows` | `[label, score, note][]` | Eval rubric rows |

## PromptHistory

Path: `frontend/src/components/PromptHistory.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `items` | `[version, label, current][]` | Prompt versions and current-state flag |

## ComparisonWorkspace

Path: `frontend/src/components/ComparisonWorkspace.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `responses` | `[badge, tone, title, body, selected][]` | Response columns for side-by-side comparison |
| `selectedTitle` | `string` | Optional controlled selected response title |
| `onSelect` | `(title: string) => void` | Optional winner-selection handler |

## ReviewBanner

Path: `frontend/src/components/ReviewBanner.tsx`

Props:

| Prop | Type | Purpose |
| --- | --- | --- |
| `title` | `string` | Review-state headline |
| `body` | `string` | Reason review is required or recommended |
| `actionLabel` | `string` | Button label |
