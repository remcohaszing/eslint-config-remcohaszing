/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  overrides: [
    {
      files: ['*.cts', '*.mts', '*.ts', '*.tsx'],
      parserOptions: {
        project: true
      },
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-return': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/no-array-delete': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-mixed-enums': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        '@typescript-eslint/no-useless-template-literals': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/only-throw-error': 'error',
        '@typescript-eslint/prefer-destructuring': [
          'error',
          {
            VariableDeclarator: { array: false, object: true },
            AssignmentExpression: { array: false, object: false }
          }
        ],
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-find': 'error',
        'unicorn/prefer-array-find': 'off',
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        'prefer-promise-reject-errors': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-starts-ends-with': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true }
        ],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error'
      }
    }
  ]
}
