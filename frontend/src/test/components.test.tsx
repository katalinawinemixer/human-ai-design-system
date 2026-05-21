import { render, screen } from '@testing-library/react'
import { AgentTimeline } from '../components/AgentTimeline'
import { CitationCard } from '../components/CitationCard'
import { ComparisonWorkspace } from '../components/ComparisonWorkspace'
import { ConfidenceMeter } from '../components/ConfidenceMeter'
import { EvalScorecard } from '../components/EvalScorecard'
import { FeedbackBar } from '../components/FeedbackBar'
import { PromptHistory } from '../components/PromptHistory'
import { ReviewBanner } from '../components/ReviewBanner'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'

describe('SignalBadge', () => {
  it('renders children', () => {
    render(<SignalBadge>High confidence</SignalBadge>)
    expect(screen.getByText('High confidence')).toBeInTheDocument()
  })

  it('applies tone class', () => {
    render(<SignalBadge tone="evidence">Evidence</SignalBadge>)
    expect(screen.getByText('Evidence')).toHaveClass('signal-evidence')
  })

  it('defaults to neutral tone', () => {
    render(<SignalBadge>Neutral</SignalBadge>)
    expect(screen.getByText('Neutral')).toHaveClass('signal-neutral')
  })
})

describe('CitationCard', () => {
  const citation = {
    title: 'Test citation title',
    source: 'Test source doc',
    quote: 'A direct quote from the source.',
    confidence: 'High',
    tone: 'evidence' as const,
  }

  it('renders title, source, and quote', () => {
    render(<CitationCard citation={citation} />)
    expect(screen.getByText('Test citation title')).toBeInTheDocument()
    expect(screen.getByText('Test source doc')).toBeInTheDocument()
    expect(screen.getByText('A direct quote from the source.')).toBeInTheDocument()
  })

  it('renders confidence label', () => {
    render(<CitationCard citation={citation} />)
    expect(screen.getByText('High confidence')).toBeInTheDocument()
  })

  it('passes tone directly to SignalBadge for warn citations', () => {
    render(<CitationCard citation={{ ...citation, tone: 'warn', confidence: 'Medium' }} />)
    expect(screen.getByText('Medium confidence')).toHaveClass('signal-warn')
  })
})

describe('ConfidenceMeter', () => {
  it('renders default label and description', () => {
    render(<ConfidenceMeter />)
    expect(screen.getByText('Moderate-high')).toBeInTheDocument()
    expect(screen.getByText('Answer confidence')).toBeInTheDocument()
  })

  it('renders custom label and value', () => {
    render(<ConfidenceMeter label="Low" value={22} description="Insufficient evidence." />)
    expect(screen.getByText('Low')).toBeInTheDocument()
    expect(screen.getByText('Insufficient evidence.')).toBeInTheDocument()
    expect(screen.getByLabelText('Confidence 22 percent')).toBeInTheDocument()
  })

  it('sets meter fill width from value prop', () => {
    render(<ConfidenceMeter value={60} />)
    const fill = screen.getByLabelText('Confidence 60 percent').firstElementChild
    expect(fill).toHaveStyle({ width: '60%' })
  })
})

describe('FeedbackBar', () => {
  it('renders default status text', () => {
    render(<FeedbackBar />)
    expect(screen.getByText('Feedback captured for behavior tuning')).toBeInTheDocument()
  })

  it('renders all three feedback buttons', () => {
    render(<FeedbackBar />)
    expect(screen.getByLabelText('Mark useful')).toBeInTheDocument()
    expect(screen.getByLabelText('Mark too speculative')).toBeInTheDocument()
    expect(screen.getByLabelText('Mark unhelpful')).toBeInTheDocument()
  })

  it('applies selected class to the active button', () => {
    render(<FeedbackBar selected="speculative" />)
    expect(screen.getByLabelText('Mark too speculative')).toHaveClass('selected')
    expect(screen.getByLabelText('Mark useful')).not.toHaveClass('selected')
  })
})

