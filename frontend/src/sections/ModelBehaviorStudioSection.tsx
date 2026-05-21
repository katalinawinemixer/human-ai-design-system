import { useState } from 'react'
import {
  ClipboardCheck,
  FileDown,
  FlaskConical,
  GitCompareArrows,
  SlidersHorizontal,
} from 'lucide-react'
import { ComparisonWorkspace } from '../components/ComparisonWorkspace'
import { EvalScorecard } from '../components/EvalScorecard'
import { FeedbackBar } from '../components/FeedbackBar'
import { PromptHistory } from '../components/PromptHistory'
import { SectionHeader } from '../components/SectionHeader'
import { SignalBadge } from '../components/SignalBadge'
import { behaviorProfiles } from '../data/modelBehaviorStudioContent'

export function ModelBehaviorStudioSection() {
  const [activeProfile, setActiveProfile] = useState(0)
  const [reportStatus, setReportStatus] = useState('Draft report')
  const profile = behaviorProfiles[activeProfile]

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
          <div className="profile-list" aria-label="Behavior profiles">
            {behaviorProfiles.map((item, index) => (
              <button
                className={index === activeProfile ? 'active' : undefined}
                key={item.name}
                onClick={() => {
                  setActiveProfile(index)
                  setReportStatus('Draft report')
                }}
                type="button"
              >
                <span>{item.name}</span>
                <small>{item.status}</small>
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
              value={profile.prompt}
              readOnly
            />
            <p>{profile.objective}</p>
          </div>
        </div>

        <div className="studio-workspace">
          <div className="studio-workspace-topline">
            <SignalBadge tone="evidence">{profile.name}</SignalBadge>
            <SignalBadge tone={profile.status === 'Eval required' ? 'warn' : 'good'}>
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
                onClick={() => setReportStatus('Report ready')}
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
