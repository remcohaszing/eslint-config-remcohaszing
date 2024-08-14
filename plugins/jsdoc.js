/**
 * Any function declaration whose name starts woth a lower case character.
 */
const NON_COMPONENT_FUNCTION = 'FunctionDeclaration[id.name=/^[a-z]/]'
const METHOD_DEFINITION = 'MethodDefinition'

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
    'jsdoc/check-types': 'off',
    'jsdoc/check-values': 'off',
    'jsdoc/empty-tags': 'error',
    'jsdoc/imports-as-dependencies': 'off',
    'jsdoc/implements-on-classes': 'off',
    'jsdoc/informative-docs': 'off',
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
    'jsdoc/require-throws': 'off',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/sort-tags': ['error', { alphabetizeExtras: true }],
    'jsdoc/tag-lines': ['error', 'never', { applyToEndTag: false, startLines: 1, endLines: 0 }],
    'jsdoc/text-escaping': 'off',
    'jsdoc/valid-types': 'error'
  }
}
