const rules = require('./react');

/**
 * Get rules from `eslint-plugin-react` for a given context.
 *
 * @param {string} context - One of `'jsx'`, `'preact'`, or `'react'`.
 */
module.exports = (context) => {
  const contextRules = {};
  for (const [rule, config] of Object.entries(rules)) {
    if (config[context] !== 'off') {
      contextRules[rule] = config[context];
    }
  }
  return contextRules;
};
