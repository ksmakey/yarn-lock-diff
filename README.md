[![Build Status](https://travis-ci.org/ksmakey/yarn-lock-diff.svg?branch=master)](https://travis-ci.org/ksmakey/yarn-lock-diff)

# yarn-lock-diff

`yarn-lock-diff` shows you changes for `yarn upgrade`.
This command needs to execute before commit for changes.

### Requires

Node.js >= 11.15.0

## Installation

```
$ yarn add @ksmakey/yarn-lock-diff
```

## CLI command references

You may needs to set path to `node_modules/.bin/yarn-lock-diff`.

```
$ yarn upgrade
$ yarn-lock-diff
```

### Usage

```
yarn-lock-diff --help
Usage: yarn-lock-diff [options]

Options:
  -V, --version  output the version number
  -h, --help     output usage information
```

## Example Output

```
{ '"sass-loader": { "previous": "7.1.0", "current": "7.3.1" },
  "sass": { "previous": "1.22.7", current: "1.22.12" },
  ...
  "webpack": { "previous": "4.36.1", "current": "4.41.0" } }
```

