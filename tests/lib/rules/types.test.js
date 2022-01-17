"use strict";

const rule = require("../../../lib/rules/types");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run("rule: types", rule, {
  valid: [
    'type TMyType = "yes" | "no"',
    'export type TMyType = "yes" | "no"',
    'type TInfo = "test1" | "test2"',
    'type TTestType = "test1" | "test2"',
  ],
  invalid: [
    {
      code: 'type MyType = "yes" | "no"',
      errors: [{ message: "Types must start with a capital T" }],
      output: 'type TMyType = "yes" | "no"',
    },
    {
      code: 'type TestType = "test1" | "test2"',
      errors: [{ message: "Types must start with a capital T" }],
      output: 'type TTestType = "test1" | "test2"',
    },
    {
      code: "type InfoType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TInfoType = true | false",
    },
    {
      code: "type TestType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TTestType = true | false",
    },
    {
      code: "type myType = true | false",
      errors: [{ message: "Types must start with a capital T" }],
      output: "type TmyType = true | false",
    },
  ],
});
