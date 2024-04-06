const allowedProperties = require('./utils/allowedProperties.js')
const prettier = require('./utils/prettier.js')

/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * https://eslint.org/docs/latest/rules/array-callback-return
     *
     * Use TypeScript to determine this.
     */
    'array-callback-return': 'off',

    /**
     * https://eslint.org/docs/latest/rules/camelcase
     *
     * `@typescript-eslint/naming-convention` is used instead.
     */
    camelcase: 'off',

    /**
     * https://eslint.org/docs/latest/rules/getter-return
     */
    'getter-return': 'off',

    /**
     * https://eslint.org/docs/latest/rules/new-cap
     *
     * Decorators should be allowed.
     */
    'new-cap': 'off',

    /**
     * https://eslint.org/docs/latest/rules/no-obj-calls
     */
    'no-obj-calls': 'off',

    /**
     * https://eslint.org/docs/latest/rules/no-setter-return
     */
    'no-setter-return': 'off',

    /**
     * https://eslint.org/docs/latest/rules/no-undef
     */
    'no-undef': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/default
     *
     * Use TypeScript to determine this.
     */
    'import/default': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies
     *
     * Handled by node/no-extraneous-import
     *
     * Use your own judgement to determine if this is a dependency or devDependency.
     */
    'import/no-extraneous-dependencies:': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/named
     *
     * Use TypeScript to determine this.
     */
    'import/named': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/namespace
     *
     * Use TypeScript to determine this.
     */
    'import/namespace': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-deprecated
     *
     * This is triggered if function one call signature is deprecated, but not another.
     */
    'import/no-deprecated': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member
     *
     * Use TypeScript to determine this.
     */
    'import/no-named-as-default-member': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/no-types
     */
    'jsdoc/no-types': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-param-type
     */
    'jsdoc/require-param-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-property-type
     */
    'jsdoc/require-property-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-returns-type
     */
    'jsdoc/require-returns-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/no-undefined-types
     */
    'jsdoc/no-undefined-types': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/valid-types
     */
    'jsdoc/valid-types': 'off',

    /**
     * https://github.com/eslint-community/eslint-plugin-n/blob/main/docs/rules/no-unsupported-features/es-syntax
     *
     * TypeScript will compile this.
     */
    'n/no-unsupported-features/es-syntax': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer
     *
     * The types don’t allow this.
     */
    'unicorn/prefer-json-parse-buffer': 'off',

    /**
     * https://typescript-eslint.io/rules/naming-convention
     *
     * This only requires type checking for a very specific unused option.
     */
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

    /**
     * https://typescript-eslint.io/rules/adjacent-overload-signatures
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * https://typescript-eslint.io/rules/array-type
     */
    '@typescript-eslint/array-type': 'error',

    /**
     * https://typescript-eslint.io/rules/ban-ts-comment
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': true,
        'ts-check': true
      }
    ],

    /**
     * https://typescript-eslint.io/rules/ban-tslint-comment
     */
    '@typescript-eslint/ban-tslint-comment': 'off',

    /**
     * https://typescript-eslint.io/rules/ban-types
     */
    '@typescript-eslint/ban-types': 'error',

    /**
     * https://typescript-eslint.io/rules/block-spacing
     *
     * Prettier
     */
    '@typescript-eslint/block-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/brace-style
     *
     * // Prettier
     */
    '@typescript-eslint/brace-style': 'off',

    /**
     * https://typescript-eslint.io/rules/class-literal-property-style
     */
    '@typescript-eslint/class-literal-property-style': 'error',

    /**
     * https://typescript-eslint.io/rules/class-methods-use-this
     */
    '@typescript-eslint/class-methods-use-this': 'error',
    'class-methods-use-this': 'off',

    /**
     * https://typescript-eslint.io/rules/comma-dangle
     *
     * // Prettier
     */
    '@typescript-eslint/comma-dangle': 'off',

    /**
     * https://typescript-eslint.io/rules/comma-spacing
     *
     * // Prettier
     */
    '@typescript-eslint/comma-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/consistent-generic-constructors
     */
    '@typescript-eslint/consistent-generic-constructors': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-indexed-object-style
     */
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-assertions
     */
    '@typescript-eslint/consistent-type-assertions': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-definitions
     */
    '@typescript-eslint/consistent-type-definitions': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-imports
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }
    ],

    /**
     * https://typescript-eslint.io/rules/default-param-last
     */
    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    /**
     * https://typescript-eslint.io/rules/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

    /**
     * https://typescript-eslint.io/rules/explicit-member-accessibility
     */
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    /**
     * https://typescript-eslint.io/rules/explicit-module-boundary-types
     *
     * Handled by @typescript-eslint/explicit-function-return-type
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * https://typescript-eslint.io/rules/func-call-spacing
     *
     * // Prettier
     */
    '@typescript-eslint/func-call-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/indent
     *
     * // Prettier
     */
    '@typescript-eslint/indent': 'off',

    /**
     * https://typescript-eslint.io/rules/init-declarations
     */
    '@typescript-eslint/init-declarations': 'off',
    'init-declarations': 'off',

    /**
     * https://typescript-eslint.io/rules/key-spacing
     *
     * // Prettier
     */
    '@typescript-eslint/key-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/keyword-spacing
     *
     * // Prettier
     */
    '@typescript-eslint/keyword-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/lines-around-comment
     */
    '@typescript-eslint/lines-around-comment': [
      'error',
      {
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        allowEnumStart: true,
        allowInterfaceStart: true,
        allowModuleStart: true,
        allowTypeStart: true
      }
    ],
    'lines-around-comment': 'off',

    /**
     * https://typescript-eslint.io/rules/lines-between-class-members
     */
    '@typescript-eslint/lines-between-class-members': 'error',
    'lines-between-class-members': 'off',

    /**
     * https://typescript-eslint.io/rules/max-params
     *
     * // Prettier
     */
    '@typescript-eslint/max-params': 'off',

    /**
     * https://typescript-eslint.io/rules/member-delimiter-style
     *
     * // Prettier
     */
    '@typescript-eslint/member-delimiter-style': 'off',

    /**
     * https://typescript-eslint.io/rules/member-ordering
     */
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

    /**
     * https://typescript-eslint.io/rules/method-signature-style
     */
    '@typescript-eslint/method-signature-style': 'error',

    /**
     * https://typescript-eslint.io/rules/no-array-constructor
     */
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    /**
     * https://typescript-eslint.io/rules/no-confusing-non-null-assertion
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    /**
     * https://typescript-eslint.io/rules/no-dupe-class-members
     */
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    /**
     * https://typescript-eslint.io/rules/no-duplicate-enum-values
     */
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    /**
     * https://typescript-eslint.io/rules/no-dynamic-delete
     */
    '@typescript-eslint/no-dynamic-delete': 'off',

    /**
     * https://typescript-eslint.io/rules/no-empty-function
     */
    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    /**
     * https://typescript-eslint.io/rules/no-empty-interface
     */
    '@typescript-eslint/no-empty-interface': 'error',

    /**
     * https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /**
     * https://typescript-eslint.io/rules/no-extra-non-null-assertion
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /**
     * https://typescript-eslint.io/rules/no-extra-parens
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-parens': 'off',

    /**
     * https://typescript-eslint.io/rules/no-extra-semi
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-semi': 'off',

    /**
     * https://typescript-eslint.io/rules/no-extraneous-class
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /**
     * https://typescript-eslint.io/rules/no-import-type-side-effects
     */
    '@typescript-eslint/no-import-type-side-effects': 'off',

    /**
     * https://typescript-eslint.io/rules/no-inferrable-types
     */
    '@typescript-eslint/no-inferrable-types': 'error',

    /**
     * https://typescript-eslint.io/rules/no-invalid-this
     */
    '@typescript-eslint/no-invalid-this': 'off',

    /**
     * https://typescript-eslint.io/rules/no-invalid-void-type
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /**
     * https://typescript-eslint.io/rules/no-loop-func
     */
    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',

    /**
     * https://typescript-eslint.io/rules/no-loss-of-precision
     */
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',

    /**
     * https://typescript-eslint.io/rules/no-magic-numbers
     */
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',

    /**
     * https://typescript-eslint.io/rules/no-misused-new
     */
    '@typescript-eslint/no-misused-new': 'error',

    /**
     * https://typescript-eslint.io/rules/no-namespace
     */
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],

    /**
     * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    /**
     * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /**
     * https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * https://typescript-eslint.io/rules/no-redeclare
     */
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
    'no-redeclare': 'off',

    /**
     * https://typescript-eslint.io/rules/no-require-imports
     */
    '@typescript-eslint/no-require-imports': 'off',

    /**
     * https://typescript-eslint.io/rules/no-restricted-imports
     */
    '@typescript-eslint/no-restricted-imports': 'error',

    /**
     * https://typescript-eslint.io/rules/no-shadow
     */
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ],
    'no-shadow': 'off',

    /**
     * https://typescript-eslint.io/rules/no-this-alias
     */
    '@typescript-eslint/no-this-alias': 'error',

    /**
     * https://typescript-eslint.io/rules/no-type-alias
     */
    '@typescript-eslint/no-type-alias': 'off',

    /**
     * https://typescript-eslint.io/rules/no-unnecessary-type-constraint
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    /**
     * https://typescript-eslint.io/rules/no-unsafe-declaration-merging
     *
     * Handled by `@typescript-eslint/no-redeclare`.
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',

    /**
     * https://typescript-eslint.io/rules/no-unused-expressions
     */
    '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-expressions': 'off',

    /**
     * https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-unused-vars': 'off',

    /**
     * https://typescript-eslint.io/rules/no-use-before-define
     */
    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',

    /**
     * https://typescript-eslint.io/rules/no-useless-constructor
     *
     * Don’t allow private constructors
     */
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-useless-constructor': 'error',

    /**
     * https://typescript-eslint.io/rules/no-useless-empty-export
     */
    '@typescript-eslint/no-useless-empty-export': 'off',

    /**
     * https://typescript-eslint.io/rules/no-var-requires
     */
    '@typescript-eslint/no-var-requires': 'error',

    /**
     * https://typescript-eslint.io/rules/object-curly-spacing
     *
     * Prettier
     */
    '@typescript-eslint/object-curly-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/padding-line-between-statements
     */
    '@typescript-eslint/padding-line-between-statements': 'error',

    /**
     * https://typescript-eslint.io/rules/parameter-properties
     */
    '@typescript-eslint/parameter-properties': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-as-const
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-enum-initializers
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /**
     * https://typescript-eslint.io/rules/prefer-for-of
     *
     * Handled by unicorn/no-for-loop
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /**
     * https://typescript-eslint.io/rules/prefer-function-type
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-literal-enum-member
     */
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-namespace-keyword
     *
     * Modules and namespaces are both disallowed, but for definition files namespaces are preferred
     * over modules.
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-ts-expect-error
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    /**
     * https://typescript-eslint.io/rules/quotes
     */
    '@typescript-eslint/quotes': [
      'error',
      prettier.ts.singleQuote ? 'single' : 'double',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    quotes: 'off',

    /**
     * https://typescript-eslint.io/rules/semi
     *
     * // Prettier
     */
    '@typescript-eslint/semi': 'off',
    semi: 'off',

    /**
     * https://typescript-eslint.io/rules/space-before-function-paren
     *
     * // Prettier
     */
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': 'off',

    /**
     * https://typescript-eslint.io/rules/sort-type-union-constituents
     */
    '@typescript-eslint/sort-type-constituents': 'error',

    /**
     * https://typescript-eslint.io/rules/space-before-blocks
     *
     * Prettier
     */
    '@typescript-eslint/space-before-blocks': 'off',

    /**
     * https://typescript-eslint.io/rules/space-infix-ops
     *
     * Prettier
     */
    '@typescript-eslint/space-infix-ops': 'off',

    /**
     * https://typescript-eslint.io/rules/triple-slash-reference
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /**
     * https://typescript-eslint.io/rules/type-annotation-spacing
     *
     * // Prettier
     */
    '@typescript-eslint/type-annotation-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/typedef
     */
    '@typescript-eslint/typedef': 'off',

    /**
     * https://typescript-eslint.io/rules/unified-signatures
     */
    '@typescript-eslint/unified-signatures': 'error'
  }
}
