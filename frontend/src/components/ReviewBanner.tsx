import { ArrowRight, ShieldCheck } from 'lucide-react'

export function ReviewBanner() {
  return (
    <div className="review-banner">
      <ShieldCheck size={20} />
      <div>
        <strong>Human review required</strong>
        <p>
          Two claims are inferred from analog studies and should be checked
          before inclusion in an investor memo.
        </p>
      </div>
      <button type="button">
        Review <ArrowRight size={16} />
      </button>
    </div>
  )
}
