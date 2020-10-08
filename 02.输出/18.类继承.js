/*
 * @Author: your name
 * @Date: 2020-10-08 20:27:43
 * @LastEditTime: 2020-10-08 20:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\18.类继承.js
 */
class Vehicle {
  constructor(name) {
    this.name = name;
  }
}
class Bus extends Vehicle {
  constructor(name) {
    super(name);
    console.log(this);
  }
}
const bus = new Bus("小卡车"); // Bus { name: '小卡车' }
console.log(bus.name); // 小卡车
console.log(bus instanceof Bus); // true
console.log(bus instanceof Vehicle); // true
console.log(bus.constructor === Bus); // true
console.log(bus.__proto__ === Bus.prototype); // true
console.log(bus.__proto__.constructor === Bus); // true
console.log(Bus.prototype.__proto__ === Vehicle.prototype); // true
