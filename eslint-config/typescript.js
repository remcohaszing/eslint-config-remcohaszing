const prettier = require('./utils/prettier');

/**
 * Configuration for TypeScript specifically that don’t require type checking.
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * https://eslint.org/docs/rules/array-callback-return
     *
     * Use TypeScript to determine this.
     */
    'array-callback-return': 'off',

    /**
     * https://eslint.org/docs/rules/getter-return
     */
    'getter-return': 'off',

    /**
     * https://eslint.org/docs/rules/new-cap
     *
     * Decorators should be allowed.
     */
    'new-cap': 'off',

    /**
     * https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'off',

    /**
     * https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'off',

    /**
     * https://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'off',

    /**
     * https://eslint.org/docs/rules/lines-around-comment
     *
     * Causes conflicts with prettier for interfaces
     */
    'lines-around-comment': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     *
     * Use TypeScript to determine this.
     */
    'import/default': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     *
     * Use TypeScript to determine this.
     */
    'import/named': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     *
     * Use TypeScript to determine this.
     */
    'import/namespace': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     *
     * Use TypeScript to determine this.
     */
    'import/no-named-as-default-member': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-types.md
     */
    'jsdoc/no-types': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-type.md
     */
    'jsdoc/require-param-type': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-property-type.md
     */
    'jsdoc/require-property-type': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-type.md
     */
    'jsdoc/require-returns-type': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-undefined-types.md
     */
    'jsdoc/no-undefined-types': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/valid-types.md
     */
    'jsdoc/valid-types': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     *
     * These globals don’t exist in @types/node
     */
    'node/prefer-global/text-decoder': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     *
     * These globals don’t exist in @types/node
     */
    'node/prefer-global/text-encoder': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
     *
     * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
     */
    'node/prefer-global/url': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
     *
     * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
     */
    'node/prefer-global/url-search-params': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     *
     * This only requires type checking for a very specific unused option.
     */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      // PropertyLike
      { selector: 'variable', format: ['camelCase'] },
      { selector: 'variable', modifiers: ['const'], format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase'] },

      // ParameterLike
      { selector: 'property', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameterProperty', format: ['PascalCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'accessor', format: ['camelCase', 'PascalCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },

      // TypeLike
      { selector: 'typeLike', format: ['PascalCase'] },
    ],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
     */
    '@typescript-eslint/array-type': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': true,
      },
    ],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
     */
    '@typescript-eslint/ban-tslint-comment': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
     *
     * // Prettier
     */
    '@typescript-eslint/brace-style': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
     */
    '@typescript-eslint/class-literal-property-style': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
     *
     * // Prettier
     */
    '@typescript-eslint/comma-dangle': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/comma-spacing': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
     */
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     */
    '@typescript-eslint/consistent-type-assertions': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'no-type-imports', disallowTypeAnnotations: false },
    ],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
     */
    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     *
     * Handled by @typescript-eslint/explicit-function-return-type
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/func-call-spacing': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     *
     * // Prettier
     */
    '@typescript-eslint/indent': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
     */
    '@typescript-eslint/init-declarations': 'off',
    'init-declarations': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/keyword-spacing': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
     */
    '@typescript-eslint/lines-between-class-members': ['error', { exceptAfterOverload: true }],
    'lines-between-class-members': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     *
     * // Prettier
     */
    '@typescript-eslint/member-delimiter-style': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'signature',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',
        ],
      },
    ],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
     */
    '@typescript-eslint/method-signature-style': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
     */
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
     */
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
     */
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],
    'no-duplicate-imports': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
     */
    '@typescript-eslint/no-dynamic-delete': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-parens': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-semi': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
     */
    '@typescript-eslint/no-implicit-any-catch': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
     */
    '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
    'no-invalid-this': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
     */
    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
     */
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
     */
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
     */
    '@typescript-eslint/no-misused-new': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
     */
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
     */
    '@typescript-eslint/no-parameter-properties': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
    'no-redeclare': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
     */
    '@typescript-eslint/no-require-imports': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false,
      },
    ],
    'no-shadow': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
     */
    '@typescript-eslint/no-this-alias': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
     */
    '@typescript-eslint/no-type-alias': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
     */
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-unused-expressions': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
     */
    '@typescript-eslint/no-unused-vars-experimental': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     *
     * Don’t allow private constructors
     */
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-useless-constructor': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
     *
     * Handled by import/no-commonjs
     */
    '@typescript-eslint/no-var-requires': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
     *
     * Handled by unicorn/no-for-loop
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
     */
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
     *
     * Modules and namespaces are both disallowed, but for definition files namespaces are preferred
     * over modules.
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
     */
    '@typescript-eslint/prefer-optional-chain': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
     */
    '@typescript-eslint/quotes': [
      'error',
      prettier.ts.singleQuote ? 'single' : 'double',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    quotes: 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     *
     * // Prettier
     */
    '@typescript-eslint/semi': 'off',
    semi: 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
     *
     * // Prettier
     */
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/type-annotation-spacing': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
     */
    '@typescript-eslint/typedef': 'off',

    /**
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
};
