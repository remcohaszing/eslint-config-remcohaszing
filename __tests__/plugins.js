const config = require('eslint-config-remcohaszing');
const processEntries = require('eslint-config-remcohaszing/utils/processEntries');

describe.each(config.plugins)('%s', (name) => {
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const plugin = require(`eslint-plugin-${name}`);
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const pluginConfig = require(`eslint-config-remcohaszing/plugins/${name}`);

  it('should define all rules alphabetically', () => {
    expect(Object.keys(pluginConfig.rules).sort()).toStrictEqual(
      Object.keys(plugin.rules)
        .map((rule) => `${name}/${rule}`)
        .sort(),
    );
  });

  it('should disable all deprecated rules all rules', () => {
    const deprecatedRules = processEntries(plugin.rules, (entries) =>
      entries
        .filter(([, rule]) => rule.meta.deprecated)
        .map(([rule]) => [`${name}/${rule}`, 'off']),
    );
    expect(pluginConfig.rules).toMatchObject(deprecatedRules);
  });
});
