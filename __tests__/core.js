const rules = require('eslint/lib/rules');

const byCategory = [...rules].reduce((acc, [name, { meta }]) => {
  const cat = meta.deprecated
    ? 'deprecated'
    : meta.docs.category.toLowerCase().replace(/\W+/g, '-');
  if (!acc[cat]) {
    acc[cat] = [];
  }
  acc[cat].push(name);
  acc[cat].sort();
  return acc;
}, {});

describe.each(Object.entries(byCategory))('%s', (category, categoryRules) => {
  it('should explicitly define all rules alphabetically', () => {
    // eslint-disable-next-line node/global-require, import/no-dynamic-require
    const config = require(`../eslint-config/core/${category}`);
    expect(Object.keys(config).sort()).toStrictEqual(categoryRules);
  });
});
