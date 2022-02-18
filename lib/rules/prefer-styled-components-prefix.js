// @ts-check
"use strict";

const { onMatch, regex, stripFirstChar, schema } = require("../utils");

const key = "S";
const msgAlways = `Styled Component names must start with a capital ${key}`;
const msgNever = `Styled Component names must not start with a capital ${key}`;

const isMemberExpression = (node) => {
  return (
    node.init && node.init.tag && node.init.tag.type === "MemberExpression"
  );
};

const isCallExpression = (node) => {
  return node.init && node.init.tag && node.init.tag.type === "CallExpression";
};

const preventStyledPrefix = (node, context) => {
  const name = node.id.name.split(regex);
  if (name[0] === key) {
    context.report({
      node: node.id,
      message: msgNever,
      fix: (fixer) => stripFirstChar(fixer, name, node.id),
    });
  }
};

const enforceStyledPrefix = (node, context) => {
  const name = node.id.name;
  if (name.split(regex)[0] !== key || name.split(regex)[0][0] !== key) {
    onMatch(context, name, node, msgAlways, key);
  }
};

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
            if (isMemberExpression(n)) {
              const isStyledComponent = n.init.tag.object.name === "styled";
              if (isStyledComponent) {
                enforceStyledPrefix(n, context);
              }
            }
            if (isCallExpression(n)) {
              const isStyledComponent = n.init.tag.callee.name === "styled";
              if (isStyledComponent) {
                enforceStyledPrefix(n, context);
              }
            }
          });
        }
        if (context.options[0].allow === "never") {
          node.declarations.forEach((n) => {
            if (isMemberExpression(n)) {
              const isStyledComponent = n.init.tag.object.name === "styled";
              if (isStyledComponent) {
                preventStyledPrefix(n, context);
              }
            }
            if (isCallExpression(n)) {
              const isStyledComponent = n.init.tag.callee.name === "styled";
              if (isStyledComponent) {
                preventStyledPrefix(n, context);
              }
            }
          });
        }
      },
    };
  },
};
