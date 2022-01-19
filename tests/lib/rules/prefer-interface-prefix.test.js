"use strict";

const rule = require("../../../lib/rules/prefer-interface-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`${rule.meta.name}: allow: "always"`, rule, {
  valid: [
    {
      code: "interface IAnotherInterface { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "interface IInfoBoxProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "interface ICustomProps extends AppProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "export interface ICustomProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
  ],
  invalid: [
    {
      code: "interface AnotherInterface { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface IAnotherInterface { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "interface CustomProps extends AppProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface ICustomProps extends AppProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "interface InfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface IInfoBoxProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
    {
      code: "interface myInfoProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a capital I" }],
      output: "interface IMyInfoProps { preview: boolean; }",
      options: [{ allow: "always" }],
    },
  ],
});

tester.run(`${rule.meta.name}: allow: "never"`, rule, {
  valid: [
    {
      code: "interface AnotherInterface { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "interface InfoBoxProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "interface CustomProps extends AppProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "export interface CustomProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "interface myInfoProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
  ],
  invalid: [
    {
      code: "interface IAnotherInterface { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface AnotherInterface { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "interface ICustomProps extends AppProps { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface CustomProps extends AppProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
    {
      code: "interface IInfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must not start with a capital I" }],
      output: "interface InfoBoxProps { preview: boolean; }",
      options: [{ allow: "never" }],
    },
  ],
});
