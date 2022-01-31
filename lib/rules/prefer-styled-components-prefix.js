// @ts-check
"use strict";

const { onMatch, regex, stripFirstChar, schema } = require("../utils");

const key = "S";
const msgAlways = `Styled Component names must start with a capital ${key}`;
const msgNever = `Styled Component names must not start with a capital ${key}`;

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-styled-components-prefix",
    schema: [schema],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of styled components",
    },
  },
  create: (context) => {
    return {
      VariableDeclaration(node) {
        if (context.options[0].allow === "always") {
          node.declarations.forEach((n) => {
            if (
              n.init &&
              n.init.tag &&
              n.init.tag.type === "MemberExpression"
            ) {
              const isStyledComponent = n.init.tag.object.name === "styled";
              const name = n.id.name;
              if (
                (isStyledComponent && name.split(regex)[0] !== key) ||
                name.split(regex)[0][0] !== key
              ) {
                onMatch(context, name, n, msgAlways, key);
              }
            }
          });
        }
        if (context.options[0].allow === "never") {
          node.declarations.forEach((n) => {
            if (
              n.init &&
              n.init.tag &&
              n.init.tag.type === "MemberExpression"
            ) {
              const isStyledComponent = n.init.tag.object.name === "styled";
              const name = n.id.name.split(regex);
              if (isStyledComponent && name[0] === key) {
                context.report({
                  node: n.id,
                  message: msgNever,
                  fix: (fixer) => stripFirstChar(fixer, name, n.id),
                });
              }
            }
          });
        }
      },
    };
  },
};
