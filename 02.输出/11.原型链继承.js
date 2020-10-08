/*
 * @Author: your name
 * @Date: 2020-10-08 10:42:42
 * @LastEditTime: 2020-10-08 11:47:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\11.原型链继承.js
 */
// 原型链继承
function SuperClass(name) {
  this.name = name;
}
SuperClass.prototype.getName = function () {
  console.log(this.name);
};

function SubClass(id) {
  this.id = id;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getID = function () {
  console.log(this.id);
};
var sub = new SubClass(1);
sub.getID(); // 1
console.log(SubClass.prototype.__proto__ === SuperClass.prototype); // true
