const plugin = require('@typescript-eslint/eslint-plugin');
const config = require('eslint-config-remcohaszing/typechecking');
const processEntries = require('eslint-config-remcohaszing/utils/processEntries');

it('should define all rules from @typescript-eslint/eslint-plugin with type checking', () => {
  expect(
    Object.keys(config.overrides[0].rules)
      .filter((rule) => rule.startsWith('@typescript-eslint/'))
      .sort(),
  ).toStrictEqual(
    Object.entries(plugin.rules)
      .filter(([, { meta }]) => meta.docs.requiresTypeChecking)
      .map(([rule]) => `@typescript-eslint/${rule}`)
      .sort(),
  );
});

it('should disable all deprecated rules', () => {
  const deprecatedRules = processEntries(plugin.rules, (entries) =>
    entries
      .filter(([, { meta }]) => meta.docs.requiresTypeChecking && meta.deprecated)
      .map(([name]) => [`@typescript-eslint/${name}`, 'off']),
  );
  expect(config.overrides[0].rules).toMatchObject(deprecatedRules);
});
