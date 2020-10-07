/*
 * @Author: your name
 * @Date: 2020-10-07 13:44:25
 * @LastEditTime: 2020-10-07 14:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\10.对象合并.js
 */

//  简单复制
let msg = {},
  src = { id: 1 };
result = Object.assign(msg, src);
console.log(msg); // { id: 1 }
console.log(result); // { id: 1 }
console.log(msg === result); // true
console.log(msg === src); // false

// 多个源对象
msg = {};
result = Object.assign(msg, { name: "小卡车" }, { age: 20 });
console.log(msg); // { name: '小卡车', age: 20 }
console.log(result); // { name: '小卡车', age: 20 }

// 获得函数和设置函数
msg = {
  get name() {
    console.log("get name");
  },
  set name(value) {
    console.log(`set name is ${value}`);
  },
};
msg.name; // get name
msg.name = "xkc"; // set name is xkc

// 覆盖属性
// 同名属性后者会将前者覆盖
msg = { name: "" };
result = Object.assign(msg, { name: "xkc" }, { name: "小卡车" });
console.log(msg); // { name: '小卡车' }
console.log(result); // { name: '小卡车' }

// Object.assign 是浅复制
msg = {};
let person = { message: { name: "小卡车" } };
result = Object.assign(msg, person);
console.log(msg); // { message: { name: '小卡车' } }
console.log(result); // { message: { name: '小卡车' } }
// 只复制对象的引用
console.log(msg.message === person.message); // true
