/*
 * @Author: your name
 * @Date: 2020-09-25 19:55:39
 * @LastEditTime: 2020-09-25 21:09:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\1.刷题\2.js
 */
// 题目 1：
// 下面那些方法修改了原数组
const arr1 = ["xkc", "小卡车", "20"];
arr1.map(x => x + "xkc");
arr1.filter(x => x !== "小卡车");
arr1.find(x => x !== "小卡车");
arr1.reduce((acc, cur) => acc = acc + cur + " ", "猪头怪");
arr1.slice(1, 2, "小卡车");
arr1.splice(1, 2, "加油啊");
/*
答案：splice
原因：
    splice 将原来的数组从参数第一个数字开始，删除第二个参数的个数，修改成第三个参数。
    map, filter,find, 返回新的数组.
*/
