// @ts-check

const prefixFirstChar = (fixer, name, nodeId, key) => {
  const [char, ...word] = name;
  const newName = key + char.toUpperCase() + word.join("");
  return [fixer.replaceText(nodeId, newName)];
};

const stripFirstChar = (fixer, name, nodeId) => {
  const [, ...word] = name;
  const noPrefixName = word.join("");
  return [fixer.replaceText(nodeId, noPrefixName)];
};

const onMatch = (context, name, node, msg, key) => {
  context.report({
    node: node.id,
    message: msg,
    fix: (fixer) => prefixFirstChar(fixer, name, node.id, key),
  });
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
  stripFirstChar,
  schema,
  prefixFirstChar,
};
