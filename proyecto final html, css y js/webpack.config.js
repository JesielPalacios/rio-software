const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/aplicacion.js',
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // test: /\.css|.styl$/i,
        test: /\.css|.s?css$|.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      // Para insertar el script en el body de la plantilla html.
      inject: 'body',
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
