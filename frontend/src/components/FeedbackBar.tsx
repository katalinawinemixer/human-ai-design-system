import { AlertTriangle, ThumbsDown, ThumbsUp } from 'lucide-react'

export function FeedbackBar({
  status = 'Feedback captured for behavior tuning',
  selected,
}: {
  status?: string
  selected?: 'useful' | 'speculative' | 'unhelpful'
}) {
  return (
    <div className="feedback-bar" aria-label="Model feedback controls">
      <button
        className={selected === 'useful' ? 'selected' : undefined}
        type="button"
        aria-label="Mark useful"
      >
        <ThumbsUp size={16} />
      </button>
      <button
        className={selected === 'speculative' ? 'selected' : undefined}
        type="button"
        aria-label="Mark too speculative"
      >
        <AlertTriangle size={16} />
      </button>
      <button
        className={selected === 'unhelpful' ? 'selected' : undefined}
        type="button"
        aria-label="Mark unhelpful"
      >
        <ThumbsDown size={16} />
      </button>
      <span>{status}</span>
    </div>
  )
}
