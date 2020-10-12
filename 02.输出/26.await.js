/*
 * @Author: your name
 * @Date: 2020-10-12 12:04:21
 * @LastEditTime: 2020-10-12 13:31:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\26.await.js
 */

// await
// 暂停异步函数的执行，等待期约解决。
function foo1() {
  let p = new Promise((resolve) => {
    setTimeout(resolve, 0, "foo1 - 1");
  });
  console.log(p); // Promise { <pending> }
  p.then(console.log); // foo1 - 1
}
foo1();

async function foo2() {
  let p = new Promise(resolve => {
    setTimeout(resolve, 0 , "foo2 - 1");
  });
  console.log(await p); // foo2 - 1
}
foo2();

async function foo3() {
  return await Promise.resolve("foo3 - 1");
}
foo3().then(console.log); // foo3 - 1

async function foo4() {
  return await new Promise((resolve, reject) => setTimeout(resolve, 1000, "foo4 - 1"));
}
foo4().then(console.log); // foo4 - 1

async function foo5() {
  await new Promise((resolve, reject) => setTimeout(resolve, 900, "foo5 - 1"));
  console.log("foo5 - 2");
}
foo5(); // foo5 - 1

async function foo6() {
  console.log("foo6 - 1");
  await Promise.reject("foo6 - 2");
  console.log("foo6 - 3");
}
foo6().catch(console.log);
console.log("foo6 - 4");
/*
foo6 - 1
VM192:7 foo6 - 4
foo6 - 2
*/


/*
Promise { <pending> }
foo6 - 1
foo6 - 4
foo3 - 1
foo6 - 2
foo1 - 1
foo2 - 1
foo5 - 2
foo4 - 1
*/