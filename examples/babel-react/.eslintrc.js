module.exports = {
  overrides: [
    {
      files: ['src/**'],
      parserOptions: {
        babelOptions: {
          configFile: require.resolve('./babel.config'),
        },
      },
      extends: ['remcohaszing/babel', 'remcohaszing/react'],
    },
  ],
};
