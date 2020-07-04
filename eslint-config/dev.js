/**
 * Allow the usage of dev dependencies and unpublished files.
 */
module.exports = {
  rules: {
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
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-require': 'off',
  },
};
