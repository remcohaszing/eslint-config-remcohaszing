const allowedProperties = require('./utils/allowedProperties.js')

/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'array-callback-return': 'off',
    camelcase: 'off',
    'getter-return': 'off',
    'new-cap': 'off',
    'no-obj-calls': 'off',
    'no-setter-return': 'off',
    'no-undef': 'off',
    'import-x/default': 'off',
    'import-x/no-extraneous-dependencies:': 'off',
    'import-x/named': 'off',
    'import-x/namespace': 'off',
    'import-x/no-deprecated': 'off',
    'import-x/no-named-as-default-member': 'off',
    'jsdoc/no-types': 'error',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/valid-types': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'unicorn/prefer-json-parse-buffer': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'accessor',
          'enumMember',
          'objectLiteralMethod',
          'objectLiteralProperty',
          'typeMethod',
          'typeProperty'
        ],
        format: null,
        modifiers: ['requiresQuotes']
      },
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: { regex: `^(${allowedProperties.join('|')})$`, match: false }
      },

      // PropertyLike
      { selector: 'variable', format: ['camelCase'] },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'] },

      // ParameterLike
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        filter: { regex: `^(${allowedProperties.join('|')})$`, match: false }
      },
      { selector: 'parameterProperty', format: ['PascalCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'accessor', format: ['camelCase', 'PascalCase'] },
      { selector: 'enumMember', format: ['camelCase', 'PascalCase'] },

      // TypeLike
      { selector: 'typeLike', format: ['PascalCase'] }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': true,
        'ts-check': true
      }
    ],
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/class-methods-use-this': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }
    ],
    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    'init-declarations': 'off',
    '@typescript-eslint/max-params': 'off',
    'max-params': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          '#private-static-field',

          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          '#private-instance-field',

          'public-abstract-field',

          'signature',

          'public-static-method',
          'protected-static-method',
          'private-static-method',
          '#private-static-method',

          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          '#private-instance-method',

          'public-abstract-method',
          'protected-abstract-method'
        ]
      }
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'error',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'error'
  }
}
