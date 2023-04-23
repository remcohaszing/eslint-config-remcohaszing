const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  plugins: [new HTMLWebpackPlugin()]
}
