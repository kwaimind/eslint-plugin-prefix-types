"use strict";

const rule = require("../../../lib/rules/no-interface-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run("rule: no-interface-prefix", rule, {
  valid: [
    "interface AnotherInterface { preview: boolean; }",
    "interface InfoBoxProps { preview: boolean; }",
    "interface CustomProps extends AppProps { preview: boolean; }",
    "export interface CustomProps { preview: boolean; }",
    "interface myInfoProps { preview: boolean; }",
  ],
  invalid: [
    {
      code: "interface IAnotherInterface { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface AnotherInterface { preview: boolean; }",
    },
    {
      code: "interface ICustomProps extends AppProps { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface CustomProps extends AppProps { preview: boolean; }",
    },
    {
      code: "interface IInfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface InfoBoxProps { preview: boolean; }",
    },
  ],
});
