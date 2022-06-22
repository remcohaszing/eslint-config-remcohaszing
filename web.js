/**
 * Configuration specifically for web development.
 */
module.exports = {
  extends: ['remcohaszing/esm'],
  plugins: ['compat'],
  rules: {
    /**
     * https://github.com/amilajack/eslint-plugin-compat
     */
    'compat/compat': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    'node/no-deprecated-api': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
     */
    'node/no-path-concat': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     */
    'node/no-unpublished-bin': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     */
    'node/no-unpublished-import': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-require': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     */
    'node/no-unsupported-features/es-builtins': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     */
    'node/no-unsupported-features/es-syntax': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    'node/no-unsupported-features/node-builtins': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     */
    'node/prefer-global/buffer': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     *
     * Re-enabled for TypeScript.
     */
    'node/prefer-global/text-decoder': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     *
     * Re-enabled for TypeScript.
     */
    'node/prefer-global/text-encoder': 'error',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     */
    'node/prefer-promises/dns': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    'node/prefer-promises/fs': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    'node/process-exit-as-throw': 'off',

    /**
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    'node/shebang': 'off',
  },
};
