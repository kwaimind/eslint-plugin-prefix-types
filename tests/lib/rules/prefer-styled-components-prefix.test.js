const rule = require("../../../lib/rules/prefer-styled-components-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`rule: ${rule.meta.name}`, rule, {
  valid: [
    "const SCardWrapper = styled.div`display: flex;`",
    "export const SCardWrapper = styled.div`display: flex;`",
    "const SInfoBox = styled.div`display: flex;`",
    "const SStyledContainer = styled.div`display: flex;`",
    "const SMyStyledContainer = styled.div`display: flex;`",
    "declare module '*.svg' { const content: any; export const ReactComponent: any; export default content; }",
  ],
  invalid: [
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SCardWrapper = styled.div`display: flex;`",
    },
    {
      code: "const StyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SStyledContainer = styled.div`display: flex;`",
    },
    {
      code: "const myStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SMyStyledContainer = styled.div`display: flex;`",
    },
  ],
});
