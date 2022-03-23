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
         * https://typescript-eslint.io/rules/await-thenable.md
         */
        '@typescript-eslint/await-thenable': 'error',

        /**
         * https://typescript-eslint.io/rules/consistent-type-exports.md
         */
        '@typescript-eslint/consistent-type-exports': 'off',

        /**
         * https://typescript-eslint.io/rules/dot-notation.md
         */
        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',

        /**
         * https://typescript-eslint.io/rules/naming-convention.md
         *
         * Defined in the TypeScript override.
         */
        '@typescript-eslint/naming-convention': 'error',

        /**
         * https://typescript-eslint.io/rules/no-confusing-void-expression".md
         */
        '@typescript-eslint/no-confusing-void-expression': 'off',

        /**
         * https://typescript-eslint.io/rules/no-base-to-string.md
         */
        '@typescript-eslint/no-base-to-string': 'error',

        /**
         * https://typescript-eslint.io/rules/no-floating-promises.md
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * https://typescript-eslint.io/rules/no-for-in-array.md
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * https://typescript-eslint.io/rules/no-implied-eval.md
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /**
         * https://typescript-eslint.io/rules/no-misused-promises.md
         */
        '@typescript-eslint/no-misused-promises': 'off',

        /**
         * https://typescript-eslint.io/rules/no-meaningless-void-operator.md
         */
        '@typescript-eslint/no-meaningless-void-operator': 'error',

        /**
         * https://typescript-eslint.io/rules/no-redundant-type-constituents.md
         */
        '@typescript-eslint/no-redundant-type-constituents': 'error',

        /**
         * https://typescript-eslint.io/rules/no-throw-literal.md
         */
        '@typescript-eslint/no-throw-literal': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare.md
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-condition.md
         */
        '@typescript-eslint/no-unnecessary-condition': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-qualifier.md
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-arguments.md
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-assertion.md
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-argument.md
         */
        '@typescript-eslint/no-unsafe-argument': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-assignment.md
         */
        '@typescript-eslint/no-unsafe-assignment': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-call.md
         */
        '@typescript-eslint/no-unsafe-call': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-member-access.md
         */
        '@typescript-eslint/no-unsafe-member-access': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-return.md
         */
        '@typescript-eslint/no-unsafe-return': 'error',

        /**
         * https://typescript-eslint.io/rules/non-nullable-type-assertion-style.md
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-includes.md
         */
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-nullish-coalescing.md
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-readonly.md
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-readonly-parameter-types.md
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-reduce-type-parameter.md
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-regexp-exec.md
         */
        '@typescript-eslint/prefer-regexp-exec': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-return-this-type.md
         */
        '@typescript-eslint/prefer-return-this-type': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-string-starts-ends-with.md
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-starts-ends-with': 'off',

        /**
         * https://typescript-eslint.io/rules/promise-function-async.md
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * https://typescript-eslint.io/rules/require-array-sort-compare.md
         */
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

        /**
         * https://typescript-eslint.io/rules/require-await.md
         */
        '@typescript-eslint/require-await': 'off',

        /**
         * https://typescript-eslint.io/rules/restrict-plus-operands.md
         */
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

        /**
         * https://typescript-eslint.io/rules/restrict-template-expressions.md
         */
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true },
        ],

        /**
         * https://typescript-eslint.io/rules/return-await.md
         */
        '@typescript-eslint/return-await': 'error',

        /**
         * https://typescript-eslint.io/rules/strict-boolean-expressions.md
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * https://typescript-eslint.io/rules/switch-exhaustiveness-check.md
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /**
         * https://typescript-eslint.io/rules/unbound-method.md
         */
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      },
    },
  ],
};
