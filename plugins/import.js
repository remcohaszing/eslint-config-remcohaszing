const { dtOnlyPackages, typesOnlyPackages } = require('../utils/constants');
const extensions = require('../utils/extensions');

/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
  settings: {
    'import/extensions': extensions.map((ext) => `.${ext}`),
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: extensions.map((ext) => `.${ext}`),
      },
    },
  },
  rules: {
    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/default.md
     */
    'import/default': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
     */
    'import/dynamic-import-chunkname': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/export.md
     */
    'import/export': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/exports-last.md
     */
    'import/exports-last': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/extensions.md
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      Object.fromEntries(extensions.map((ext) => [ext, 'never'])),
    ],

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/group-exports.md
     */
    'import/group-exports': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/imports-first.md
     *
     * @deprecated
     */
    'import/imports-first': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
     */
    'import/max-dependencies': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/named.md
     */
    'import/named': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-amd.md
     */
    'import/no-amd': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
     */
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
     */
    'import/no-commonjs': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import/no-cycle': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     *
     * A package version bump may introduce newly deprecated imports, but it may not always be
     * desirable to fix them immediately. For this reason imports of deprecated members are marked
     * as a warning, not an error.
     */
    'import/no-deprecated': 'warn',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
     */
    'import/no-import-module-exports': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
     */
    'import/no-internal-modules': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
     */
    'import/no-named-default': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
     */
    'import/no-named-export': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
     */
    'import/no-namespace': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
     */
    'import/no-nodejs-modules': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     */
    'import/no-relative-packages': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
     */
    'import/no-relative-parent-imports': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
     */
    'import/no-restricted-paths': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
     */
    'import/no-unassigned-import': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': [
      'error',
      {
        caseSensitiveStrict: true,
        commonjs: true,
        ignore: [...dtOnlyPackages, ...typesOnlyPackages, /[!*]/.source],
      },
    ],

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
     */
    'import/no-unused-modules': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     */
    'import/no-useless-path-segments': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'error',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/order.md
     *
     * This is included for files using require syntax.
     */
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',

    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',
  },
};
