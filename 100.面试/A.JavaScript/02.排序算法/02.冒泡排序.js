/*
 * @Author: your name
 * @Date: 2021-02-20 18:05:25
 * @LastEditTime: 2021-02-20 18:11:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\02.排序算法\02.冒泡排序.js
 */

/**
 * 冒泡排序：
 */

function bubSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tem = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return arr;
}

let arr = [66, 77, 567, 123, 10, 100, 90];
console.log(bubSort(arr));
