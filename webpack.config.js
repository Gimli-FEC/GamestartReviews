const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',  // suggested with optimization.splitChunks: [name].[chunkhash:8].js
    path: path.resolve(__dirname, 'public'),
    sourceMapFilename: 'app.js.map',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     // minRemainingSize: 0,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~',
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
