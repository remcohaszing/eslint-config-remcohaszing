const allowedProperties = require('./utils/allowedProperties');
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
     * https://eslint.org/docs/rules/camelcase
     *
     * `@typescript-eslint/naming-convention` is used instead.
     */
    camelcase: 'off',

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
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/default.md
     *
     * Use TypeScript to determine this.
     */
    'import/default': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     *
     * Handled by node/no-extraneous-import
     *
     * Use your own judgement to determine if this is a dependency or devDependency.
     */
    'import/no-extraneous-dependencies:': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/named.md
     *
     * Use TypeScript to determine this.
     */
    'import/named': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/namespace.md
     *
     * Use TypeScript to determine this.
     */
    'import/namespace': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     *
     * This is triggered if function one call signature is deprecated, but not another.
     */
    'import/no-deprecated': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     *
     * Use TypeScript to determine this.
     */
    'import/no-named-as-default-member': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/no-types.md
     */
    'jsdoc/no-types': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-param-type.md
     */
    'jsdoc/require-param-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-property-type.md
     */
    'jsdoc/require-property-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-returns-type.md
     */
    'jsdoc/require-returns-type': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/no-undefined-types.md
     */
    'jsdoc/no-undefined-types': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/valid-types.md
     */
    'jsdoc/valid-types': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/main/docs/rules/no-unsupported-features/es-syntax.md
     *
     * TypeScript will compile this.
     */
    'node/no-unsupported-features/es-syntax': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/main/docs/rules/prefer-global/text-decoder.md
     *
     * These globals don’t exist in @types/node
     */
    'node/prefer-global/text-decoder': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/main/docs/rules/prefer-global/text-encoder.md
     *
     * These globals don’t exist in @types/node
     */
    'node/prefer-global/text-encoder': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/main/docs/rules/prefer-global/url.md
     *
     * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
     */
    'node/prefer-global/url': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/main/docs/rules/prefer-global/url-search-params.md
     *
     * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
     */
    'node/prefer-global/url-search-params': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
     *
     * The types don’t allow this.
     */
    'unicorn/prefer-json-parse-buffer': 'off',

    /**
     * https://typescript-eslint.io/rules/naming-convention.md
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
          'typeProperty',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: { regex: `^(${allowedProperties.join('|')})$`, match: false },
      },

      // PropertyLike
      { selector: 'variable', format: ['camelCase'] },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'] },

      // ParameterLike
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        filter: { regex: `^(${allowedProperties.join('|')})$`, match: false },
      },
      { selector: 'parameterProperty', format: ['PascalCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'accessor', format: ['camelCase', 'PascalCase'] },
      { selector: 'enumMember', format: ['camelCase', 'PascalCase'] },

      // TypeLike
      { selector: 'typeLike', format: ['PascalCase'] },
    ],

    /**
     * https://typescript-eslint.io/rules/adjacent-overload-signatures.md
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * https://typescript-eslint.io/rules/array-type.md
     */
    '@typescript-eslint/array-type': 'error',

    /**
     * https://typescript-eslint.io/rules/ban-ts-comment.md
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': true,
        'ts-check': true,
      },
    ],

    /**
     * https://typescript-eslint.io/rules/ban-tslint-comment.md
     */
    '@typescript-eslint/ban-tslint-comment': 'off',

    /**
     * https://typescript-eslint.io/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': 'error',

    /**
     * https://typescript-eslint.io/rules/brace-style.md
     *
     * // Prettier
     */
    '@typescript-eslint/brace-style': 'off',

    /**
     * https://typescript-eslint.io/rules/class-literal-property-style.md
     */
    '@typescript-eslint/class-literal-property-style': 'error',

    /**
     * https://typescript-eslint.io/rules/comma-dangle.md
     *
     * // Prettier
     */
    '@typescript-eslint/comma-dangle': 'off',

    /**
     * https://typescript-eslint.io/rules/comma-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/comma-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/consistent-indexed-object-style.md
     */
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-assertions.md
     */
    '@typescript-eslint/consistent-type-assertions': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': 'error',

    /**
     * https://typescript-eslint.io/rules/consistent-type-imports.md
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'no-type-imports', disallowTypeAnnotations: false },
    ],

    /**
     * https://typescript-eslint.io/rules/default-param-last.md
     */
    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    /**
     * https://typescript-eslint.io/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

    /**
     * https://typescript-eslint.io/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    /**
     * https://typescript-eslint.io/rules/explicit-module-boundary-types.md
     *
     * Handled by @typescript-eslint/explicit-function-return-type
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * https://typescript-eslint.io/rules/func-call-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/func-call-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/indent.md
     *
     * // Prettier
     */
    '@typescript-eslint/indent': 'off',

    /**
     * https://typescript-eslint.io/rules/init-declarations.md
     */
    '@typescript-eslint/init-declarations': 'off',
    'init-declarations': 'off',

    /**
     * https://typescript-eslint.io/rules/keyword-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/keyword-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/lines-between-class-members.md
     */
    '@typescript-eslint/lines-between-class-members': ['error', { exceptAfterOverload: true }],
    'lines-between-class-members': 'off',

    /**
     * https://typescript-eslint.io/rules/member-delimiter-style.md
     *
     * // Prettier
     */
    '@typescript-eslint/member-delimiter-style': 'off',

    /**
     * https://typescript-eslint.io/rules/member-ordering.md
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
     * https://typescript-eslint.io/rules/method-signature-style.md
     */
    '@typescript-eslint/method-signature-style': 'error',

    /**
     * https://typescript-eslint.io/rules/no-array-constructor.md
     */
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    /**
     * https://typescript-eslint.io/rules/no-confusing-non-null-assertion.md
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    /**
     * https://typescript-eslint.io/rules/no-dupe-class-members.md
     */
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    /**
     * https://typescript-eslint.io/rules/no-duplicate-imports.md
     */
    '@typescript-eslint/no-duplicate-imports': ['error', { includeExports: true }],
    'no-duplicate-imports': 'off',

    /**
     * https://typescript-eslint.io/rules/no-dynamic-delete.md
     */
    '@typescript-eslint/no-dynamic-delete': 'off',

    /**
     * https://typescript-eslint.io/rules/no-empty-function.md
     */
    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    /**
     * https://typescript-eslint.io/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': 'error',

    /**
     * https://typescript-eslint.io/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /**
     * https://typescript-eslint.io/rules/no-extra-non-null-assertion.md
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /**
     * https://typescript-eslint.io/rules/no-extra-parens.md
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-parens': 'off',

    /**
     * https://typescript-eslint.io/rules/no-extra-semi.md
     *
     * // Prettier
     */
    '@typescript-eslint/no-extra-semi': 'off',

    /**
     * https://typescript-eslint.io/rules/no-extraneous-class.md
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /**
     * https://typescript-eslint.io/rules/no-implicit-any-catch.md
     */
    '@typescript-eslint/no-implicit-any-catch': 'off',

    /**
     * https://typescript-eslint.io/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': 'error',

    /**
     * https://typescript-eslint.io/rules/no-invalid-this.md
     */
    '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
    'no-invalid-this': 'off',

    /**
     * https://typescript-eslint.io/rules/no-invalid-void-type.md
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /**
     * https://typescript-eslint.io/rules/no-loop-func.md
     */
    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',

    /**
     * https://typescript-eslint.io/rules/no-loss-of-precision.md
     */
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',

    /**
     * https://typescript-eslint.io/rules/no-magic-numbers.md
     */
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',

    /**
     * https://typescript-eslint.io/rules/no-misused-new.md
     */
    '@typescript-eslint/no-misused-new': 'error',

    /**
     * https://typescript-eslint.io/rules/no-namespace.md
     */
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],

    /**
     * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing.md
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    /**
     * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain.md
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /**
     * https://typescript-eslint.io/rules/no-non-null-assertion.md
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * https://typescript-eslint.io/rules/no-parameter-properties.md
     */
    '@typescript-eslint/no-parameter-properties': 'error',

    /**
     * https://typescript-eslint.io/rules/no-shadow.md
     */
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: false }],
    'no-redeclare': 'off',

    /**
     * https://typescript-eslint.io/rules/no-require-imports.md
     */
    '@typescript-eslint/no-require-imports': 'error',

    /**
     * https://typescript-eslint.io/rules/no-restricted-imports.md
     */
    '@typescript-eslint/no-restricted-imports': 'error',

    /**
     * https://typescript-eslint.io/rules/no-shadow.md
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
     * https://typescript-eslint.io/rules/no-this-alias.md
     */
    '@typescript-eslint/no-this-alias': 'error',

    /**
     * https://typescript-eslint.io/rules/no-type-alias.md
     */
    '@typescript-eslint/no-type-alias': 'off',

    /**
     * https://typescript-eslint.io/rules/no-unnecessary-type-constraint.md
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    /**
     * https://typescript-eslint.io/rules/no-unused-expressions.md
     */
    '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-expressions': 'off',

    /**
     * https://typescript-eslint.io/rules/no-unused-vars.md
     */
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-unused-vars': 'off',

    /**
     * https://typescript-eslint.io/rules/no-use-before-define.md
     */
    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',

    /**
     * https://typescript-eslint.io/rules/no-useless-constructor.md
     *
     * Don’t allow private constructors
     */
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-useless-constructor': 'error',

    /**
     * https://typescript-eslint.io/rules/no-useless-empty-export.md
     */
    '@typescript-eslint/no-useless-empty-export': 'off',

    /**
     * https://typescript-eslint.io/rules/no-var-requires.md
     *
     * Handled by import/no-commonjs
     */
    '@typescript-eslint/no-var-requires': 'off',

    /**
     * https://typescript-eslint.io/rules/object-curly-spacing.md
     *
     * Prettier
     */
    '@typescript-eslint/object-curly-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/padding-line-between-statements.md
     */
    '@typescript-eslint/padding-line-between-statements': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-as-const.md
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-enum-initializers.md
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /**
     * https://typescript-eslint.io/rules/prefer-for-of.md
     *
     * Handled by unicorn/no-for-loop
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /**
     * https://typescript-eslint.io/rules/prefer-function-type.md
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-literal-enum-member.md
     */
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-namespace-keyword.md
     *
     * Modules and namespaces are both disallowed, but for definition files namespaces are preferred
     * over modules.
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-optional-chain.md
     */
    '@typescript-eslint/prefer-optional-chain': 'error',

    /**
     * https://typescript-eslint.io/rules/prefer-ts-expect-error.md
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    /**
     * https://typescript-eslint.io/rules/quotes.md
     */
    '@typescript-eslint/quotes': [
      'error',
      prettier.ts.singleQuote ? 'single' : 'double',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    quotes: 'off',

    /**
     * https://typescript-eslint.io/rules/semi.md
     *
     * // Prettier
     */
    '@typescript-eslint/semi': 'off',
    semi: 'off',

    /**
     * https://typescript-eslint.io/rules/space-before-function-paren.md
     *
     * // Prettier
     */
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': 'off',

    /**
     * https://typescript-eslint.io/rules/sort-type-union-intersection-members.md
     */
    '@typescript-eslint/sort-type-union-intersection-members': 'error',

    /**
     * https://typescript-eslint.io/rules/space-before-blocks.md
     *
     * Prettier
     */
    '@typescript-eslint/space-before-blocks': 'off',

    /**
     * https://typescript-eslint.io/rules/space-infix-ops.md
     *
     * Prettier
     */
    '@typescript-eslint/space-infix-ops': 'off',

    /**
     * https://typescript-eslint.io/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /**
     * https://typescript-eslint.io/rules/type-annotation-spacing.md
     *
     * // Prettier
     */
    '@typescript-eslint/type-annotation-spacing': 'off',

    /**
     * https://typescript-eslint.io/rules/typedef.md
     */
    '@typescript-eslint/typedef': 'off',

    /**
     * https://typescript-eslint.io/rules/unified-signatures.md
     */
    '@typescript-eslint/unified-signatures': 'error',
  },
};
