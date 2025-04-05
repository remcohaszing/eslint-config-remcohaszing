# eslint-config-remcohaszing

> A strict ESLint configuration

[![build status](https://github.com/remcohaszing/eslint-config-remcohaszing/workflows/ci/badge.svg)](https://github.com/remcohaszing/eslint-config-remcohaszing/actions)
[![codecov](https://codecov.io/gh/remcohaszing/eslint-config-remcohaszing/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/eslint-config-remcohaszing)
[![npm](https://img.shields.io/npm/v/eslint-config-remcohaszing)](https://www.npmjs.com/package/eslint-config-remcohaszing)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

This is a strict shareable ESLint configuration. All ESLint core rules and a variety of ESLint
plugins have been carefully considered. Overrides are used to apply rules based on context.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [TypeScript](#typescript)
  - [Markdown](#markdown)
  - [Disabling rules](#disabling-rules)
- [Ignored files](#ignored-files)
- [Warnings](#warnings)
- [License](#license)

## Installation

Install `eslint-config-remcohaszing` using `npm`.

```sh
npm install --save-dev \
  eslint \
  eslint-config-remcohaszing \
  prettier
```

## Configuration

First [configure Prettier](https://prettier.io/docs/en/configuration.html). For example, create a
`.editorconfig` with the following content:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 100
trim_trailing_whitespace = true
```

And create a `.prettierrc.yaml` with the following content:

```yaml
proseWrap: always
singleQuote: true
trailingComma: all
```

Next, create `eslint.config.js` with the following content:

```js
export { default } from 'eslint-config-remcohaszing'
```

### TypeScript

This configuration enabled ESLint for TypeScript automatically.

Some rules from `@typescript-eslint/eslint-plugin` require TypeScript type checking features to be
enabled. Unfortunately, this makes ESLint slow. Enabling these rules is recommended for small
projects only. To enable this, add the following to `eslint.config.js`:

```js
import config, { typechecking } from 'eslint-config-remcohaszing'

export default [...config, ...typechecking]
```

### Markdown

Code blocks in Markdown are linted by default using
[`@eslint/markdown`](https://github.com/eslint/markdown). The type checking rules from
`@typescript-eslint/eslint-plugin` don’t work with markdown code blocks.

`prettier/prettier` is disabled, because it doesn’t play nice with `eslint-plugin-markdown`.

Some other rules have been turned off, because these rules may conflict with the purpose of the
documentation.

### Disabling rules

Rules can be disabled by adding an extra ESLint configuration item to the configuration array. For
example:

```js
import config from 'eslint-config-remcohaszing'

export default [
  ...config,
  {
    rules: {
      'no-console': 'off'
    }
  }
]
```

## Ignored files

By default ESLint ignores `node_modules/` and all dotfiles. This ESLint configuration also ignores
the patterns from `.gitignore`.

## Warnings

All ESLint that are turned on will trigger error, not warnings. The notable exceptions is
`@typescript-eslint/no-deprecated`.

This is to allow a smooth migration if a dependency decides to deprecate an API. To turn make
warnings cause ESLint to exit with exit code 1, run:

```sh
eslint
```

## License

[MIT](./LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
