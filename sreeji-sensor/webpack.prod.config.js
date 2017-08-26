var webpack    = require("webpack");
var baseConfig = require("./webpack.config.js");
var CompressionPlugin = require('compression-webpack-plugin');
var path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

baseConfig.devtool = "cheap-module-source-map";

baseConfig.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new CopyWebpackPlugin([
     {
       from: path.join(__dirname, './src/images'),
       to: 'images'
     }
   ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      minimize: false
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
];

module.exports = baseConfig;
