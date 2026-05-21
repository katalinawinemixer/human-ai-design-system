import { SignalBadge } from './SignalBadge'

export function ComparisonWorkspace() {
  return (
    <div className="comparison">
      <div className="response-column">
        <SignalBadge tone="warn">Needs review</SignalBadge>
        <h3>Response A</h3>
        <p>
          The trial appears feasible, but the screen-failure risk is likely
          understated because steroid exclusions are not discussed.
        </p>
      </div>
      <div className="response-column selected">
        <SignalBadge tone="good">Preferred</SignalBadge>
        <h3>Response B</h3>
        <p>
          Feasibility is plausible with caveats. The steroid and autoimmune
          exclusions should be validated against site-level screen logs.
        </p>
      </div>
    </div>
  )
}
