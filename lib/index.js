"use strict";

const interfacePrefix = require("./rules/prefer-interface-prefix");
const noInterfacePrefix = require("./rules/no-interface-prefix");
const styledComponents = require("./rules/styled-components");
const types = require("./rules/types");

module.exports.rules = {
  "prefer-interface-prefix": interfacePrefix,
  "no-interface-prefix": noInterfacePrefix,
  "styled-components": styledComponents,
  types,
};
