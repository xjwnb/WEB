/*
 * @Author: your name
 * @Date: 2020-10-12 11:33:03
 * @LastEditTime: 2020-10-12 11:40:34
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

async function foo3() {
  return Promise.resolve(1);
}
foo3().then(console.log); // 1
