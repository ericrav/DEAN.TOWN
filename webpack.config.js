var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// general config stuff (not complete by itself)
var config = {
  devtool: 'source-map',
  entry: [
    './src/js/index',
    './src/styles/main.scss',
    'webpack-dev-server/client?http://0.0.0.0:8080'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('styles/styleBundle.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: path.join(__dirname, 'src/js')
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  }
};

module.exports = config;