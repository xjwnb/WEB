/*
 * @Author: your name
 * @Date: 2020-09-26 10:43:46
 * @LastEditTime: 2020-09-26 12:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\1.刷题\3.js
 */
// 题目 1:
const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};
add(4)(5)(6) // 4 5 6
/*
原因：
    简单理解的代码
*/

// 题目 2:
var arr1 = [1, 2, 3, 4];
arr1.reduce((x, y) => {
  return console.log(x, y); // 1 2 undefined 3 undefined 4
});
/*
原因：
    reduce 函数有四个参数： Accumulator 累计器，Curremt Value 当前值，Current Index 当前索引，Source Array 源数组
    除函数参数外还有一个可选参数 initalValue ，该参数作为第一次调用回调函数的第一个参数，如果没有提供就使用数组的第一个元素。
    在上面题目中，回调函数只有两个，又没有 initalValue ,所以第一次调用时候 x = 1, y = 2，因为回调函数没有返回值，只是打印输出，
    所以此后的第一个参数都是默认的 undefined 。所以输出结果： 1 2 undefined 3 undefined 4
*/

// 题目 3：
const output = `${[] && 'Im'}possible! You should ${'' && ['object', 'Object']} see a therapist after so much JavaScript lol`;
console.log(output); // Impossible! You should  see a therapist after so much JavaScript lol
/*
原因：
    [] 是一个真值所以会执行返回右边的 'Im' ，而另一个表达式中 '' 是假值，所以不会返回右边的值。
*/

// 题目 4：
// 下面那些是假值
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
// 答案：0 , '' , undefined
/*
原因:
    JavaScript 中只有六个假值： undefined, null, NaN, 0, '', false 。
*/

// 题目 5：
function addToList(item, list) {
  return list.push(item);
}
const result = addToList('小卡车', ['xkc']);
console.log(result); // 2
/*
原因：  
    addToList 函数中返回的是 push 函数的返回值，而 push 函数返回值是新数组的长度，所以输出为 2 。
*/

// 题目 6：
console.log(`${(x => x)('I love')} to program`); // I love to program
/*
原因：
    在模板字符串中表达式表示的是一个立即执行函数，传入的参数是 'I love' 而函数的形参为 x ，且返回值为 x。
    所以该表达式返回的是 I love ，因此输出结果为 I love to program 。
*/

// 题目 7：
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 3 3 3
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 0 1 2
}
/*
原因：
    第一个 for 循环中的 i 是用 var 声明的，不具有块级作用域，且是一个全局变量，而 setTimeout 是宏任务，不能同步执行
    所以在循环三次之后 i 的值已经是 3 时，才执行 setTimeout， 所以输出 3 3 3 。
    第二个 for 循环中的 i 则是用 let 声明的，具有块级作用域，所以对应的 i 只在对应的块级作用域中起效果。
    所以输出 0 1 2 。
*/

// 题目 8：
// 在 index.js 中如何调用 sum.js 中的 sum 函数
/**
 * sum.js
 * export default function sum(x) {
 *   return x + x
 * }
 * index.js
 * import * as sum from './sum.js';
 */
// 答案 sum.default(4)
/*
原因：
    使用符号 * ，引入的是文件的所有导出值，包括默认和具名。
    举例：
      // info.js
      export const name = '小卡车';
      export const age = 20;
      export default '小卡车要加油啊！';
      // index.js
      import * as info from './info.js';
      console.log(info);
    则会输出结果:
      {
        default: "小卡车要加油啊！",
        name: "小卡车",
        age: 20,
      }
    而已本题为例，相当于引入值 sum:
      {
        default: function sum(x) {
          return x + x;
        }
      }
    所以调用 sum.default 可以调用函数
*/

// 以下那一项会对对象 person 有副作用
const person = { name: "小卡车" };
Object.seal(person);
/**
 * A. person.name = "xkc"
 * B. person.age = 20
 * C. delete person.name
 * D. Object.assign(person, {age: 20})
 */
// 答案： A
/*
原因：
    使用 Object.seal 可以防止新属性被添加，或者存在属性被移除
*/

// 题目 10：
// 依次输出什么
const myPromise = () => Promise.resolve("小卡车要加油努力啊！");
function fn1() {
  myPromise().then(res => console.log(res));
  console.log("fn1");
}
async function fn2() {
  console.log(await myPromise);
  console.log("fn2");
}
fn1();
fn2();
/**
 * 答案：
 *  fn1
 *  小卡车要加油努力啊！
 *  [Function: myPromise]
 *  fn2
 */
/*
原因：
    任务轮询
*/
