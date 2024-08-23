const assert = require('node:assert/strict')
const { describe, test } = require('node:test')

const plugin = require('@typescript-eslint/eslint-plugin')
const typechecking = require('eslint-config-remcohaszing/typechecking')
const config = require('eslint-config-remcohaszing/typescript')

const allowedTypeChecking = new Set(['@typescript-eslint/naming-convention'])

describe('@typescript-eslint/eslint-plugin', () => {
  for (const [ruleName, rule] of Object.entries(plugin.rules)) {
    const name = `@typescript-eslint/${ruleName}`

    if (rule.meta.deprecated) {
      test(`rule ${name} (deprecated)`, () => {
        assert.ok(!(name in config.rules), `${name} should not be specified`)
        assert.ok(!(name in typechecking.overrides[0].rules), `${name} should not be specified`)
      })
    } else {
      test(`rule ${name}`, () => {
        if (rule.meta.docs.requiresTypeChecking && !allowedTypeChecking.has(name)) {
          assert.ok(!(name in config.rules), `${name} should not be specified in plain config`)
          assert.ok(
            name in typechecking.overrides[0].rules,
            `${name} should be specified in type checking config`
          )
        } else {
          assert.ok(name in config.rules, `${name} should be specified in plain config`)
          assert.ok(
            !(name in typechecking.overrides[0].rules),
            `${name} should not be specified in type checking config`
          )
        }
      })
    }
  }
})
