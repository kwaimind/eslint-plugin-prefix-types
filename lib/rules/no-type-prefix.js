"use strict";

const { regex } = require("../utils");

const msg = "Types must not start with a capital T";

const key = "T";

module.exports = {
  meta: {
    type: "suggestion",
    name: "no-type-prefix",
    schema: [],
    fixable: "code",
    docs: {
      description: "Preventing the prefixing of types",
    },
  },
  create: (context) => {
    return {
      TSTypeAliasDeclaration(node) {
        const name = node.id.name.split(regex);
        if (name[0] === key) {
          context.report({
            node: node.id,
            message: msg,
            fix: (fixer) => {
              const [, ...word] = node.id.name;
              const noPrefixName = word.join("");
              return [fixer.replaceText(node.id, noPrefixName)];
            },
          });
        }
      },
    };
  },
};