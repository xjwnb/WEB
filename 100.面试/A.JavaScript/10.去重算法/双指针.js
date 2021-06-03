/*
 * @Author: your name
 * @Date: 2021-05-25 16:17:15
 * @LastEditTime: 2021-05-25 16:23:11
 * @LastEditors: Please set LastEditors
 * @Description: 双指针去重-去重有序数组
 * @FilePath: \WEB\100.面试\A.JavaScript\10.去重算法\双指针.js
 */

function removeDuplicateArr(arr) {
  let len = arr.length;
  if (arr.length === 0 || arr === null) return 0;
  let left = 0;
  for (let right = 1; right < len; right++) {
    if (arr[left] !== arr[right]) {
      arr[++left] = arr[right];
    }
  }
  return arr.slice(0, ++left);
}

let array = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8, 9, 9];
console.log(removeDuplicateArr(array));
