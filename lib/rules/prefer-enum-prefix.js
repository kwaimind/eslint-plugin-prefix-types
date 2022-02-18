// @ts-check
"use strict";

const { stripFirstChar, regex, schema, prefixFirstChar } = require("../utils");

const key = "E";
const msgAlways = `Enums must start with a capital ${key}`;
const msgNever = `Enums must not start with a capital ${key}`;

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-enum-prefix",
    schema: [schema],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of enums",
    },
  },
  create: (context) => {
    return {
      TSEnumDeclaration(node) {
        if (context.options[0].allow === "always") {
          const name = node.id.name;
          if (name.split(regex)[0] !== key || name.split(regex)[0][0] !== key) {
            context.report({
              node: node.id,
              message: msgAlways,
              fix: (fixer) => prefixFirstChar(fixer, name, node.id, key),
            });
          }
        }
        if (context.options[0].allow === "never") {
          const name = node.id.name.split(regex);
          if (name[0] === key) {
            context.report({
              node: node.id,
              message: msgNever,
              fix: (fixer) => stripFirstChar(fixer, name, node.id),
            });
          }
        }
      },
    };
  },
};
