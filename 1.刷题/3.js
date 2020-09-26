/*
 * @Author: your name
 * @Date: 2020-09-26 10:43:46
 * @LastEditTime: 2020-09-26 11:30:36
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
