/*
 * @Author: your name
 * @Date: 2020-09-28 15:20:40
 * @LastEditTime: 2020-09-28 15:35:28
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
const myFunc = ({x, y , z}) => {
  console.log(x, y, z);
};
myFunc(1, 2, 3); // undefined undefined undefined
/*
原因：
    myFunc 函数接受的形参是一个拥有 x, y, z 属性的对象，而传入的实参是三个独立的数字，因此返回默认值 undefined。
*/
