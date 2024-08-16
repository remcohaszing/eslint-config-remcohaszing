const assert = require('node:assert/strict')
const { test } = require('node:test')

const { builtinRules } = require('eslint/use-at-your-own-risk')

test('define all core rules', () => {
  const config = require('eslint-config-remcohaszing/plugins/core')
  assert.deepEqual(Object.keys(config), [...builtinRules.keys()].sort())
})
