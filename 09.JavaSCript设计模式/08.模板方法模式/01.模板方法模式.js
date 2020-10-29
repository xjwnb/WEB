/*
 * @Author: your name
 * @Date: 2020-10-29 20:13:19
 * @LastEditTime: 2020-10-29 20:59:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\08.模板方法模式\01.模板方法模式.js
 */

// 卡布奇诺 和 忘崽牛奶 的抽象父类
// 饮料抽象类
let Beverage = function () {};
// 子类公共方法
Beverage.prototype.boilWater = function () {
  console.log("将水煮沸");
};
// 冲泡方法（需被子类重写)
Beverage.prototype.brew = function () {};
// 倒进杯子方法（需被子类重写）
Beverage.prototype.pourInCup = function () {};
// 添加调味料方法（需被子类重写）
Beverage.prototype.addCondiments = function () {};
// 初始化方法
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

// 卡布奇诺类
let Cappuccino = function () {};
// 继承饮料抽象类
Cappuccino.prototype = new Beverage();
// 重写饮料方法
Cappuccino.prototype.brew = function () {
  console.log("用沸水冲泡卡布奇诺");
};
Cappuccino.prototype.pourInCup = function () {
  console.log("把卡布奇诺倒进杯子");
};
Cappuccino.prototype.addCondiments = function () {
  console.log("加糖");
};
let cappuccino = new Cappuccino();
cappuccino.init();

// 忘崽牛奶类
let ForgetSonMilk = function () {};
// 继承饮料类
ForgetSonMilk.prototype = new Beverage();
// 重写饮料方法
ForgetSonMilk.prototype.brew = function () {
  console.log("用沸水冲泡忘崽牛奶");
};
ForgetSonMilk.prototype.pourInCup = function () {
  console.log("把忘崽牛奶倒进杯子");
};
ForgetSonMilk.prototype.addCondiments = function () {
  console.log("加糖加牛奶");
};
let forgetSonMilk = new ForgetSonMilk();
forgetSonMilk.init();
