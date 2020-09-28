/*
 * @Author: your name
 * @Date: 2020-09-28 15:20:40
 * @LastEditTime: 2020-09-28 15:25:58
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
  console.log(res);  // "two"
});
/*
原因：
    Promise.race 传入的 promise 数组，会进行优先解析，返回最先执行的。 firstPromise 延迟 500ms，
    secondPromise 延迟 100ms。所以执行 secondPromise ，输出结果为 "two"。
*/
