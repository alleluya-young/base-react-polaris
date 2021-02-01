const { stringify } = require("querystring");

const stringifyMetaContent = (o) =>
  stringify(o, ",", "=", {
    encodeURIComponent: (v) => v,
  });

const overrideWebpackConfig = ({ webpackConfig }) => {
  const isProd = webpackConfig.mode === "production";

  //find HtmlWebpackPlugin Object
  const htmlPlugin = webpackConfig.plugins.find(
    (p) => p.constructor.name === "HtmlWebpackPlugin"
  );
  //reset meta if not exist
  !htmlPlugin.options.meta && (htmlPlugin.options.meta = {});
  //add meta config
  htmlPlugin.options.meta = {
    ...htmlPlugin.options.meta,
    "devkit:config": stringifyMetaContent({
      SRV_MAIN: isProd ? "__PROD__" : "http://www.lvjmyupo.xyz/",
    }),
  };
  return webpackConfig;
};

module.exports = {
  overrideWebpackConfig,
};
