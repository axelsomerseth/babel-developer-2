const plugins = ["babel-plugin-transform-async-to-promises"];

const targets = {
  node: "7.5.0",
  // chrome: "54",
};

// Uncomment to use preset instead of plug-ins.
// const presets = ["@babel/preset-env"];

module.exports = {
  plugins,
  targets,
  // presets,
};
