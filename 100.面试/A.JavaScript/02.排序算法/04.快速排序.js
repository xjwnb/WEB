/*
 * @Author: your name
 * @Date: 2021-03-16 08:44:44
 * @LastEditTime: 2021-03-16 08:53:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\02.排序算法\04.快速排序.js
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let midValue = arr.splice(midIndex, 1);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(midValue, quickSort(right));
}

var arr = [55, 66, 18, 10, 20, 30, 1, 2, 3, 12, 2];
quickSort(arr);