describe('ReviewBanner', () => {
  it('renders default title and body', () => {
    render(<ReviewBanner />)
    expect(screen.getByText('Human review required')).toBeInTheDocument()
    expect(screen.getByText(/Two claims are inferred/)).toBeInTheDocument()
  })

  it('renders custom props', () => {
    render(<ReviewBanner title="Custom title" body="Custom body." actionLabel="Approve" />)
    expect(screen.getByText('Custom title')).toBeInTheDocument()
    expect(screen.getByText('Custom body.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Approve/ })).toBeInTheDocument()
  })
})

describe('SectionHeader', () => {
  it('renders eyebrow, title, and body', () => {
    render(<SectionHeader eyebrow="System intent" title="Trust patterns" body="Details here." />)
    expect(screen.getByText('System intent')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Trust patterns' })).toBeInTheDocument()
    expect(screen.getByText('Details here.')).toBeInTheDocument()
  })
})

describe('AgentTimeline', () => {
  const entries = [
    ['Step one', 'Done', 'done'],
    ['Step two', 'In progress', 'active'],
    ['Step three', 'Waiting', 'waiting'],
    ['Step four', 'Failed', 'error'],
  ] as const

  it('renders all entry labels and details', () => {
    render(<AgentTimeline entries={entries} />)
    expect(screen.getByText('Step one')).toBeInTheDocument()
    expect(screen.getByText('Step two')).toBeInTheDocument()
    expect(screen.getByText('In progress')).toBeInTheDocument()
  })

  it('applies correct state class to each row', () => {
    const { container } = render(<AgentTimeline entries={entries} />)
    expect(container.querySelector('.timeline-done')).toBeInTheDocument()
    expect(container.querySelector('.timeline-active')).toBeInTheDocument()
    expect(container.querySelector('.timeline-waiting')).toBeInTheDocument()
    expect(container.querySelector('.timeline-error')).toBeInTheDocument()
  })
})

describe('EvalScorecard', () => {
  const rows = [
    ['Grounding', 92, 'Strong citation discipline'],
    ['Calibration', 78, 'Two claims need softer language'],
  ] as const

  it('renders all row labels, scores, and notes', () => {
    render(<EvalScorecard rows={rows} />)
    expect(screen.getByText('Grounding')).toBeInTheDocument()
    expect(screen.getByText('92')).toBeInTheDocument()
    expect(screen.getByText('Strong citation discipline')).toBeInTheDocument()
    expect(screen.getByText('Calibration')).toBeInTheDocument()
    expect(screen.getByText('78')).toBeInTheDocument()
  })
})

describe('ComparisonWorkspace', () => {
  const responses = [
    ['Needs review', 'warn', 'Response A', 'Body text A', false],
    ['Preferred', 'good', 'Response B', 'Body text B', true],
  ] as const

  it('renders response titles and bodies', () => {
    render(<ComparisonWorkspace responses={responses} />)
    expect(screen.getByText('Response A')).toBeInTheDocument()
    expect(screen.getByText('Body text A')).toBeInTheDocument()
    expect(screen.getByText('Response B')).toBeInTheDocument()
    expect(screen.getByText('Body text B')).toBeInTheDocument()
  })

  it('applies selected class only to the preferred response', () => {
    const { container } = render(<ComparisonWorkspace responses={responses} />)
    const columns = container.querySelectorAll('.response-column')
    expect(columns[0]).not.toHaveClass('selected')
    expect(columns[1]).toHaveClass('selected')
  })
})

describe('PromptHistory', () => {
  const items = [
    ['v3', 'Add citation requirements', true],
    ['v2', 'Summarize trial risks', false],
  ] as const

  it('renders all prompt version labels', () => {
    render(<PromptHistory items={items} />)
    expect(screen.getByText('v3: Add citation requirements')).toBeInTheDocument()
    expect(screen.getByText('v2: Summarize trial risks')).toBeInTheDocument()
  })

  it('applies current class only to the active item', () => {
    const { container } = render(<PromptHistory items={items} />)
    const historyItems = container.querySelectorAll('.history-item')
    expect(historyItems[0]).toHaveClass('current')
    expect(historyItems[1]).not.toHaveClass('current')
  })
})
