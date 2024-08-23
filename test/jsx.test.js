const assert = require('node:assert/strict')
const { describe, test } = require('node:test')

const config = require('eslint-config-remcohaszing/jsx')
const pluginJsxA11y = require('eslint-plugin-jsx-a11y')

describe('jsx-a11y', () => {
  for (const [ruleName, rule] of Object.entries(pluginJsxA11y.rules)) {
    const name = `jsx-a11y/${ruleName}`

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
