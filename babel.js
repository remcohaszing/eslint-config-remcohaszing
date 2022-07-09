/**
 * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
 */
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],
  rules: {
    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     *
     * Babel will compile this.
     */
    'node/no-unsupported-features/es-syntax': 'off',

    /**
     * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
     */
    '@babel/new-cap': 'error',
    'new-cap': 'off',

    /**
     * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
     */
    '@babel/no-invalid-this': ['error', { capIsConstructor: false }],
    'no-invalid-this': 'off',

    /**
     * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
     */
    '@babel/no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-expressions': 'off',

    /**
     * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
     *
     * Prettier
     */
    '@babel/object-curly-spacing': 'off',

    /**
     * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin#rules
     *
     * Prettier
     */
    '@babel/semi': 'off',
  },
};
