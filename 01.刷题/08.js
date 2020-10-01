/*
 * @Author: your name
 * @Date: 2020-10-01 20:44:58
 * @LastEditTime: 2020-10-01 20:57:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\08.js
 */
// 题目 1:
const arr1 = [1, [2, 3, [1, 2]]];
console.log(arr1.flat(1)); // [ 1, 2, 3, [ 1, 2 ] ]
/*
原因：
    方法 flat ，可以创建一个新的已经被扁平化的数组，被扁平化的 深度取决于传递的值，默认值为 1。相当于只有第一层
    的数组会被连接。
*/

// 题目 2:
function fn1(a, b) {
  if (a > b) console.log("a 大");
  else console.log("b 大");
  return;
  a + b;
}
console.log(fn1(2, 1)); // a 大 undefined
console.log(fn1(1, 2)); // b 大 undefined
/*
原因：
    在 JavaScript 中不必显示编写分号，JavaScript 会自动加上，而在执行到 return 的时候，由于 a + b 在新的一行。以为已经结束
    自动在 return 后面加上分号。所以返回 undefined。
*/

// 题目 3：
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;
console.log(one); // {}
console.log(two); // ""
console.log(three); // []
/*
原因：
    由于 JavaScript 只有六个假值：NaN、0、""、false、null、undefined，结合 || 运算符，得出的结果。
*/
