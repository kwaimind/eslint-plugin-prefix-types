"use strict";

const { onMatch } = require("../utils");

const msg = "Interfaces must start with a capital I";

const key = "I";

module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of interfaces",
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
        const char0 = node.id.name[0];
        if (char0 !== key) {
          // INFO: Catches most cases
          onMatch(context, node, msg, key);
        }
        if (char0 === key && node.id.name.match(/([A-Z][a-z]*)/g)[0] !== key) {
          // INFO: Catches cases where the word starts with I
          // but is still missing the I prefix
          onMatch(context, node, msg, key);
        }
      },
    };
  },
};
