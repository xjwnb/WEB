/*
 * @Author: your name
 * @Date: 2020-10-11 20:15:47
 * @LastEditTime: 2020-10-11 23:38:48
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

// Promise.all()
let p2 = Promise.all([Promise.resolve(1), Promise.resolve(2)]);
setTimeout(console.log, 0, p2); // Promise { [ 1, 2 ] }
p2.then((res) => {
  console.log("p2:", res); // p2: [ 1, 2 ]
});

// 会转换为 Promise.resolve()
let p3 = Promise.all([1, 2]);
setTimeout(console.log, 0, p3); // Promise { [ 1, 2 ] }
p3.then((res) => {
  console.log("p3:", res); // p3: [ 1, 2 ]
});

// 等价于 Promise.resolve()
let p4 = Promise.all([]);
setTimeout(console.log, 0, p4); // Promise { [] }
p4.then((res) => {
  console.log("p4:", res); // p4: []
});

// 无效
// let p5 = Promise.all(); // TypeError

// 合成的期约要全部解决后才解决
let p5 = Promise.all([
  Promise.resolve("p5 - 1"),
  new Promise((resolve) => {
    resolve("p5 - 2");
  }),
]);
setTimeout(console.log, 0, p5); // Promise { [ 'p5 - 1', 'p5 - 2' ] }
p5.then((res) => {
  console.log("p5:", res); // p5: [ 'p5 - 1', 'p5 - 2' ]
});

function test1(x) {
  return x + 2;
}
let pp = new Promise((resolve, reject) => {
  resolve(1);
});
pp.then(test1).then(res => {
  console.log(res); // 3
});
