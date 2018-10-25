const merge = require('webpack-merge');
const common = require('./webpack.config.base.js');
module.exports = merge(common, {
  mode: 'production',
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
  plugins: [
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
});