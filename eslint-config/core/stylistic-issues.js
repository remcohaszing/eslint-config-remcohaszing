const allowedProperties = require('../utils/allowedProperties');
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
   * https://eslint.org/docs/rules/camelcase
   */
  camelcase: ['error', { allow: allowedProperties }],

  /**
   * https://eslint.org/docs/rules/capitalized-comments
   */
  'capitalized-comments': ['error', 'always', { ignoreConsecutiveComments: true }],

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
   * https://eslint.org/docs/rules/consistent-this
   */
  'consistent-this': 'error',

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
   * https://eslint.org/docs/rules/func-name-matching
   *
   * Handled by func-style.
   */
  'func-name-matching': 'off',

  /**
   * https://eslint.org/docs/rules/func-names
   */
  'func-names': 'error',

  /**
   * https://eslint.org/docs/rules/func-style
   */
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

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
   * https://eslint.org/docs/rules/id-denylist
   */
  'id-denylist': ['error', 'l', 'O', 'React'],

  /**
   * https://eslint.org/docs/rules/id-length
   */
  'id-length': 'off',

  /**
   * https://eslint.org/docs/rules/id-match
   *
   * Handled by camelcase
   */
  'id-match': 'off',

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
   * https://eslint.org/docs/rules/max-depth
   */
  'max-depth': 'off',

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
   * https://eslint.org/docs/rules/max-lines
   */
  'max-lines': 'off',

  /**
   * https://eslint.org/docs/rules/max-lines-per-function
   */
  'max-lines-per-function': 'off',

  /**
   * https://eslint.org/docs/rules/max-nested-callbacks
   */
  'max-nested-callbacks': 'off',

  /**
   * https://eslint.org/docs/rules/max-params
   */
  'max-params': 'off',

  /**
   * https://eslint.org/docs/rules/max-statements
   */
  'max-statements': 'off',

  /**
   * https://eslint.org/docs/rules/max-statements-per-line
   *
   * Handled by Prettier.
   */
  'max-statements-per-line': 'off',

  /**
   * https://eslint.org/docs/rules/multiline-comment-style
   *
   * Although starred-block is preferred over bare-block, separate-lins is sometimes acceptable.
   */
  'multiline-comment-style': 'off',

  /**
   * https://eslint.org/docs/rules/multiline-ternary
   *
   * Prettier
   */
  'multiline-ternary': 'off',

  /**
   * https://eslint.org/docs/rules/new-cap
   */
  'new-cap': 'error',

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
   * https://eslint.org/docs/rules/no-array-constructor
   */
  'no-array-constructor': 'error',

  /**
   * https://eslint.org/docs/rules/no-bitwise
   */
  'no-bitwise': 'off',

  /**
   * https://eslint.org/docs/rules/no-continue
   */
  'no-continue': 'off',

  /**
   * https://eslint.org/docs/rules/no-inline-comments
   */
  'no-inline-comments': 'error',

  /**
   * https://eslint.org/docs/rules/no-lonely-if
   *
   * Handled by `unicorn/no-lonely-if`
   */
  'no-lonely-if': 'off',

  /**
   * https://eslint.org/docs/rules/no-mixed-operators
   */
  'no-mixed-operators': 'off',

  /**
   * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
   *
   * Prettier
   */
  'no-mixed-spaces-and-tabs': 'off',

  /**
   * https://eslint.org/docs/rules/no-multi-assign
   */
  'no-multi-assign': 'error',

  /**
   * https://eslint.org/docs/rules/no-multiple-empty-lines
   *
   * Prettier
   */
  'no-multiple-empty-lines': 'off',

  /**
   * https://eslint.org/docs/rules/no-negated-condition
   */
  'no-negated-condition': 'error',

  /**
   * https://eslint.org/docs/rules/no-nested-ternary
   */
  'no-nested-ternary': 'off',

  /**
   * https://eslint.org/docs/rules/no-new-object
   */
  'no-new-object': 'off',

  /**
   * https://eslint.org/docs/rules/no-plusplus
   */
  'no-plusplus': 'error',

  /**
   * https://eslint.org/docs/rules/no-restricted-syntax
   */
  'no-restricted-syntax': [
    'error',
    {
      // `value.toString()`
      selector:
        'CallExpression[callee.property.name="toString"][callee.optional=false][arguments.length=0][optional=false]',
      message: 'Use String() instead.',
    },
  ],

  /**
   * https://eslint.org/docs/rules/no-tabs
   */
  'no-tabs': ['error', { allowIndentationTabs: true }],

  /**
   * https://eslint.org/docs/rules/no-ternary
   */
  'no-ternary': 'off',

  /**
   * https://eslint.org/docs/rules/no-trailing-spaces
   *
   * Prettier
   */
  'no-trailing-spaces': 'off',

  /**
   * https://eslint.org/docs/rules/no-underscore-dangle
   */
  'no-underscore-dangle': 'error',

  /**
   * https://eslint.org/docs/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': 'error',

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
   * https://eslint.org/docs/rules/one-var
   */
  'one-var': ['error', 'never'],

  /**
   * https://eslint.org/docs/rules/one-var-declaration-per-line
   *
   * Prettier
   */
  'one-var-declaration-per-line': 'off',

  /**
   * https://eslint.org/docs/rules/operator-assignment
   */
  'operator-assignment': 'error',

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
   * https://eslint.org/docs/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator': 'error',

  /**
   * https://eslint.org/docs/rules/prefer-object-spread
   */
  'prefer-object-spread': 'error',

  /**
   * https://eslint.org/docs/rules/quote-props
   *
   * Prettier
   */
  'quote-props': 'off',

  /**
   * https://eslint.org/docs/rules/quotes
   */
  quotes: [
    'error',
    prettier.js.singleQuote ? 'single' : 'double',
    { avoidEscape: true, allowTemplateLiterals: false },
  ],

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
   * https://eslint.org/docs/rules/sort-keys
   */
  'sort-keys': 'off',

  /**
   * https://eslint.org/docs/rules/sort-vars
   *
   * Handled by one-var.
   */
  'sort-vars': 'off',

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
   * https://eslint.org/docs/rules/spaced-comment
   */
  'spaced-comment': ['error', 'always', { block: { balanced: true } }],

  /**
   * https://eslint.org/docs/rules/switch-colon-spacing
   *
   * Prettier
   */
  'switch-colon-spacing': 'off',

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
   * https://eslint.org/docs/rules/wrap-regex
   *
   * Prettier
   */
  'wrap-regex': 'off',
};
