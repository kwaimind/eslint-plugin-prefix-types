"use strict";

const { onMatch } = require("../utils");

const msg = "Styled Component names must start with a capital S";

const key = "S";

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
          if (n.init && n.init.tag && n.init.tag.type === "MemberExpression") {
            const isStyledComponent = n.init.tag.object.name === "styled";
            const char0 = n.id.name[0];
            if (isStyledComponent) {
              if (char0 !== key) {
                onMatch(context, n, msg, key);
              }
              if (
                char0 === key &&
                n.id.name.match(/([A-Z][a-z]*)/g)[0] !== key
              ) {
                onMatch(context, n, msg, key);
              }
            }
          }
        });
      },
    };
  },
};
