/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  overrides: [
    {
      files: ['.cts', '.mts', '*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        /**
         * https://typescript-eslint.io/rules/await-thenable
         */
        '@typescript-eslint/await-thenable': 'error',

        /**
         * https://typescript-eslint.io/rules/consistent-type-exports
         */
        '@typescript-eslint/consistent-type-exports': 'off',

        /**
         * https://typescript-eslint.io/rules/dot-notation
         */
        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',

        /**
         * https://typescript-eslint.io/rules/naming-convention
         *
         * Defined in the TypeScript override.
         */
        '@typescript-eslint/naming-convention': 'error',

        /**
         * https://typescript-eslint.io/rules/no-confusing-void-expression"
         */
        '@typescript-eslint/no-confusing-void-expression': 'off',

        /**
         * https://typescript-eslint.io/rules/no-base-to-string
         */
        '@typescript-eslint/no-base-to-string': 'error',

        /**
         * https://typescript-eslint.io/rules/no-floating-promises
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * https://typescript-eslint.io/rules/no-for-in-array
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * https://typescript-eslint.io/rules/no-implied-eval
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /**
         * https://typescript-eslint.io/rules/no-misused-promises
         */
        '@typescript-eslint/no-misused-promises': 'off',

        /**
         * https://typescript-eslint.io/rules/no-meaningless-void-operator
         */
        '@typescript-eslint/no-meaningless-void-operator': 'error',

        /**
         * https://typescript-eslint.io/rules/no-redundant-type-constituents
         */
        '@typescript-eslint/no-redundant-type-constituents': 'error',

        /**
         * https://typescript-eslint.io/rules/no-throw-literal
         */
        '@typescript-eslint/no-throw-literal': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-condition
         */
        '@typescript-eslint/no-unnecessary-condition': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-qualifier
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-arguments
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unnecessary-type-assertion
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-argument
         */
        '@typescript-eslint/no-unsafe-argument': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-assignment
         */
        '@typescript-eslint/no-unsafe-assignment': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-call
         */
        '@typescript-eslint/no-unsafe-call': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-member-access
         */
        '@typescript-eslint/no-unsafe-member-access': 'error',

        /**
         * https://typescript-eslint.io/rules/no-unsafe-return
         */
        '@typescript-eslint/no-unsafe-return': 'error',

        /**
         * https://typescript-eslint.io/rules/non-nullable-type-assertion-style
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-includes
         */
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-nullish-coalescing
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-readonly
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-readonly-parameter-types
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * https://typescript-eslint.io/rules/prefer-reduce-type-parameter
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-regexp-exec
         */
        '@typescript-eslint/prefer-regexp-exec': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-return-this-type
         */
        '@typescript-eslint/prefer-return-this-type': 'error',

        /**
         * https://typescript-eslint.io/rules/prefer-string-starts-ends-with
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-starts-ends-with': 'off',

        /**
         * https://typescript-eslint.io/rules/promise-function-async
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * https://typescript-eslint.io/rules/require-array-sort-compare
         */
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

        /**
         * https://typescript-eslint.io/rules/require-await
         */
        '@typescript-eslint/require-await': 'off',

        /**
         * https://typescript-eslint.io/rules/restrict-plus-operands
         */
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

        /**
         * https://typescript-eslint.io/rules/restrict-template-expressions
         */
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true },
        ],

        /**
         * https://typescript-eslint.io/rules/return-await
         */
        '@typescript-eslint/return-await': 'error',

        /**
         * https://typescript-eslint.io/rules/strict-boolean-expressions
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * https://typescript-eslint.io/rules/switch-exhaustiveness-check
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /**
         * https://typescript-eslint.io/rules/unbound-method
         */
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      },
    },
  ],
};
