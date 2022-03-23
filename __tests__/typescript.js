const plugin = require('@typescript-eslint/eslint-plugin');
const config = require('eslint-config-remcohaszing/typescript');
const processEntries = require('eslint-config-remcohaszing/utils/processEntries');

it('should define all rules from @typescript-eslint/eslint-plugin without type checking', () => {
  expect(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('@typescript-eslint/'))
      .sort(),
  ).toStrictEqual(
    Object.entries(plugin.rules)
      .filter(([rule, { meta }]) => !meta.docs.requiresTypeChecking || rule === 'naming-convention')
      .map(([rule]) => `@typescript-eslint/${rule}`)
      .sort(),
  );
});

it('should disable all deprecated rules', () => {
  const deprecatedRules = processEntries(plugin.rules, (entries) =>
    entries
      .filter(([, rule]) => rule.meta.deprecated)
      .map(([name]) => [`@typescript-eslint/${name}`, 'off']),
  );
  expect(config.rules).toMatchObject(deprecatedRules);
});
