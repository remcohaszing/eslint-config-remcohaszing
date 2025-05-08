/**
 * @import {Linter} from 'eslint'
 */

import markdown from '@eslint/markdown'
// @ts-expect-error
import eslintCommunityEslintComments from '@eslint-community/eslint-plugin-eslint-comments'
import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import confusingBrowserGlobals from 'confusing-browser-globals'
import { defineConfig } from 'eslint/config'
import importX from 'eslint-plugin-import-x'
// @ts-expect-error
import jestFormatting from 'eslint-plugin-jest-formatting'
import jsdoc from 'eslint-plugin-jsdoc'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import { Alphabet } from 'eslint-plugin-perfectionist/alphabet'
import prettier from 'eslint-plugin-prettier'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import { allowedProperties } from './allowedProperties.js'
import { typesOnlyPackages } from './constants.js'
import { getIgnorePatterns } from './getIgnorePatterns.js'

const restrictedImports = [
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
]

/**
 * Move a character in an alphabet string up to the first position.
 *
 * @param {string} string
 *   The string to modify
 * @param {string} char
 *   The character to unshift.
 * @returns {string}
 *   The string, but with the char moved to the first position.
 */
function unshiftChar(string, char) {
  const index = string.indexOf(char)
  return `${char}${string.slice(0, index)}${string.slice(index + 1)}`
}

const characters = Alphabet.generateRecommendedAlphabet().getCharacters()
const alphabet = unshiftChar(unshiftChar(characters, '.'), '/')

/**
 * Any function declaration whose name starts woth a lower case character.
 */
const NON_COMPONENT_FUNCTION = 'FunctionDeclaration[id.name=/^[a-z]/]'
const METHOD_DEFINITION = 'MethodDefinition'

