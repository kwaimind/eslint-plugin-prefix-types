/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/interfaces");
const RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
  // eslint-disable-next-line node/no-unpublished-require
  parser: require.resolve("@typescript-eslint/parser"),
});
const tester = new RuleTester();

tester.run("rule: interfaces", rule, {
  valid: [
    "interface IAnotherInterface { preview: boolean; }",
    "interface IInfoBoxProps { preview: boolean; }",
    "interface ICustomProps extends AppProps { preview: boolean; }",
  ],
  invalid: [
    {
      code: "interface AnotherInterface { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface IAnotherInterface { preview: boolean; }",
    },
    {
      code: "interface CustomProps extends AppProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface ICustomProps extends AppProps { preview: boolean; }",
    },
    /* {
      code: "interface InfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
    }, */
  ],
});
