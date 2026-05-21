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
  const [selectedResponses, setSelectedResponses] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(
      behaviorProfiles.map((profile) => [
        profile.name,
        profile.responses.find((response) => response[4])?.[2] ??
          profile.responses[0][2],
      ]),
    ),
  )
  const [promptHistories, setPromptHistories] = useState<
    Record<string, [string, string, boolean][]>
  >(() =>
    Object.fromEntries(
      behaviorProfiles.map((profile) => [
        profile.name,
        profile.promptHistory.map(([version, label, current]) => [
          version,
          label,
          current,
        ]),
      ]),
    ),
  )
  const [exportRecords, setExportRecords] = useState<Record<string, string>>({})

  const filteredProfiles = behaviorProfiles.filter(
    (profile) => activeFilter === 'All' || profile.stage === activeFilter,
  )
  const profile: BehaviorProfile =
    behaviorProfiles.find((item) => item.name === activeProfileName) ??
    behaviorProfiles[0]
  const activePrompt = promptDrafts[profile.name] ?? profile.prompt
  const selectedResponseTitle =
    selectedResponses[profile.name] ??
    profile.responses.find((response) => response[4])?.[2] ??
    profile.responses[0][2]
  const selectedResponse =
    profile.responses.find((response) => response[2] === selectedResponseTitle) ??
    profile.responses[0]
  const activeHistory = promptHistories[profile.name] ?? profile.promptHistory
  const activeReportRows = profile.reportRows.map(([label, value]) =>
    label === 'Decision'
      ? [
          label,
          `Use ${selectedResponseTitle} as the current winner for ${profile.name}`,
        ]
      : label === 'Export scope'
        ? [
            label,
            `Include active prompt, ${selectedResponseTitle}, rubric scores, reviewer feedback, and export preview`,
          ]
      : [label, value],
  )

  function savePromptDraft() {
    const latestVersion = activeHistory.reduce((highestVersion, [version]) => {
      const versionNumber = Number(version.replace('v', ''))
      return Number.isNaN(versionNumber)
        ? highestVersion
        : Math.max(highestVersion, versionNumber)
    }, 0)
    const nextVersion = `v${latestVersion + 1}`
    const promptLabel =
      activePrompt.length > 58
        ? `${activePrompt.slice(0, 58).trim()}...`
        : activePrompt

    setPromptHistories({
      ...promptHistories,
      [profile.name]: [
        [nextVersion, `Saved draft: ${promptLabel}`, true],
        ...activeHistory.map(([version, label]) => [version, label, false] as [
          string,
          string,
          boolean,
        ]),
      ],
    })
    setPromptStatus('Saved prompt')
    setReportStatus('Draft report')
    setExportRecords(removeCurrentExport)
  }

  function generateExport() {
    setExportRecords({
      ...exportRecords,
      [profile.name]: [
        `Model Behavior Studio export`,
        `Profile: ${profile.name}`,
        `Stage: ${profile.stage}`,
        `Source set: ${profile.sourceSet}`,
        `Eval run: ${profile.lastRun}`,
        `Selected response: ${selectedResponseTitle}`,
        `Decision: ${activeReportRows[0][1]}`,
        `Reviewer signal: ${profile.feedbackStatus}`,
      ].join('\n'),
    })
    setReportStatus('Export ready')
  }

  function removeCurrentExport(records: Record<string, string>) {
    const nextRecords = { ...records }
    delete nextRecords[profile.name]
    return nextRecords
  }

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
                setExportRecords(removeCurrentExport)
              }}
            />
            <div className="prompt-actions">
              <span>{promptStatus}</span>
              <button onClick={savePromptDraft} type="button">
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
            <ComparisonWorkspace
              onSelect={(title) => {
                setSelectedResponses({
                  ...selectedResponses,
                  [profile.name]: title,
                })
                setReportStatus('Draft report')
                setExportRecords(removeCurrentExport)
              }}
              responses={profile.responses}
              selectedTitle={selectedResponseTitle}
            />
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
                <span>{`${selectedResponseTitle} selected`}</span>
              </div>
              <div className="report-rows">
                {activeReportRows.map(([label, value]) => (
                  <div className="report-row" key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <button
                className="report-button"
                onClick={generateExport}
                type="button"
              >
                {reportStatus}
              </button>
              {exportRecords[profile.name] ? (
                <div className="export-preview" aria-label="Generated export preview">
                  <div>
                    <strong>Export package</strong>
                    <span>{selectedResponse[0]}</span>
                  </div>
                  <pre>{exportRecords[profile.name]}</pre>
                </div>
              ) : null}
            </div>
          </div>

          <div className="studio-footer-grid">
            <div className="studio-panel">
              <div className="studio-panel-heading">
                <SlidersHorizontal size={18} />
                <strong>Prompt history</strong>
              </div>
              <PromptHistory items={activeHistory} />
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
