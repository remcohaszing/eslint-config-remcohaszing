import assert from 'node:assert/strict'
import { describe, test } from 'node:test'

import config, { typechecking } from '@remcohaszing/eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'

/**
 * A comparator for sorting ESLint rules.
 *
 * @param {string} a
 *   The first rule
 * @param {string} b
 *   The second rule
 * @returns {number}
 *   A comparison
 */
function compareRules(a, b) {
  if (a.includes('/')) {
    if (b.includes('/')) {
      return a.localeCompare(b)
    }

    return 1
  }

  if (b.includes('/')) {
    return -1
  }

  return a.localeCompare(b)
}

const allowedDeprecated = new Set(['no-return-await'])

const disabled = new Set([
  // https://eslint.org/docs/latest/rules/
  'complexity',
  'consistent-return',
  'default-case',
  'func-name-matching',
  'id-length',
  'id-match',
  'init-declarations',
  'max-classes-per-file',
  'max-depth',
  'max-lines',
  'max-lines-per-function',
  'max-nested-callbacks',
  'max-params',
  'max-statements',
  'no-await-in-loop',
  'no-bitwise',
  'no-continue',
  'no-delete-var',
  'no-div-regex',
  'no-eq-null',
  'no-invalid-this',
  'no-lonely-if',
  'no-magic-numbers',
  'no-negated-condition',
  'no-nested-ternary',
  'no-nonoctal-decimal-escape',
  'no-octal',
  'no-restricted-exports',
  'no-restricted-properties',
  'no-sparse-arrays',
  'no-template-curly-in-string',
  'no-ternary',
  'no-undefined',
  'no-unexpected-multiline',
  'no-unmodified-loop-condition',
  'no-warning-comments',
  'prefer-named-capture-group',
  'prefer-object-has-own',
  'require-atomic-updates',
  'require-unicode-regexp',
  'sort-imports',
  'sort-keys',
  'sort-vars',
  'unicode-bom',
  'vars-on-top',

  // https://eslint-community.github.io/eslint-plugin-eslint-comments
  '@eslint-community/eslint-comments/require-description',
  '@eslint-community/eslint-comments/no-restricted-disable',
  '@eslint-community/eslint-comments/require-description',

  // https://eslint.style
  '@stylistic/array-bracket-newline',
  '@stylistic/array-bracket-spacing',
  '@stylistic/array-element-newline',
  '@stylistic/arrow-parens',
  '@stylistic/arrow-spacing',
  '@stylistic/block-spacing',
  '@stylistic/brace-style',
  '@stylistic/comma-dangle',
  '@stylistic/comma-spacing',
  '@stylistic/comma-style',
  '@stylistic/computed-property-spacing',
  '@stylistic/curly-newline',
  '@stylistic/dot-location',
  '@stylistic/eol-last',
  '@stylistic/func-call-spacing',
  '@stylistic/function-call-argument-newline',
  '@stylistic/function-call-spacing',
  '@stylistic/function-paren-newline',
  '@stylistic/generator-star-spacing',
  '@stylistic/implicit-arrow-linebreak',
  '@stylistic/indent',
  '@stylistic/indent-binary-ops',
  '@stylistic/jsx-child-element-spacing',
  '@stylistic/jsx-closing-bracket-location',
  '@stylistic/jsx-closing-tag-location',
  '@stylistic/jsx-curly-newline',
  '@stylistic/jsx-curly-spacing',
  '@stylistic/jsx-equals-spacing',
  '@stylistic/jsx-first-prop-new-line',
  '@stylistic/jsx-function-call-newline',
  '@stylistic/jsx-indent-props',
  '@stylistic/jsx-max-props-per-line',
  '@stylistic/jsx-newline',
  '@stylistic/jsx-one-expression-per-line',
  '@stylistic/jsx-pascal-case',
  '@stylistic/jsx-props-no-multi-spaces',
  '@stylistic/jsx-quotes',
  '@stylistic/jsx-sort-props',
  '@stylistic/jsx-tag-spacing',
  '@stylistic/jsx-wrap-multilines',
  '@stylistic/key-spacing',
  '@stylistic/keyword-spacing',
  '@stylistic/linebreak-style',
  '@stylistic/max-statements-per-line',
  '@stylistic/member-delimiter-style',
  '@stylistic/multiline-ternary',
  '@stylistic/new-parens',
  '@stylistic/newline-per-chained-call',
  '@stylistic/no-confusing-arrow',
  '@stylistic/no-extra-parens',
  '@stylistic/no-extra-semi',
  '@stylistic/no-floating-decimal',
  '@stylistic/no-mixed-operators',
  '@stylistic/no-mixed-spaces-and-tabs',
  '@stylistic/no-multi-spaces',
  '@stylistic/no-multiple-empty-lines',
  '@stylistic/no-trailing-spaces',
  '@stylistic/no-whitespace-before-property',
  '@stylistic/nonblock-statement-body-position',
  '@stylistic/object-curly-newline',
  '@stylistic/object-curly-spacing',
  '@stylistic/object-property-newline',
  '@stylistic/one-var-declaration-per-line',
  '@stylistic/operator-linebreak',
  '@stylistic/padded-blocks',
  '@stylistic/quote-props',
  '@stylistic/rest-spread-spacing',
  '@stylistic/semi',
  '@stylistic/semi-spacing',
  '@stylistic/semi-style',
  '@stylistic/space-before-blocks',
  '@stylistic/space-before-function-paren',
  '@stylistic/space-in-parens',
  '@stylistic/space-infix-ops',
  '@stylistic/space-unary-ops',
  '@stylistic/switch-colon-spacing',
  '@stylistic/template-curly-spacing',
  '@stylistic/template-tag-spacing',
  '@stylistic/type-annotation-spacing',
  '@stylistic/type-generic-spacing',
  '@stylistic/type-named-tuple-spacing',
  '@stylistic/wrap-iife',
  '@stylistic/wrap-regex',
  '@stylistic/yield-star-spacing',

  // https://typescript-eslint.io/rules/
  '@typescript-eslint/ban-tslint-comment',
  '@typescript-eslint/consistent-return',
  '@typescript-eslint/consistent-type-exports',
  '@typescript-eslint/explicit-module-boundary-types',
  '@typescript-eslint/init-declarations',
  '@typescript-eslint/max-params',
  '@typescript-eslint/no-confusing-non-null-assertion',
  '@typescript-eslint/no-confusing-void-expression',
  '@typescript-eslint/no-dynamic-delete',
  '@typescript-eslint/no-floating-promises',
  '@typescript-eslint/no-import-type-side-effects',
  '@typescript-eslint/no-invalid-this',
  '@typescript-eslint/no-invalid-void-type',
  '@typescript-eslint/no-magic-numbers',
  '@typescript-eslint/no-misused-promises',
  '@typescript-eslint/no-misused-spread',
  '@typescript-eslint/no-mixed-enums',
  '@typescript-eslint/no-namespace',
  '@typescript-eslint/no-non-null-assertion',
  '@typescript-eslint/no-redeclare',
  '@typescript-eslint/no-restricted-types',
  '@typescript-eslint/no-unnecessary-parameter-property-assignment',
  '@typescript-eslint/no-unnecessary-type-parameters',
  '@typescript-eslint/no-unsafe-type-assertion',
  '@typescript-eslint/prefer-enum-initializers',
  '@typescript-eslint/prefer-readonly-parameter-types',
  '@typescript-eslint/prefer-readonly',
  '@typescript-eslint/promise-function-async',
  '@typescript-eslint/require-await',
  '@typescript-eslint/strict-boolean-expressions',
  '@typescript-eslint/switch-exhaustiveness-check',
  '@typescript-eslint/typedef',

  // https://github.com/un-ts/eslint-plugin-import-x
  'import-x/default',
  'import-x/dynamic-import-chunkname',
  'import-x/exports-last',
  'import-x/group-exports',
  'import-x/max-dependencies',
  'import-x/no-commonjs',
  'import-x/no-cycle',
  'import-x/no-default-export',
  'import-x/no-deprecated',
  'import-x/no-dynamic-require',
  'import-x/no-empty-named-blocks',
  'import-x/no-import-module-exports',
  'import-x/no-internal-modules',
  'import-x/no-named-as-default-member',
  'import-x/no-named-export',
  'import-x/no-namespace',
  'import-x/no-nodejs-modules',
  'import-x/no-relative-parent-imports',
  'import-x/no-rename-default',
  'import-x/no-restricted-paths',
  'import-x/no-unassigned-import',
  'import-x/no-unused-modules',
  'import-x/order',
  'import-x/prefer-default-export',
  'import-x/unambiguous',

  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting
  'jest-formatting/padding-around-all',
  'jest-formatting/padding-around-expect-groups',

  // https://github.com/gajus/eslint-plugin-jsdoc
  'jsdoc/check-alignment',
  'jsdoc/check-examples',
  'jsdoc/check-property-names',
  'jsdoc/check-syntax',
  'jsdoc/check-types',
  'jsdoc/check-values',
  'jsdoc/convert-to-jsdoc-comments',
  'jsdoc/implements-on-classes',
  'jsdoc/imports-as-dependencies',
  'jsdoc/informative-docs',
  'jsdoc/lines-before-block',
  'jsdoc/match-description',
  'jsdoc/no-missing-syntax',
  'jsdoc/no-types',
  'jsdoc/require-description-complete-sentence',
  'jsdoc/require-example',
  'jsdoc/require-file-overview',
  'jsdoc/require-property',
  'jsdoc/require-property-description',
  'jsdoc/require-property-name',
  'jsdoc/require-template',
  'jsdoc/require-throws',
  'jsdoc/require-yields',
  'jsdoc/require-yields-check',
  'jsdoc/text-escaping',
  'jsdoc/valid-types',

  // https://github.com/eslint-community/eslint-plugin-n
  'n/file-extension-in-import',
  'n/global-require',
  'n/no-callback-literal',
  'n/no-exports-assign',
  'n/no-extraneous-require',
  'n/no-missing-import',
  'n/no-missing-require',
  'n/no-mixed-requires',
  'n/no-process-env',
  'n/no-process-exit',
  'n/no-restricted-import',
  'n/no-restricted-require',
  'n/no-sync',
  'n/no-unpublished-import',
  'n/no-unpublished-require',
  'n/no-unsupported-features/es-builtins',
  'n/no-unsupported-features/es-syntax',
  'n/no-unsupported-features/node-builtins',
  'n/prefer-node-protocol',

  // https://perfectionist.dev
  'perfectionist/sort-decorators',
  'perfectionist/sort-enums',
  'perfectionist/sort-interfaces',
  'perfectionist/sort-modules',
  'perfectionist/sort-object-types',
  'perfectionist/sort-sets',
  'perfectionist/sort-switch-case',
  'perfectionist/sort-variable-declarations',

  // https://github.com/sindresorhus/eslint-plugin-unicorn
  'unicorn/consistent-existence-index-check',
  'unicorn/empty-brace-spaces',
  'unicorn/explicit-length-check',
  'unicorn/filename-case',
  'unicorn/no-abusive-eslint-disable',
  'unicorn/no-anonymous-default-export',
  'unicorn/no-array-callback-reference',
  'unicorn/no-await-expression-member',
  'unicorn/no-keyword-prefix',
  'unicorn/no-magic-array-flat-depth',
  'unicorn/no-nested-ternary',
  'unicorn/no-new-buffer',
  'unicorn/no-null',
  'unicorn/no-process-exit',
  'unicorn/no-thenable',
  'unicorn/no-unnecessary-polyfills',
  'unicorn/no-unreadable-array-destructuring',
  'unicorn/number-literal-case',
  'unicorn/prefer-add-event-listener',
  'unicorn/prefer-code-point',
  'unicorn/prefer-module',
  'unicorn/prefer-query-selector',
  'unicorn/prefer-spread',
  'unicorn/prefer-string-raw',
  'unicorn/prefer-switch',
  'unicorn/prevent-abbreviations',
  'unicorn/require-array-join-separator',
  'unicorn/require-number-to-fixed-digits-argument',
  'unicorn/string-content'
])

