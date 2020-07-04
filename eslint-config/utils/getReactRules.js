const rules = require('./react');

/**
 * Get rules from `eslint-plugin-react` for a given context.
 *
 * @param {string} context - One of `'jsx'`, `'preact'`, or `'react'`.
 */
module.exports = (context) =>
  Object.entries(rules).reduce((acc, [rule, config]) => {
    if (config[context] !== 'off') {
      acc[rule] = config[context];
    }
    return acc;
  }, {});
