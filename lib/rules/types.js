"use strict";

const handleCallback = (context, node) => {
  context.report({
    node: node.id,
    message: "Types must start with a capital T",
    fix: (fixer) => {
      return [fixer.replaceText(node.id, "T" + node.id.name)];
    },
  });
};

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
        if (node.id.name[0] !== "T") {
          // INFO: Catches most cases
          handleCallback(context, node);
        }
        if (
          node.id.name[0] === "T" &&
          node.id.name.match(/([A-Z][a-z]*)/g)[0] !== "T"
        ) {
          // INFO: Catches cases where the word starts with I
          // but is still missing the I prefix
          handleCallback(context, node);
        }
      },
    };
  },
};
