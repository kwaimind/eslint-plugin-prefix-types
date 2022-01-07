# eslint-plugin-prefix-types

asdasdsa

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-prefix-types`:

```sh
npm install eslint-plugin-prefix-types --save-dev
```

## Usage

Add `carglass-style` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["prefix-types"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "prefix-types/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
