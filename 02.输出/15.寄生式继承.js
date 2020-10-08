/*
 * @Author: your name
 * @Date: 2020-10-08 15:20:38
 * @LastEditTime: 2020-10-08 15:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\15.寄生式继承.js
 */

function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

function createAnother(origin) {
  let clone = object(origin);
  clone.sayHi = function() {
    console.log("HI");
  }
  clone.getName = function() {
    return this.name;
  }
  return clone;
}

let msg = {
  name: "小卡车",
  age: 20,
};
let anotherMsg = createAnother(msg);
anotherMsg.sayHi(); // HI
let name = anotherMsg.getName();
console.log(name); // 小卡车
