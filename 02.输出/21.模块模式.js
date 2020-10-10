/*
 * @Author: your name
 * @Date: 2020-10-10 20:45:24
 * @LastEditTime: 2020-10-10 21:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\21.模块模式.js
 */

// Person 类
function Person(name, age) {
  this.setName(name);
  this.setAge(age);
}
Person.prototype.setName = function (name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.setAge = function (age) {
  this.age = age;
};
Person.prototype.getAge = function () {
  return this.age;
};

let singPerson = (function () {
  let personList = new Array();

  return function (name, age) {
    let xkc = new Person(name, age);
    personList.push(xkc);
    xkc.getPersonNum = function () {
      return personList.length;
    };
    xkc.getPersonList = function() {
      return personList;
    }
    
    return xkc;
  };
})();

const xkc = singPerson("小卡车", 20);
console.log(xkc);
/* 
  输出
Person {
  name: '小卡车',
  age: 20,
  getPersonNum: [Function],
  getPersonList: [Function]
} */
console.log(xkc.getPersonNum()); // 1
console.log(xkc.getPersonList());
/* 
  输出
[
  Person {
    name: '小卡车',
    age: 20,
    getPersonNum: [Function],
    getPersonList: [Function]
  }
] */
console.log(xkc.getName()); // 小卡车
console.log(xkc.getAge()); // 20


const zzx = singPerson("蜘蛛侠", 22);
console.log(zzx);
/* 
  输出
Person {
  name: '蜘蛛侠',
  age: 22,
  getPersonNum: [Function],
  getPersonList: [Function]
} */
console.log(zzx.getPersonNum()); // 2
console.log(zzx.getPersonList()); 
/* 
  输出
[
  Person {
    name: '小卡车',
    age: 20,
    getPersonNum: [Function],
    getPersonList: [Function]
  },
  Person {
    name: '蜘蛛侠',
    age: 22,
    getPersonNum: [Function],
    getPersonList: [Function]
  }
] */