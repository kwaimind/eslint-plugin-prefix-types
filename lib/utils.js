const onMatch = (context, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => {
      const [char, ...word] = node.id.name;
      const name = key + char.toUpperCase() + word.join("");
      return [fixer.replaceText(node.id, name)];
    },
  });
};

const handleTypescriptDeclarations = (context, node, msg, key) => {
  if (
    node.id.name.split(regex)[0] !== key ||
    node.id.name.split(regex)[0][0] !== key
  ) {
    onMatch(context, node, msg, key);
  }
};

const regex = /(?=[A-Z])/;

module.exports = {
  onMatch,
  regex,
  handleTypescriptDeclarations,
};
