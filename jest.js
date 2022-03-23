/**
 * Overrides for default jest test filenames
 */
module.exports = {
  overrides: [
    {
      files: ['*.test.*', '*.spec.*', '**/__tests__/**'],
      extends: ['remcohaszing/dev', 'remcohaszing/jest-overrides'],
    },
  ],
};
