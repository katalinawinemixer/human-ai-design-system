# Accessibility Notes

These notes keep the design-system primitives usable as the prototype grows into additional product surfaces.

## Current Expectations

- Scenario switcher controls should remain real buttons with visible selected states and keyboard reachability.
- Human feedback controls should expose clear `aria-label` values, not only icons or color.
- Confidence meters should include a text label and an `aria-label` that communicates the percentage.
- Review banners should use explicit text for the action button so the decision point is clear.
- Source and confidence states should use text labels in addition to color so evidence quality is not color-only.
- Persistent navigation should use real links with visible labels, not icon-only controls.
- Motion examples should include a pause control and respect reduced-motion preferences.
- Scenario, component, state, resource, and inventory sections should keep meaningful headings so the page is scannable by assistive technology.

## Manual Checks

- Tab through the hero switcher, feedback controls, and review buttons.
- Confirm focus states are visible against the page background.
- Confirm mobile tap targets remain comfortable on narrow screens.
- Check that status, confidence, and source quality are understandable without relying on color.
- Recheck contrast when adding new palettes, chart colors, or lower-emphasis text.
- Confirm the states and motion section remains understandable when motion is paused.
- Confirm reduced-motion handling before introducing animation beyond simple hover or transition states.

## Follow-On Project Notes

Model Behavior Studio should make response comparison keyboard navigable and should keep scoring rubrics readable without hover-only details.

TrialSense should treat review gates as high-importance controls: the user needs to understand what is blocked, why it is blocked, and what action is required before output can move forward.
