import { evalRows } from '../data/designSystemContent'

type EvalRow = readonly [string, number, string]

export function EvalScorecard({
  rows = evalRows,
}: {
  rows?: readonly EvalRow[]
}) {
  return (
    <div className="scorecard">
      {rows.map(([label, score, note]) => (
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
