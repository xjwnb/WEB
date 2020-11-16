/*
 * @Author: your name
 * @Date: 2020-11-16 19:02:00
 * @LastEditTime: 2020-11-16 19:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\webpack_learn\05.打包其他资源\webpack.config.js
 */

const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "built.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: /\.(css|js|html)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]"
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
