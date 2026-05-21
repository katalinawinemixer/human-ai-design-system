import { GitBranch } from 'lucide-react'

const defaultHistoryItems = [
  ['v3', 'Require citations for every clinical claim', true],
  ['v2', 'Add uncertainty labels to inferred risks', false],
  ['v1', 'Summarize trial design and key exclusions', false],
] as const

type HistoryItem = readonly [string, string, boolean]

export function PromptHistory({
  items = defaultHistoryItems,
}: {
  items?: readonly HistoryItem[]
}) {
  return (
    <div className="prompt-history">
      {items.map(([version, label, current]) => (
        <div className={`history-item ${current ? 'current' : ''}`} key={version}>
          <GitBranch size={16} />
          <span>{`${version}: ${label}`}</span>
        </div>
      ))}
    </div>
  )
}
