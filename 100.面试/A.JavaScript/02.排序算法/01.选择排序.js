/*
 * @Author: your name
 * @Date: 2021-02-20 17:37:57
 * @LastEditTime: 2021-02-20 18:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\02.排序算法\01.选择排序.js
 */

/**
 * 选择排序：首先设定每次循环比较数组中首个索引的值为最小值，随后循环与之后的值进行比较，倘若发现后面的值比最小值小，则索引保存，
 *          继续循环比较到最后，再将最小值继续调换。
 */
function selectSort(arr) {
  let leng = arr.length;
  let minIndex, tem;
  for (let i = 0; i < leng - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < leng; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    tem = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tem;
  }
  return arr;
}

let arr = [66, 77, 567, 123, 10, 100, 90];
console.log(selectSort(arr));
