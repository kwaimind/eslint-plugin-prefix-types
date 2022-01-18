"use strict";

const rule = require("../../../lib/rules/no-type-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`rule: ${rule.meta.name}`, rule, {
  valid: [
    'type MyType = "yes" | "no"',
    'export type MyType = "yes" | "no"',
    'type Info = "test1" | "test2"',
    'type TestType = "test1" | "test2"',
  ],
  invalid: [
    {
      code: 'type TMyType = "yes" | "no"',
      errors: [{ message: "Types must not start with a capital T" }],
      output: 'type MyType = "yes" | "no"',
    },
    {
      code: 'type TTestType = "test1" | "test2"',
      errors: [{ message: "Types must not start with a capital T" }],
      output: 'type TestType = "test1" | "test2"',
    },
    {
      code: "type TInfoType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type InfoType = true | false",
    },
    {
      code: "type TTestType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type TestType = true | false",
    },
    {
      code: "type TMyType = true | false",
      errors: [{ message: "Types must not start with a capital T" }],
      output: "type MyType = true | false",
    },
  ],
});
