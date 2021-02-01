const HtmlPlugin = require("./craco.webpack.html");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
  },
  plugins: [
    {
      plugin: HtmlPlugin,
    },
  ],
};
