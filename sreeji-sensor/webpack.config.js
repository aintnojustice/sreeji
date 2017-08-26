var path = require("path");
var webpack = require("webpack");

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    context: CLIENT_DIR,

    entry : "./main",

    output: {
      path: DIST_DIR,
      filename: "bundle.js"
    },

    resolve: {
      extensions: ['.js','.jsx']
    },

    // devtool: "inline-source-map",

    module: {
      loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },{
        test: /\.css$/,
        loader:  "style-loader!css-loader!"
      },{
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },{
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        query : {
          limit : 8192,
          name : 'images/[name].[ext]?[hash]'
        }
      }]
    },

    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};
