const confusingBrowserGlobals = require('confusing-browser-globals')

const allowedProperties = require('./utils/allowedProperties.js')
const { typesOnlyPackages } = require('./utils/constants.js')
const getIgnorePatterns = require('./utils/getIgnorePatterns.js')
const prettier = require('./utils/prettier.js')

/**
 * https://github.com/github/markup/blob/master/lib/github/markup/markdown.rb#L34
 */
const markdown = '**/*.{md,mkd,mkdn,mdwn,mdown,markdown}'

/**
 * Any function declaration whose name starts woth a lower case character.
 */
const NON_COMPONENT_FUNCTION = 'FunctionDeclaration[id.name=/^[a-z]/]'
const METHOD_DEFINITION = 'MethodDefinition'

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  ignorePatterns: getIgnorePatterns(),
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: 'module'
  },
  settings: {
    'import-x/extensions': [],
    'import-x/parsers': {
      '@typescript-eslint/parser': ['.cts', '.mts', '.ts', '.tsx']
    },
    'import-x/resolver': {
      node: {
        extensions: []
      }
    },
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        abstract: false,
        access: false,
        alias: false,
        async: false,
        augments: false,
        author: false,
        borrows: false,
        class: false,
        classdesc: false,
        constant: false,
        constructs: false,
        copyright: false,
        description: false,
        event: false,
        exports: false,
        external: false,
        fires: false,
        function: false,
        generator: false,
        global: false,
        hideconstructor: false,
        ignore: false,
        implements: false,
        inner: false,
        instance: false,
        interface: false,
        kind: false,
        lends: false,
        license: false,
        listens: false,
        member: false,
        memberof: false,
        'memberof!': false,
        mixes: false,
        mixin: false,
        module: false,
        name: false,
        namespace: false,
        override: false,
        package: false,
        private: false,
        protected: false,
        public: false,
        readonly: false,
        requires: false,
        since: false,
        static: false,
        summary: false,
        todo: false,
        tutorial: false,
        variation: false,
        version: false
      }
    },
    node: {
      tryExtensions: [],
      version: '>=16.0.0'
    }
  },
  plugins: [
    '@stylistic',
    'eslint-comments',
    'import-x',
    'jest-formatting',
    'jsdoc',
    'n',
    'prettier',
    'sort-destructure-keys',
    'unicorn'
  ],
  rules: {
    // https://eslint.org/docs/latest/rules/
    // #region core rules
    'accessor-pairs': 'error',
    'array-callback-return': ['error', { allowImplicit: true }],
    'arrow-body-style': 'error',
    'block-scoped-var': 'error',
    camelcase: ['error', { allow: allowedProperties }],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true,
        ignorePattern: /^\s*(c8|type-coverage:|webpack\w)/.source
      }
    ],
    'class-methods-use-this': 'error',
    complexity: 'off',
    'consistent-return': 'off',
    'consistent-this': 'error',
    'constructor-super': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'for-direction': 'error',
    'func-name-matching': 'off',
    'func-names': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'getter-return': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': ['error', 'l', 'O', 'React'],
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'logical-assignment-operators': ['off', 'always', { enforceForIfStatements: true }],
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'off',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': ['error', { ignorePattern: /\s@type\s/.source }],
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: true }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'off',
    'no-obj-calls': 'error',
    'no-object-constructor': 'error',
    'no-octal': 'off',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        // Koa context.
        ignorePropertyModificationsFor: ['ctx']
      }
    ],
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': [
      'error',
      ...confusingBrowserGlobals.filter((name) => name !== 'self')
    ],
    'no-restricted-imports': [
      'error',
      { name: 'node:assert', message: 'Use node:assert/strict instead.' },
      { name: 'node:test', importNames: ['it'], message: 'Use test instead.' },
      { name: 'node:dns', importNames: ['promises'], message: 'Use node:dns/promises instead.' },
      { name: 'node:fs', importNames: ['promises'], message: 'Use node:fs/promises instead.' },
      {
        name: 'node:stream',
        importNames: ['promises'],
        message: 'Use node:stream/promises instead.'
      },
      {
        name: 'node:timers',
        importNames: ['promises'],
        message: 'Use node:timers/promises instead.'
      }
    ],
    'no-restricted-properties': 'off',
    'no-restricted-syntax': [
      'error',
      {
        // `value.toString()`
        selector:
          'CallExpression[callee.property.name="toString"][callee.optional=false][arguments.length=0][optional=false]',
        message: 'Use String() instead.'
      },
      {
        selector: '[returnType.type="TSTypeAnnotation"]>TSTypeAnnotation>TSVoidKeyword',
        message: 'Use undefined for non-returning functions of unknown for callbacks'
      }
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-setter-return': 'error',
    'no-shadow': ['error', { hoist: 'all' }],
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'off',
    'no-template-curly-in-string': 'off',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unexpected-multiline': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': 'error',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'off',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: ['error', 'as-needed'],
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'sort-keys': 'off',
    'sort-vars': 'off',
    strict: 'error',
    'symbol-description': 'error',
    'unicode-bom': 'off',
    'use-isnan': ['error', { enforceForIndexOf: true }],
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    yoda: 'error',
    // #endregion

    // https://eslint.style
    // #region @stylistic/eslint-plugin
    '@stylistic/array-bracket-newline': 'off',
    '@stylistic/array-bracket-spacing': 'off',
    '@stylistic/array-element-newline': 'off',
    '@stylistic/arrow-parens': 'off',
    '@stylistic/arrow-spacing': 'off',
    '@stylistic/block-spacing': 'off',
    '@stylistic/brace-style': 'off',
    '@stylistic/comma-dangle': 'off',
    '@stylistic/comma-spacing': 'off',
    '@stylistic/comma-style': 'off',
    '@stylistic/computed-property-spacing': 'off',
    '@stylistic/dot-location': 'off',
    '@stylistic/eol-last': 'off',
    '@stylistic/func-call-spacing': 'off',
    '@stylistic/function-call-argument-newline': 'off',
    '@stylistic/function-call-spacing': 'off',
    '@stylistic/function-paren-newline': 'off',
    '@stylistic/generator-star-spacing': 'off',
    '@stylistic/implicit-arrow-linebreak': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/jsx-child-element-spacing': 'off',
    '@stylistic/jsx-closing-bracket-location': 'off',
    '@stylistic/jsx-closing-tag-location': 'off',
    '@stylistic/jsx-curly-brace-presence': 'error',
    '@stylistic/jsx-curly-newline': 'off',
    '@stylistic/jsx-curly-spacing': 'off',
    '@stylistic/jsx-equals-spacing': 'off',
    '@stylistic/jsx-first-prop-new-line': 'off',
    '@stylistic/jsx-function-call-newline': 'off',
    '@stylistic/jsx-indent-props': 'off',
    '@stylistic/jsx-max-props-per-line': 'off',
    '@stylistic/jsx-newline': 'off',
    '@stylistic/jsx-one-expression-per-line': 'off',
    '@stylistic/jsx-pascal-case': 'off',
    '@stylistic/jsx-props-no-multi-spaces': 'off',
    '@stylistic/jsx-quotes': 'off',
    '@stylistic/jsx-self-closing-comp': 'error',
    '@stylistic/jsx-sort-props': ['error', { locale: 'en', reservedFirst: ['key'] }],
    '@stylistic/jsx-tag-spacing': 'off',
    '@stylistic/jsx-wrap-multilines': 'off',
    '@stylistic/key-spacing': 'off',
    '@stylistic/keyword-spacing': 'off',
    '@stylistic/linebreak-style': 'off',
    '@stylistic/max-statements-per-line': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/new-parens': 'off',
    '@stylistic/newline-per-chained-call': 'off',
    '@stylistic/no-confusing-arrow': 'off',
    '@stylistic/no-extra-parens': 'off',
    '@stylistic/no-extra-semi': 'off',
    '@stylistic/no-floating-decimal': 'off',
    '@stylistic/no-mixed-operators': 'off',
    '@stylistic/no-mixed-spaces-and-tabs': 'off',
    '@stylistic/no-multi-spaces': 'off',
    '@stylistic/no-multiple-empty-lines': 'off',
    '@stylistic/no-trailing-spaces': 'off',
    '@stylistic/no-whitespace-before-property': 'off',
    '@stylistic/nonblock-statement-body-position': 'off',
    '@stylistic/object-curly-newline': 'off',
    '@stylistic/object-curly-spacing': 'off',
    '@stylistic/object-property-newline': 'off',
    '@stylistic/one-var-declaration-per-line': 'off',
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/padded-blocks': 'off',
    '@stylistic/quote-props': 'off',
    '@stylistic/rest-spread-spacing': 'off',
    '@stylistic/line-comment-position': 'error',
    '@stylistic/lines-around-comment': [
      'error',
      {
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        allowEnumStart: true,
        allowInterfaceStart: true,
        allowModuleStart: true,
        allowTypeStart: true
      }
    ],
    '@stylistic/lines-between-class-members': 'error',
    '@stylistic/max-len': [
      'error',
      {
        code: prettier.js.printWidth,
        ignorePattern: /^(?!\s+(\/\/|\*))|eslint-disable/.source,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    '@stylistic/multiline-comment-style': 'off',
    '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
    '@stylistic/padding-line-between-statements': 'error',
    '@stylistic/quotes': [
      'error',
      prettier.js.singleQuote ? 'single' : 'double',
      { avoidEscape: true, allowTemplateLiterals: false, ignoreStringLiterals: true }
    ],
    '@stylistic/semi': 'off',
    '@stylistic/semi-spacing': 'off',
    '@stylistic/semi-style': 'off',
    '@stylistic/space-before-blocks': 'off',
    '@stylistic/space-before-function-paren': 'off',
    '@stylistic/space-in-parens': 'off',
    '@stylistic/space-infix-ops': 'off',
    '@stylistic/space-unary-ops': 'off',
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        block: { balanced: true },
        line: { markers: ['/'] }
      }
    ],
    '@stylistic/switch-colon-spacing': 'off',
    '@stylistic/template-curly-spacing': 'off',
    '@stylistic/template-tag-spacing': 'off',
    '@stylistic/type-annotation-spacing': 'off',
    '@stylistic/type-generic-spacing': 'off',
    '@stylistic/type-named-tuple-spacing': 'off',
    '@stylistic/wrap-iife': 'off',
    '@stylistic/wrap-regex': 'off',
    '@stylistic/yield-star-spacing': 'off',
    // #endregion

    // https://github.com/eslint-community/eslint-plugin-eslint-comments
    // #region eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': ['error', { allow: ['eslint-disable-next-line'] }],
    'eslint-comments/require-description': 'off',
    // #endregion

    // https://github.com/import-js/eslint-plugin-import
    // #region eslint-plugin-import
    'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import-x/default': 'error',
    'import-x/dynamic-import-chunkname': 'off',
    'import-x/export': 'error',
    'import-x/exports-last': 'off',
    'import-x/extensions': ['error', 'ignorePackages'],
    'import-x/first': 'error',
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/named': 'error',
    'import-x/namespace': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-anonymous-default-export': [
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
    'import-x/no-commonjs': 'off',
    'import-x/no-cycle': 'off',
    'import-x/no-default-export': 'off',
    'import-x/no-deprecated': 'warn',
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
    'import-x/no-dynamic-require': 'off',
    'import-x/no-empty-named-blocks': 'off',
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true
      }
    ],
    'import-x/no-import-module-exports': 'off',
    'import-x/no-internal-modules': 'off',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'off',
    'import-x/no-nodejs-modules': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-relative-parent-imports': 'off',
    'import-x/no-restricted-paths': 'off',
    'import-x/no-self-import': 'error',
    'import-x/no-unassigned-import': 'off',
    'import-x/no-unresolved': [
      'error',
      {
        caseSensitiveStrict: true,
        commonjs: true,
        ignore: [/^[@a-z]/.source, /[!*]/.source, /.\.(cjs|js|mjs)$/.source]
      }
    ],
    'import-x/no-unused-modules': 'off',
    'import-x/no-useless-path-segments': 'error',
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/order': [
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
    'import-x/prefer-default-export': 'off',
    'import-x/unambiguous': 'off',
    // #endregion

    // https://github.com/dangreenisrael/eslint-plugin-jest-formatting
    // #region eslint-plugin-jest-formatting
    'jest-formatting/padding-around-after-all-blocks': 'error',
    'jest-formatting/padding-around-after-each-blocks': 'error',
    'jest-formatting/padding-around-all': 'off',
    'jest-formatting/padding-around-before-all-blocks': 'error',
    'jest-formatting/padding-around-before-each-blocks': 'error',
    'jest-formatting/padding-around-describe-blocks': 'error',
    'jest-formatting/padding-around-expect-groups': 'off',
    'jest-formatting/padding-around-test-blocks': 'error',
    // #endregion

    // https://github.com/gajus/eslint-plugin-jsdoc
    // #region eslint-plugin-jsdoc
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'off',
    'jsdoc/check-examples': [
      'off',
      { exampleCodeRegex: /```(?:js|jsx|javascript|ts|tsx|typescript)\r?\n([\S\s]*)```/.source }
    ],
    'jsdoc/check-indentation': [
      'error',
      { excludeTags: ['example', 'param', 'returns', 'throws', 'todo'] }
    ],
    'jsdoc/check-line-alignment': ['error', 'never', { wrapIndent: '  ' }],
    'jsdoc/check-param-names': ['error', { checkDestructured: false }],
    'jsdoc/check-property-names': 'off',
    'jsdoc/check-syntax': 'off',
    'jsdoc/check-tag-names': ['error', { jsxTags: true }],
    'jsdoc/check-template-names': 'error',
    'jsdoc/check-types': 'off',
    'jsdoc/check-values': 'off',
    'jsdoc/convert-to-jsdoc-comments': 'off',
    'jsdoc/empty-tags': 'error',
    'jsdoc/imports-as-dependencies': 'off',
    'jsdoc/implements-on-classes': 'off',
    'jsdoc/informative-docs': 'off',
    'jsdoc/lines-before-block': 'off',
    'jsdoc/match-description': 'off',
    'jsdoc/match-name': [
      'error',
      {
        match: [
          {
            tags: ['param'],
            allowName: '/^[a-z][a-z\\d]*$/i',
            message: 'Parameters names should be camel case'
          }
        ]
      }
    ],
    'jsdoc/multiline-blocks': [
      'error',
      {
        noSingleLineBlocks: true,
        noZeroLineText: true,
        singleLineTags: ['jsx', 'jsxFrag', 'jsxImportSource', 'jsxRuntime', 'type']
      }
    ],
    'jsdoc/no-blank-block-descriptions': 'error',
    'jsdoc/no-blank-blocks': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-defaults': 'error',
    'jsdoc/no-missing-syntax': 'off',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/no-restricted-syntax': [
      'error',
      {
        contexts: [
          {
            comment: 'JsdocBlock:has(JsdocTag[tag=typedef][parsedType.value=/object/i])',
            message: 'Omit the object type from typedef'
          }
        ]
      }
    ],
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-file-overview': 'off',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: [
          'ExportNamedDeclaration > ClassDeclaration',
          'FunctionDeclaration',
          'TSIndexSignature',
          'TSPropertySignature'
        ]
      }
    ],
    'jsdoc/require-param': [
      'error',
      {
        checkDestructured: false,
        checkDestructuredRoots: true,
        contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION],
        unnamedRootBase: ['arg']
      }
    ],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-property': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-property-name': 'off',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': ['error', { contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION] }],
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-template': 'off',
    'jsdoc/require-throws': 'off',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/sort-tags': ['error', { alphabetizeExtras: true }],
    'jsdoc/tag-lines': ['error', 'never', { applyToEndTag: false, startLines: 1, endLines: 0 }],
    'jsdoc/text-escaping': 'off',
    'jsdoc/valid-types': 'error',
    // #endregion

    // https://github.com/eslint-community/eslint-plugin-n
    // #region eslint-plugin-n
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
    'n/shebang': 'error',
    // #endregion

    // https://github.com/prettier/eslint-plugin-prettier
    // #region eslint-plugin-prettier
    'prettier/prettier': 'error',
    // #endregion

    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    // #region eslint-plugin-sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': 'error',
    // #endregion

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    // #region eslint-plugin-unicorn
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': ['error', { name: 'error', ignore: ['err', /Error^/] }],
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': ['warn', { allowWarningComments: false }],
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': [
      'error',
      {
        extendDefaultStyles: false,
        styles: {
          'node:child_process': { named: true },
          'node:crypto': { named: true },
          'node:events': { named: true },
          'node:fs': { named: true },
          'node:fs/promises': { named: true },
          'node:os': { named: true },
          'node:path': { named: true },
          'node:url': { named: true },
          'node:util': { named: true },
          'node:zlib': { named: true },

          preact: { named: true },
          'preact/compat': { named: true },
          'preact/hooks': { named: true },
          react: { named: true }
        }
      }
    ],
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-length-as-slice-end': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-magic-array-flat-depth': 'off',
    'unicorn/no-negated-condition': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-single-promise-in-promise-methods': 'error',
    'unicorn/no-thenable': 'off',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unnecessary-polyfills': 'off',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'off',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-raw': 'off',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-structured-clone': 'error',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'off',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/string-content': 'off',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/template-indent': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error'
    // #endregion
  },
  overrides: [
    /**
     * Enable the TypeScript rules for TypeScript files.
     */
    {
      files: ['*.ts', '*.tsx'],
      extends: ['remcohaszing/typescript']
    },

    /**
     * Allow some specific rules for `.d.ts` files.
     */
    {
      files: ['*.d.ts'],
      extends: ['remcohaszing/dts']
    },

    /**
     * Enable specific rules for JSX files.
     */
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['remcohaszing/jsx']
    },

    /**
     * Overrides for configuration files, for example:
     *
     * - `jest.setup.ts`
     * - `webpack.config.js`
     * - `.eslintrc.js`
     * - `config/custom.js`
     * - `__mocks__/fs.ts`
     * - etc.
     */
    {
      files: [
        'jest.*',
        'test.*',
        '*.config.*',
        '*rc.*',
        '**/config/**',
        '**/test/**',
        '**/__mocks__/**'
      ],
      extends: ['remcohaszing/dev']
    },

    /**
     * Use the Markdown processor for Markdown files.
     */
    {
      files: [markdown],
      plugins: ['markdown'],
      processor: 'markdown/markdown'
    },

    /**
     * Allow some normally disallowed syntax in Markdown
     */
    {
      files: [`${markdown}/*`],
      extends: ['remcohaszing/dev'],
      rules: {
        /**
         * Enabled for the purpose of examples.
         */
        'no-console': 'off',

        /**
         * Enabled for the purpose of examples.
         */
        'no-unused-vars': 'off',

        /**
         * Enabled for the purpose of examples.
         */
        '@typescript-eslint/no-unused-vars': 'off',

        /**
         * This may be useful for documentation purposes.
         */
        'import-x/extensions': 'off',

        /**
         * This may be useful for documentation purposes.
         */
        'import-x/no-unresolved': 'off',

        /**
         * This rule doesn’t work with eslint-plugin-markdown.
         *
         * Check the code using Prettier CLI instead.
         */
        'prettier/prettier': 'off'
      }
    },

    /**
     * Lint code blocks tagged with `javascript`.
     */
    {
      files: [`${markdown}/*.javascript`]
    },

    /**
     * Lint code blocks tagged with `typescript`.
     *
     * Also make sure rules that require type checking are disabled.
     */
    {
      files: [`${markdown}/*.typescript`],
      extends: ['remcohaszing/typescript']
    }
  ]
}
