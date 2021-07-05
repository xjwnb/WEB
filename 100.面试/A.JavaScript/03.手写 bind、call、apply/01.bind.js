/*
 * @Author: your name
 * @Date: 2021-02-25 10:33:20
 * @LastEditTime: 2021-07-04 22:55:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\03.手写 bind、call、apply\01.bind.js
 */

Function.prototype.mybind = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("ERROR");
  }
  let _this = this;
  return function () {
    _this.apply(ctx, args);
  };
};

// bind
Function.prototype.mybind1 = function (newThis) {
  let slice = Array.prototype.slice;
  const args1 = slice.call(arguments, 1);
  const fn = this;
  if (typeof fn !== "function") {
    throw new Error("目标非函数");
  }
  return function () {
    const args2 = slice.call(arguments, 0);
    return fn.apply(newThis, args1.concat(args2));
  };
};
