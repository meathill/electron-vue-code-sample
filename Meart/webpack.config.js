const path = require('path');
const webpack = require('webpack');
const dev = require('./config/dev');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'raw-loader',
      },
    ]
  },
  devtool: 'source-map',
  target: 'electron-renderer',
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: 'node_modules'
  },
  plugins: [
    new webpack.DefinePlugin(dev),
  ],
};