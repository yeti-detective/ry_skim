const path = require('path');

module.exports = {
  context: __dirname,
  entry: './script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  devtool: 'source-maps',
};
