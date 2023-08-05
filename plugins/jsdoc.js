/**
 * Any function declaration whose name starts woth a lower case character.
 */
const NON_COMPONENT_FUNCTION = 'FunctionDeclaration[id.name=/^[a-z]/]'
const METHOD_DEFINITION = 'MethodDefinition'

/**
 * https://github.com/gajus/eslint-plugin-jsdoc
 */
module.exports = {
  settings: {
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
    }
  },
  rules: {
    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md
     */
    'jsdoc/check-access': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md
     *
     * Prettier.
     */
    'jsdoc/check-alignment': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md
     *
     * @see https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v37.0.0
     */
    'jsdoc/check-examples': [
      'off',
      { exampleCodeRegex: /```(?:js|jsx|javascript|ts|tsx|typescript)\r?\n([\S\s]*)```/.source }
    ],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md
     */
    'jsdoc/check-indentation': [
      'error',
      { excludeTags: ['example', 'param', 'returns', 'throws', 'todo'] }
    ],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md
     */
    'jsdoc/check-line-alignment': ['error', 'never', { wrapIndent: '  ' }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md
     */
    'jsdoc/check-param-names': ['error', { checkDestructured: false }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md
     */
    'jsdoc/check-property-names': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md
     */
    'jsdoc/check-syntax': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
     */
    'jsdoc/check-tag-names': ['error', { jsxTags: true }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md
     */
    'jsdoc/check-types': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md
     */
    'jsdoc/check-values': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md
     */
    'jsdoc/empty-tags': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md
     */
    'jsdoc/imports-as-dependencies': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md
     */
    'jsdoc/implements-on-classes': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md
     */
    'jsdoc/informative-docs': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md
     */
    'jsdoc/match-description': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md
     */
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

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md
     */
    'jsdoc/multiline-blocks': [
      'error',
      {
        noSingleLineBlocks: true,
        noZeroLineText: true,
        singleLineTags: ['jsx', 'jsxFrag', 'jsxImportSource', 'jsxRuntime', 'type']
      }
    ],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md
     */
    'jsdoc/no-blank-block-descriptions': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md
     */
    'jsdoc/no-blank-blocks': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md
     */
    'jsdoc/no-bad-blocks': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md
     */
    'jsdoc/no-defaults': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md
     */
    'jsdoc/no-missing-syntax': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md
     */
    'jsdoc/no-multi-asterisks': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md
     */
    'jsdoc/no-restricted-syntax': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md
     */
    'jsdoc/no-types': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md
     */
    'jsdoc/no-undefined-types': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md
     */
    'jsdoc/require-asterisk-prefix': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md
     */
    'jsdoc/require-description': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md
     */
    'jsdoc/require-description-complete-sentence': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md
     */
    'jsdoc/require-example': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md
     */
    'jsdoc/require-file-overview': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md
     */
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
     */
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

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
     */
    'jsdoc/require-param': [
      'error',
      {
        checkDestructured: false,
        checkDestructuredRoots: true,
        contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION],
        unnamedRootBase: ['arg']
      }
    ],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md
     */
    'jsdoc/require-param-description': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md
     */
    'jsdoc/require-param-name': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md
     */
    'jsdoc/require-param-type': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md
     */
    'jsdoc/require-property': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md
     */
    'jsdoc/require-property-description': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md
     */
    'jsdoc/require-property-name': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md
     */
    'jsdoc/require-property-type': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md
     */
    'jsdoc/require-returns': ['error', { contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION] }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md
     */
    'jsdoc/require-returns-check': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md
     */
    'jsdoc/require-returns-description': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md
     */
    'jsdoc/require-returns-type': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md
     */
    'jsdoc/require-throws': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md
     */
    'jsdoc/require-yields': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md
     */
    'jsdoc/require-yields-check': 'error',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md
     */
    'jsdoc/sort-tags': ['error', { alphabetizeExtras: true }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
     */
    'jsdoc/tag-lines': ['error', 'never', { applyToEndTag: false, startLines: 1, endLines: 0 }],

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md
     */
    'jsdoc/text-escaping': 'off',

    /**
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md
     */
    'jsdoc/valid-types': 'error'
  }
}
