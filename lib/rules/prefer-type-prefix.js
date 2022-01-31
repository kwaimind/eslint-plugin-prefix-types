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
      VariableDeclaration(node) {
        node.declarations.forEach((n) => {
          const annotationType = n.id.typeAnnotation
            ? n.id.typeAnnotation.type
            : n.init.typeAnnotation.type;

          let name = "";
          let nodeId = "";

          switch (annotationType) {
            case "TSTypeAnnotation":
              name = n.id.typeAnnotation.typeAnnotation.typeName.name;
              nodeId = n.id.typeAnnotation.typeAnnotation.typeName;
              break;
            case "TSTypeReference":
              name = n.init.typeAnnotation.typeName.name;
              nodeId = n.init.typeAnnotation.typeName;
              break;
            default:
              break;
          }

          if (name && context.options[0].allow === "always") {
            if (
              name.split(regex)[0] !== key ||
              name.split(regex)[0][0] !== key
            ) {
              context.report({
                node: nodeId,
                message: msgAlways,
                fix: (fixer) => prefixFirstChar(fixer, name, nodeId, key),
              });
            }
          }
          if (name && context.options[0].allow === "never" && name[0] === key) {
            context.report({
              node: nodeId,
              message: msgNever,
              fix: (fixer) => stripFirstChar(fixer, name, nodeId),
            });
          }
        });
      },
    };
  },
};
