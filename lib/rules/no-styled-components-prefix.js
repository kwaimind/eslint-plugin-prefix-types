"use strict";

const { regex } = require("../utils");

const msg = "Styled Component names must not start with a capital S";

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
            const name = n.id.name.split(regex);
            if (isStyledComponent && name[0] === key) {
              context.report({
                node: n.id,
                message: msg,
                fix: (fixer) => {
                  const [, ...word] = n.id.name;
                  const noPrefixName = word.join("");
                  return [fixer.replaceText(n.id, noPrefixName)];
                },
              });
            }
          }
        });
      },
    };
  },
};
