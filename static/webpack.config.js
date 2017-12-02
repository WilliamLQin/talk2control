const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'templates'),
    publicPath: 'assets/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '../templates',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
