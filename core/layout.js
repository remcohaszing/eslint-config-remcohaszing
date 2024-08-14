const prettier = require('../utils/prettier.js')

module.exports = {
  'array-bracket-newline': 'off',
  'array-bracket-spacing': 'off',
  'array-element-newline': 'off',
  'arrow-parens': 'off',
  'arrow-spacing': 'off',
  'block-spacing': 'off',
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'comma-style': 'off',
  'computed-property-spacing': 'off',
  'dot-location': 'off',
  'eol-last': 'off',
  'func-call-spacing': 'off',
  'function-call-argument-newline': 'off',
  'function-paren-newline': 'off',
  'generator-star-spacing': 'off',
  'implicit-arrow-linebreak': 'off',
  indent: 'off',
  'jsx-quotes': 'off',
  'key-spacing': 'off',
  'keyword-spacing': 'off',
  'line-comment-position': 'error',
  'linebreak-style': 'off',
  'lines-around-comment': [
    'error',
    {
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
      allowClassStart: true
    }
  ],
  'lines-between-class-members': 'error',
  'max-len': [
    'error',
    {
      code: prettier.js.printWidth,
      ignorePattern: /^(?!\s+(\/\/|\*))|eslint-disable/.source,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ],
  'max-statements-per-line': 'off',
  'multiline-ternary': 'off',
  'new-parens': 'off',
  'newline-per-chained-call': 'off',
  'no-extra-parens': 'off',
  'no-mixed-spaces-and-tabs': 'off',
  'no-multi-spaces': 'off',
  'no-multiple-empty-lines': 'off',
  'no-tabs': ['error', { allowIndentationTabs: true }],
  'no-trailing-spaces': 'off',
  'no-whitespace-before-property': 'off',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': 'off',
  'object-curly-spacing': 'off',
  'object-property-newline': 'off',
  'operator-linebreak': 'off',
  'padded-blocks': 'off',
  'padding-line-between-statements': 'off',
  quotes: [
    'error',
    prettier.js.singleQuote ? 'single' : 'double',
    { avoidEscape: true, allowTemplateLiterals: false }
  ],
  'rest-spread-spacing': 'off',
  semi: 'off',
  'semi-spacing': 'off',
  'semi-style': 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-in-parens': 'off',
  'space-infix-ops': 'off',
  'space-unary-ops': 'off',
  'switch-colon-spacing': 'off',
  'template-curly-spacing': 'off',
  'template-tag-spacing': 'off',
  'unicode-bom': 'off',
  'wrap-iife': 'off',
  'wrap-regex': 'off',
  'yield-star-spacing': 'off'
}
