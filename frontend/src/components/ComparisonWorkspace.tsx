import { SignalBadge } from './SignalBadge'
import type { SignalTone } from './SignalBadge'

const defaultResponses = [
  [
    'Needs review',
    'warn',
    'Response A',
    'The trial appears feasible, but the screen-failure risk is likely understated because steroid exclusions are not discussed.',
    false,
  ],
  [
    'Preferred',
    'good',
    'Response B',
    'Feasibility is plausible with caveats. The steroid and autoimmune exclusions should be validated against site-level screen logs.',
    true,
  ],
] as const

export type ResponseColumn = readonly [
  string,
  SignalTone,
  string,
  string,
  boolean,
]

export function ComparisonWorkspace({
  responses = defaultResponses,
  selectedTitle,
  onSelect,
}: {
  responses?: readonly ResponseColumn[]
  selectedTitle?: string
  onSelect?: (title: string) => void
}) {
  return (
    <div className="comparison">
      {responses.map(([badge, tone, title, body, selected]) => {
        const isSelected = selectedTitle ? title === selectedTitle : selected

        return (
          <div
            className={`response-column ${isSelected ? 'selected' : ''}`}
            key={title}
          >
            <SignalBadge tone={tone}>{badge}</SignalBadge>
            <h3>{title}</h3>
            <p>{body}</p>
            {onSelect ? (
              <button
                aria-pressed={isSelected}
                className="response-select"
                onClick={() => onSelect(title)}
                type="button"
              >
                {isSelected ? 'Selected winner' : 'Select winner'}
              </button>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
