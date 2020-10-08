/*
 * @Author: your name
 * @Date: 2020-10-08 13:33:13
 * @LastEditTime: 2020-10-08 13:38:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\12.构造函数继承.js
 */
function SuperType(name) {
  this.name = name;
}
function SubType(name, age) {
  this.age = age;
  SuperType.call(this, name);
}
var sub = new SubType("小卡车", 20);
console.log(sub); // SubType { age: 20, name: '小卡车' }
console.log(sub.name); // 小卡车
console.log(sub.age); // 20