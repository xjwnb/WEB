/*
 * @Author: your name
 * @Date: 2020-09-24 17:38:35
 * @LastEditTime: 2020-09-24 19:03:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\1.刷题\1.js
 */
// 题目 1：
console.log(typeof typeof 1); // "string"
/* 
原因： 
    由于从左往右执行， 执行 typeof 的时候，就会先去去后面的值，
    接着 typeof 1 获得字符串 "number",
    最终 typeof "number" ,因此取得值 "string" 
*/

// 题目 2：
const { name: MyName } = { name: "小卡车" };
console.log(MyName); // 小卡车
// console.log(name); // ReferenceError: name is not defined
/*
原因：
    从右侧对象结构属性 name 获得时候，将 name 赋值为右侧的 "小卡车",因此 MyName 的值为 "小卡车"，
    也就是使用 {name: MyName}, 创建一个 MyName 的变量并且赋值为右侧的 name 的值。
*/

// 题目 3：
const color = ["red", "green", "blue", "black"];
const info = {
  favoriteColor: color[0],
};
info.favoriteColor = "orange";
console.log(color); // [ 'red', 'green', 'blue', 'black' ]
/*
原因： 
    给 Info 的 favoritColor 属性赋值 color 数组的第一个 "red" 赋值给 info.favoriteColor，
    由于 "red" 是字符串类型，因此是复制一份给 info.favoritColor 的。
 */

//  题目 4:
function addToList(item, list) {
  return list.push(item);
}
const result = addToList("blue", ["orange"]);
console.log(result); // 2
/*
原因：
    push 方法返回的是新数组的长度
*/

// 题目 5：
function* generatorOne() {
  yield ["a", "b", "c"];
}
function* generatorTwo() {
  yield* ["a", "b", "c"];
}
const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value); // [ 'a', 'b', 'c' ]
console.log(two.next().value); // a
/*
原因：
    在函数 generatorOne 中，我们通过 yeild 关键字 yield 了一个完整的数组 ["a", "b", "c"]。
    函数 one 通过 next 方法返回的对象的 value 属性的值就是 [ 'a', 'b', 'c' ]。
    而在函数 generatorTwo 中， 我们通过 yeild* 关键字，就相当于一个迭代器，第一个 yield 的值就是 "a"。
*/

// 题目 5：
function greeting() {
  throw "Hello World";
}
function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}
sayHi(); // Oh no an error: Hello World
/*
原因：
    由于函数 greeting 中使用 throw 创建了自定义错误，所以 try 中执行到该函数的时候就抛出错误，
    执行 catch 中的代码， 由于 greeting 中 throw 抛出的异常信息是 "Hello World"，所以 e 的值
    为 "Hello World"。
*/
