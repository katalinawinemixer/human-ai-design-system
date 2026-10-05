import { useState } from 'react'
import { AlertTriangle, ThumbsDown, ThumbsUp } from 'lucide-react'

export type FeedbackSelection = 'useful' | 'speculative' | 'unhelpful'

const feedbackLabels: Record<FeedbackSelection, string> = {
  useful: 'Marked useful',
  speculative: 'Marked too speculative',
  unhelpful: 'Marked unhelpful',
}

export function FeedbackBar({
  status,
  selected,
  onSelect,
}: {
  status?: string
  selected?: FeedbackSelection
  onSelect?: (selection: FeedbackSelection) => void
}) {
  const [localSelection, setLocalSelection] = useState<FeedbackSelection>()
  const activeSelection = selected ?? localSelection

  function selectFeedback(selection: FeedbackSelection) {
    setLocalSelection(selection)
    onSelect?.(selection)
  }

  return (
    <div className="feedback-bar" aria-label="Model feedback controls">
      <button
        className={activeSelection === 'useful' ? 'selected' : undefined}
        type="button"
        aria-label="Mark useful"
        aria-pressed={activeSelection === 'useful'}
        onClick={() => selectFeedback('useful')}
      >
        <ThumbsUp size={16} />
      </button>
      <button
        className={activeSelection === 'speculative' ? 'selected' : undefined}
        type="button"
        aria-label="Mark too speculative"
        aria-pressed={activeSelection === 'speculative'}
        onClick={() => selectFeedback('speculative')}
      >
        <AlertTriangle size={16} />
      </button>
      <button
        className={activeSelection === 'unhelpful' ? 'selected' : undefined}
        type="button"
        aria-label="Mark unhelpful"
        aria-pressed={activeSelection === 'unhelpful'}
        onClick={() => selectFeedback('unhelpful')}
      >
        <ThumbsDown size={16} />
      </button>
      <span role="status">{status ?? (activeSelection ? feedbackLabels[activeSelection] : 'Choose feedback for this response')}</span>
    </div>
  )
}
