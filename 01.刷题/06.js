/*
 * @Author: your name
 * @Date: 2020-09-29 23:36:42
 * @LastEditTime: 2020-09-29 23:47:15
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
const add = x => x + x;
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
