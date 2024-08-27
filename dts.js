module.exports = {
  rules: {
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { lib: 'never', path: 'never', types: 'prefer-import' }
    ],
    '@typescript-eslint/no-extraneous-class': 'off'
  }
}
