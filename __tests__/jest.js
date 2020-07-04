const pluginJest = require('eslint-plugin-jest');
const pluginJestFormatting = require('eslint-plugin-jest-formatting');

const config = require('../eslint-config/jest-overrides');
const processEntries = require('../eslint-config/utils/processEntries');

it('should define all rules from eslint-plugin-jest', () => {
  expect(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('jest/'))
      .sort(),
  ).toStrictEqual(
    Object.keys(pluginJest.rules)
      .map((rule) => `jest/${rule}`)
      .sort(),
  );
});

it('should define all rules from eslint-plugin-jest-formatting', () => {
  expect(
    Object.keys(config.rules)
      .filter((rule) => rule.startsWith('jest-formatting/'))
      .sort(),
  ).toStrictEqual(
    Object.keys(pluginJestFormatting.rules)
      .map((rule) => `jest-formatting/${rule}`)
      .sort(),
  );
});

it('should disable all deprecated rules from eslint-plugin-jest', () => {
  const deprecatedRules = processEntries(pluginJest.rules, (entries) =>
    entries.filter(([, rule]) => rule.meta.deprecated).map(([name]) => [`jest/${name}`, 'off']),
  );
  expect(config.rules).toMatchObject(deprecatedRules);
});

it('should disable all deprecated rules from eslint-plugin-jest-formatting', () => {
  const deprecatedRules = processEntries(pluginJestFormatting.rules, (entries) =>
    entries
      .filter(([, rule]) => rule.meta.deprecated)
      .map(([name]) => [`jest-formatting/${name}`, 'off']),
  );
  expect(config.rules).toMatchObject(deprecatedRules);
});
