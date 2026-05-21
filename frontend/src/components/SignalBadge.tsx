import type { ReactNode } from 'react'

export type SignalTone = 'neutral' | 'good' | 'warn' | 'danger' | 'evidence'

export function SignalBadge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: SignalTone
}) {
  return <span className={`signal signal-${tone}`}>{children}</span>
}
