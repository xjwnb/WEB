/*
 * @Author: your name
 * @Date: 2020-09-29 23:36:42
 * @LastEditTime: 2020-09-30 00:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\06.js
 */
// 题目 1:
console.log(typeof typeof 1); // string
/*
原因：
    typeof 后面被看成表达式，执行到第一个 typeof 的时候，由于 typeof 1 返回 "number"，
    所以 typeof "number"  ，因此输出结果是 string。
*/

// 题目 2：
const add = (x) => x + x;
function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}
myFunc(); // 2 4
myFunc(3); // 3 6
/*
原因：
    add 函数返回 参数 + 参数。myFunc() 没有传入任何参数， myFunc 函数本身第一个形参有 2 的默认值，并且第二个形参是
    将第一个参数传入 add 函数并返回的值。因此执行 myFunc() 的时候其实是采用的默认值 2 进行计算，可得 num = 2, value = 4。
    执行 myFunc(3) ,传入一个 3 的实参，因此 myFunc 函数中的 num 默认值 2 无效，此时 num = 3 , value = 6。
*/

// 题目 3：
/* 
function getAge() {
  "use strict";
  age = 20;
  console.log(age);
}
getAge(); // ReferenceError
 */
/*
原因：
    使用 "use strict" 严格模式，可以确保不会意外声明全局变量，没有声明 age, 所以会引发 ReferenceError 的错误。
*/

// 题目 4：
// 单击按钮时 event.target 的是什么？
{
  /* 
<div onclick="console.log('first div')"> 
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click！
    </button>
  </div>
</div> 
*/
}
// 答案：button
/*
原因：
    单击按钮，因此触发事件的元素是 button ，因此答案是button，虽然会引发冒泡。依次触发 button > second div > first div。
*/

// 下面那些是假值
/**
 * 0;
 * new Number(0);
 * ("");
 * (" ");
 * new Boolean(false);
 * undefined;
 */
// 答案： 0, "", undefined
/*
原因：
    JavaScript 的只有六个假值，分别是： undefined, null, NaN, 0, "", false。
*/

// 题目 6:
console.log(`${(x => x)("I love")} to program !`); // I love to program !
/*
原因：
    在模板字符串中是一个立即执行函数，且传入的参数是 "I love" , 且函数是将传入的参数返回出来。因此输出 I love to program !。
*/

// 题目 7:
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}
const person = { name: "小卡车" };
compareMembers(person); // They are the same!
/*
原因：
    campareMembers 函数中有两个形参，而第二个参数有一个 person 的默认值。
    在调用的时候只传入一个叫做 person 变量，因此，第二个参数也会默认使用 person 变量，因此参数相等。
*/

// 题目 8：
function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi()); // "number"
/*
原因：
    typeof 后面是一个函数的调用，sayHi 函数被调用的时候，返回一个立即执行函数，且返回 0，因此 typeof 0，所以输出为 "number"。
*/

// 题目 9：
// cool_secret 可以访问多长时间？
/**
 * sessionStorage.setItem("coll_secret", 123);
 */
// 答案： 用户关闭选项卡时。
/*
原因：
    关闭选项卡后，将删除存储在 sessionStorage 中的数据。
*/
