const assert = require('node:assert/strict')
const { test } = require('node:test')

const plugin = require('@typescript-eslint/eslint-plugin')
const config = require('eslint-config-remcohaszing/typescript')

test('define all rules from @typescript-eslint/eslint-plugin without type checking', () => {
  assert.deepEqual(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('@typescript-eslint/'))
      .sort(),
    Object.entries(plugin.rules)
      .filter(([rule, { meta }]) => !meta.docs.requiresTypeChecking || rule === 'naming-convention')
      .map(([rule]) => `@typescript-eslint/${rule}`)
      .sort()
  )
})

for (const [ruleName, { meta }] of Object.entries(plugin.rules)) {
  if (meta.deprecated && (!meta.docs.requiresTypeChecking || ruleName === 'naming-convention')) {
    test(`disable deprecated rule @typescript-eslint/${ruleName}`, () => {
      assert.equal(
        config.rules[`@typescript-eslint/${ruleName}`],
        'off',
        `expected @typescript-eslint/${ruleName} to be disabled`
      )
    })
  }
}
