module.exports = {
  rules: {
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true
      }
    ],
    'jsdoc/require-jsdoc': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'unicorn/consistent-function-scoping': 'off'
  }
}
