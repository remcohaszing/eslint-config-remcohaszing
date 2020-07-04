const plugin = require('@babel/eslint-plugin');

const config = require('../eslint-config/babel');
const processEntries = require('../eslint-config/utils/processEntries');

it('should define all rules from eslint-plugin-react', () => {
  expect(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('@babel/'))
      .sort(),
  ).toStrictEqual(
    Object.keys(plugin.rules)
      .map((rule) => `@babel/${rule}`)
      .sort(),
  );
});

it('should disable all deprecated rules from eslint-plugin-babel', () => {
  const deprecatedRules = processEntries(plugin.rules, (entries) =>
    entries.filter(([, rule]) => rule.meta.deprecated).map(([name]) => [`@babel/${name}`, 'off']),
  );
  expect(config.rules).toMatchObject(deprecatedRules);
});
