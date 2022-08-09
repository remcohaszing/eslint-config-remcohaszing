const { builtinRules } = require('eslint/use-at-your-own-risk');

const byCategory = {};
for (const [name, { meta }] of builtinRules) {
  const cat = meta.deprecated ? 'deprecated' : meta.type;
  if (!byCategory[cat]) {
    byCategory[cat] = [];
  }
  byCategory[cat].push(name);
  byCategory[cat].sort();
}

describe.each(Object.entries(byCategory))('%s', (category, categoryRules) => {
  it('should explicitly define all rules alphabetically', () => {
    const config = require(`eslint-config-remcohaszing/core/${category}`);
    expect(Object.keys(config).sort()).toStrictEqual(categoryRules);
  });
});
