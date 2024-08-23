const assert = require('node:assert/strict')
const { test } = require('node:test')

const { builtinRules } = require('eslint/use-at-your-own-risk')
const config = require('eslint-config-remcohaszing')

const allowedDeprecated = new Set(['no-return-await'])

for (const [name, rule] of builtinRules) {
  if (rule.meta.deprecated && !allowedDeprecated.has(name)) {
    test(`rule ${name} (deprecated)`, () => {
      assert.ok(!(name in config.rules), `${name} should not be specified`)
    })
  } else {
    test(`rule ${name}`, () => {
      assert.ok(name in config.rules, `${name} should be specified`)
    })
  }
}
