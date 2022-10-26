/**
 * Rules for Jest tests.
 */
module.exports = {
  plugins: ['jest', 'jest-formatting'],
  env: {
    'jest/globals': true,
  },
  rules: {
    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
     */
    'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
     */
    'jest/expect-expect': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
     */
    'jest/max-expects': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
     */
    'jest/max-nested-describe': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
     */
    'jest/no-alias-methods': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
     */
    'jest/no-commented-out-tests': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
     */
    'jest/no-conditional-expect': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
     */
    'jest/no-conditional-in-test': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
     */
    'jest/no-deprecated-functions': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
     */
    'jest/no-disabled-tests': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
     */
    'jest/no-done-callback': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
     */
    'jest/no-duplicate-hooks': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
     */
    'jest/no-export': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
     */
    'jest/no-focused-tests': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
     */
    'jest/no-hooks': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
     */
    'jest/no-identical-title': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-if.md
     *
     * @deprecated
     */
    'jest/no-if': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
     */
    'jest/no-interpolation-in-snapshots': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
     */
    'jest/no-jasmine-globals': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
     */
    'jest/no-large-snapshots': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
     */
    'jest/no-mocks-import': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md
     */
    'jest/no-restricted-jest-methods': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
     */
    'jest/no-restricted-matchers': [
      'error',
      {
        resolves: 'Use expect(await) instead',
        'not.toHaveBeenCalledWith': 'Use not.toHaveBeenCalled() instead',
        'toBeFalsy()': 'Use toBe(false) instead.',
        'toBeTruthy()': 'Use toBe(true) instead.',
      },
    ],

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
     */
    'jest/no-standalone-expect': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
     *
     * Handled by jest/no-disabled-tests and jest/no-focused-tests
     */
    'jest/no-test-prefixes': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
     */
    'jest/no-test-return-statement': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
     */
    'jest/prefer-called-with': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
     */
    'jest/prefer-comparison-matcher': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
     */
    'jest/prefer-each': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
     */
    'jest/prefer-equality-matcher': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
     */
    'jest/prefer-expect-assertions': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
     */
    'jest/prefer-expect-resolves': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
     */
    'jest/prefer-hooks-in-order': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
     */
    'jest/prefer-hooks-on-top': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'jest/prefer-lowercase-title': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
     */
    'jest/prefer-mock-promise-shorthand': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
     */
    'jest/prefer-snapshot-hint': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
     */
    'jest/prefer-spy-on': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
     */
    'jest/prefer-strict-equal': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
     */
    'jest/prefer-to-be': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
     */
    'jest/prefer-to-contain': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
     */
    'jest/prefer-to-have-length': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
     */
    'jest/prefer-todo': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
     */
    'jest/require-hook': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
     */
    'jest/require-to-throw-message': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
     */
    'jest/require-top-level-describe': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
     */
    'jest/unbound-method': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
     */
    'jest/valid-describe-callback': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
     */
    'jest/valid-expect': 'error',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
     */
    'jest/valid-expect-in-promise': 'off',

    /**
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
     */
    'jest/valid-title': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-after-all-blocks.md
     */
    'jest-formatting/padding-around-after-all-blocks': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-after-each-blocks.md
     */
    'jest-formatting/padding-around-after-each-blocks': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-all.md
     */
    'jest-formatting/padding-around-all': 'off',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-before-all-blocks.md
     */
    'jest-formatting/padding-around-before-all-blocks': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-before-each-blocks.md
     */
    'jest-formatting/padding-around-before-each-blocks': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-describe-blocks.md
     */
    'jest-formatting/padding-around-describe-blocks': 'error',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-expect-groups.md
     */
    'jest-formatting/padding-around-expect-groups': 'off',

    /**
     * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/main/docs/rules/padding-around-test-blocks.md
     */
    'jest-formatting/padding-around-test-blocks': 'error',
  },
};
