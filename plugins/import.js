module.exports = {
  settings: {
    'import/extensions': [],
    'import/parsers': {
      '@typescript-eslint/parser': ['.cts', '.mts', '.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: []
      }
    }
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowNew: true,
        allowObject: true
      }
    ],
    'import/no-commonjs': 'off',
    'import/no-cycle': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-dynamic-require': 'off',
    'import/no-empty-named-blocks': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true
      }
    ],
    'import/no-import-module-exports': 'off',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitiveStrict: true,
        commonjs: true,
        ignore: [/^[@a-z]/.source, /[!*]/.source, /.\.(cjs|js|mjs)$/.source]
      }
    ],
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '#*', group: 'internal' },
          { pattern: '#/**', group: 'internal' }
        ],
        warnOnUnassignedImports: true
      }
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off'
  }
}
