module.exports = {
  rules: {
    'spaced-comment': ['error', 'always', { line: { markers: ['/'] } }],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { lib: 'never', path: 'never', types: 'prefer-import' }
    ],
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-extraneous-class': 'off'
  }
}
