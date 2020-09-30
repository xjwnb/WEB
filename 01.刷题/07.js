/*
 * @Author: your name
 * @Date: 2020-09-30 19:59:59
 * @LastEditTime: 2020-09-30 20:13:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\07.js
 */
// 题目 1:
class Person {
  constructor() {
    this.name = "xkc";
  }
}
Person = class AnotherPerson {
  constructor() {
    this.name = "小卡车";
  }
};
const member = new Person();
console.log(member.name); // 小卡车
/*
原因：
    可以将类设置为等于其他类/函数构造函数。这种情况下， 我们将 Person 设置为 AnotherPerson。这个函数的构造函数的 name 是为
    "小卡车",所以新的 Person 实例 member 上的 name 属性是 "小卡车"。
*/

// 题目 2：
const info = {
  [Symbol("a")]: "b",
};
console.log(info); // { [Symbol(a)]: 'b' }
console.log(Object.keys(info)); // []
/*
原因：
    Symbol 类型是不可枚举的。Objec.keys 方法返回对象上的所有可枚举的键属性。Symbol 类型不可见，并返回一个空数组。
*/

// 题目 3：
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }
  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}
const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.newColor); // purple
// freddie.colorChange("orange") // TypeError
// Chameleon.colorChange("orange");
// console.log(Chameleon.newColor); // orange
/*
原因：
    Chameleon 类中 colorChange 是一个静态变量，因此不能通过实例进行调用，只能通过类名进行调用。
*/
