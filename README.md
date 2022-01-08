# eslint-plugin-prefix-types

An ESLint plugin to enforce the prefixing of interfaces, types, and styled components. Includes code fixing to fix the errors found.

**Rules:**
- Interfaces should start with the letter I
- Types should start with the letter T
- Styled components should start with the letter S


| Valid                                               | Invalid                                            |
| --------------------------------------------------- | -------------------------------------------------- |
| `interface IAnotherInterface { preview: boolean; }` | `interface AnotherInterface { preview: boolean; }` |
| `type TMyType = "Single"`                           | `type MyType = "Single"`                           |
| ` const SCardWrapper = styled.div``display: flex; ` | ` const CardWrapper = styled.div``display: flex; ` |

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

Then configure the rules you want to use under the rules section. Setting `2` gives an error, and `1` gives a warning.

```json
{
  "rules": {
    "prefix-types/types": 2,
    "prefix-types/interfaces": 2,
    "prefix-types/styled-components": 2
  }
}
```
