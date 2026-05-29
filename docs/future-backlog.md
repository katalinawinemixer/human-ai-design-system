# Future Backlog

This backlog captures future polish ideas without leaving them as open GitHub Issues. The current app baseline is complete; these are optional next moves.

## Documentation and Demo Polish

- Record a concise 60-90 second walkthrough that shows the hero, product surfaces, Model Behavior Studio, and TrialSense.
- Tighten the public case-study narrative as the implemented workflows evolve.
- Refresh screenshots and the demo GIF when visible UI changes.

## TrialSense

- Add another diligence scenario if the product concept needs more depth, such as rare disease enrollment, global startup, biomarker testing burden, or site activation risk.
- Keep future TrialSense examples grounded in clinical operations and source-review judgment.

## Accessibility

- Run focused keyboard, label, contrast, and responsive checks across the hero, Model Behavior Studio, TrialSense, specs, inventory, and component sections.
- Update `docs/accessibility-notes.md` with any findings, fixes, or accepted tradeoffs.

## Backend Threshold

No backend is needed for the current static prototype.

Consider backend work only if the project needs:

- Trial document upload
- Source parsing
- Saved review history
- Authentication
- Model-provider calls
- Audit trails

Until one of those becomes part of the implemented workflow, keep TrialSense as a static frontend prototype with local UI state and downloadable text artifacts.

## Screenshot Maintenance

Screenshots live in `docs/assets/screenshots/`.

Current screenshot set:

- `hero.png`
- `product-surfaces.png`
- `system-specs.png`
- `scenario-library.png`
- `model-behavior-studio.png`
- `trialsense.png`
- `visual-inventory.png`
- `mobile-hero.png`
- `mobile-product-surfaces.png`
- `mobile-scenario-library.png`
- `mobile-model-behavior-studio.png`
- `mobile-trialsense.png`

Refresh screenshots whenever a visible section changes enough that the README would otherwise misrepresent the live app.
