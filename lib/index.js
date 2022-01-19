"use strict";

const interfacePrefix = require("./rules/prefer-interface-prefix");
const noInterfacePrefix = require("./rules/no-interface-prefix");
const prefixStyledComponents = require("./rules/prefer-styled-components-prefix");
const noPrefixStyledComponents = require("./rules/no-styled-components-prefix");
const prefixType = require("./rules/prefer-type-prefix");
const noPrefixType = require("./rules/no-type-prefix");

module.exports.rules = {
  "prefer-interface-prefix": interfacePrefix,
  "no-interface-prefix": noInterfacePrefix,
  "prefer-type-prefix": prefixType,
  "no-type-prefix": noPrefixType,
  "prefer-styled-components-prefix": prefixStyledComponents,
  "no-styled-components-prefix": noPrefixStyledComponents,
};
