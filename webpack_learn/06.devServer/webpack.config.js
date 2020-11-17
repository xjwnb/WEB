
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "built.js",
  },
  module: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    // hot: true,
    compress: true,
    port: 9000
  }
}