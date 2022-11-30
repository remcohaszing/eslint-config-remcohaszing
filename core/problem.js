/**
 * These rules relate to possible syntax or logic errors in JavaScript code.
 */
module.exports = {
  /**
   * https://eslint.org/docs/latest/rules/array-callback-return
   */
  'array-callback-return': ['error', { allowImplicit: true }],

  /**
   * https://eslint.org/docs/latest/rules/constructor-super
   */
  'constructor-super': 'error',

  /**
   * https://eslint.org/docs/latest/rules/for-direction
   */
  'for-direction': 'error',

  /**
   * https://eslint.org/docs/latest/rules/getter-return
   */
  'getter-return': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-async-promise-executor
   */
  'no-async-promise-executor': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-await-in-loop
   */
  'no-await-in-loop': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-class-assign
   */
  'no-class-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-cond-assign
   */
  'no-cond-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-const-assign
   */
  'no-const-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-constant-condition
   */
  'no-constant-condition': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-constructor-return
   */
  'no-constructor-return': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-control-regex
   */
  'no-control-regex': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-debugger
   */
  'no-debugger': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-dupe-args
   */
  'no-dupe-args': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  'no-dupe-class-members': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-dupe-else-if
   */
  'no-dupe-else-if': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-dupe-keys
   */
  'no-dupe-keys': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-duplicate-case
   */
  'no-duplicate-case': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-duplicate-imports
   */
  'no-duplicate-imports': ['error', { includeExports: true }],

  /**
   * https://eslint.org/docs/latest/rules/no-empty-character-class
   */
  'no-empty-character-class': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-empty-pattern
   */
  'no-empty-pattern': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-ex-assign
   */
  'no-ex-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-fallthrough
   */
  'no-fallthrough': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-func-assign
   */
  'no-func-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-import-assign
   */
  'no-import-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-inner-declarations
   */
  'no-inner-declarations': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-invalid-regexp
   */
  'no-invalid-regexp': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace': ['error', { skipStrings: false }],

  /**
   * https://eslint.org/docs/latest/rules/no-loss-of-precision
   */
  'no-loss-of-precision': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-misleading-character-class
   */
  'no-misleading-character-class': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   */
  'no-new-native-nonconstructor': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-new-symbol
   */
  'no-new-symbol': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-obj-calls
   */
  'no-obj-calls': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-promise-executor-return
   */
  'no-promise-executor-return': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-prototype-builtins
   */
  'no-prototype-builtins': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-self-assign
   */
  'no-self-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-self-compare
   */
  'no-self-compare': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-setter-return
   */
  'no-setter-return': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-sparse-arrays
   */
  'no-sparse-arrays': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-this-before-super
   */
  'no-this-before-super': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-undef
   */
  'no-undef': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unexpected-multiline
   *
   * This causes issues with some Prettier configurations. Just use semicolons.
   */
  'no-unexpected-multiline': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   *
   * The condition may change by function calls.
   */
  'no-unmodified-loop-condition': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-unreachable
   */
  'no-unreachable': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unreachable-loop
   */
  'no-unreachable-loop': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unsafe-finally
   */
  'no-unsafe-finally': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unsafe-negation
   */
  'no-unsafe-negation': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   */
  'no-unsafe-optional-chaining': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unused-private-class-members
   */
  'no-unused-private-class-members': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],

  /**
   * https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-backreference
   */
  'no-useless-backreference': 'error',

  /**
   * https://eslint.org/docs/latest/rules/require-atomic-updates
   */
  'require-atomic-updates': 'off',

  /**
   * https://eslint.org/docs/latest/rules/use-isnan
   */
  'use-isnan': ['error', { enforceForIndexOf: true }],

  /**
   * https://eslint.org/docs/latest/rules/valid-typeof
   */
  'valid-typeof': 'error',
};
