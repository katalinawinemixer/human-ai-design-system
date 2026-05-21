import { timeline } from '../data/designSystemContent'

export function AgentTimeline() {
  return (
    <div className="timeline">
      {timeline.map(([label, detail, state]) => (
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
