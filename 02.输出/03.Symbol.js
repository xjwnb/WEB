/*
 * @Author: your name
 * @Date: 2020-10-02 13:22:11
 * @LastEditTime: 2020-10-02 14:25:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\03.Symbol.js
 */

// Symbol.species
class Baz {
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
}
class Bar extends Array {
  static get [Symbol.species]() {
    return Baz;
  }
}
let bar = new Bar(1, 2);
console.log(bar.__proto__ === Baz.prototype); // false
console.log(bar); // Bar [ 1, 2 ]
console.log(bar instanceof Array); // true
console.log(bar instanceof Bar); // true
console.log(bar); // Bar [ 1, 2 ]
bar = bar.slice(1);
console.log(bar.__proto__ === Baz.prototype); // true
console.log(bar instanceof Array); // false
console.log(bar instanceof Bar); // false
console.log(bar); // Baz { '0': 2, length: 1 }
bar.setName("小卡车");
bar.setAge(20);
console.log(bar.getName()); // 小卡车
console.log(bar.getAge()); // 20

// Symbol.toStringTag
class Test1 {
  constructor () {
    this[Symbol.toStringTag] = "Test1";
  }
}
var test1 = new Test1();
console.log(test1.toString()); // [object Test1]
console.log(test1[Symbol.toStringTag]); // Test1
