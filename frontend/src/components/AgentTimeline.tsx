import { timeline } from '../data/designSystemContent'

type TimelineEntry = readonly [string, string, string]

export function AgentTimeline({
  entries = timeline,
}: {
  entries?: readonly TimelineEntry[]
}) {
  return (
    <div className="timeline">
      {entries.map(([label, detail, state]) => (
        <div className={`timeline-row timeline-${state}`} key={label}>
          <span className="timeline-dot" />
          <div>
            <strong>{label}</strong>
            <p>{detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
