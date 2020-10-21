/*
 * @Author: your name
 * @Date: 2020-10-21 20:33:48
 * @LastEditTime: 2020-10-21 20:40:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\JavaSCript设计模式\01.面向对象的JavaScript\01.面向对象.js
 */
// 鸭子类型
let duck = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};
let chicken = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};
let choir = [];
let joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === "function") {
    choir.push(animal);
    console.log("成功加入");
  }
};
joinChoir(duck);
joinChoir(children);
console.log(choir);
