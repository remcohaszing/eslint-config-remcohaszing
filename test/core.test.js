const assert = require('node:assert/strict')
const { test } = require('node:test')

const { builtinRules } = require('eslint/use-at-your-own-risk')

const byCategory = new Map()
for (const [name, { meta }] of builtinRules) {
  const cat = meta.deprecated ? 'deprecated' : meta.type
  const categoryRules = byCategory.get(cat) || []
  byCategory.set(cat, categoryRules)
  categoryRules.push(name)
  categoryRules.sort()
}

for (const [category, categoryRules] of Object.entries(byCategory)) {
  test(`define all rules in the ${category} category`, () => {
    const config = require(`eslint-config-remcohaszing/core/${category}`)
    assert.deepEqual(Object.keys(config).sort(), categoryRules)
  })
}
