// @ts-check
"use strict";

const { stripFirstChar, regex, schema, prefixFirstChar } = require("../utils");

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
      /*       VariableDeclaration(node) {
        node.declarations.forEach((n) => {
          const name =
            n.id.typeAnnotation &&
            n.id.typeAnnotation.typeAnnotation &&
            n.id.typeAnnotation.typeAnnotation.typeName &&
            n.id.typeAnnotation.typeAnnotation.typeName.name;

          if (name && context.options[0].allow === "always") {
            // do stuff
          }
        });
      }, */
    };
  },
};
