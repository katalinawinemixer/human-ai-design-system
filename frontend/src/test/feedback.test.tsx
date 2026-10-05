import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeedbackBar } from '../components/FeedbackBar'
import { ModelBehaviorStudioSection } from '../sections/ModelBehaviorStudioSection'

it('records feedback and exposes the selected button to assistive technology', async () => {
  const user = userEvent.setup()
  render(<FeedbackBar />)
  const button = screen.getByRole('button', { name: 'Mark too speculative' })
  expect(button).toHaveAttribute('aria-pressed', 'false')
  await user.click(button)
  expect(button).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByRole('status')).toHaveTextContent('Marked too speculative')
})

it('keeps profile feedback separate and includes the current choice in exports', async () => {
  const user = userEvent.setup()
  const { container } = render(<ModelBehaviorStudioSection />)
  const studio = within(container)
  await user.click(studio.getByRole('button', { name: 'Mark too speculative' }))
  expect(studio.getByRole('button', { name: 'Mark too speculative' })).toHaveAttribute('aria-pressed', 'true')
  await user.click(studio.getByRole('button', { name: 'Draft report' }))
  const download = studio.getByRole('link', { name: /Download/i })
  expect(decodeURIComponent(download.getAttribute('href') ?? '')).toContain('Reviewer signal: Marked too speculative')
  await user.click(studio.getByRole('button', { name: 'Mark unhelpful' }))
  expect(studio.queryByRole('link', { name: /Download/i })).not.toBeInTheDocument()
  await user.click(studio.getByRole('button', { name: /Concise operator/i }))
  expect(studio.getByRole('button', { name: 'Mark too speculative' })).toHaveAttribute('aria-pressed', 'true')
  await user.click(studio.getByRole('button', { name: /Evidence-first/i }))
  expect(studio.getByRole('button', { name: 'Mark unhelpful' })).toHaveAttribute('aria-pressed', 'true')
})
