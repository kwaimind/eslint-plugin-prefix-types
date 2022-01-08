/**
 * @fileoverview Tests for the prefix-types plugin
 * @author Daniel Reed
 */

"use strict";

const rule = require("../../../lib/rules/styled-components");
const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run("rule: styled-components", rule, {
  valid: [
    "const SCardWrapper = styled.div`display: flex;`",
    "export const SCardWrapper = styled.div`display: flex;`",
  ],
  invalid: [
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SCardWrapper = styled.div`display: flex;`",
    },
  ],
});
