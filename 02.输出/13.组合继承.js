/*
 * @Author: your name
 * @Date: 2020-10-08 14:02:01
 * @LastEditTime: 2020-10-08 14:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\13.组合继承.js
 */
function SuperType(name) {
  this.name = name;
}
SuperType.prototype.getName = function() {
  return this.name;
}
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.getAge = function() {
  return this.age;
}
var sub = new SubType("小卡车", 20);
console.log(sub); // SuperType { name: '小卡车', age: 20 }
console.log(sub.getName()); // 小卡车
console.log(sub.getAge()); // 20
