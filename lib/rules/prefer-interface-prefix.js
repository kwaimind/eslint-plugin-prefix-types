// @ts-check
"use strict";

const { prefixFirstChar, stripFirstChar, regex, schema } = require("../utils");

const key = "I";
const msgAlways = `Interfaces must start with a capital ${key}`;
const msgNever = `Interfaces must not start with a capital ${key}`;

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-interface-prefix",
    schema: [schema],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of interfaces",
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
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
