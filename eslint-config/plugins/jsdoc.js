/**
 * Any function declaration whose name starts woth a lower case character.
 */
const NON_COMPONENT_FUNCTION = 'FunctionDeclaration[id.name=/^[a-z]/]';
const METHOD_DEFINITION = 'MethodDefinition';

/**
 * https://github.com/gajus/eslint-plugin-jsdoc
 */
module.exports = {
  settings: {
    jsdoc: {
      tagNamePreference: {
        abstract: false,
        access: false,
        alias: false,
        async: false,
        augments: false,
        author: false,
        borrows: false,
        callback: false,
        class: false,
        classdesc: false,
        constant: false,
        constructs: false,
        copyright: false,
        description: false,
        enum: false,
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
        property: false,
        protected: false,
        public: false,
        readonly: false,
        requires: false,
        since: false,
        static: false,
        summary: false,
        this: false,
        todo: false,
        tutorial: false,
        type: false,
        typedef: false,
        variation: false,
        version: false,
      },
    },
  },
  rules: {
    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-access.md
     */
    'jsdoc/check-access': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-alignment.md
     *
     * Prettier.
     */
    'jsdoc/check-alignment': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-examples.md
     */
    'jsdoc/check-examples': [
      'error',
      { exampleCodeRegex: /```(?:js|jsx|javascript|ts|tsx|typescript)\r?\n([\S\s]*)```/.source },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-indentation.md
     */
    'jsdoc/check-indentation': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-line-alignment.md
     */
    'jsdoc/check-line-alignment': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-param-names.md
     */
    'jsdoc/check-param-names': ['error', { checkDestructured: false }],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-property-names.md
     */
    'jsdoc/check-property-names': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-syntax.md
     */
    'jsdoc/check-syntax': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-tag-names.md
     */
    'jsdoc/check-tag-names': ['error', { jsxTags: true }],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-types.md
     */
    'jsdoc/check-types': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-values.md
     */
    'jsdoc/check-values': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/empty-tags.md
     */
    'jsdoc/empty-tags': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/implements-on-classes.md
     */
    'jsdoc/implements-on-classes': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/match-description.md
     */
    'jsdoc/match-description': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/match-name.md
     */
    'jsdoc/match-name': [
      'error',
      {
        match: [
          {
            tags: ['param'],
            allowName: '/^[a-z][a-z\\d]*$/i',
            message: 'Parameters names should be camel case',
          },
        ],
      },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/multiline-blocks.md
     */
    'jsdoc/multiline-blocks': [
      'error',
      {
        noSingleLineBlocks: true,
        noZeroLineText: true,
        singleLineTags: ['jsx', 'jsxFrag', 'jsxImportSource', 'jsxRuntime'],
      },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/newline-after-description.md
     */
    'jsdoc/newline-after-description': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-bad-blocks.md
     */
    'jsdoc/no-bad-blocks': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-defaults.md
     */
    'jsdoc/no-defaults': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-missing-syntax.md
     */
    'jsdoc/no-missing-syntax': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-multi-asterisks.md
     */
    'jsdoc/no-multi-asterisks': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-restricted-syntax.md
     */
    'jsdoc/no-restricted-syntax': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-types.md
     */
    'jsdoc/no-types': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-undefined-types.md
     */
    'jsdoc/no-undefined-types': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-asterisk-prefix.md
     */
    'jsdoc/require-asterisk-prefix': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-description.md
     */
    'jsdoc/require-description': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-description-complete-sentence.md
     */
    'jsdoc/require-description-complete-sentence': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-example.md
     */
    'jsdoc/require-example': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-file-overview.md
     */
    'jsdoc/require-file-overview': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-hyphen-before-param-description.md
     */
    'jsdoc/require-hyphen-before-param-description': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-jsdoc.md
     */
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: [
          'ExportNamedDeclaration > ClassDeclaration',
          'FunctionDeclaration',
          'TSIndexSignature',
          'TSPropertySignature',
        ],
      },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param.md
     */
    'jsdoc/require-param': [
      'error',
      {
        checkDestructured: false,
        checkDestructuredRoots: true,
        contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION],
        unnamedRootBase: ['arg'],
      },
    ],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-description.md
     */
    'jsdoc/require-param-description': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-name.md
     */
    'jsdoc/require-param-name': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-type.md
     */
    'jsdoc/require-param-type': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-property.md
     */
    'jsdoc/require-property': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-property-description.md
     */
    'jsdoc/require-property-description': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-property-name.md
     */
    'jsdoc/require-property-name': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-property-type.md
     */
    'jsdoc/require-property-type': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns.md
     */
    'jsdoc/require-returns': ['error', { contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION] }],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-check.md
     */
    'jsdoc/require-returns-check': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-description.md
     */
    'jsdoc/require-returns-description': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-type.md
     */
    'jsdoc/require-returns-type': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-throws.md
     */
    'jsdoc/require-throws': 'off',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-yields.md
     */
    'jsdoc/require-yields': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-yields-check.md
     */
    'jsdoc/require-yields-check': 'error',

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/tag-lines.md
     */
    'jsdoc/tag-lines': ['error', 'never'],

    /**
     * Https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/valid-types.md
     */
    'jsdoc/valid-types': 'error',
  },
};
