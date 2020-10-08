/*
 * @Author: your name
 * @Date: 2020-10-08 16:58:41
 * @LastEditTime: 2020-10-08 17:27:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\17.类.js
 */

class Person {
  constructor(name, age) {
    this.setName(name);
    this.setAge(age);
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAge(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  [Symbol.toStringTag] = "Person";
}
console.log(typeof Person); // function
let xkc = new Person("xkc", 20);
console.log(xkc); // Person { name: 'xkc', age: 20, [Symbol(Symbol.toStringTag)]: 'Person' }
console.log(xkc.constructor === Person); // true
console.log(xkc.getName()); // xkc
xkc.setName("小卡车");
console.log(xkc.getName()); // 小卡车
console.log(xkc.toString()); // [object Person]

