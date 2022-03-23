const { typesOnlyPackages } = require('../utils/constants');
const extensions = require('../utils/extensions');

/**
 * https://github.com/mysticatea/eslint-plugin-node
 */
module.exports = {
  settings: {
    node: {
      tryExtensions: extensions.map((ext) => `.${ext}`),
    },
  },
  rules: {
    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
     */
    'node/callback-return': ['error', ['callback', 'cb']],

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
     */
    'node/exports-style': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
     *
     * Handled by import/extensions
     */
    'node/file-extension-in-import': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
     */
    'node/global-require': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
     */
    'node/handle-callback-err': ['error', /^(err\w*|\w*Error)$/.source],

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
     */
    'node/no-callback-literal': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    'node/no-deprecated-api': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
     *
     * Handled by node/exports-style
     */
    'node/no-exports-assign': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
     */
    'node/no-extraneous-import': ['error', { allowModules: typesOnlyPackages }],

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
     *
     * Handled by node/exports-style
     */
    'node/no-extraneous-require': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-hide-core-modules.md
     *
     * @deprecated
     */
    'node/no-hide-core-modules': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
     *
     * Handled by import/no-unresolved
     */
    'node/no-missing-import': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
     *
     * Handled by import/no-unresolved
     */
    'node/no-missing-require': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
     */
    'node/no-mixed-requires': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
     */
    'node/no-new-require': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
     */
    'node/no-path-concat': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
     */
    'node/no-process-env': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
     */
    'node/no-process-exit': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
     */
    'node/no-restricted-import': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
     */
    'node/no-restricted-require': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
     */
    'node/no-sync': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     */
    'node/no-unpublished-bin': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     */
    'node/no-unpublished-import': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-require': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
     *
     * @deprecated
     */
    'node/no-unsupported-features': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     */
    'node/no-unsupported-features/es-builtins': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     */
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    'node/no-unsupported-features/node-builtins': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     */
    'node/prefer-global/buffer': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
     */
    'node/prefer-global/console': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
     */
    'node/prefer-global/process': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     */
    'node/prefer-global/text-decoder': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     */
    'node/prefer-global/text-encoder': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
     */
    'node/prefer-global/url': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
     */
    'node/prefer-global/url-search-params': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     */
    'node/prefer-promises/dns': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    'node/prefer-promises/fs': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    'node/process-exit-as-throw': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    'node/shebang': 'error',
  },
};
