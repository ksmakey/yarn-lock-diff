# yarn-lock-diff

`yarn-lock-diff` shows you changes for `yarn upgrade`.
This command needs to execute before commit for changes.

## Installation

```
$ yarn add @ksmakey/yarn-lock-diff
```

## CLI command references

You may needs to set path to `node_modules/@ksmakey/yarn-lock-diff/bin/yarn-lock-diff`.

```
$ yarn upgrade
$ yarn-lock-diff
```

## Example Output

```
{ 'sass-loader': { previous: '7.1.0', current: '7.3.1' },
  sass: { previous: '1.22.7', current: '1.22.12' },
  ...
  webpack: { previous: '4.36.1', current: '4.41.0' } }
```

