// @ts-check

const prefixFirstChar = (fixer, node, key) => {
  const [char, ...word] = node.id.name;
  const name = key + char.toUpperCase() + word.join("");
  return [fixer.replaceText(node.id, name)];
};

const stripFirstChar = (fixer, name, nodeId) => {
  const [, ...word] = name;
  const noPrefixName = word.join("");
  return [fixer.replaceText(nodeId, noPrefixName)];
};

const onMatch = (context, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => prefixFirstChar(fixer, node, key),
  });
};

const handleTypescriptDeclarations = (context, name, nodeId, msg, key) => {
  if (name.split(regex)[0] !== key || name.split(regex)[0][0] !== key) {
    onMatch(context, nodeId, msg, key);
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
