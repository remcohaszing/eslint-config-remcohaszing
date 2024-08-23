const obsoleteHTMLElements = require('./obsoleteHTMLElements.js')

module.exports = {
  'react/boolean-prop-naming': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/button-has-type': {
    jsx: ['error', { button: true, submit: true, reset: false }],
    preact: ['error', { button: true, submit: true, reset: false }],
    react: ['error', { button: true, submit: true, reset: false }]
  },
  'react/checked-requires-onchange-or-readonly': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/default-props-match-prop-types': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/destructuring-assignment': {
    jsx: 'off',
    preact: ['error', 'always', { ignoreClassFields: true }],
    react: ['error', 'always', { ignoreClassFields: true }]
  },
  'react/display-name': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/forbid-component-props': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/forbid-dom-props': {
    jsx: ['error', { forbid: [{ propName: 'style', message: 'Use a CSS class instead' }] }],
    preact: ['error', { forbid: [{ propName: 'style', message: 'Use a CSS class instead' }] }],
    react: ['error', { forbid: [{ propName: 'style', message: 'Use a CSS class instead' }] }]
  },
  'react/forbid-elements': {
    jsx: ['error', { forbid: obsoleteHTMLElements }],
    preact: ['error', { forbid: obsoleteHTMLElements }],
    react: ['error', { forbid: obsoleteHTMLElements }]
  },
  'react/forbid-foreign-prop-types': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/forbid-prop-types': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/function-component-definition': {
    jsx: 'off',
    preact: [
      'error',
      { namedComponents: 'function-declaration', unnamedComponents: 'arrow-function' }
    ],
    react: [
      'error',
      { namedComponents: 'function-declaration', unnamedComponents: 'arrow-function' }
    ]
  },
  'react/hook-use-state': {
    jsx: 'off',
    preact: ['error', { allowDestructuredState: true }],
    react: ['error', { allowDestructuredState: true }]
  },
  'react/iframe-missing-sandbox': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-boolean-value': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-child-element-spacing': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-closing-bracket-location': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-closing-tag-location': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-curly-brace-presence': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-curly-newline': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-curly-spacing': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-equals-spacing': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-filename-extension': {
    jsx: ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }],
    preact: ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }],
    react: ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }]
  },
  'react/jsx-first-prop-new-line': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-fragments': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/jsx-handler-names': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-indent': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-indent-props': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-key': {
    jsx: 'off',
    preact: ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }],
    react: ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }]
  },
  'react/jsx-max-depth': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-max-props-per-line': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-newline': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-no-bind': {
    jsx: 'off',
    preact: ['error', { allowArrowFunctions: true, ignoreRefs: true }],
    react: ['error', { allowArrowFunctions: true, ignoreRefs: true }]
  },
  'react/jsx-no-comment-textnodes': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-constructed-context-values': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-duplicate-props': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-literals': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-no-leaked-render': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-script-url': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-target-blank': {
    jsx: ['error', { forms: true }],
    preact: ['error', { forms: true }],
    react: ['error', { forms: true }]
  },
  'react/jsx-no-undef': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-no-useless-fragment': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-one-expression-per-line': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-pascal-case': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-props-no-multi-spaces': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-props-no-spreading': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-sort-default-props': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-sort-props': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-space-before-closing': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-tag-spacing': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-uses-react': {
    jsx: 'error',
    preact: 'off',
    react: 'off'
  },
  'react/jsx-uses-vars': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/jsx-wrap-multilines': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-access-state-in-setstate': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-adjacent-inline-elements': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-array-index-key': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-arrow-function-lifecycle': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-children-prop': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/no-danger': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-danger-with-children': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-deprecated': {
    jsx: 'off',
    preact: 'off',
    react: 'warn'
  },
  'react/no-did-mount-set-state': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-did-update-set-state': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-direct-mutation-state': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-find-dom-node': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-is-mounted': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/no-invalid-html-attribute': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/no-multi-comp': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-namespace': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-object-type-as-default-prop': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-redundant-should-component-update': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-render-return-value': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/no-set-state': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/no-string-refs': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-this-in-sfc': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-typos': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-unescaped-entities': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react/no-unknown-property': {
    jsx: 'off',
    preact: ['error', { ignore: ['class'] }],
    react: 'error'
  },
  'react/no-unsafe': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-unused-class-component-methods': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-unused-prop-types': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-unused-state': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/no-will-update-set-state': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/prefer-es6-class': {
    jsx: 'off',
    preact: 'off',
    react: 'error'
  },
  'react/prefer-exact-props': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/prefer-read-only-props': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/prefer-stateless-function': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/prop-types': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/react-in-jsx-scope': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/require-default-props': {
    jsx: 'off',
    preact: ['error', { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
    react: ['error', { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }]
  },
  'react/require-optimization': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/require-render-return': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/self-closing-comp': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/sort-comp': {
    jsx: 'off',
    preact: 'error',
    react: [
      'error',
      {
        order: [
          'static-variables',
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'instance-methods',
          'everything-else',
          'render'
        ]
      }
    ]
  },
  'react/sort-default-props': {
    jsx: ['off', { ignoreCase: true }],
    preact: ['error', { ignoreCase: true }],
    react: ['error', { ignoreCase: true }]
  },
  'react/sort-prop-types': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/state-in-constructor': {
    jsx: 'off',
    preact: ['error', 'never'],
    react: ['error', 'never']
  },
  'react/static-property-placement': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react/style-prop-object': {
    jsx: 'off',
    preact: 'off',
    react: 'off'
  },
  'react/void-dom-elements-no-children': {
    jsx: 'error',
    preact: 'error',
    react: 'error'
  },
  'react-hooks/rules-of-hooks': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  },
  'react-hooks/exhaustive-deps': {
    jsx: 'off',
    preact: 'error',
    react: 'error'
  }
}
