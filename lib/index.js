"use strict";

const interfacePrefix = require("./rules/prefer-interface-prefix");
const prefixStyledComponents = require("./rules/prefer-styled-components-prefix");
const prefixType = require("./rules/prefer-type-prefix");

module.exports.rules = {
  "prefer-interface-prefix": interfacePrefix,
  "prefer-type-prefix": prefixType,
  "prefer-styled-component-prefix": prefixStyledComponents,
};
