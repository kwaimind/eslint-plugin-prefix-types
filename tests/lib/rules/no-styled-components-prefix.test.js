const rule = require("../../../lib/rules/no-styled-components-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`rule: ${rule.meta.name}`, rule, {
  valid: [
    "const CardWrapper = styled.div`display: flex;`",
    "export const CardWrapper = styled.div`display: flex;`",
    "const InfoBox = styled.div`display: flex;`",
    "const StyledContainer = styled.div`display: flex;`",
    "const MyStyledContainer = styled.div`display: flex;`",
    "declare module '*.svg' { const content: any; export const ReactComponent: any; export default content; }",
  ],
  invalid: [
    {
      code: "const SCardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const CardWrapper = styled.div`display: flex;`",
    },
    {
      code: "const SStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const StyledContainer = styled.div`display: flex;`",
    },
    {
      code: "const SMyStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const MyStyledContainer = styled.div`display: flex;`",
    },
  ],
});
