const onMatch = (context, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => {
      return [fixer.replaceText(node.id, key + node.id.name)];
    },
  });
};

module.exports.onMatch = onMatch;
