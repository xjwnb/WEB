/*
 * @Author: your name
 * @Date: 2020-10-06 18:18:16
 * @LastEditTime: 2020-10-06 19:57:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\08.生成器.js
 */
function* gener() {
  yield 1;
  yield 2;
  return 3;
}
for (const x of gener()) {
  console.log(x);
}
const gen = gener();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }

// yield 加一个 * 可以迭代一个可迭代对象,并一次产出一个值.
function* gener1() {
  yield* [1, 2, 3, 4, 5, 6];
}
for (const value of gener1()) {
  console.log(value); // 1 2 3 4 5 6
}

// 递归
function* gener2(n) {
  if (n > 0) {
    yield* gener2(n - 1);
    yield n - 1;
  }
}
for (const value of gener2(3)) {
  console.log(value); // 0 1 2
}
