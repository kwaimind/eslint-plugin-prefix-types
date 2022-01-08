/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/styled-components");
const RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
  // eslint-disable-next-line node/no-unpublished-require
  parser: require.resolve("@typescript-eslint/parser"),
});
const tester = new RuleTester();

tester.run("rule: styled-components", rule, {
  valid: ["const SCardWrapper = styled.div`display: flex;`"],
  invalid: [
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a captial S" },
      ],
      output: "const SCardWrapper = styled.div`display: flex;`",
    },
  ],
});
