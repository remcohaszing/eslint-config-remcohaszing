/**
 * Configuration specifically for web development.
 */
module.exports = {
  plugins: ['compat'],
  rules: {
    /**
     * https://github.com/amilajack/eslint-plugin-compat
     */
    'compat/compat': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    'n/no-deprecated-api': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
     */
    'n/no-path-concat': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     */
    'n/no-unpublished-bin': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     */
    'n/no-unpublished-import': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'n/no-unpublished-require': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     */
    'n/no-unsupported-features/es-builtins': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     */
    'n/no-unsupported-features/es-syntax': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    'n/no-unsupported-features/node-builtins': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     */
    'n/prefer-global/buffer': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     *
     * Re-enabled for TypeScript.
     */
    'n/prefer-global/text-decoder': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     *
     * Re-enabled for TypeScript.
     */
    'n/prefer-global/text-encoder': 'error',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     */
    'n/prefer-promises/dns': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    'n/prefer-promises/fs': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    'n/process-exit-as-throw': 'off',

    /**
     * https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    'n/shebang': 'off',
  },
};
