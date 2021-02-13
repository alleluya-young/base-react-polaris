const HtmlPlugin = require('./craco.webpack.html');

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  plugins: [
    {
      plugin: HtmlPlugin,
    },
  ],
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'development') {
        webpackConfig.devtool = 'cheap-module-source-map';
      } else {
        webpackConfig.devtool = false;
      }
      return webpackConfig;
    },
  },
};
