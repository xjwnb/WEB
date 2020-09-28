/*
 * @Author: your name
 * @Date: 2020-09-28 15:20:40
 * @LastEditTime: 2020-09-28 16:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\05.js
 */
// 题目 1:
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});
Promise.race([firstPromise, secondPromise]).then((res) => {
  console.log(res); // "two"
});
/*
原因：
    Promise.race 传入的 promise 数组，会进行优先解析，返回最先执行的。 firstPromise 延迟 500ms，
    secondPromise 延迟 100ms。所以执行 secondPromise ，输出结果为 "two"。
*/

// 题目 2：
function fn1() {
  return "小卡车努力加油啊！";
}
const fn2 = () => {
  return "小卡车努力加油啊！";
};
console.log(fn1.prototype); // {constructor: ƒ}
console.log(fn2.prototype); // undefined
/*
原因：
    fn1 函数是常规函数，所以默认有 prototype 属性，并携带一个 constructor 属性的对象。
    fn2 函数是箭头函数，没有 prototype 属性，所以返回 undefined。
*/

// 题目 3：
const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};
myFunc(1, 2, 3); // undefined undefined undefined
/*
原因：
    myFunc 函数接受的形参是一个拥有 x, y, z 属性的对象，而传入的实参是三个独立的数字，因此返回默认值 undefined。
*/

// 题目 4：
const myPromise = () => {
  return Promise.resolve("小卡车加油！");
};
function firstFunc() {
  myPromise().then((res) => {
    console.log(res);
  });
  console.log("first");
}
async function secondFunc() {
  console.log(await myPromise());
  console.log("second");
}
firstFunc();
secondFunc();
/**
 * 答案：
 *     first
 *     小卡车加油！
 *     小卡车加油！
 *     second
 */
/*
原因：
    由于 firstFunc 函数中 Promise 处于微任务中，因此先执行主任务中的打印操作。所以执行顺序是 first 小卡车加油！
    而 secondFunc 函数则使用 async await 关键字，停止了后面的打印操作，先执行了 Promise 操作。 所以执行顺序是 小卡车加油！ second
*/

// 题目 5：
const output = `${[] && "Im"}possible! You should ${
  "" && "[object Object]"
} see a therapist after so much JavaScript lol`;
console.log(output); // Impossible! You should  see a therapist after so much JavaScript lol
/*
原因：
    在模板字符串中第一个表达式中的 [] 是一个真值，配合 && 关键字，所以会执行到 "Im"。
    而第二个表达式中 ”“ 则是一个假值，配合 && 关键字，因此不会执行后面操作。
*/

// 题目 6：
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}
(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item); // 1 2 3
  }
})();
/*
原因:
    我们给函数 range 传递：Promise{1},Promise{2}, Promise{3}, Generator 函数 range 返回一个全是 asyncObject promise数组。
    赋值给变量 gen, 之后使用 for await of 进行遍历。而使用的是 await ，resolve 状态，所以输出 1 2 3
*/

// 题目 7：
console.log(!!null); // false
console.log(!!""); // false
console.log(!!1); // true
/*
原因：
    null 是假值，!null 返回 true, !!null 返回 false;
    "" 是假值，!"" 返回 true, !!"" 返回 false;
    1 是真值，!1 返回 false, !!1 返回 true。
*/

// 题目 8：
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "mile-per-hour",
  }).format(speed);
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}
console.log(getFine(130, 300)); // The driver drove 130 mph and has to pay $300.00
/*
原因：
    Intl.NumberFormat 方法，可以格式化任意区域的数字值，我们对数字值 130 进行mile-per-hour作为 unit 的 en-US 区域格式化，结果为 130 mph，
    对数字值 300 进行 USD 作为 currentcy 的 en-US 区域格式化，结果为 $300.00。
*/

// 题目 9：
const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};
add(1)(2)(3); // 1 2 3
/*
原因：
    箭头函数第一个函数返回 x, 第二个函数返回 y, 第三个返回 z，最终打印出来。
*/

// 题目 10：

/* 
// index.js
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));
// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b; 
*/
/**
 * 答案：
 *     running sum.js
 *     running index.js
 *     3
 */
/*
原因：
    import 命令是编译阶段执行的，在代码运行之前。因此意味着被导入的模块会先执行，而导入模块会后执行。
*/
