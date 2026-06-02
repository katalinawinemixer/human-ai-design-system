import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { localRunInstructions } from '../data/localRunInstructions'

const testDir = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(testDir, '../../..')

function readRepoFile(path: string) {
  return readFileSync(resolve(repoRoot, path), 'utf8')
}

describe('public setup instructions', () => {
  it('keeps the local run command sequence in one reusable source of truth', () => {
    expect(localRunInstructions.commands).toEqual([
      'cd human-ai-design-system/frontend',
      'bun install',
      'bun dev',
    ])
    expect(localRunInstructions.context).toMatch(/directory containing the cloned repo/i)
    expect(localRunInstructions.context).not.toMatch(/repository root/i)
    expect(localRunInstructions.frontendShortcut).toMatch(/skip the first line/i)
  })

  it('keeps README and the public QA checklist aligned with the site command sequence', () => {
    const expectedBlock = localRunInstructions.commands.join('\n')
    const readme = readRepoFile('README.md')
    const publicQa = readRepoFile('PUBLIC_QA.md')

    expect(readme).toContain(expectedBlock)
    expect(publicQa).toContain(expectedBlock)
    expect(publicQa).toContain('Public visitor copy-paste QA')
  })

  it('does not publish a contextless or contradictory local setup command block', () => {
    const publicCopy = [
      readRepoFile('README.md'),
      readRepoFile('PUBLIC_QA.md'),
      readRepoFile('frontend/README.md'),
      readRepoFile('frontend/src/sections/GetStartedSection.tsx'),
      readRepoFile('frontend/src/data/localRunInstructions.ts'),
    ].join('\n---FILE---\n')

    expect(publicCopy).not.toMatch(/from the repository root:?\s*```(?:bash|sh)?\s*\ncd human-ai-design-system\/frontend/i)
    expect(publicCopy).not.toMatch(/```(?:bash|sh)?\s*\ncd frontend\s*\nbun install\s*\nbun dev\s*\n```/)
    expect(publicCopy).not.toMatch(/cd \.?\/?frontend\s*(?:&&|\n)\s*bun install\s*(?:&&|\n)\s*bun dev/)
  })

  it('wires the public setup smoke test into package scripts and CI', () => {
    const packageJson = readRepoFile('frontend/package.json')
    const ciWorkflow = readRepoFile('.github/workflows/ci.yml')
    const smokeScript = readRepoFile('scripts/verify-public-setup.sh')

    expect(packageJson).toContain('"verify:public-setup": "../scripts/verify-public-setup.sh"')
    expect(ciWorkflow).toContain('scripts/verify-public-setup.sh')
    expect(smokeScript).toContain('cd human-ai-design-system/frontend')
    expect(smokeScript).toContain('curl')
  })
})
