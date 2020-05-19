const path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test:/\.css$/i,
        exclude:/node_modules/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/i,
        exclude:/node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader, options: {
            publicPath: '/assets/css'
          },
        }, 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Avatar-in",
      filename: "index.html",
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets/images'), to: 'images' }
    ]),

    new MiniCssExtractPlugin(),
    
  ]
};
