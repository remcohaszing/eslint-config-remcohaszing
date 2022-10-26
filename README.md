# eslint-config-remcohaszing

> A strict ESLint configuration

[![build status](https://github.com/remcohaszing/eslint-config/workflows/ci/badge.svg)](https://github.com/remcohaszing/eslint-config/actions)
[![codecov](https://codecov.io/gh/remcohaszing/eslint-config/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/eslint-config)
[![npm](https://img.shields.io/npm/v/eslint-config-remcohaszing)](https://www.npmjs.com/package/eslint-config-remcohaszing)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://jestjs.io)

This is a strict shareable ESLint configuration. All ESLint core rules and a variety of ESLint
plugins have been carefully considered. Overrides are used to apply rules based on context.

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

The configuration may be tweaked to your liking. Beware `eslint-config-remcohaszing` bases some rule
configurations on the Prettier configuration, but doesn’t support
[overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides).

Next, create `.eslintrc.yaml` with the following content:

```yaml
root: true
extends:
  - remcohaszing
```

### Settings

Most ESLint settings are tweaked to have a proper default. There is one setting that needs to be
configured if your project uses a build process and provides an executable command:
`node.convertPath`. See
[`n/no-unpublished-import`](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md#shared-settings)
for details.

```yaml
settings:
  node:
    convertPath:
      'src/**':
        - 'src/(.+?)\.tsx?$'
        - dist/$1.js
```

### Web

The default configuration works for Node.js projects. For web based projects it’s recommended to use
the `remcohaszing/web` preset for the source files. This preset requires `eslint-plugin-compat` to
have been installed:

```sh
npm install --save-dev eslint-plugin-compat
```

Example if the source files are in the `src` directory:

```yaml
root: true
settings:
  polyfills:
    - fetch
    - Promise
extends:
  - remcohaszing
overrides:
  - files:
      - 'src/**'
    extends:
      - remcohaszing/web
```

It’s recommended to also create a `browserslist` file. For example:

```browserslist
last 2 chrome versions
last 2 edge versions
last 2 firefox versions
last 2 safari versions
```

### TypeScript

This configuration enabled ESLint for TypeScript automatically. This requires some additional
dependencies to have been installed:

```sh
npm install --save-dev @typescript-eslint/eslint-config
```

Some rules from `@typescript-eslint/eslint-config` require TypeScript type checking features to be
enabled. Unfortunately, this makes ESLint slow. Enabling these rules is recommended for small
projects only. To enable this, add the following to `.eslintrc.yaml`:

```yaml
root: true
extends:
  - remcohaszing
  - remcohaszing/typechecking
```

This sets the project configuration to `tsconfig.json`. To change it, see
[`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser#parseroptionsproject)

### JSX

JSX syntax is supported by default in `.jsx` and `.tsx` files. This requires some additional
dependencies to be installed:

```sh
npm install --save-dev \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react
```

The pragma is set to `h` by default.

#### React / Preact

For React and Preact some special configurations are recommended.

An additional dependency is required:

```sh
npm install --save-dev eslint-plugin-react-hooks
```

The configurations can be applied by extending `remcohaszing/react` or `remcohaszing/preact`
respectively. The `extends` may be on the top level of the ESLint configuration or in an override.

React example:

```yaml
root: true
extends:
  - remcohaszing
overrides:
  - files:
      - 'src/**'
    extends:
      - remcohaszing/react
      - remcohaszing/web
```

Preact example:

```yaml
root: true
extends:
  - remcohaszing
overrides:
  - files:
      - 'src/**'
    extends:
      - remcohaszing/preact
```

### Jest

This package also includes an additional ESLint preset for Jest tests. This requires some additional
dependencies:

```sh
npm install --save-dev \
  eslint-plugin-jest \
  eslint-plugin-jest-formatting
```

Then add the configuration to the `extends` field of the ESLint configuration:

```yaml
root: true
extends:
  - remcohaszing
  - remcohaszing/jest
```

### Markdown

Code blocks in Markdown are linted by default using
[`eslint-plugin-markdown`](https://github.com/eslint/eslint-plugin-markdown).

`prettier/prettier` is disabled, because it doesn’t play nice with `eslint-plugin-markdown`.

The type checking rules from `@typescript-eslint/eslint-plugin` don’t work with
`eslint-plugin-markdown`. To work around this, tag TypeScript code blocks with `typescript`, not
`ts` or `tsx`.

Other rules have been turned off, because these rules may conflict with the purpose of the
documentation.

To not lint Markdown files, ignore them.

```yaml
ignorePatterns:
  - '*.md'
```

## Ignored files

By default ESLint ignores `node_modules/` and all dotfiles. This ESLint configuration unignores
dotfiles and passes the patterns from `.gitignore` to ESLint in addition to those in
`.eslintignore`. Typically this means you won’t need a `.eslintignore` file.

## Warnings

All ESLint that are turned on will trigger error, not warnings. The notable exceptions are the
following rules:

- `import/no-deprecated`
- `react/no-deprecated`

This is to allow a smooth migration if a dependency decides to deprecate an API. To turn make
warnings cause ESLint to exit with exit code 1, run:

```sh
eslint --max-warnings 0 .
```
