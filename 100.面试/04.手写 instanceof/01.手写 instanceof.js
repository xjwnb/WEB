/*
 * @Author: your name
 * @Date: 2021-02-25 14:14:31
 * @LastEditTime: 2021-02-25 14:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\04.手写 instanceof\01.手写 instanceof.js
 */

function myInstanceof(left, right) {
  let rightPrototype = right.prototype;
  let leftProto = left.__proto__;
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (rightPrototype === leftProto) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}
