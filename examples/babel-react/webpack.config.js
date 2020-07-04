const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [new HTMLWebpackPlugin()],
};
