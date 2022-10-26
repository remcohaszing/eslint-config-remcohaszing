/**
 * https://github.com/sindresorhus/eslint-plugin-unicorn
 */
module.exports = {
  rules: {
    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
     */
    'unicorn/better-regex': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
     */
    'unicorn/catch-error-name': ['error', { name: 'error', ignore: ['err', /Error^/] }],

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
     */
    'unicorn/consistent-function-scoping': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
     */
    'unicorn/consistent-destructuring': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
     */
    'unicorn/custom-error-definition': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
     */
    'unicorn/error-message': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
     *
     * Prettier
     */
    'unicorn/empty-brace-spaces': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
     */
    'unicorn/escape-case': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
     */
    'unicorn/expiring-todo-comments': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
     */
    'unicorn/explicit-length-check': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     */
    'unicorn/filename-case': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-index.md
     *
     * @deprecated
     */
    'unicorn/import-index': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
     */
    'unicorn/import-style': [
      'error',
      {
        extendDefaultStyles: false,
        styles: {
          'node:child_process': { named: true },
          'node:crypto': { named: true },
          'node:events': { named: true },
          'node:fs': { named: true },
          'node:fs/promises': { named: true },
          'node:os': { named: true },
          'node:path': { named: true },
          'node:url': { named: true },
          'node:util': { named: true },
          'node:zlib': { named: true },

          preact: { named: true },
          'preact/compat': { named: true },
          'preact/hooks': { named: true },
          react: { named: true },
        },
      },
    ],

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
     */
    'unicorn/new-for-builtins': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
     */
    'unicorn/no-abusive-eslint-disable': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
     */
    'unicorn/no-array-callback-reference': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
     */
    'unicorn/no-array-for-each': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-instanceof.md
     *
     * @deprecated
     */
    'unicorn/no-array-instanceof': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
     */
    'unicorn/no-array-method-this-argument': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
     */
    'unicorn/no-array-push-push': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
     */
    'unicorn/no-array-reduce': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
     */
    'unicorn/no-await-expression-member': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
     */
    'unicorn/no-console-spaces': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
     */
    'unicorn/no-document-cookie': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
     */
    'unicorn/no-empty-file': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
     */
    'unicorn/no-instanceof-array': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-reduce.md
     *
     * @deprecated
     */
    'unicorn/no-reduce': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
     */
    'unicorn/no-static-only-class': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
     */
    'unicorn/no-this-assignment': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-fn-reference-in-iterator.md
     *
     * @deprecated
     */
    'unicorn/no-fn-reference-in-iterator': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
     */
    'unicorn/no-for-loop': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
     */
    'unicorn/no-hex-escape': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
     */
    'unicorn/no-invalid-remove-event-listener': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
     */
    'unicorn/no-keyword-prefix': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
     */
    'unicorn/no-lonely-if': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
     *
     * Prettier
     */
    'unicorn/no-nested-ternary': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
     */
    'unicorn/no-new-array': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
     *
     * Handled by node/no-deprecated-api
     */
    'unicorn/no-new-buffer': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
     */
    'unicorn/no-null': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
     */
    'unicorn/no-object-as-default-parameter': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
     */
    'unicorn/no-process-exit': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
     */
    'unicorn/no-thenable': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
     */
    'unicorn/no-unnecessary-await': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
     */
    'unicorn/no-unreadable-iife': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
     */
    'unicorn/no-unreadable-array-destructuring': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
     */
    'unicorn/no-unsafe-regex': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
     */
    'unicorn/no-unused-properties': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
     */
    'unicorn/no-useless-fallback-in-spread': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
     */
    'unicorn/no-useless-length-check': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
     */
    'unicorn/no-useless-promise-resolve-reject': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
     */
    'unicorn/no-useless-spread': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
     */
    'unicorn/no-useless-switch-case': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
     */
    'unicorn/no-useless-undefined': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
     */
    'unicorn/no-zero-fractions': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
     *
     * Prettier
     */
    'unicorn/number-literal-case': 'off',

    /**
     * hhttps://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
     */
    'unicorn/numeric-separators-style': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
     */
    'unicorn/prefer-add-event-listener': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
     */
    'unicorn/prefer-array-find': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
     */
    'unicorn/prefer-array-flat': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
     */
    'unicorn/prefer-array-index-of': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
     */
    'unicorn/prefer-array-flat-map': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
     */
    'unicorn/prefer-array-some': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
     *
     * Browsers and NodeJS don’t support this yet.
     */
    'unicorn/prefer-at': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
     */
    'unicorn/prefer-code-point': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dataset.md
     *
     * @deprecated
     */
    'unicorn/prefer-dataset': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
     */
    'unicorn/prefer-date-now': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
     */
    'unicorn/prefer-default-parameters': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
     */
    'unicorn/prefer-dom-node-dataset': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
     */
    'unicorn/prefer-dom-node-append': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
     */
    'unicorn/prefer-dom-node-remove': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
     */
    'unicorn/prefer-dom-node-text-content': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
     */
    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-key.md
     *
     * @deprecated
     */
    'unicorn/prefer-event-key': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
     */
    'unicorn/prefer-event-target': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-exponentiation-operator.md
     *
     * @deprecated
     */
    'unicorn/prefer-exponentiation-operator': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-flat-map.md
     *
     * @deprecated
     */
    'unicorn/prefer-flat-map': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
     */
    'unicorn/prefer-includes': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
     */
    'unicorn/prefer-json-parse-buffer': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
     */
    'unicorn/prefer-keyboard-event-key': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
     */
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
     */
    'unicorn/prefer-math-trunc': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
     */
    'unicorn/prefer-modern-dom-apis': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
     */
    'unicorn/prefer-modern-math-apis': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
     */
    'unicorn/prefer-module': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
     */
    'unicorn/prefer-native-coercion-functions': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
     */
    'unicorn/prefer-negative-index': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-append.md
     *
     * @deprecated
     */
    'unicorn/prefer-node-append': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-remove.md
     *
     * @deprecated
     */
    'unicorn/prefer-node-remove': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
     */
    'unicorn/prefer-node-protocol': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
     */
    'unicorn/prefer-number-properties': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
     *
     * XXX
     */
    'unicorn/prefer-object-from-entries': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-has-own.md
     *
     * @deprecated
     */
    'unicorn/prefer-object-has-own': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
     */
    'unicorn/prefer-optional-catch-binding': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
     */
    'unicorn/prefer-prototype-methods': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
     */
    'unicorn/prefer-query-selector': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
     */
    'unicorn/prefer-reflect-apply': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
     */
    'unicorn/prefer-regexp-test': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-replace-all.md
     *
     * @deprecated
     */
    'unicorn/prefer-replace-all': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
     */
    'unicorn/prefer-set-has': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-starts-ends-with.md
     *
     * @deprecated
     */
    'unicorn/prefer-starts-ends-with': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
     */
    'unicorn/prefer-spread': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
     */
    'unicorn/prefer-string-replace-all': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
     */
    'unicorn/prefer-string-starts-ends-with': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
     */
    'unicorn/prefer-string-trim-start-end': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
     */
    'unicorn/prefer-string-slice': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
     */
    'unicorn/prefer-switch': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
     */
    'unicorn/prefer-ternary': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-text-content.md
     *
     * @deprecated
     */
    'unicorn/prefer-text-content': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
     *
     * Not yet supported in all NodeJS versions
     */
    'unicorn/prefer-top-level-await': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-trim-start-end.md
     *
     * @deprecated
     */
    'unicorn/prefer-trim-start-end': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
     */
    'unicorn/prefer-type-error': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     */
    'unicorn/prevent-abbreviations': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/regex-shorthand.md
     *
     * @deprecated
     */
    'unicorn/regex-shorthand': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
     */
    'unicorn/relative-url-style': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
     */
    'unicorn/require-array-join-separator': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
     */
    'unicorn/require-number-to-fixed-digits-argument': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
     */
    'unicorn/require-post-message-target-origin': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
     */
    'unicorn/string-content': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
     */
    'unicorn/switch-case-braces': ['error', 'avoid'],

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
     */
    'unicorn/template-indent': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
     */
    'unicorn/text-encoding-identifier-case': 'error',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
     */
    'unicorn/throw-new-error': 'error',
  },
};
