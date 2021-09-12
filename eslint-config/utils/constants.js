const markdownExtensions = require('markdown-extensions');

/**
 * Known packages in on DefinitelyTyped that don’t describe an npm package.
 */
module.exports.dtOnlyPackages = [
  'estree',
  'estree-jsx',
  'hast',
  'mdast',
  'unist',
  'web-app-manifest',
  'xast',
];

/**
 * Known packages that export only type definitions, but which don’t contain a JavaScript file.
 */
module.exports.typesOnlyPackages = ['@fortawesome/fontawesome-common-types'];

/**
 * https://github.com/github/markup/blob/master/lib/github/markup/markdown.rb#L34
 */
module.exports.markdownGlob = `*.(${markdownExtensions.join(',')})`;
