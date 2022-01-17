# eslint-plugin-prefix-types

[![npm version](https://img.shields.io/npm/v/eslint-plugin-prefix-types)](https://www.npmjs.com/package/eslint-plugin-prefix-types) [![Sponsored](https://img.shields.io/badge/chilicorn-sponsored-brightgreen.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAABqlBMVEUAAAAzmTM3pEn%2FSTGhVSY4ZD43STdOXk5lSGAyhz41iz8xkz2HUCWFFhTFFRUzZDvbIB00Zzoyfj9zlHY0ZzmMfY0ydT0zjj92l3qjeR3dNSkoZp4ykEAzjT8ylUBlgj0yiT0ymECkwKjWqAyjuqcghpUykD%2BUQCKoQyAHb%2BgylkAyl0EynkEzmkA0mUA3mj86oUg7oUo8n0k%2FS%2Bw%2Fo0xBnE5BpU9Br0ZKo1ZLmFZOjEhesGljuzllqW50tH14aS14qm17mX9%2Bx4GAgUCEx02JySqOvpSXvI%2BYvp2orqmpzeGrQh%2Bsr6yssa2ttK6v0bKxMBy01bm4zLu5yry7yb29x77BzMPCxsLEzMXFxsXGx8fI3PLJ08vKysrKy8rL2s3MzczOH8LR0dHW19bX19fZ2dna2trc3Nzd3d3d3t3f39%2FgtZTg4ODi4uLj4%2BPlGxLl5eXm5ubnRzPn5%2Bfo6Ojp6enqfmzq6urr6%2Bvt7e3t7u3uDwvugwbu7u7v6Obv8fDz8%2FP09PT2igP29vb4%2BPj6y376%2Bu%2F7%2Bfv9%2Ff39%2Fv3%2BkAH%2FAwf%2FtwD%2F9wCyh1KfAAAAKXRSTlMABQ4VGykqLjVCTVNgdXuHj5Kaq62vt77ExNPX2%2Bju8vX6%2Bvr7%2FP7%2B%2FiiUMfUAAADTSURBVAjXBcFRTsIwHAfgX%2FtvOyjdYDUsRkFjTIwkPvjiOTyX9%2FAIJt7BF570BopEdHOOstHS%2BX0s439RGwnfuB5gSFOZAgDqjQOBivtGkCc7j%2B2e8XNzefWSu%2BsZUD1QfoTq0y6mZsUSvIkRoGYnHu6Yc63pDCjiSNE2kYLdCUAWVmK4zsxzO%2BQQFxNs5b479NHXopkbWX9U3PAwWAVSY%2FpZf1udQ7rfUpQ1CzurDPpwo16Ff2cMWjuFHX9qCV0Y0Ok4Jvh63IABUNnktl%2B6sgP%2BARIxSrT%2FMhLlAAAAAElFTkSuQmCC)](http://spiceprogram.org/)

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

This plugin follows the convention that interface and type names should use Pascal case. This means some names might be changed. For example, `myProps` would be changed to `IMyProps`.

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
