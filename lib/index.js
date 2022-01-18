"use strict";

const interfacePrefix = require("./rules/prefer-interface-prefix");
const noInterfacePrefix = require("./rules/no-interface-prefix");
const prefixStyledComponents = require("./rules/prefer-styled-components-prefix");
const types = require("./rules/types");

module.exports.rules = {
  "prefer-interface-prefix": interfacePrefix,
  "no-interface-prefix": noInterfacePrefix,
  "prefer-styled-components-prefix": prefixStyledComponents,
  types,
};
