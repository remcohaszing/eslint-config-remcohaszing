const { typesOnlyPackages } = require('../utils/constants.js')

module.exports = {
  settings: {
    node: {
      tryExtensions: [],
      version: '>=16.0.0'
    }
  },
  rules: {
    'n/callback-return': ['error', ['callback', 'cb']],
    'n/exports-style': 'error',
    'n/file-extension-in-import': 'off',
    'n/global-require': 'off',
    'n/handle-callback-err': ['error', /^(err\w*|\w*Error)$/.source],
    'n/no-callback-literal': 'off',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'off',
    'n/no-extraneous-import': ['error', { allowModules: typesOnlyPackages }],
    'n/no-extraneous-require': 'off',
    'n/no-hide-core-modules': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features': 'off',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'n/no-unsupported-features/node-builtins': 'error',
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'error'
  }
}
