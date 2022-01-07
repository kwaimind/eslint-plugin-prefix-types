module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description:
        "Enforcing the prefixing of types, interfaces, and Styled Components.",
      recommended: true,
    },
  },
  create: (context) => {
    return {
      TSInterfaceDeclaration(node) {
        if (node.id.name[0] !== "I") {
          context.report({
            node: node.id,
            message: "Interfaces must start with a captial I",
            fix: (fixer) => {
              return [fixer.replaceText(node.id, "I" + node.id.name)];
            },
          });
        }
      },
      TSTypeAliasDeclaration(node) {
        if (node.id.name[0] !== "T") {
          context.report({
            node: node.id,
            message: "Types must start with a captial T",
            fix: (fixer) => {
              return [fixer.replaceText(node.id, "T" + node.id.name)];
            },
          });
        }
      },
      VariableDeclaration(node) {
        node.declarations.forEach((n) => {
          if (n.id.name[0] !== "S") {
            context.report({
              node: n.id,
              message: "Styled Component names must start with a captial S",
              fix: (fixer) => {
                return [fixer.replaceText(n.id, "S" + n.id.name)];
              },
            });
          }
        });
      },
    };
  },
};
