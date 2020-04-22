var webpack = require("webpack");
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     },
  //     {
  //       test: /\.css$/,
  //       loader: 'style-loader!css-loader'
  //     }
  //   ]
  // }
  module: {
    rules: [
        {
           test: /\.js|jsx?$/,
           exclude: /(node_modules)/,
           use: [
                 {loader: 'babel-loader'}
              ]
        }, {
          test: /\.css$/,
           use: ['style-loader', 'css-loader']
        }
      ]
   }
};