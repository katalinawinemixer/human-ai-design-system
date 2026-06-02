export const localRunInstructions = {
  context: 'Clone the repo, then run these commands from the directory containing the cloned repo.',
  frontendShortcut: 'If your terminal is already inside frontend/, skip the first line.',
  commands: ['cd human-ai-design-system/frontend', 'bun install', 'bun dev'],
} as const

export const localRunCommandBlock = localRunInstructions.commands.join('\n')
