/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
         */
        '@typescript-eslint/await-thenable': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
         */
        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
         *
         * Defined in the TypeScript override.
         */
        '@typescript-eslint/naming-convention': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
         */
        '@typescript-eslint/no-base-to-string': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
         */
        '@typescript-eslint/no-misused-promises': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
         */
        '@typescript-eslint/no-throw-literal': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
         */
        '@typescript-eslint/no-unnecessary-condition': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
         */
        '@typescript-eslint/no-unsafe-assignment': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
         */
        '@typescript-eslint/no-unsafe-call': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
         */
        '@typescript-eslint/no-unsafe-member-access': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
         */
        '@typescript-eslint/no-unsafe-return': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
         */
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
         */
        '@typescript-eslint/prefer-regexp-exec': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-starts-ends-with': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
         */
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
         */
        '@typescript-eslint/require-await': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
         */
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
         */
        '@typescript-eslint/restrict-template-expressions': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
         */
        '@typescript-eslint/return-await': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
         */
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowString: true,
            allowNumber: true,
            allowNullableObject: true,
            allowNullableBoolean: true,
            allowNullableString: true,
            allowNullableNumber: true,
            allowAny: false,
          },
        ],

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
         */
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      },
    },
  ],
};
