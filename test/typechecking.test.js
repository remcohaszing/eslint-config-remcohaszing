const assert = require('node:assert/strict')
const { test } = require('node:test')

const plugin = require('@typescript-eslint/eslint-plugin')
const config = require('eslint-config-remcohaszing/typechecking')

test('define all rules from @typescript-eslint/eslint-plugin with type checking', () => {
  assert.deepEqual(
    Object.keys(config.overrides[0].rules)
      .filter((rule) => rule.startsWith('@typescript-eslint/'))
      .sort(),
    Object.entries(plugin.rules)
      .filter(([, { meta }]) => meta.docs.requiresTypeChecking)
      .map(([rule]) => `@typescript-eslint/${rule}`)
      .sort()
  )
})

for (const [ruleName, { meta }] of Object.entries(plugin.rules)) {
  if (meta.deprecated && meta.docs.requiresTypeChecking) {
    test(`disable deprecated rule @typescript-eslint/${ruleName}`, () => {
      assert.equal(
        config.overrides[0].rules[`@typescript-eslint/${ruleName}`],
        'off',
        `expected @typescript-eslint/${ruleName} to be disabled`
      )
    })
  }
}
