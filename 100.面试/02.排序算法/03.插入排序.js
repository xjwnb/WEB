/*
 * @Author: your name
 * @Date: 2021-02-20 18:36:36
 * @LastEditTime: 2021-02-20 18:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\02.排序算法\03.插入排序.js
 */

function insertSort(arr) {
  let leng = arr.length;
  let preIndex, current;
  for (let i = 1; i < leng; i ++) {
    preIndex = i - 1;
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}


let arr = [66, 77, 567, 123, 10, 100, 90];
console.log(insertSort(arr));