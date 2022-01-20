"use strict";

const {
  handleTypescriptDeclarations,
  stripFirstChar,
  regex,
  schema,
} = require("../utils");

const key = "T";
const msgAlways = `Types must start with a capital ${key}`;
const msgNever = `Types must not start with a capital ${key}`;

module.exports = {
  meta: {
    type: "suggestion",
    name: "prefer-type-prefix",
    schema: [schema],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of types",
    },
  },
  create: (context) => {
    return {
      TSTypeAliasDeclaration(node) {
        if (context.options[0].allow === "always") {
          handleTypescriptDeclarations(context, node, msgAlways, key);
        }
        if (context.options[0].allow === "never") {
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
