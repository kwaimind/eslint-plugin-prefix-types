# eslint-plugin-prefix-types

An ESLint plugin to enforce the prefixing of interfaces, types, and styled components.

| Valid                                               | Invalid                                            | Reason                                  |
| --------------------------------------------------- | -------------------------------------------------- | --------------------------------------- |
| `interface IAnotherInterface { preview: boolean; }` | `interface AnotherInterface { preview: boolean; }` | Interfaces should start with `I`        |
| `type TMyType = "Single"`                           | `type MyType = "Single"`                           | Types should start with `T`             |
| ` const SCardWrapper = styled.div``display: flex; ` | ` const CardWrapper = styled.div``display: flex; ` | Styled components should start with `S` |

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

Add `prefix-types` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["prefix-types"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "prefix-types/prefix-types": 1
  }
}
```

## Supported Rules

- Fill in provided rules here
