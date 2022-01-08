/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/interfaces");
const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run("rule: interfaces", rule, {
  valid: [
    "interface IAnotherInterface { preview: boolean; }",
    "interface IInfoBoxProps { preview: boolean; }",
    "interface ICustomProps extends AppProps { preview: boolean; }",
    "export interface ICustomProps { preview: boolean; }",
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
    {
      code: "interface InfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface IInfoBoxProps { preview: boolean; }",
    },
  ],
});
