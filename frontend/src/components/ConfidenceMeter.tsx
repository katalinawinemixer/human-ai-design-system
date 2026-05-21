export function ConfidenceMeter() {
  return (
    <div className="confidence-panel">
      <div>
        <div className="panel-label">Answer confidence</div>
        <strong>Moderate-high</strong>
      </div>
      <div className="meter" aria-label="Confidence 76 percent">
        <span style={{ width: '76%' }} />
      </div>
      <p>
        The model found direct support for the inclusion criteria, but market
        sizing remains inferred from comparable studies.
      </p>
    </div>
  )
}
