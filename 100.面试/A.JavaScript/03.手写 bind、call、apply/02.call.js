/*
 * @Author: your name
 * @Date: 2021-02-25 10:36:12
 * @LastEditTime: 2021-02-25 10:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\03.手写 bind、call、apply\02.call.js
 */

Function.prototype.myCall = function(ctx) {
  let context = ctx || window;
  context.fun = this;
  let args = [...arguments].slice(1);
  let result = context.fun(...args);
  delete context.fun;
  return result;
}