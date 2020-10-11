/*
 * @Author: your name
 * @Date: 2020-10-11 16:51:46
 * @LastEditTime: 2020-10-11 16:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\23.js
 */
console.log("1");
let p = new Promise((resolve, reject) => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
    resolve("小卡车");
    console.log("4");
  });
  console.log("5");
});
console.log("6");
p.then((res) => {
  console.log("7");
  console.log(res);
});
console.log("8");
setTimeout(() => {
  console.log("9");
});
/* 
1
2
5
6
8
3
4
7
小卡车
9 
*/
