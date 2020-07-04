/**
 * These rules relate to ES6, also known as ES2015.
 */
module.exports = {
  /**
   * https://eslint.org/docs/rules/arrow-body-style
   */
  'arrow-body-style': 'error',

  /**
   * https://eslint.org/docs/rules/arrow-parens
   *
   * Prettier
   */
  'arrow-parens': 'off',

  /**
   * https://eslint.org/docs/rules/arrow-spacing
   *
   * Prettier
   */
  'arrow-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/constructor-super
   */
  'constructor-super': 'error',

  /**
   * https://eslint.org/docs/rules/generator-star-spacing
   *
   * Prettier
   */
  'generator-star-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/no-class-assign
   */
  'no-class-assign': 'error',

  /**
   * https://eslint.org/docs/rules/no-confusing-arrow
   *
   * Has conflicts with prettier.
   */
  'no-confusing-arrow': 'off',

  /**
   * https://eslint.org/docs/rules/no-const-assign
   */
  'no-const-assign': 'error',

  /**
   * https://eslint.org/docs/rules/no-dupe-class-members
   */
  'no-dupe-class-members': 'error',

  /**
   * https://eslint.org/docs/rules/no-duplicate-imports
   */
  'no-duplicate-imports': ['error', { includeExports: true }],

  /**
   * https://eslint.org/docs/rules/no-new-symbol
   */
  'no-new-symbol': 'error',

  /**
   * https://eslint.org/docs/rules/no-restricted-exports
   */
  'no-restricted-exports': 'off',

  /**
   * https://eslint.org/docs/rules/no-restricted-imports
   */
  'no-restricted-imports': 'off',

  /**
   * https://eslint.org/docs/rules/no-this-before-super
   */
  'no-this-before-super': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-computed-key
   */
  'no-useless-computed-key': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-constructor
   */
  'no-useless-constructor': 'error',

  /**
   * https://eslint.org/docs/rules/no-useless-rename
   */
  'no-useless-rename': 'error',

  /**
   * https://eslint.org/docs/rules/no-var
   */
  'no-var': 'error',

  /**
   * https://eslint.org/docs/rules/object-shorthand
   */
  'object-shorthand': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback': ['error', { allowUnboundThis: false }],

  /**
   * https://eslint.org/docs/rules/prefer-const
   */
  'prefer-const': ['error', { destructuring: 'all' }],

  /**
   * https://eslint.org/docs/rules/prefer-destructuring
   */
  'prefer-destructuring': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-rest-params
   */
  'prefer-rest-params': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-spread
   */
  'prefer-spread': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-template
   */
  'prefer-template': 'error',

  /**
   * https://eslint.org/docs/rules/require-yield
   */
  'require-yield': 'error',

  /**
   * https://eslint.org/docs/rules/rest-spread-spacing
   *
   * Prettier
   */
  'rest-spread-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/sort-imports
   */
  'sort-imports': ['error', { ignoreDeclarationSort: true }],

  /**
   * https://eslint.org/docs/rules/symbol-description
   */
  'symbol-description': 'error',

  /**
   * https://eslint.org/docs/rules/template-curly-spacing
   *
   * Prettier
   */
  'template-curly-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/yield-star-spacing
   *
   * Prettier
   */
  'yield-star-spacing': 'off',
};
