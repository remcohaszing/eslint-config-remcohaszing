const assert = require('node:assert/strict')
const { describe, test } = require('node:test')

const { builtinRules } = require('eslint/use-at-your-own-risk')
const config = require('eslint-config-remcohaszing')

function compareRules(a, b) {
  if (a.includes('/')) {
    if (b.includes('/')) {
      return a.localeCompare(b)
    }

    return 1
  }

  return a.localeCompare(b)
}

const allowedDeprecated = new Set(['no-return-await'])

const allRules = []

for (const [name, rule] of builtinRules) {
  if (rule.meta.deprecated && !allowedDeprecated.has(name)) {
    test(`rule ${name} (deprecated)`, () => {
      assert.ok(!(name in config.rules), `${name} should not be specified`)
    })
  } else {
    allRules.push(name)

    test(`rule ${name}`, () => {
      assert.ok(name in config.rules, `${name} should be specified`)
    })
  }
}

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
        allRules.push(name)

        test(`rule ${name}`, () => {
          assert.ok(name in config.rules, `${name} should be specified`)
        })
      }
    }
  })
}

test('specify all rules', () => {
  allRules.sort(compareRules)
  const specifiedRules = Object.keys(config.rules)

  assert.deepEqual(allRules, specifiedRules)
})
