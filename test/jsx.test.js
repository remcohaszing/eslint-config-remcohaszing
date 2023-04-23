const assert = require('node:assert/strict')
const { test } = require('node:test')

const config = require('eslint-config-remcohaszing/jsx')
const pluginJsxA11y = require('eslint-plugin-jsx-a11y')

test('define all rules from eslint-plugin-jsx-a11y', () => {
  assert.deepEqual(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('jsx-a11y/'))
      .sort(),
    Object.keys(pluginJsxA11y.rules)
      .map((rule) => `jsx-a11y/${rule}`)
      .sort()
  )
})

for (const [ruleName, { meta }] of Object.entries(pluginJsxA11y.rules)) {
  if (meta.deprecated) {
    test(`disable deprecated rule jsx-a11y/${ruleName}`, () => {
      assert.equal(
        config.rules[`jsx-a11y/${ruleName}`],
        'off',
        `expected jsx-a11y/${ruleName} to be disabled`
      )
    })
  }
}
