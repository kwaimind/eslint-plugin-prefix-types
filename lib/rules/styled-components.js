"use strict";

const handleCallback = (context, node) => {
  context.report({
    node: node.id,
    message: "Styled Component names must start with a capital S",
    fix: (fixer) => {
      return [fixer.replaceText(node.id, "S" + node.id.name)];
    },
  });
};

module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of styled components",
    },
  },
  create: (context) => {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((n) => {
          if (n.init.tag) {
            if (n.init.tag.type === "MemberExpression") {
              const isStyledComponent = n.init.tag.object.name === "styled";
              if (isStyledComponent && n.id.name[0] !== "S") {
                handleCallback(context, n);
              }
              if (
                isStyledComponent &&
                n.id.name[0] === "S" &&
                n.id.name.match(/([A-Z][a-z]*)/g)[0] !== "S"
              ) {
                handleCallback(context, n);
              }
            }
          }
        });
      },
    };
  },
};
