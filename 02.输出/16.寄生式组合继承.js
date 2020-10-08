/*
 * @Author: your name
 * @Date: 2020-10-08 15:59:21
 * @LastEditTime: 2020-10-08 16:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\16.寄生式组合继承.js
 */

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(SuperClass, SubClass) {
  let prototype = object(SuperClass.prototype);
  prototype.constructor = SubClass;
  SubClass.prototype = prototype;
}
function SuperClass(name) {
  this.name = name;
}
SuperClass.prototype.getName = function () {
  return this.name;
};
function SubClass(name, age) {
  SuperClass.call(this, name);
  this.age = age;
}
inheritPrototype(SuperClass, SubClass);
SubClass.prototype.getAge = function () {
  return this.age;
};
let sub = new SubClass("小卡车", 20);
console.log(sub.getName()); // 小卡车
console.log(sub.getAge()); // 20
