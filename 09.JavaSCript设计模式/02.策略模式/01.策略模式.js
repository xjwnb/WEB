/*
 * @Author: your name
 * @Date: 2020-10-22 17:49:41
 * @LastEditTime: 2020-10-22 19:57:36
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

// 3.使用策略模式重构代码
let performanceS1 = function () {};
performanceS1.prototype.calculate = function (salary) {
  return salary * 4;
};
let performanceA1 = function () {};
performanceA1.prototype.calculate = function (salary) {
  return salary * 3;
};
let performanceB1 = function () {};
performanceB1.prototype.calculate = function (salary) {
  return salary * 2;
};
let Bonus = function () {
  this.salary = null;
  this.strategy = null;
};
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
};
Bonus.prototype.getBonus = function () {
  if (!this.strategy) {
    throw new Error("没有strategy属性");
  }
  return this.strategy.calculate(this.salary);
};
let bonus = new Bonus();
bonus.setSalary(20000);
bonus.setStrategy(new performanceS1());
console.log(bonus.getBonus()); // 80000

// JavaScript 版本的策略模式
let strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};
let calculateBonus2 = function (level, salary) {
  return strategies[level](salary);
};
console.log(calculateBonus2("S", 20000)); // 80000
