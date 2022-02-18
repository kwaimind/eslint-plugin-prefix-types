"use strict";

const rule = require("../../../lib/rules/prefer-enum-prefix");

const options = require("./options");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig(options);

const tester = new RuleTester();

tester.run(`${rule.meta.name}: allow: "always"`, rule, {
  valid: [
    {
      code: 'enum EMyEnum {INFOBOX = "infoBox",}',
      options: [{ allow: "always" }],
    },
  ],
  invalid: [
    {
      code: 'enum MyEnum {INFOBOX = "infoBox",}',
      errors: [{ message: "Enums must start with a capital E" }],
      output: 'enum EMyEnum {INFOBOX = "infoBox",}',
      options: [{ allow: "always" }],
    },
  ],
});

tester.run(`${rule.meta.name}: allow: "never"`, rule, {
  valid: [
    {
      code: 'enum MyEnum {INFOBOX = "infoBox",}',
      options: [{ allow: "never" }],
    },
  ],
  invalid: [
    {
      code: 'enum EMyEnum {INFOBOX = "infoBox",}',
      errors: [{ message: "Enums must not start with a capital E" }],
      output: 'enum MyEnum {INFOBOX = "infoBox",}',
      options: [{ allow: "never" }],
    },
  ],
});