const config = defineConfig([
  getIgnorePatterns() ?? {},
  {
    name: 'base',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          globalReturn: true,
          impliedStrict: true
        },
        sourceType: 'module'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error'
    },
    plugins: {
      '@stylistic': stylistic,
      // @ts-expect-error
      '@typescript-eslint': typescriptEslint,
      '@eslint-community/eslint-comments': eslintCommunityEslintComments,
      // @ts-expect-error
      'import-x': importX,
      'jest-formatting': jestFormatting,
      jsdoc,
      n,
      perfectionist,
      prettier,
      unicorn
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
          version: false,
          yields: false
        }
      },
      node: {
        convertPath: {
          'src/**': ['src/(.+?)\\.ts$', 'dist/$1.js']
        },
        tryExtensions: [],
        version: '>=20'
      },
      perfectionist: {
        type: 'natural',
        ignoreCase: false,
        fallbackSort: {
          type: 'alphabetical'
        }
      }
    },
    rules: {
      // https://eslint.org/docs/latest/rules/
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
      'consistent-this': 'error',
      'constructor-super': 'error',
      curly: 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'always', { null: 'never' }],
      'for-direction': 'error',
      'func-names': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'getter-return': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'id-denylist': ['error', 'l', 'O', 'React'],
      'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
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
      'no-control-regex': 'error',
      'no-debugger': 'error',
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
      'no-irregular-whitespace': ['error', { skipStrings: false }],
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: true }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['ast', 'ctx', 'element', 'hast', 'mdast', 'node', 'root']
        }
      ],
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-globals': [
        'error',
        ...confusingBrowserGlobals.filter((name) => name !== 'self')
      ],
      'no-restricted-imports': ['error', ...restrictedImports],
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
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
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
      'no-useless-assignment': 'error',
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
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: ['error', 'as-needed'],
      'require-await': 'error',
      'require-yield': 'error',
      strict: 'error',
      'symbol-description': 'error',
      'use-isnan': ['error', { enforceForIndexOf: true }],
      'valid-typeof': 'error',
      yoda: 'error',

      // https://github.com/eslint-community/eslint-plugin-eslint-comments
      '@eslint-community/eslint-comments/disable-enable-pair': 'error',
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
      '@eslint-community/eslint-comments/no-use': [
        'error',
        { allow: ['eslint-disable-next-line'] }
      ],

      // https://eslint.style
      '@stylistic/jsx-curly-brace-presence': 'error',
      '@stylistic/jsx-self-closing-comp': 'error',
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
          code: Number.MAX_SAFE_INTEGER,
          comments: 100,
          ignorePattern: /^(?!\s+(\/\/|\*))|eslint-disable/.source,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],
      '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
      '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
      '@stylistic/padding-line-between-statements': 'error',
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, ignoreStringLiterals: true }],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          block: { balanced: true },
          line: { markers: ['/'] }
        }
      ],

      // https://github.com/un-ts/eslint-plugin-import-x
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/export': 'error',
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/first': 'error',
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
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
          optionalDependencies: true,
          peerDependencies: true,
          bundledDependencies: true
        }
      ],
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-relative-packages': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': [
        'error',
        {
          caseSensitiveStrict: true,
          commonjs: true,
          ignore: [/^[@a-z]/.source, /[!*]/.source, /.\.(cjs|js|mjs)$/.source]
        }
      ],
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',

      // https://github.com/dangreenisrael/eslint-plugin-jest-formatting
      'jest-formatting/padding-around-after-all-blocks': 'error',
      'jest-formatting/padding-around-after-each-blocks': 'error',
      'jest-formatting/padding-around-before-all-blocks': 'error',
      'jest-formatting/padding-around-before-each-blocks': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      'jest-formatting/padding-around-test-blocks': 'error',

      // https://github.com/gajus/eslint-plugin-jsdoc
      'jsdoc/check-access': 'error',
      'jsdoc/check-indentation': [
        'error',
        { excludeTags: ['example', 'param', 'property', 'returns', 'throws', 'todo'] }
      ],
      'jsdoc/check-line-alignment': ['error', 'never', { wrapIndent: '  ' }],
      'jsdoc/check-param-names': ['error', { checkDestructured: false }],
      'jsdoc/check-tag-names': ['error', { jsxTags: true }],
      'jsdoc/check-template-names': 'error',
      'jsdoc/empty-tags': 'error',
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
      'jsdoc/no-bad-blocks': 'error',
      'jsdoc/no-blank-block-descriptions': 'error',
      'jsdoc/no-blank-blocks': 'error',
      'jsdoc/no-defaults': 'error',
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
      'jsdoc/no-undefined-types': 'error',
      'jsdoc/require-asterisk-prefix': 'error',
      'jsdoc/require-description': 'error',
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
      'jsdoc/require-property-type': 'error',
      'jsdoc/require-returns': ['error', { contexts: [METHOD_DEFINITION, NON_COMPONENT_FUNCTION] }],
      'jsdoc/require-returns-check': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-returns-type': 'error',
      'jsdoc/sort-tags': ['error', { alphabetizeExtras: true }],
      'jsdoc/tag-lines': ['error', 'never', { applyToEndTag: false, startLines: 1, endLines: 0 }],

      // https://github.com/eslint-community/eslint-plugin-n
      'n/callback-return': ['error', ['callback', 'cb']],
      'n/exports-style': 'error',
      'n/handle-callback-err': ['error', /^(err\w*|\w*Error)$/.source],
      'n/hashbang': 'error',
      'n/no-deprecated-api': 'error',
      'n/no-extraneous-import': ['error', { allowModules: typesOnlyPackages }],
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-unpublished-bin': 'error',
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

      // https://perfectionist.dev
      'perfectionist/sort-array-includes': 'error',
      'perfectionist/sort-classes': ['error', { type: 'unsorted' }],
      'perfectionist/sort-exports': ['error', { type: 'custom', alphabet }],
      'perfectionist/sort-heritage-clauses': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'custom',
          alphabet,
          internalPattern: [],
          groups: [
            'side-effect',
            'builtin',
            'external',
            'subpath',
            'internal',
            'parent',
            { newlinesBetween: 'never' },
            ['sibling', 'index'],
            'unknown',
            'object'
          ]
        }
      ],
      'perfectionist/sort-intersection-types': 'error',
      'perfectionist/sort-jsx-props': [
        'error',
        {
          groups: ['key', 'unknown'],
          customGroups: [{ groupName: 'key', elementNamePattern: 'key' }]
        }
      ],
      'perfectionist/sort-maps': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-objects': ['error', { objectDeclarations: false }],
      'perfectionist/sort-union-types': 'error',

      // https://github.com/prettier/eslint-plugin-prettier
      'prettier/prettier': 'error',

      // https://github.com/sindresorhus/eslint-plugin-unicorn
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': ['error', { name: 'error', ignore: ['err', /Error^/] }],
      'unicorn/consistent-assert': 'error',
      'unicorn/consistent-date-clone': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': ['warn', { allowWarningComments: false }],
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
      'unicorn/no-accessor-recursion': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-array-reduce': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-document-cookie': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-builtins': 'error',
      'unicorn/no-invalid-fetch-options': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-length-as-slice-end': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-named-default': 'error',
      'unicorn/no-negated-condition': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-object-as-default-parameter': 'error',
      'unicorn/no-single-promise-in-promise-methods': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-this-assignment': 'error',
      'unicorn/no-typeof-undefined': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-promise-resolve-reject': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-switch-case': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/numeric-separators-style': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-default-parameters': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-event-target': 'error',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-global-this': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-json-parse-buffer': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/prefer-math-min-max': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-native-coercion-functions': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-set-size': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-structured-clone': 'error',
      'unicorn/prefer-ternary': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/relative-url-style': 'error',
      'unicorn/require-post-message-target-origin': 'error',
      'unicorn/switch-case-braces': ['error', 'avoid'],
      'unicorn/template-indent': 'error',
      'unicorn/text-encoding-identifier-case': 'error',
      'unicorn/throw-new-error': 'error'
    }
  },

  /**
   * Enable the TypeScript rules for TypeScript files.
   */
  {
    name: 'typescript',
    files: ['**/*.cts', '**/*.mts', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        globalReturn: true,
        warnOnUnsupportedTypeScriptVersion: false
      }
    },
    rules: {
      'array-callback-return': 'off',
      camelcase: 'off',
      'class-methods-use-this': 'off',
      'default-param-last': 'off',
      'getter-return': 'off',
      'init-declarations': 'off',
      'max-params': 'off',
      'new-cap': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-loop-func': 'off',
      'no-magic-numbers': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-restricted-imports': 'off',
      'no-setter-return': 'off',
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',

      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-check': true,
          'ts-ignore': true,
          'ts-nocheck': true
        }
      ],
      '@typescript-eslint/class-literal-property-style': 'error',
      '@typescript-eslint/class-methods-use-this': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: [
            'accessor',
            'enumMember',
            'objectLiteralMethod',
            'objectLiteralProperty',
            'typeMethod',
            'typeProperty'
          ],
          format: null,
          modifiers: ['requiresQuotes']
        },
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
          filter: { regex: `^(${allowedProperties.join('|')})$`, match: false }
        },

        // PropertyLike
        { selector: 'variable', format: ['camelCase'] },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'parameter', format: ['camelCase', 'PascalCase'] },

        // ParameterLike
        {
          selector: 'property',
          format: ['camelCase', 'PascalCase'],
          filter: { regex: `^(${allowedProperties.join('|')})$`, match: false }
        },
        { selector: 'parameterProperty', format: ['PascalCase'] },
        { selector: 'method', format: ['camelCase'] },
        { selector: 'accessor', format: ['camelCase', 'PascalCase'] },
        { selector: 'enumMember', format: ['camelCase', 'PascalCase'] },

        // TypeLike
        { selector: 'typeLike', format: ['PascalCase'] }
      ],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-require-imports': ['error', { allowAsImport: true }],
      '@typescript-eslint/no-restricted-imports': ['error', ...restrictedImports],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
          ignoreFunctionTypeParameterNameValueShadow: false,
          ignoreTypeValueShadow: false
        }
      ],
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/parameter-properties': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      'import-x/default': 'off',
      'import-x/named': 'off',
      'import-x/namespace': 'off',
      'import-x/no-deprecated': 'off',

      'jsdoc/no-types': 'error',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-property-type': 'off',
      'jsdoc/require-returns-type': 'off',

      'unicorn/prefer-json-parse-buffer': 'off'
    }
  },

  /**
   * Enable parsing of JSX files.
   */
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
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
      '**/jest.*',
      '**/test.*',
      '**/*.test.*',
      '**/*.config.*',
      '**/*rc.{cjs,js,mjs}',
      '**/config/**',
      '**/test/**',
      '**/__mocks__/**'
    ],
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: true,
          peerDependencies: true,
          bundledDependencies: true
        }
      ],

      'jsdoc/require-jsdoc': 'off',

      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'unicorn/consistent-function-scoping': 'off'
    }
  },

  /**
   * Allow some normally disallowed syntax in Markdown
   */
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    processor: 'markdown/markdown',
    language: 'markdown/gfm'
  },

  {
    files: ['**/*.md/**'],
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': 'off',

      'import-x/extensions': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-unresolved': 'off',

      'jsdoc/require-jsdoc': 'off',

      'n/no-extraneous-import': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',

      'prettier/prettier': 'off',

      'unicorn/consistent-function-scoping': 'off'
    }
  }
])

export default config

export const typechecking = defineConfig([
  {
    name: 'typechecking',
    files: ['**/*.cts', '**/*.mts', '**/*.ts', '**/*.tsx'],
    ignores: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      'dot-notation': 'off',
      'no-implied-eval': 'off',
      'only-throw-error': 'off',
      'prefer-destructuring': 'off',
      'prefer-promise-reject-errors': 'off',

      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-array-delete': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-meaningless-void-operator': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-template-expression': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-enum-comparison': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: false, object: false }
        }
      ],
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-promise-reject-errors': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/prefer-return-this-type': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/related-getter-setter-pairs': 'error',
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true }
      ],
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

      'unicorn/prefer-array-find': 'off',
      'unicorn/prefer-includes': 'off',
      'unicorn/prefer-starts-ends-with': 'off'
    }
  }
])

/**
 * Define an ESLint configuration that extends the default export.
 *
 * @param {Linter.Config | Linter.Config[]} overrides
 *   ESLint configuration overrides.
 * @returns {Linter.Config[]}
 *   The full ESLint configuration.
 */
export function define(overrides) {
  return [...config, ...defineConfig(overrides)]
}
