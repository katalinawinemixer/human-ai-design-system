import { useState } from 'react'
import {
  ClipboardCheck,
  FileDown,
  FlaskConical,
  GitCompareArrows,
  Save,
  SlidersHorizontal,
} from 'lucide-react'
import { ComparisonWorkspace } from '../components/ComparisonWorkspace'
import { EvalScorecard } from '../components/EvalScorecard'
import { FeedbackBar } from '../components/FeedbackBar'
import { PromptHistory } from '../components/PromptHistory'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { behaviorProfiles } from '../data/modelBehaviorStudioContent'
import type { BehaviorProfile } from '../data/modelBehaviorStudioContent'

const profileFilters = ['All', 'Baseline', 'Review', 'Blocked'] as const

export function ModelBehaviorStudioSection() {
  const [activeProfileName, setActiveProfileName] = useState<string>(
    behaviorProfiles[0].name,
  )
  const [activeFilter, setActiveFilter] =
    useState<(typeof profileFilters)[number]>('All')
  const [reportStatus, setReportStatus] = useState('Draft report')
  const [promptStatus, setPromptStatus] = useState('Saved prompt')
  const [promptDrafts, setPromptDrafts] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      behaviorProfiles.map((profile) => [profile.name, profile.prompt]),
    ),
  )

  const filteredProfiles = behaviorProfiles.filter(
    (profile) => activeFilter === 'All' || profile.stage === activeFilter,
  )
  const profile: BehaviorProfile =
    behaviorProfiles.find((item) => item.name === activeProfileName) ??
    behaviorProfiles[0]
  const activePrompt = promptDrafts[profile.name] ?? profile.prompt

  return (
    <section className="model-studio-section" id="model-studio">
      <SectionHeader
        eyebrow="Phase 2"
        title="Model Behavior Studio turns primitives into a tuning workflow."
        body="The first product surface compares candidate responses, scores behavior against a rubric, tracks prompt versions, and packages the reviewer decision into an eval report."
      />

      <div className="studio-shell">
        <div className="studio-sidebar">
          <div className="component-heading">
            <SlidersHorizontal size={20} />
            <h3>Behavior profiles</h3>
          </div>
          <div className="profile-filter" aria-label="Profile filters">
            {profileFilters.map((filter) => (
              <button
                className={filter === activeFilter ? 'active' : undefined}
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  const nextProfile =
                    filter === 'All'
                      ? behaviorProfiles[0]
                      : behaviorProfiles.find((item) => item.stage === filter)
                  if (nextProfile) {
                    setActiveProfileName(nextProfile.name)
                    setReportStatus('Draft report')
                    setPromptStatus('Saved prompt')
                  }
                }}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="profile-list" aria-label="Behavior profiles">
            {filteredProfiles.map((item) => (
              <button
                className={item.name === profile.name ? 'active' : undefined}
                key={item.name}
                onClick={() => {
                  setActiveProfileName(item.name)
                  setReportStatus('Draft report')
                  setPromptStatus('Saved prompt')
                }}
                type="button"
              >
                <span>{item.name}</span>
                <small>{`${item.status} | ${item.lastRun}`}</small>
              </button>
            ))}
          </div>

          <div className="prompt-playground">
            <div className="studio-panel-heading">
              <FlaskConical size={18} />
              <strong>Prompt playground</strong>
            </div>
            <textarea
              aria-label={`${profile.name} behavior prompt`}
              value={activePrompt}
              onChange={(event) => {
                setPromptDrafts({
                  ...promptDrafts,
                  [profile.name]: event.target.value,
                })
                setPromptStatus('Unsaved draft')
                setReportStatus('Draft report')
              }}
            />
            <div className="prompt-actions">
              <span>{promptStatus}</span>
              <button
                onClick={() => setPromptStatus('Saved prompt')}
                type="button"
              >
                <Save size={15} />
                Save
              </button>
            </div>
            <p>{profile.objective}</p>
          </div>
        </div>

        <div className="studio-workspace">
          <div className="studio-workspace-topline">
            <SignalBadge tone="evidence">{profile.name}</SignalBadge>
            <SignalBadge
              tone={
                profile.stage === 'Blocked'
                  ? 'warn'
                  : profile.stage === 'Baseline'
                    ? 'good'
                    : 'evidence'
              }
            >
              {profile.status}
            </SignalBadge>
          </div>

          <div className="studio-panel comparison-panel">
            <div className="studio-panel-heading">
              <GitCompareArrows size={18} />
              <strong>Response comparison</strong>
            </div>
            <ComparisonWorkspace responses={profile.responses} />
          </div>

          <div className="studio-lower-grid">
            <div className="studio-panel">
              <div className="studio-panel-heading">
                <ClipboardCheck size={18} />
                <strong>Scoring rubric</strong>
              </div>
              <EvalScorecard rows={profile.evalRows} />
            </div>

            <div className="studio-panel">
              <div className="studio-panel-heading">
                <FileDown size={18} />
                <strong>Eval report</strong>
              </div>
              <div className="report-summary">
                <span>{profile.sourceSet}</span>
                <span>{profile.lastRun}</span>
                <span>{promptStatus}</span>
              </div>
              <div className="report-rows">
                {profile.reportRows.map(([label, value]) => (
                  <div className="report-row" key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <button
                className="report-button"
                onClick={() => setReportStatus('Export ready')}
                type="button"
              >
                {reportStatus}
              </button>
            </div>
          </div>

          <div className="studio-footer-grid">
            <div className="studio-panel">
              <div className="studio-panel-heading">
                <SlidersHorizontal size={18} />
                <strong>Prompt history</strong>
              </div>
              <PromptHistory items={profile.promptHistory} />
            </div>
            <FeedbackBar
              selected={profile.feedbackState}
              status={profile.feedbackStatus}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
