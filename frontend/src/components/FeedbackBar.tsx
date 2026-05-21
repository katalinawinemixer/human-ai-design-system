import { AlertTriangle, ThumbsDown, ThumbsUp } from 'lucide-react'

export function FeedbackBar() {
  return (
    <div className="feedback-bar" aria-label="Model feedback controls">
      <button type="button" aria-label="Mark useful">
        <ThumbsUp size={16} />
      </button>
      <button type="button" aria-label="Mark too speculative">
        <AlertTriangle size={16} />
      </button>
      <button type="button" aria-label="Mark unhelpful">
        <ThumbsDown size={16} />
      </button>
      <span>Feedback captured for behavior tuning</span>
    </div>
  )
}
