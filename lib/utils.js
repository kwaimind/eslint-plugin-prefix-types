const onMatch = (context, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => {
      return [fixer.replaceText(node.id, key + node.id.name)];
    },
  });
};

const regex = /((?<=[a-z])[A-Z]|[A-Z](?=[a-z]))/;

module.exports = {
  onMatch,
  regex,
};
