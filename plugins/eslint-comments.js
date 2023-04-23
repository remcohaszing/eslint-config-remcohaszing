/**
 * https://weiran-zsd.github.io/eslint-plugin-eslint-comments
 */
module.exports = {
  rules: {
    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
     */
    'eslint-comments/disable-enable-pair': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
     */
    'eslint-comments/no-aggregating-enable': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
     */
    'eslint-comments/no-duplicate-disable': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
     */
    'eslint-comments/no-restricted-disable': 'off',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
     */
    'eslint-comments/no-unlimited-disable': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
     */
    'eslint-comments/no-unused-disable': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
     */
    'eslint-comments/no-unused-enable': 'error',

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/no-use.html
     */
    'eslint-comments/no-use': ['error', { allow: ['eslint-disable-next-line'] }],

    /**
     * https://weiran-zsd.github.io/eslint-plugin-eslint-comments/rules/require-description.html
     */
    'eslint-comments/require-description': 'off'
  }
}
