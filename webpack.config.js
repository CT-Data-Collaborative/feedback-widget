module.exports = {
  entry: './widget.js',
  output: {
    path: __dirname,
    filename: 'widget.dist.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
};
