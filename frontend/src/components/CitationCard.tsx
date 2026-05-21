import type { Citation } from '../data/designSystemContent'
import { SignalBadge } from './SignalBadge'

export function CitationCard({ citation }: { citation: Citation }) {
  return (
    <article className="citation-card">
      <div className="citation-topline">
        <SignalBadge tone={citation.tone}>
          {citation.confidence} confidence
        </SignalBadge>
        <span>{citation.source}</span>
      </div>
      <h3>{citation.title}</h3>
      <p>{citation.quote}</p>
    </article>
  )
}
