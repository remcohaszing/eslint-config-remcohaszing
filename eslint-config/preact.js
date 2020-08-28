const getReactRules = require('./utils/getReactRules');
const jsxA11y = require('./utils/jsx-a11y');

module.exports = {
  extends: ['remcohaszing/web'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  settings: { react: { pragma: 'h', version: '16' } },
  rules: {
    ...jsxA11y.rules,
    ...getReactRules('preact'),
  },
};
