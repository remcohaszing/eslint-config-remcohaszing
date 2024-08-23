const assert = require('node:assert/strict')
const { describe, test } = require('node:test')

const config = require('eslint-config-remcohaszing')

for (const pluginPrefix of config.plugins) {
  const pluginName = pluginPrefix.startsWith('@')
    ? `${pluginPrefix}/eslint-plugin`
    : `eslint-plugin-${pluginPrefix}`
  const plugin = require(pluginName)

  describe(pluginName, () => {
    for (const [ruleName, rule] of Object.entries(plugin.rules)) {
      const name = `${pluginPrefix}/${ruleName}`

      if (rule.meta.deprecated) {
        test(`rule ${name} (deprecated)`, () => {
          assert.ok(!(name in config.rules), `${name} should not be specified`)
        })
      } else {
        test(`rule ${name}`, () => {
          assert.ok(name in config.rules, `${name} should be specified`)
        })
      }
    }
  })
}
