import { Pause, Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { motionPrinciples, reviewStatePatterns } from '../data/designSystemContent'

export function StatesMotionSection() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="states-motion-section" id="states-motion">
      <div className="states-motion-heading">
        <SectionHeader
          eyebrow="States and motion"
          title="Review states should be visible before the answer is trusted."
          body="The same patterns describe what the system knows, what is missing, what needs human review, and when output should stop."
        />
        <button
          aria-pressed={paused}
          className="motion-toggle"
          onClick={() => setPaused((current) => !current)}
          type="button"
        >
          {paused ? <Play size={16} /> : <Pause size={16} />}
          {paused ? 'Resume motion' : 'Pause motion'}
        </button>
      </div>

      <div className={paused ? 'state-pattern-grid motion-paused' : 'state-pattern-grid'}>
        {reviewStatePatterns.map((pattern) => (
          <article className={`state-pattern-card state-${pattern.tone}`} key={pattern.state}>
            <div>
              <RotateCcw size={18} />
              <SignalBadge tone={pattern.tone}>{pattern.signal}</SignalBadge>
            </div>
            <h3>{pattern.state}</h3>
            <p>{pattern.body}</p>
          </article>
        ))}
      </div>

      <div className="motion-principles">
        {motionPrinciples.map(([title, body]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
