
const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        // url-loader 处理图片资源，默认处理不了 html 中的 img 图片资源
        test: /.(jpg|png|jpeg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 30 * 1024,
          // esModule: false
          name: "[hash:10].[ext]"
        }
      },
/*       {
        test: /\.html$/,
        loader: "html-loader"
      } */
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
}