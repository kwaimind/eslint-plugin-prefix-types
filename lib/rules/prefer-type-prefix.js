"use strict";

const { handleTypescriptDeclarations } = require("../utils");

const msg = "Types must start with a capital T";

const key = "T";

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-type-prefix",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of types",
    },
  },
  create: (context) => {
    return {
      TSTypeAliasDeclaration(node) {
        handleTypescriptDeclarations(context, node, msg, key);
      },
    };
  },
};
