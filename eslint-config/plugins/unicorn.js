/**
 * https://github.com/sindresorhus/eslint-plugin-unicorn
 */
module.exports = {
  rules: {
    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
     */
    'unicorn/better-regex': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
     */
    'unicorn/catch-error-name': ['error', { name: 'error', ignore: ['err', /Error^/] }],

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
     */
    'unicorn/consistent-function-scoping': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
     */
    'unicorn/custom-error-definition': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
     */
    'unicorn/error-message': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
     */
    'unicorn/escape-case': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
     */
    'unicorn/expiring-todo-comments': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
     */
    'unicorn/explicit-length-check': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
     */
    'unicorn/filename-case': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
     */
    'unicorn/import-index': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
     */
    'unicorn/new-for-builtins': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
     */
    'unicorn/no-abusive-eslint-disable': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
     */
    'unicorn/no-array-instanceof': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
     */
    'unicorn/no-console-spaces': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
     */
    'unicorn/no-fn-reference-in-iterator': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
     */
    'unicorn/no-for-loop': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
     */
    'unicorn/no-hex-escape': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md
     */
    'unicorn/no-keyword-prefix': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
     *
     * Prettier
     */
    'unicorn/no-nested-ternary': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
     *
     * Handled by node/no-deprecated-api
     */
    'unicorn/no-new-buffer': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md
     */
    'unicorn/no-null': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-object-as-default-parameter.md
     */
    'unicorn/no-object-as-default-parameter': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
     */
    'unicorn/no-process-exit': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-reduce.md
     */
    'unicorn/no-reduce': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
     */
    'unicorn/no-unreadable-array-destructuring': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
     */
    'unicorn/no-unsafe-regex': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
     */
    'unicorn/no-unused-properties': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
     */
    'unicorn/no-useless-undefined': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
     */
    'unicorn/no-zero-fractions': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
     *
     * Prettier
     */
    'unicorn/number-literal-case': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
     */
    'unicorn/prefer-add-event-listener': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
     */
    'unicorn/prefer-array-find': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md
     */
    'unicorn/prefer-dataset': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
     */
    'unicorn/prefer-event-key': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
     *
     * @deprecated
     */
    'unicorn/prefer-exponentiation-operator': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
     */
    'unicorn/prefer-flat-map': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
     */
    'unicorn/prefer-includes': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
     */
    'unicorn/prefer-modern-dom-apis': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
     */
    'unicorn/prefer-negative-index': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
     */
    'unicorn/prefer-node-append': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
     */
    'unicorn/prefer-node-remove': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md
     */
    'unicorn/prefer-number-properties': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
     */
    'unicorn/prefer-optional-catch-binding': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
     */
    'unicorn/prefer-query-selector': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
     */
    'unicorn/prefer-reflect-apply': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-replace-all.md
     */
    'unicorn/prefer-replace-all': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md
     */
    'unicorn/prefer-set-has': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
     */
    'unicorn/prefer-spread': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
     */
    'unicorn/prefer-starts-ends-with': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
     */
    'unicorn/prefer-string-slice': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
     */
    'unicorn/prefer-text-content': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-trim-start-end.md
     */
    'unicorn/prefer-trim-start-end': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
     */
    'unicorn/prefer-type-error': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
     */
    'unicorn/prevent-abbreviations': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
     *
     * @deprecated
     */
    'unicorn/regex-shorthand': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/string-content.md
     */
    'unicorn/string-content': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
     */
    'unicorn/throw-new-error': 'error',
  },
};
