const getReactRules = require('./utils/getReactRules.js');
const jsxA11y = require('./utils/jsx-a11y.js');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  settings: { react: { pragma: null, version: 'detect' } },
  rules: {
    ...jsxA11y.rules,
    ...getReactRules('react'),
  },
};
