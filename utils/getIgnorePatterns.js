/**
 * @import { Linter } from 'eslint'
 */

import { dirname, join } from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'
import findUp from 'find-up'

/**
 * Determine the default ignore pattern based on `.gitignore`.
 *
 * @returns {Linter.Config | undefined}
 *   An array of ignore patterns accepted in an ESLint configuration.
 */
export function getIgnorePatterns() {
  const gitDir = findUp.sync('.git', { type: 'directory' })

  if (gitDir) {
    const gitIgnorePath = join(dirname(gitDir), '.gitignore')
    try {
      return includeIgnoreFile(gitIgnorePath)
    } catch {
      // Do nothing
    }
  }
}
