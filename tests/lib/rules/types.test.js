/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/types");
const RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
  // eslint-disable-next-line node/no-unpublished-require
  parser: require.resolve("@typescript-eslint/parser"),
});
const tester = new RuleTester();

tester.run("rule: types", rule, {
  valid: ['type TMyType = "yes" | "no"'],
  invalid: [
    {
      code: 'type MyType = "yes" | "no"',
      errors: [{ message: "Types must start with a captial T" }],
      output: 'type TMyType = "yes" | "no"',
    },
  ],
});
