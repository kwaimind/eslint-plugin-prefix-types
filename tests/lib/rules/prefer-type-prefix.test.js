"use strict";

const rule = require("../../../lib/rules/prefer-type-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`${rule.meta.name}: allow: "always"`, rule, {
  valid: [
    { code: 'type TMyType = "yes" | "no"', options: [{ allow: "always" }] },
    {
      code: 'export type TMyType = "yes" | "no"',
      options: [{ allow: "always" }],
    },
    { code: 'type TInfo = "test1" | "test2"', options: [{ allow: "always" }] },
    {
      code: 'type TTestType = "test1" | "test2"',
      options: [{ allow: "always" }],
    },
    {
      code: `const user: TUsers = "editor"`,
      options: [{ allow: "always" }],
    },
    {
      code: `const user = "editor" as TUsers`,
      options: [{ allow: "always" }],
    },
  ],
  invalid: [
    {
      code: 'type MyType = "yes" | "no"',
      errors: [{ message: "Types must start with a capital T" }],
      output: 'type TMyType = "yes" | "no"',
      options: [{ allow: "always" }],
    },
    {
      code: 'type TestType = "test1" | "test2"',
      errors: [{ message: "Types must start with a capital T" }],
      output: 'type TTestType = "test1" | "test2"',
      options: [{ allow: "always" }],
    },
    {
      code: "type InfoType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TInfoType = true | false",
      options: [{ allow: "always" }],
    },
    {
      code: "type TestType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TTestType = true | false",
      options: [{ allow: "always" }],
    },
    {
      code: "type myType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TMyType = true | false",
      options: [{ allow: "always" }],
    },
    {
      code: `const user: Users = "editor"`,
      errors: [{ message: "Types must start with a capital T" }],
      output: `const user: TUsers = "editor"`,
      options: [{ allow: "always" }],
    },
    {
      code: `const user = "editor" as Users`,
      errors: [{ message: "Types must start with a capital T" }],
      output: `const user = "editor" as TUsers`,
      options: [{ allow: "always" }],
    },
  ],
});

tester.run(`${rule.meta.name}: allow: "never"`, rule, {
  valid: [
    { code: 'type MyType = "yes" | "no"', options: [{ allow: "never" }] },
    {
      code: 'export type MyType = "yes" | "no"',
      options: [{ allow: "never" }],
    },
    { code: 'type Info = "test1" | "test2"', options: [{ allow: "never" }] },
    {
      code: 'type TestType = "test1" | "test2"',
      options: [{ allow: "never" }],
    },
    {
      code: `const user: Users = "editor"`,
      options: [{ allow: "never" }],
    },
    {
      code: `const user = "editor" as Users`,
      options: [{ allow: "never" }],
    },
  ],
  invalid: [
    {
      code: 'type TMyType = "yes" | "no"',
      errors: [{ message: "Types must not start with a capital T" }],
      output: 'type MyType = "yes" | "no"',
      options: [{ allow: "never" }],
    },
    {
      code: 'type TTestType = "test1" | "test2"',
      errors: [{ message: "Types must not start with a capital T" }],
      output: 'type TestType = "test1" | "test2"',
      options: [{ allow: "never" }],
    },
    {
      code: "type TInfoType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type InfoType = true | false",
      options: [{ allow: "never" }],
    },
    {
      code: "type TTestType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type TestType = true | false",
      options: [{ allow: "never" }],
    },
    {
      code: "type TMyType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type MyType = true | false",
      options: [{ allow: "never" }],
    },
    {
      code: `const user: TUsers = "editor"`,
      errors: [{ message: "Types must not start with a capital T" }],
      output: `const user: Users = "editor"`,
      options: [{ allow: "never" }],
    },
    {
      code: `const user = "editor" as TUsers`,
      errors: [{ message: "Types must not start with a capital T" }],
      output: `const user = "editor" as Users`,
      options: [{ allow: "never" }],
    },
  ],
});
