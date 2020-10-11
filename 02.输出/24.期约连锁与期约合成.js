/*
 * @Author: your name
 * @Date: 2020-10-11 20:15:47
 * @LastEditTime: 2020-10-11 21:48:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\24.期约连锁与期约合成.js
 */
// 期约连锁
let p = new Promise((resolve, reject) => {
  console.log("first");
  resolve();
});
p.then(() => {
  console.log("second");
})
  .then(() => {
    console.log("third");
  })
  .then(() => {
    console.log("fourth");
  });
/*
first
second
third
fourth
*/

let p1 = new Promise((resolve, reject) => {
  console.log("p1");
  setTimeout(resolve, 0, "111");
});
p1.then(
  (res) =>
    new Promise((resolve, reject) => {
      console.log("p2", res);
      setTimeout(resolve, 0, "222");
    })
).then((res) => {
  console.log("p3", res);
});
/*
p1
p2 111
p3 222
*/

// 生成期约的工厂函数
function delayResolve(str) {
  return new Promise((resolve, reject) => {
    console.log(str);
    resolve();
  });
}
delayResolve("p1")
  .then(() => delayResolve("p2"))
  .then(() => delayResolve("p3"));
/*
p1
p2
p3
*/
