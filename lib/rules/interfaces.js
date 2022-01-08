"use strict";

const handleCallback = (context, node) => {
  context.report({
    node: node.id,
    message: "Interfaces must start with a capital I",
    fix: (fixer) => {
      return [fixer.replaceText(node.id, "I" + node.id.name)];
    },
  });
};

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
        if (node.id.name[0] !== "I") {
          // INFO: Catches most cases
          handleCallback(context, node);
        }
        if (
          node.id.name[0] === "I" &&
          node.id.name.match(/([A-Z][a-z]*)/g)[0] !== "I"
        ) {
          // INFO: Catches cases where the word starts with I
          // but is still missing the I prefix
          handleCallback(context, node);
        }
      },
    };
  },
};
