"use strict";

const { onMatch, regex } = require("../utils");

const msg = "Styled Component names must start with a capital S";

const key = "S";

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-styled-components-prefix",
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
            if (
              (isStyledComponent && n.id.name.split(regex)[0] !== key) ||
              n.id.name.split(regex)[0][0] !== key
            ) {
              onMatch(context, n, msg, key);
            }
          }
        });
      },
    };
  },
};
