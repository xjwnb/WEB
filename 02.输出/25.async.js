/*
 * @Author: your name
 * @Date: 2020-10-12 11:33:03
 * @LastEditTime: 2020-10-12 12:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\25.async.js
 */

// async
async function foo1() {
  console.log("foo1");
}
foo1(); // foo1

// 异步函数使用 return 返回值，会被包装成 Promise.resolve
async function foo2() {
  return 1;
}
foo2().then(console.log); // 1

// 返回解决期约
async function foo3() {
  return Promise.resolve(2);
}
foo3().then(console.log); // 2

// 抛出错误会返回拒绝的期约
async function foo4() {
  throw 3;
}
foo4().catch(console.log); // 3

// 返回拒绝期约
async function foo5() {
  return Promise.reject(4);
}
foo5().catch(console.log); // 4

/*
foo1
1
3
2
4
*/
