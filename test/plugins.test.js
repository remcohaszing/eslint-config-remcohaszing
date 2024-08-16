const assert = require('node:assert/strict')
const { test } = require('node:test')

const config = require('eslint-config-remcohaszing')

for (const name of config.plugins) {
  const plugin = require(`eslint-plugin-${name}`)

  test(`define all rules alphabetically for eslint-plugin-${name}`, () => {
    assert.deepEqual(
      Object.keys(config.rules)
        .filter((rule) => rule.startsWith(`${name}/`))
        .sort(),
      Object.keys(plugin.rules)
        .map((rule) => `${name}/${rule}`)
        .sort()
    )
  })

  for (const [ruleName, { meta }] of Object.entries(plugin.rules)) {
    if (meta.deprecated) {
      test(`disable deprecated rule ${name}/${ruleName}`, () => {
        assert.equal(
          config.rules[`${name}/${ruleName}`],
          'off',
          `expected ${name}/${ruleName} to be disabled`
        )
      })
    }
  }
}
