/*
 * @Author: your name
 * @Date: 2021-02-25 10:39:08
 * @LastEditTime: 2021-02-25 10:40:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\03.手写 bind、call、apply\03.apply.js
 */

Function.prototype.myApply = function(ctx) {
  let context = ctx || window;
  context.fun = this;
  let result;
  if (arguments[1]) {
    result = context.fun(...arguments[1]);
  } else {
    result = context.fun();
  }
  delete context.fun;
  return result;
}