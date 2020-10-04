/*
 * @Author: your name
 * @Date: 2020-10-04 22:52:46
 * @LastEditTime: 2020-10-04 23:01:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\11.js
 */
// 题目 1:
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};
const colors = ["pink", "red", "blue"];
// console.log(colorConfig.colors[1]); // TypeError
console.log(colorConfig[colors[1]]); // true
