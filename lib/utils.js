const prefixFirstChar = (fixer, node, key) => {
  const [char, ...word] = node.id.name;
  const name = key + char.toUpperCase() + word.join("");
  return [fixer.replaceText(node.id, name)];
};

const stripFirstChar = (fixer, node) => {
  const [, ...word] = node.id.name;
  const noPrefixName = word.join("");
  return [fixer.replaceText(node.id, noPrefixName)];
};

const onMatch = (context, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => prefixFirstChar(fixer, node, key),
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

const schema = {
  type: "object",
  properties: {
    allow: {
      enum: ["always", "never"],
    },
  },
  additionalProperties: false,
};

module.exports = {
  onMatch,
  regex,
  handleTypescriptDeclarations,
  stripFirstChar,
  schema,
};
