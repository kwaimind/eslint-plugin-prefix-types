module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: "code",
    docs: {
      description: "Enforcing the prefixing of styled components",
    },
  },
  create: (context) => {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((n) => {
          if (n.init.tag) {
            if (n.init.tag.type === "MemberExpression") {
              const isStyledComponent = n.init.tag.object.name === "styled";
              if (isStyledComponent && n.id.name[0] !== "S") {
                context.report({
                  node: n.id,
                  message: "Styled Component names must start with a capital S",
                  fix: (fixer) => {
                    return [fixer.replaceText(n.id, "S" + n.id.name)];
                  },
                });
              }
            }
          }
        });
      },
    };
  },
};
