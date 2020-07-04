const getReactRules = require('./utils/getReactRules');
const jsxA11y = require('./utils/jsx-a11y');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  settings: { react: { version: 'detect' } },
  rules: {
    ...jsxA11y.rules,
    ...getReactRules('react'),
  },
};
