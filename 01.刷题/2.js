/*
 * @Author: your name
 * @Date: 2020-09-25 19:55:39
 * @LastEditTime: 2020-09-25 22:56:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\1.刷题\2.js
 */
// 题目 1：
// 下面那些方法修改了原数组
const arr1 = ["xkc", "小卡车", "20"];
arr1.map((x) => x + "xkc");
arr1.filter((x) => x !== "小卡车");
arr1.find((x) => x !== "小卡车");
arr1.reduce((acc, cur) => (acc = acc + cur + " "), "猪头怪");
arr1.slice(1, 2, "小卡车");
arr1.splice(1, 2, "加油啊");
console.log(arr1); // [ 'xkc', '加油啊' ]
/*
答案：splice
原因：
    splice 将原来的数组从参数第一个数字开始，删除第二个参数的个数，修改成第三个参数。
    map, filter,find, 返回新的数组。而 reduce 返回一个减少的值。
*/

// 题目 2：
var arr2 = [1, 2, 3].map((num) => {
  if (typeof num === "number") {
    return;
  }
  return num * 2;
});
console.log(arr2); // [undefined, undefined, undefined]
/*
原因：
    数组进行映射时，由于存入的数组所有元素都是 number 类型，所以所有元素的 typeof num === "number" 为 true，
    所以都返回空，但是 map 默认返回 undefined ，所以返回一个新的数组 [undefined, undefined, undefined]
*/

// 题目 3：
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list); // [ 3, 2, 0.5 ]
/*
原因:
    数组元素可以包括任何值，number, string, boolean, object, array, null, defined 以及其他表达式
    所以会计算出数组元素中的表达式，最后返回。因此输出结果为 [ 3, 2, 0.5 ] 。
*/

// 题目 4：
// 单击按钮时 event.target 是什么？
{
  /* 
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> 
*/
}
// 答案： button
/*
原因：
    event.target 是触发事件的目标元素。所以是 button 。
*/

// 题目 5：
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const counterOne = new Counter();
counterOne.increment();
counterOne.increment();
const counterTwo = counterOne;
counterTwo.increment();
console.log(counterOne.count); // 3
/*
原因：
    counterOne 是类 Counter 的实例。调用两次 increment 方法之后, count 属性的值为 2 。
    但是将 counterOne 赋值给常量 counterTwo ，由于 counterOne 是引用类型，因此他们指向同
    一块内存地址，所以调用 counterTwo.increment() , count 的值为 3。
*/

// 题目 6：
console.log(String.raw`Hello\nworld!`); // Hello\nworld!
/*
原因：
    String.raw 函数是用来获取一个模板字符串的原始字符串的，返回一个字符串，忽略了转义符(\n, \v, \t)等，
    所以返回 Hello\nworld!
*/

// 题目 7：
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i)); // 3 3 3
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i)); // 0 1 2
}
/*
原因：
    由于 JavaScript 中的事件执行机制，setTimeout 函数真正被执行时，循环已经完成，由于变量 i 是用 
    var 声明的，全局性没有块级作用域，所以此时的 i 已经是 3，再到执行 setTimeout 的时候就只能输出 3。
    而第二个循环中的变量 i 是用 let 声明的，let 具有块级作用域，所以会输出 0 1 2 。
*/

// 题目 8：
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5, 6]);
console.log(obj.hasOwnProperty("1")); // true
console.log(obj.hasOwnProperty(1)); // true
console.log(set.has("1")); // false
console.log(set.has(1)); // true
/*
原因：
    所以对象值，都会被存储为字符串，所以 obj.hasOwnProperty("1") 会返回 true 。
    而 Set 不会存储为字符串。所以 set.has("1") 返回 false 。
*/

// 题目 9：
console.log(Promise.resolve(6)); // Promise {<fulfilled>: 6}
/*
原因：
    修改 Promise 的状态。
*/

// 题目 10：
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4
}
/*
原因：
    简单逻辑，循环 1 ~ 4 ，如果循环到 3 的时候跳过本次循环，所以没有执行下面的打印代码，
    所以输出 1 2 4
*/
