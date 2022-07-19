const plugins = ["babel-plugin-transform-async-to-promises"];

const targets = {
  chrome: "61",
};

// Uncomment to use preset instead of plug-ins.
// const presets = ["@babel/preset-env"];

module.exports = {
  plugins,
  targets,
  // presets,
};
