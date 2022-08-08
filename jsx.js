const getReactRules = require('./utils/getReactRules.js');
const jsxA11y = require('./utils/jsx-a11y.js');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react'],
  settings: { react: { pragma: 'h', version: '999' } },
  rules: {
    ...jsxA11y.rules,
    ...getReactRules('jsx'),
  },
};
