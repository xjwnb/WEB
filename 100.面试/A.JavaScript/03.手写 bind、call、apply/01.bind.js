/*
 * @Author: your name
 * @Date: 2021-02-25 10:33:20
 * @LastEditTime: 2021-02-25 10:36:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\03.手写 bind、call、apply\01.bind.js
 */

Function.prototype.mybind = function(ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("ERROR");
  }
  let _this = this;
  return function () {
    _this.apply(ctx, args);
  }
}