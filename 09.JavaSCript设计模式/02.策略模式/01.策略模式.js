/*
 * @Author: your name
 * @Date: 2020-10-22 17:49:41
 * @LastEditTime: 2020-10-22 19:00:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\02.策略模式\01.策略模式.js
 */
// 使用策略模式计算奖金
// 1.最初的代码实现
let calculateBonus = function (performancelevel, salary) {
  if (performancelevel === "S") {
    return salary * 4;
  } else if (performancelevel === "A") {
    return salary * 3;
  } else {
    return salary * 2;
  }
};
console.log(calculateBonus("S", 30000)); // 120000
console.log(calculateBonus("A", 20000)); // 60000

// 2.使用组合函数重构代码
let performanceS = function (salary) {
  return salary * 4;
};
let performanceA = function (salary) {
  return salary * 3;
};
let performanceB = function (salary) {
  return salary * 2;
};
let calculateBonus1 = function (performancelevel, salary) {
  if (performancelevel === "S") {
    return performanceS(salary);
  } else if (performancelevel === "A") {
    return performanceA(salary);
  } else if (performanceB === "B") {
    return performanceB(salary);
  }
};
console.log(calculateBonus1("S", 20000)); // 80000
