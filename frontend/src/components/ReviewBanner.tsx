import { ShieldCheck } from 'lucide-react'

type ReviewBannerProps = {
  title?: string
  body?: string
  actionLabel?: string
}

export function ReviewBanner({
  title = 'Human review required',
  body = 'Two claims are inferred from analog studies and should be checked before inclusion in a diligence note.',
  actionLabel = 'Review',
}: ReviewBannerProps) {
  return (
    <div className="review-banner">
      <ShieldCheck size={20} />
      <div>
        <strong>{title}</strong>
        <p>{body}</p>
      </div>
      <button type="button">
        {actionLabel}
      </button>
    </div>
  )
}
