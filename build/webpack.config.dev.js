const merge = require('webpack-merge');
const common = require('./webpack.config.base.js');
const webpack = require('webpack');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ]
    }]
  },
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});