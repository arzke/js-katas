module.exports = {
  entry: {
    'bin/app': './src/app.js',
    'test/test': './test/index.js'
  },
  output: {
    path: './',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  watch: true
};