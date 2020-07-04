const fs = require('fs');
const path = require('path');

const findUp = require('find-up');

/**
 * Determine the default ignore pattern based on `.gitignore`.
 *
 * @returns {string[]} An array of ignore patterns accepted in an ESLint configuration.
 */
module.exports = () => {
  const ignorePatterns = ['!.*'];
  const gitDir = findUp.sync('.git', { type: 'directory' });

  if (gitDir) {
    const gitIgnorePath = path.join(path.dirname(gitDir), '.gitignore');
    if (fs.existsSync(gitIgnorePath)) {
      const ignore = fs.readFileSync(gitIgnorePath, 'utf-8');
      ignorePatterns.push(
        ...ignore.split(/\r?\n/g).filter((line) => line && !line.startsWith('#')),
      );
    }
  }
  return ignorePatterns;
};
