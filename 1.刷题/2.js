/*
 * @Author: your name
 * @Date: 2020-09-25 19:55:39
 * @LastEditTime: 2020-09-25 22:29:47
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
{/* 
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> 
*/}
// 答案： button
/*
原因：
    event.target 是触发事件的目标元素。所以是 button 。
*/

// 题目 5：
class Counter {
  constructor () {
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
