/*
 * @Author: your name
 * @Date: 2020-10-05 23:11:00
 * @LastEditTime: 2020-10-05 23:14:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\04.迭代.js
 */
var arr1 = [1, 2, 3, 4, 5, 6];
for (let i in arr1) {
  console.log(i);
}
/**
 * 输出
 * 0 
 * 1
 * 2
 * 3
 * 4
 * 5
 */
for (let [index, value] of arr1.entries()) {
  console.log(index, value);
}
/**
 * 输出 
 * 0 1
 * 1 2
 * 2 3
 * 3 4
 * 4 5
 * 5 6     
 */
