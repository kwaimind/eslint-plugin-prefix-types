const rule = require("../../../lib/rules/prefer-styled-components-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`${rule.meta.name}: allow: "always"`, rule, {
  valid: [
    {
      code: "const SCardWrapper = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "export const SCardWrapper = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "const SInfoBox = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "const SStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "const SMyStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "declare module '*.svg' { const content: any; export const ReactComponent: any; export default content; }",
      options: [{ allow: "always" }],
    },
  ],
  invalid: [
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SCardWrapper = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "const StyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
    {
      code: "const myStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must start with a capital S" },
      ],
      output: "const SMyStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "always" }],
    },
  ],
});

tester.run(`${rule.meta.name}: allow: "never"`, rule, {
  valid: [
    {
      code: "const CardWrapper = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "export const CardWrapper = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "const InfoBox = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "const StyledContainer = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "const MyStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "declare module '*.svg' { const content: any; export const ReactComponent: any; export default content; }",
      options: [{ allow: "never" }],
    },
  ],
  invalid: [
    {
      code: "const SCardWrapper = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const CardWrapper = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "const SStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const StyledContainer = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
    {
      code: "const SMyStyledContainer = styled.div`display: flex;`",
      errors: [
        { message: "Styled Component names must not start with a capital S" },
      ],
      output: "const MyStyledContainer = styled.div`display: flex;`",
      options: [{ allow: "never" }],
    },
  ],
});