const baseRules = []
const typescriptRules = []
const typecheckingRules = []
const baseConfig = config.find((c) => c.name === 'base')
const typescriptConfig = config.find((c) => c.name === 'typescript')
const typecheckingConfig = typechecking.find((c) => c.name === 'typechecking')

for (const [name, rule] of builtinRules) {
  if (rule.meta.deprecated && !allowedDeprecated.has(name)) {
    test(`rule ${name} (deprecated)`, () => {
      assert.ok(
        !(name in baseConfig.rules || disabled.has(name)),
        `${name} should not be considered`
      )
    })
  } else {
    baseRules.push(name)

    test(`rule ${name}`, () => {
      assert.ok(name in baseConfig.rules || disabled.has(name), `${name} should be considered`)
      assert.ok(
        !(name in baseConfig.rules && disabled.has(name)),
        `${name} should not be specified and disabled`
      )
    })
  }
}

for (const [pluginPrefix, plugin] of Object.entries(baseConfig.plugins)) {
  const pluginName = pluginPrefix.startsWith('@')
    ? `${pluginPrefix}/eslint-plugin`
    : `eslint-plugin-${pluginPrefix}`

  describe(pluginName, () => {
    for (const [ruleName, rule] of Object.entries(plugin.rules)) {
      const name = `${pluginPrefix}/${ruleName}`

      if (rule.meta.deprecated) {
        test(`rule ${name} (deprecated)`, () => {
          assert.ok(
            !(name in baseConfig.rules || disabled.has(name)),
            `${name} should not be considered`
          )
        })
      } else if (rule.meta.docs?.requiresTypeChecking && ruleName !== 'naming-convention') {
        typecheckingRules.push(name)

        test(`rule ${name}`, () => {
          assert.ok(
            (name in typecheckingConfig.rules && typecheckingConfig.rules[name] !== 'off') ||
              disabled.has(name),
            `${name} should be considered`
          )
          assert.ok(
            !(name in typecheckingConfig.rules && disabled.has(name)),
            `${name} should not be specified and disabled`
          )
          if (name in typecheckingConfig.rules && rule.meta?.docs?.extendsBaseRule) {
            assert.ok(typecheckingConfig.rules[ruleName] === 'off', `should turn ${ruleName} off`)
          }
        })
      } else if (pluginPrefix === '@typescript-eslint') {
        typescriptRules.push(name)

        test(`rule ${name}`, () => {
          assert.ok(
            (name in typescriptConfig.rules && typescriptConfig.rules[name] !== 'off') ||
              disabled.has(name),
            `${name} should be considered`
          )
          assert.ok(
            !(name in typescriptConfig.rules && disabled.has(name)),
            `${name} should not be specified and disabled`
          )
          if (name in typescriptConfig.rules && rule.meta?.docs?.extendsBaseRule) {
            assert.ok(typescriptConfig.rules[ruleName] === 'off', `should turn ${ruleName} off`)
          }
        })
      } else {
        baseRules.push(name)

        test(`rule ${name}`, () => {
          assert.ok(
            (name in baseConfig.rules && baseConfig.rules[name] !== 'off') || disabled.has(name),
            `${name} should be considered`
          )
          assert.ok(
            !(name in baseConfig.rules && disabled.has(name)),
            `${name} should not be specified and disabled`
          )
        })
      }
    }
  })
}

baseRules.sort(compareRules)

test('sort base rules aphabetically', () => {
  const ruleNames = Object.keys(baseConfig.rules)
  assert.deepEqual(ruleNames, ruleNames.toSorted(compareRules))
})

test('sort TypeScript rules aphabetically', () => {
  const ruleNames = Object.keys(typescriptConfig.rules)
  assert.deepEqual(ruleNames, ruleNames.toSorted(compareRules))
})

test('sort type checking rules aphabetically', () => {
  const ruleNames = Object.keys(typecheckingConfig.rules)
  assert.deepEqual(ruleNames, ruleNames.toSorted(compareRules))
})

test('sort disabled aphabetically', () => {
  const ruleNames = [...baseRules]
  assert.deepEqual(ruleNames, ruleNames.toSorted(compareRules))
})
