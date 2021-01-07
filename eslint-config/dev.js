/**
 * Allow the usage of dev dependencies and unpublished files.
 */
module.exports = {
  rules: {
    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-jsdoc.md
     *
     * JSDoc is often not relevant in test or configuration files.
     */
    'jsdoc/require-jsdoc': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-import': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-require': 'off',

    /**
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
     *
     * This is an optimization that’s not important for tests or confiurations.
     */
    'unicorn/consistent-function-scoping': 'off',
  },
};
