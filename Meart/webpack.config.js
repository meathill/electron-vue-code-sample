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
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract('css-loader!stylus-loader'),
            fallbackLoader: 'style-loader',
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
          fallbackLoader: 'style-loader',
        }),
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!stylus-loader',
          fallbackLoader: 'style-loader',
        }),
      }
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
    new ExtractTextPlugin({
      filename: '[name][hash].css',
      allChunks: true,
    }),
  ],
};