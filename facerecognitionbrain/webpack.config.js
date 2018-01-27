module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader', 'babel-loader']
    }
  ]
}