"use strict";

const { handleTypescriptDeclarations } = require("../utils");

const msg = "Interfaces must start with a capital I";

const key = "I";

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-interface-prefix",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of interfaces",
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
        handleTypescriptDeclarations(context, node, msg, key);
      },
    };
  },
};
