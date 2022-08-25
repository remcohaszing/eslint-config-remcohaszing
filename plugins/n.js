const { typesOnlyPackages } = require('../utils/constants.js');

/**
 * https://github.com/weiran-zsd/eslint-plugin-node
 */
module.exports = {
  settings: {
    node: {
      tryExtensions: [],
    },
  },
  rules: {
    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/callback-return.md
     */
    'n/callback-return': ['error', ['callback', 'cb']],

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/exports-style.md
     */
    'n/exports-style': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
     *
     * Handled by import/extensions
     */
    'n/file-extension-in-import': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/global-require.md
     */
    'n/global-require': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
     */
    'n/handle-callback-err': ['error', /^(err\w*|\w*Error)$/.source],

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
     */
    'n/no-callback-literal': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    'n/no-deprecated-api': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
     *
     * Handled by node/exports-style
     */
    'n/no-exports-assign': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
     */
    'n/no-extraneous-import': ['error', { allowModules: typesOnlyPackages }],

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
     *
     * Handled by node/exports-style
     */
    'n/no-extraneous-require': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-hide-core-modules.md
     *
     * @deprecated
     */
    'n/no-hide-core-modules': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
     *
     * Handled by import/no-unresolved
     */
    'n/no-missing-import': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
     *
     * Handled by import/no-unresolved
     */
    'n/no-missing-require': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
     */
    'n/no-mixed-requires': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
     */
    'n/no-new-require': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
     */
    'n/no-path-concat': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
     */
    'n/no-process-env': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
     */
    'n/no-process-exit': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
     */
    'n/no-restricted-import': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
     */
    'n/no-restricted-require': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-sync.md
     */
    'n/no-sync': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     */
    'n/no-unpublished-bin': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     */
    'n/no-unpublished-import': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'n/no-unpublished-require': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
     *
     * @deprecated
     */
    'n/no-unsupported-features': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     */
    'n/no-unsupported-features/es-builtins': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     */
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    'n/no-unsupported-features/node-builtins': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     */
    'n/prefer-global/buffer': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
     */
    'n/prefer-global/console': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
     */
    'n/prefer-global/process': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     */
    'n/prefer-global/text-decoder': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     */
    'n/prefer-global/text-encoder': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
     */
    'n/prefer-global/url': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
     */
    'n/prefer-global/url-search-params': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     */
    'n/prefer-promises/dns': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    'n/prefer-promises/fs': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    'n/process-exit-as-throw': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    'n/shebang': 'error',
  },
};
