/*
 * @Author: your name
 * @Date: 2020-10-08 14:16:32
 * @LastEditTime: 2020-10-08 14:57:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\14.原型式继承.js
 */
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
let person = {
  name: "小卡车",
  age: 20,
  hobby: ["听音乐"],
};
var p = object(person);
console.log(p.__proto__ === person); // true
console.log(p.__proto__); // { name: '小卡车', age: 20, hobby: [ '听音乐' ] }
console.log(p.name); // 小卡车
console.log(p.age); // 20
p.hobby.push("打LOL");
console.log(person.hobby); // [ '听音乐', '打LOL' ]
p.name = "xkc";
console.log(p.name); // xkc

var p1 = object(person);
console.log(p1.name); // 小卡车
console.log(p1.__proto__); // { name: '小卡车', age: 20, hobby: [ '听音乐', '打LOL' ] }
