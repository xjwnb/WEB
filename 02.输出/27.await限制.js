/*
 * @Author: your name
 * @Date: 2020-10-12 13:51:45
 * @LastEditTime: 2020-10-12 14:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\27.await限制.js
 */

// await 必须在异步函数中使用。
async function foo1() {
  console.log(await Promise.resolve("foo1 - 1"));
}
foo1(); // "foo1 - 1"

(async function foo2() {
  console.log(await Promise.resolve("foo2 - 1"));
})(); // foo2 - 1

// await 必须存在在 async 的函数中，否则会报错。
function foo3() {
  const sync = async () => {
    return await Promise.resolve("foo3 - 1");
  };
  sync().then(console.log); // foo3 - 1
  console.log(sync()); // Promise { <pending> }
}
foo3();

/*
Promise { <pending> }
foo1 - 1
foo2 - 1
foo3 - 1
*/
