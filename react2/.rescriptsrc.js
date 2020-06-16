const { name } = require("./package");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = "window";
    config.output.publicPath = isDev ? "" : "/react2App";

    return config;
  },

  devServer: (_) => {
    const config = {};

    config.port = "7100";
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;

    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
