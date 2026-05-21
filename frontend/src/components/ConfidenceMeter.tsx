type ConfidenceMeterProps = {
  label?: string
  value?: number
  description?: string
}

export function ConfidenceMeter({
  label = 'Moderate-high',
  value = 76,
  description = 'The model found direct support for the inclusion criteria, but market sizing remains inferred from comparable studies.',
}: ConfidenceMeterProps) {
  return (
    <div className="confidence-panel">
      <div>
        <div className="panel-label">Answer confidence</div>
        <strong>{label}</strong>
      </div>
      <div className="meter" aria-label={`Confidence ${value} percent`}>
        <span style={{ width: `${value}%` }} />
      </div>
      <p>{description}</p>
    </div>
  )
}
