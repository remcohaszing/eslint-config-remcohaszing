const getIgnorePatterns = require('./utils/getIgnorePatterns');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: getIgnorePatterns(),
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  plugins: [],
  rules: {},
  settings: {},
  overrides: [
    /**
     * Enable the TypeScript rules for TypeScript files.
     */
    {
      files: ['*.ts', '*.tsx'],
      extends: ['remcohaszing/typescript', 'remcohaszing/esm'],
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
      files: ['jest.*', '*.config.*', '*rc.*', '**/config/**', '**/__mocks__/**'],
      extends: ['remcohaszing/dev'],
    },

    /**
     * Enable ESM specific rule for `.mjs` files.
     */
    {
      files: ['*.mjs'],
      extends: ['remcohaszing/esm'],
    },

    /**
     * Allow some specific rules for `.d.ts` files.
     */
    {
      files: ['*.d.ts'],
      extends: ['remcohaszing/dts'],
    },

    /**
     * Enable specific rules for JSX files.
     */
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['remcohaszing/jsx'],
    },
  ],
};

[
  'best-practices',
  'deprecated',
  'ecmascript-6',
  'possible-errors',
  'strict-mode',
  'stylistic-issues',
  'variables',
].forEach((name) => {
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const rules = require(`./core/${name}`);
  Object.assign(module.exports.rules, rules);
});

[
  'eslint-comments',
  'import',
  'jsdoc',
  'node',
  'prettier',
  'sort-destructure-keys',
  'unicorn',
].forEach((name) => {
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const preset = require(`./plugins/${name}`);
  module.exports.plugins.push(name);
  Object.assign(module.exports.rules, preset.rules);
  Object.assign(module.exports.settings, preset.settings);
});
