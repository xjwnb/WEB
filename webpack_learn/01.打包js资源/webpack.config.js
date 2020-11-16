/*
 * @Author: your name
 * @Date: 2020-11-16 15:13:24
 * @LastEditTime: 2020-11-16 15:44:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\webpack_learn\01.css\webpack.config.js
 */
// 拼接路径
const path = require('path');

module.exports = {
  // 入口
  entry: path.resolve(__dirname, "src/index.js"),
  // 出口
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "built.js"
  },
  // 模式
  mode: "development"
}