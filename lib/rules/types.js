"use strict";

const { onMatch, regex } = require("../utils");

const msg = "Types must start with a capital T";

const key = "T";

module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of types",
    },
  },
  create: (context) => {
    return {
      TSTypeAliasDeclaration(node) {
        const char0 = node.id.name[0];
        if (char0 !== key) {
          // INFO: Catches most cases
          onMatch(context, node, msg, key);
        }
        if (char0 === key && node.id.name.split(regex)[0] !== key) {
          // INFO: Catches cases where the word starts with I
          // but is still missing the I prefix
          onMatch(context, node, msg, key);
        }
      },
    };
  },
};
