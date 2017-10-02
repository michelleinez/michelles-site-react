const path = require('path');

module.exports = {
  // client side js folder (must be absolute path)
  context: path.join(__dirname, 'src'),
  // app entry point
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    // how each file should be processed before added to bundle
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // processed using babel to compile ES6/7 to ES5
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
};