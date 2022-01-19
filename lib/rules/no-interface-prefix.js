"use strict";

const { regex, stripFirstChar } = require("../utils");

const msg = "Interfaces must not start with a capital I";

const key = "I";

module.exports = {
  meta: {
    type: "suggestion",
    name: "no-interface-prefix",
    schema: [],
    fixable: "code",
    docs: {
      description: "Preventing the prefixing of interfaces",
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
        const name = node.id.name.split(regex);
        if (name[0] === key) {
          context.report({
            node: node.id,
            message: msg,
            fix: (fixer) => stripFirstChar(fixer, node),
          });
        }
      },
    };
  },
};
