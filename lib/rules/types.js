module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of types",
    },
  },
  create: (context) => {
    return {
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
    };
  },
};
