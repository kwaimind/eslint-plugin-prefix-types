/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/prefix-types");
const RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
  // eslint-disable-next-line node/no-unpublished-require
  parser: require.resolve("@typescript-eslint/parser"),
});
const tester = new RuleTester();

tester.run("prefix-types", rule, {
  valid: [
    "interface IAnotherInterface { preview: boolean; }",
    'type TMyType = "yes" | "no"',
    "const SCardWrapper = styled.div`display: flex;`",
    "interface IInfoBoxProps { preview: boolean; }",
  ],
  invalid: [
    {
      code: "interface AnotherInterface { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a captial I" }],
      output: "interface IAnotherInterface { preview: boolean; }",
    },
    {
      code: 'type MyType = "yes" | "no"',
      errors: [{ message: "Types must start with a captial T" }],
      output: 'type TMyType = "yes" | "no"',
    },
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a captial S" },
      ],
      output: "const SCardWrapper = styled.div`display: flex;`",
    },
    /* {
      code: "interface InfoBoxProps { preview: boolean; }",
      errors: [{ message: "Interfaces must start with a captial I" }],
    }, */
  ],
});
