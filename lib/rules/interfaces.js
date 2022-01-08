module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of interfaces",
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
    };
  },
};
