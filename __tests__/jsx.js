const config = require('eslint-config-remcohaszing/jsx');
const processEntries = require('eslint-config-remcohaszing/utils/processEntries');
const pluginJsxA11y = require('eslint-plugin-jsx-a11y');

it('should define all rules from eslint-plugin-jsx-a11y', () => {
  expect(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('jsx-a11y/'))
      .sort(),
  ).toStrictEqual(
    Object.keys(pluginJsxA11y.rules)
      .map((rule) => `jsx-a11y/${rule}`)
      .sort(),
  );
});

it('should disable all deprecated rules from eslint-plugin-jsx-a11y', () => {
  const deprecatedRules = processEntries(pluginJsxA11y.rules, (entries) =>
    entries.filter(([, rule]) => rule.meta.deprecated).map(([name]) => [`jsx-a11y/${name}`, 'off']),
  );
  expect(config.rules).toMatchObject(deprecatedRules);
});
