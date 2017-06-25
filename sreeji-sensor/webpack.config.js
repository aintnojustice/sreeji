var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'src/app/public');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


var config = {
   entry: APP_DIR + '/main.js',
   output: {
     path:APP_DIR,
     filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8080
   },

   plugins: [
     new ExtractTextPlugin("[style].css"),
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    })
   ],

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
          test: /\.css$/, loader: 'style-loader!css-loader'
        },{
          // test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          // loader: 'url-loader?limit=10000&name=fonts/[name].[ext]?[hash]'
          // test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
          // loader: 'url-loader?limit=100000&name=[name].[ext]'
        // },{
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: "url-loader?limit=10000000000"
        },{
          // test: /\.(woff|woff2)$/,
          // loader: "url-loader?prefix=font/&limit=50000",
          // loader: 'url-loader?limit=10000&name=fonts/[name].[ext]?[hash]'
        },{
          // test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          // loader: "url-loader?limit=10000&mimetype=application/octet-stream",
          // loader: 'url-loader?limit=10000&name=fonts/[name].[ext]?[hash]'
        },
        {
          // test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          // loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=/[name].[ext]'
        },{
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
        }

      ]
   }
}

module.exports = config;
