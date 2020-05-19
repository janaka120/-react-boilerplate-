const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  mode: "development",
  devServer: {
    contentBase: "./",  //path.join(__dirname, "../dist"),
    historyApiFallback: true, // this allows typing url on browser
    hot: true,
    port:9001
  },

  resolve: {

  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Avatar-in",
      filename: "index.html",
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin([
        "./public/manifest.json"
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};