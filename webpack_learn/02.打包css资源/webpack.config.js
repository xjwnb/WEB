/*
 * @Author: your name
 * @Date: 2020-11-16 15:59:58
 * @LastEditTime: 2020-11-16 16:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\webpack_learn\02.css\webpack.config.js
 */

const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "built.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  mode: "development"
}
