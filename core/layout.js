const prettier = require('../utils/prettier');

/**
 * These rules relate to style guidelines, and are therefore quite subjective.
 */
module.exports = {
  /**
   * https://eslint.org/docs/rules/array-bracket-newline
   *
   * Prettier
   */
  'array-bracket-newline': 'off',

  /**
   * https://eslint.org/docs/rules/array-bracket-spacing
   *
   * Prettier
   */
  'array-bracket-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/array-element-newline
   *
   * Prettier
   */
  'array-element-newline': 'off',

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
   * https://eslint.org/docs/rules/block-spacing
   *
   * Prettier
   */
  'block-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/brace-style
   *
   * Prettier
   */
  'brace-style': 'off',

  /**
   * https://eslint.org/docs/rules/comma-dangle
   *
   * Prettier
   */
  'comma-dangle': 'off',

  /**
   * https://eslint.org/docs/rules/comma-spacing
   *
   * Prettier
   */
  'comma-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/comma-style
   *
   * Prettier
   */
  'comma-style': 'off',

  /**
   * https://eslint.org/docs/rules/computed-property-spacing
   *
   * Prettier
   */
  'computed-property-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/dot-location
   *
   * Prettier
   */
  'dot-location': 'off',

  /**
   * https://eslint.org/docs/rules/eol-last
   *
   * Prettier
   */
  'eol-last': 'off',

  /**
   * https://eslint.org/docs/rules/func-call-spacing
   *
   * Prettier
   */
  'func-call-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/function-call-argument-newline
   *
   * Prettier
   */
  'function-call-argument-newline': 'off',

  /**
   * https://eslint.org/docs/rules/function-paren-newline
   *
   * Prettier
   */
  'function-paren-newline': 'off',

  /**
   * https://eslint.org/docs/rules/generator-star-spacing
   *
   * Prettier
   */
  'generator-star-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/implicit-arrow-linebreak
   *
   * Prettier
   */
  'implicit-arrow-linebreak': 'off',

  /**
   * https://eslint.org/docs/rules/indent
   *
   * Prettier
   */
  indent: 'off',

  /**
   * https://eslint.org/docs/rules/jsx-quotes
   *
   * Prettier
   */
  'jsx-quotes': 'off',

  /**
   * https://eslint.org/docs/rules/key-spacing
   *
   * Prettier
   */
  'key-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/keyword-spacing
   *
   * Prettier
   */
  'keyword-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/line-comment-position
   */
  'line-comment-position': 'error',

  /**
   * https://eslint.org/docs/rules/linebreak-style
   *
   * Prettier
   */
  'linebreak-style': 'off',

  /**
   * https://eslint.org/docs/rules/lines-around-comment
   */
  'lines-around-comment': [
    'error',
    { allowBlockStart: true, allowObjectStart: true, allowArrayStart: true, allowClassStart: true },
  ],

  /**
   * https://eslint.org/docs/rules/lines-between-class-members
   */
  'lines-between-class-members': 'error',

  /**
   * https://eslint.org/docs/rules/max-len
   */
  'max-len': [
    'error',
    {
      code: prettier.js.printWidth,
      ignorePattern: /eslint-disable/.source,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  /**
   * https://eslint.org/docs/rules/max-statements-per-line
   *
   * Handled by Prettier.
   */
  'max-statements-per-line': 'off',

  /**
   * https://eslint.org/docs/rules/multiline-ternary
   *
   * Prettier
   */
  'multiline-ternary': 'off',

  /**
   * https://eslint.org/docs/rules/new-parens
   *
   * Prettier
   */
  'new-parens': 'off',

  /**
   * https://eslint.org/docs/rules/newline-per-chained-call
   *
   * Prettier
   */
  'newline-per-chained-call': 'off',

  /**
   * https://eslint.org/docs/rules/no-extra-parens
   *
   * Prettier
   */
  'no-extra-parens': 'off',

  /**
   * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
   *
   * Prettier
   */
  'no-mixed-spaces-and-tabs': 'off',

  /**
   * https://eslint.org/docs/rules/no-multi-spaces
   *
   * Prettier
   */
  'no-multi-spaces': 'off',

  /**
   * https://eslint.org/docs/rules/no-multiple-empty-lines
   *
   * Prettier
   */
  'no-multiple-empty-lines': 'off',

  /**
   * https://eslint.org/docs/rules/no-tabs
   */
  'no-tabs': ['error', { allowIndentationTabs: true }],

  /**
   * https://eslint.org/docs/rules/no-trailing-spaces
   *
   * Prettier
   */
  'no-trailing-spaces': 'off',

  /**
   * https://eslint.org/docs/rules/no-whitespace-before-property
   *
   * Prettier
   */
  'no-whitespace-before-property': 'off',

  /**
   * https://eslint.org/docs/rules/nonblock-statement-body-position
   *
   * Prettier
   */
  'nonblock-statement-body-position': 'off',

  /**
   * https://eslint.org/docs/rules/object-curly-newline
   *
   * Prettier
   */
  'object-curly-newline': 'off',

  /**
   * https://eslint.org/docs/rules/object-curly-spacing
   *
   * Prettier
   */
  'object-curly-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/object-property-newline
   *
   * Prettier
   */
  'object-property-newline': 'off',

  /**
   * https://eslint.org/docs/rules/operator-linebreak
   *
   * Prettier
   */
  'operator-linebreak': 'off',

  /**
   * https://eslint.org/docs/rules/padded-blocks
   *
   * Prettier
   */
  'padded-blocks': 'off',

  /**
   * https://eslint.org/docs/rules/padding-line-between-statements
   */
  'padding-line-between-statements': 'off',

  /**
   * https://eslint.org/docs/rules/quotes
   */
  quotes: [
    'error',
    prettier.js.singleQuote ? 'single' : 'double',
    { avoidEscape: true, allowTemplateLiterals: false },
  ],

  /**
   * https://eslint.org/docs/rules/rest-spread-spacing
   *
   * Prettier
   */
  'rest-spread-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/semi
   *
   * Prettier
   */
  semi: 'off',

  /**
   * https://eslint.org/docs/rules/semi-spacing
   *
   * Prettier
   */
  'semi-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/semi-style
   *
   * Prettier
   */
  'semi-style': 'off',

  /**
   * https://eslint.org/docs/rules/space-before-blocks
   *
   * Prettier
   */
  'space-before-blocks': 'off',

  /**
   * https://eslint.org/docs/rules/space-before-function-paren
   *
   * Prettier
   */
  'space-before-function-paren': 'off',

  /**
   * https://eslint.org/docs/rules/space-in-parens
   *
   * Prettier
   */
  'space-in-parens': 'off',

  /**
   * https://eslint.org/docs/rules/space-infix-ops
   *
   * Prettier
   */
  'space-infix-ops': 'off',

  /**
   * https://eslint.org/docs/rules/space-unary-ops
   *
   * Prettier
   */
  'space-unary-ops': 'off',

  /**
   * https://eslint.org/docs/rules/switch-colon-spacing
   *
   * Prettier
   */
  'switch-colon-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/template-curly-spacing
   *
   * Prettier
   */
  'template-curly-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/template-tag-spacing
   *
   * Prettier
   */
  'template-tag-spacing': 'off',

  /**
   * https://eslint.org/docs/rules/unicode-bom
   *
   * Prettier
   */
  'unicode-bom': 'off',

  /**
   * https://eslint.org/docs/rules/wrap-iife
   *
   * Prettier
   */
  'wrap-iife': 'off',

  /**
   * https://eslint.org/docs/rules/wrap-regex
   *
   * Prettier
   */
  'wrap-regex': 'off',

  /**
   * https://eslint.org/docs/rules/yield-star-spacing
   *
   * Prettier
   */
  'yield-star-spacing': 'off',
};
