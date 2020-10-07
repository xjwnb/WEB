/*
 * @Author: your name
 * @Date: 2020-10-07 11:40:44
 * @LastEditTime: 2020-10-07 13:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\09.defineProperty.js
 */

// 数据属性 configurable enumberable writable value
/**
 * configurable 表示属性是否可以通过 delete 删除并重新定义，默认为 true。
 * enumberable 表示属性是否可以通过 for-in 循环返回，默认为 true。
 * writbale 表示属性的值是否可以被修改，默认为 true。
 * value 属性的值。默认为 undefined。
 */
// writable 设置为 false 的时候，不能修改对应属性值。
let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: "小卡车",
});
let name = person.name;
console.log(name); // 小卡车
person.name = "xkc"; // 无效
console.log(person.name); // 小卡车

// configurable 设置为 false 的时候，不能执行删除操作。
let person1 = {};
Object.defineProperty(person1, "name", {
  configurable: false,
  value: "小卡车",
});
console.log(person1.name); // 小卡车
delete person1.name; // 无效
console.log(person1.name); // 小卡车

// 访问器属性 configurable enumerable get set
/**
 * get 获取函数，在读取属性时调用，默认为 undefined。
 * set 设置函数，在写入属性时调用，默认为 undefined。
 */
let person2 = {
  name: "小卡车",
  age: 20,
};
Object.defineProperty(person2, "name", {
  get() {
    console.log("get");
    return name;
  },
  set(newValue) {
    console.log("set");
    this.newValue = newValue;
  },
});
person2.name = "xkc"; // set
console.log(person2.name); // get 小卡车

// 定义多个属性
let person3 = {};
Object.defineProperties(person3, {
  name: {
    value: "小卡车",
  },
  age: {
    value: 20,
  },
  name: {
    get() {
      console.log(`get ${name}!`);
      return name;
    },
  },
});
// 获取属性特性
let descriptor = Object.getOwnPropertyDescriptor(person3, "name");
console.log(descriptor);
/**
 *{
 *  get: [Function: get],
 *  set: undefined,
 *  enumerable: false,
 *  configurable: false
 *}
 */
let person3Descript = Object.getOwnPropertyDescriptors(person3);
console.log(person3Descript);
/**
 *{
 *  name: {
 *    get: [Function: get],
 *    set: undefined,
 *    enumerable: false,
 *    configurable: false
 *  },
 *  age: {
 *    value: 20,
 *    writable: false,
 *    enumerable: false,
 *    configurable: false
 *  }
 *}
 */
