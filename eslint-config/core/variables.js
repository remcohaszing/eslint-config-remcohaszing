const confusingBrowserGlobals = require('confusing-browser-globals');

/**
 * These rules relate to variable declarations.
 */
module.exports = {
  /**
   * https://eslint.org/docs/rules/init-declarations
   */
  'init-declarations': 'off',

  /**
   * https://eslint.org/docs/rules/no-delete-var
   */
  'no-delete-var': 'off',

  /**
   * https://eslint.org/docs/rules/no-label-var
   */
  'no-label-var': 'error',

  /**
   * https://eslint.org/docs/rules/no-restricted-globals
   */
  'no-restricted-globals': ['error', ...confusingBrowserGlobals],

  /**
   * https://eslint.org/docs/rules/no-shadow
   */
  'no-shadow': ['error', { hoist: 'all' }],

  /**
   * https://eslint.org/docs/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names': 'error',

  /**
   * https://eslint.org/docs/rules/no-undef
   */
  'no-undef': 'error',

  /**
   * https://eslint.org/docs/rules/no-undef-init
   */
  'no-undef-init': 'error',

  /**
   * https://eslint.org/docs/rules/no-undefined
   */
  'no-undefined': 'off',

  /**
   * https://eslint.org/docs/rules/no-unused-vars
   */
  'no-unused-vars': 'error',

  /**
   * https://eslint.org/docs/rules/no-use-before-define
   */
  'no-use-before-define': 'error',
};
