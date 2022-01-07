/**
 * These rules relate to better ways of doing things to help you avoid problems.
 */
module.exports = {
  /**
   * https://eslint.org/docs/rules/accessor-pairs
   */
  'accessor-pairs': 'error',

  /**
   * https://eslint.org/docs/rules/array-callback-return
   */
  'array-callback-return': ['error', { allowImplicit: true }],

  /**
   * https://eslint.org/docs/rules/block-scoped-var
   */
  'block-scoped-var': 'error',

  /**
   * https://eslint.org/docs/rules/class-methods-use-this
   */
  'class-methods-use-this': 'error',

  /**
   * https://eslint.org/docs/rules/complexity
   *
   * Use proper judgement in code review.
   */
  complexity: 'off',

  /**
   * https://eslint.org/docs/rules/consistent-return
   */
  'consistent-return': 'off',

  /**
   * https://eslint.org/docs/rules/curly
   */
  curly: 'error',

  /**
   * https://eslint.org/docs/rules/default-case
   */
  'default-case': 'error',

  /**
   * https://eslint.org/docs/rules/default-case-last
   */
  'default-case-last': 'error',

  /**
   * https://eslint.org/docs/rules/default-param-last
   */
  'default-param-last': 'error',

  /**
   * https://eslint.org/docs/rules/dot-location
   *
   * Prettier
   */
  'dot-location': 'off',

  /**
   * https://eslint.org/docs/rules/dot-notation
   */
  'dot-notation': 'error',

  /**
   * https://eslint.org/docs/rules/eqeqeq
   */
  eqeqeq: ['error', 'always', { null: 'never' }],

  /**
   * https://eslint.org/docs/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

  /**
   * https://eslint.org/docs/rules/guard-for-in
   */
  'guard-for-in': 'error',

  /**
   * https://eslint.org/docs/rules/max-classes-per-file
   */
  'max-classes-per-file': 'off',

  /**
   * https://eslint.org/docs/rules/no-alert
   */
  'no-alert': 'error',

  /**
   * https://eslint.org/docs/rules/no-caller
   */
  'no-caller': 'error',

  /**
   * https://eslint.org/docs/rules/no-case-declarations
   */
  'no-case-declarations': 'error',

  /**
   * https://eslint.org/docs/rules/no-constructor-return
   */
  'no-constructor-return': 'error',

  /**
   * https://eslint.org/docs/rules/no-div-regex
   */
  'no-div-regex': 'error',

  /**
   * https://eslint.org/docs/rules/no-else-return
   */
  'no-else-return': ['error', { allowElseIf: false }],

  /**
   * https://eslint.org/docs/rules/no-empty-function
   */
  'no-empty-function': 'error',

  /**
   * https://eslint.org/docs/rules/no-empty-pattern
   */
  'no-empty-pattern': 'error',

  /**
   * https://eslint.org/docs/rules/no-eq-null
   */
  'no-eq-null': 'off',

  /**
   * https://eslint.org/docs/rules/no-eval
   */
  'no-eval': 'error',

  /**
   * https://eslint.org/docs/rules/no-extend-native
   */
  'no-extend-native': 'error',

  /**
   * https://eslint.org/docs/rules/no-extra-bind
   */
  'no-extra-bind': 'error',

  /**
   * https://eslint.org/docs/rules/no-extra-label
   */
  'no-extra-label': 'error',

  /**
   * https://eslint.org/docs/rules/no-fallthrough
   */
  'no-fallthrough': 'error',

  /**
   * https://eslint.org/docs/rules/no-floating-decimal
   *
   * Prettier
   */
  'no-floating-decimal': 'off',

  /**
   * https://eslint.org/docs/rules/no-global-assign
   */
  'no-global-assign': 'error',

  /**
   * https://eslint.org/docs/rules/no-implicit-coercion
   */
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],

  /**
   * https://eslint.org/docs/rules/no-implicit-globals
   */
  'no-implicit-globals': 'error',

  /**
   * https://eslint.org/docs/rules/no-implied-eval
   */
  'no-implied-eval': 'error',

  /**
   * https://eslint.org/docs/rules/no-invalid-this
   */
  'no-invalid-this': ['error', { capIsConstructor: false }],

  /**
   * https://eslint.org/docs/rules/no-iterator
   */
  'no-iterator': 'error',

  /**
   * https://eslint.org/docs/rules/no-labels
   */
  'no-labels': ['error', { allowLoop: true }],

  /**
   * https://eslint.org/docs/rules/no-lone-blocks
   */
  'no-lone-blocks': 'error',

  /**
   * https://eslint.org/docs/rules/no-loop-func
   */
  'no-loop-func': 'error',

  /**
   * https://eslint.org/docs/rules/no-magic-numbers
   */
  'no-magic-numbers': 'off',

  /**
   * https://eslint.org/docs/rules/no-multi-spaces
   *
   * Prettier
   */
  'no-multi-spaces': 'off',

  /**
   * https://eslint.org/docs/rules/no-multi-str
   */
  'no-multi-str': 'error',

  /**
   * https://eslint.org/docs/rules/no-new
   */
  'no-new': 'error',

  /**
   * https://eslint.org/docs/rules/no-new-func
   */
  'no-new-func': 'error',

  /**
   * https://eslint.org/docs/rules/no-new-wrappers
   */
  'no-new-wrappers': 'error',

  /**
   * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
   *
   * Prettier
   */
  'no-nonoctal-decimal-escape': 'off',

  /**
   * https://eslint.org/docs/rules/no-octal
   *
   * This is useful for limited use cases.
   */
  'no-octal': 'off',

  /**
   * https://eslint.org/docs/rules/no-octal-escape
   */
  'no-octal-escape': 'error',

  /**
   * https://eslint.org/docs/rules/no-param-reassign
   */
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        // Array reducers.
        'acc',
        'accumulator',

        // Koa context.
        'ctx',
      ],
    },
  ],

  /**
   * https://eslint.org/docs/rules/no-proto
   */
  'no-proto': 'error',

  /**
   * https://eslint.org/docs/rules/no-redeclare
   */
  'no-redeclare': 'error',

  /**
   * https://eslint.org/docs/rules/no-restricted-properties
   */
  'no-restricted-properties': ['error', { property: 'prototype', message: 'Use a class instead.' }],

  /**
   * https://eslint.org/docs/rules/no-return-assign
   */
  'no-return-assign': ['error', 'always'],

  /**
   * https://eslint.org/docs/rules/no-return-await
   */
  'no-return-await': 'error',

  /**
   * https://eslint.org/docs/rules/no-script-url
   */
  'no-script-url': 'error',

  /**
   * https://eslint.org/docs/rules/no-self-assign
   */
  'no-self-assign': 'error',

  /**
   * https://eslint.org/docs/rules/no-self-compare
   */
  'no-self-compare': 'error',

  /**
   * https://eslint.org/docs/rules/no-sequences
   */
  'no-sequences': ['error', { allowInParentheses: false }],

  /**
   * https://eslint.org/docs/rules/no-throw-literal
   */
  'no-throw-literal': 'error',

  /**
   * https://eslint.org/docs/rules/no-unmodified-loop-condition
   *
   * The condition may change by function calls.
   */
  'no-unmodified-loop-condition': 'off',

  /**
   * https://eslint.org/docs/rules/no-unused-expressions
   */
  'no-unused-expressions': ['error', { enforceForJSX: true }],

  /**
   * https://eslint.org/docs/rules/no-unused-labels
   */
  'no-unused-labels': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-call
   */
  'no-useless-call': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-catch
   */
  'no-useless-catch': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-concat
   */
  'no-useless-concat': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-escape
   */
  'no-useless-escape': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-return
   */
  'no-useless-return': 'error',

  /**
   * https://eslint.org/docs/rules/no-void
   */
  'no-void': 'error',

  /**
   * https://eslint.org/docs/rules/no-warning-comments
   */
  'no-warning-comments': 'off',

  /**
   * https://eslint.org/docs/rules/no-with
   */
  'no-with': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group': 'off',

  /**
   * https://eslint.org/docs/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-regex-literals
   */
  'prefer-regex-literals': 'error',

  /**
   * https://eslint.org/docs/rules/radix
   */
  radix: ['error', 'as-needed'],

  /**
   * https://eslint.org/docs/rules/require-await
   */
  'require-await': 'error',

  /**
   * https://eslint.org/docs/rules/require-unicode-regexp
   */
  'require-unicode-regexp': 'off',

  /**
   * https://eslint.org/docs/rules/vars-on-top
   */
  'vars-on-top': 'off',

  /**
   * https://eslint.org/docs/rules/wrap-iife
   *
   * Prettier
   */
  'wrap-iife': 'off',

  /**
   * https://eslint.org/docs/rules/yoda
   */
  yoda: 'error',
};
