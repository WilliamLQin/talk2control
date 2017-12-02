const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'assets/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
