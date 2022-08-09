const { join } = require('path');
const process = require('process');

const prettier = require('prettier');

/**
 * Get the Prettier configuration for a file extension.
 *
 * @param {string} extension The file extension for which to get a configuration.
 * @returns {object} The Prettier configuration for the given file extension.
 */
function getConfig(extension) {
  return {
    // Prettier defaults
    printWidth: 80,
    singleQuote: false,
    ...prettier.resolveConfig.sync(join(process.cwd(), extension), { editorconfig: true }),
  };
}

module.exports = {
  js: getConfig('js'),
  ts: getConfig('ts'),
};
