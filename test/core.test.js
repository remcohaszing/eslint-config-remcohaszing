const assert = require('node:assert/strict')
const { test } = require('node:test')

const { builtinRules } = require('eslint/use-at-your-own-risk')
const config = require('eslint-config-remcohaszing')

test('define all core rules', () => {
  assert.deepEqual(
    Object.keys(config.rules).filter((name) => !name.includes('/')),
    [...builtinRules.keys()].sort()
  )
})
