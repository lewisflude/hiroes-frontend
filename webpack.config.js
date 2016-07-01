module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: (process.env.port || 3333)
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
          test: /\.scss$/,
          loader: 'style!css!sass'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
