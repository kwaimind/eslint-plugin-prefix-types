"use strict";

const {
  handleTypescriptDeclarations,
  stripFirstChar,
  regex,
} = require("../utils");

const key = "I";
const msgAlways = `Interfaces must start with a capital ${key}`;
const msgNever = `Interfaces must not start with a capital ${key}`;

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-interface-prefix",
    schema: [
      {
        type: "object",
        properties: {
          allow: {
            enum: ["always", "never"],
          },
        },
        additionalProperties: false,
      },
    ],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of interfaces",
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
        if (context.options[0].allow === "always") {
          handleTypescriptDeclarations(context, node, msgAlways, key);
        } else {
          const name = node.id.name.split(regex);
          if (name[0] === key) {
            context.report({
              node: node.id,
              message: msgNever,
              fix: (fixer) => stripFirstChar(fixer, node),
            });
          }
        }
      },
    };
  },
};
