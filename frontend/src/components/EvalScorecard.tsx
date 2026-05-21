import { evalRows } from '../data/designSystemContent'

export function EvalScorecard() {
  return (
    <div className="scorecard">
      {evalRows.map(([label, score, note]) => (
        <div className="score-row" key={label}>
          <div>
            <strong>{label}</strong>
            <p>{note}</p>
          </div>
          <span>{score}</span>
        </div>
      ))}
    </div>
  )
}
