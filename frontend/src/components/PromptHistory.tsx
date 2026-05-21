import { GitBranch } from 'lucide-react'

export function PromptHistory() {
  return (
    <div className="prompt-history">
      <div className="history-item current">
        <GitBranch size={16} />
        <span>v3: Require citations for every clinical claim</span>
      </div>
      <div className="history-item">
        <GitBranch size={16} />
        <span>v2: Add uncertainty labels to inferred risks</span>
      </div>
      <div className="history-item">
        <GitBranch size={16} />
        <span>v1: Summarize trial design and key exclusions</span>
      </div>
    </div>
  )
}
