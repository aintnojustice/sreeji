var webpack    = require("webpack"),
    baseConfig = require("./webpack.config.js");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

baseConfig.entry = ["webpack-hot-middleware/client", "./main"];

baseConfig.output.publicPath = "/";

baseConfig.plugins = [
    new ExtractTextPlugin("[style].css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

module.exports = baseConfig;
