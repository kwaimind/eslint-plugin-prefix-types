/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/types");
const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run("rule: types", rule, {
  valid: ['type TMyType = "yes" | "no"', 'export type TMyType = "yes" | "no"'],
  invalid: [
    {
      code: 'type MyType = "yes" | "no"',
      errors: [{ message: "Types must start with a capital T" }],
      output: 'type TMyType = "yes" | "no"',
    },
  ],
});
