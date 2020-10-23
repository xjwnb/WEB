/*
 * @Author: your name
 * @Date: 2020-10-23 14:41:32
 * @LastEditTime: 2020-10-23 15:28:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\04.迭代器模式\01.迭代器模式.js
 */
// 简单的迭代器
let each = function (arr, callback) {
  for (let i = 0, l = arr.length; i < l; i++) {
    callback.call(arr[i], i, arr[i]);
  }
};
each([1, 2, 3, 4, 5, 6], function (index, item) {
  console.log(index, item);
});
/*
0 1
1 2
2 3
3 4
4 5
5 6
*/

// 内部迭代器
let compare1 = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("ar1 和 arr2 不相等");
  }
  each(arr1, function (index, item) {
    if (item !== arr2[index]) {
      throw new Error("arr1 和 arr2 不相等");
    }
  });
  console.log("arr1 和 arr2 相等");
};
compare1([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]); // arr1 和 arr2 相等
// compare1([1, 2, 3, 4, 5, 6], [1, 2, 3, 5, 6]); // throw new Error("ar1 和 arr2 不相等");

// 外部迭代器
let Iterator = function (obj) {
  let current = 0;
  let next = function () {
    current += 1;
  };
  let isDone = function () {
    return current >= obj.length;
  };
  let getCurrentItem = function () {
    return obj[current];
  };
  return {
    next,
    isDone,
    getCurrentItem,
    length: obj.length,
  };
};
let compare2 = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log("iterator1 和 iterator2 不相等");
  }
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
      console.log("iterator1 和 iterator2 不相等");
    }
    iterator1.next();
    iterator2.next();
  }
  console.log("iterator1 和 iterator2 相等");
};
let iterator1 = Iterator([1, 2, 3, 4, 5, 6]);
let iterator2 = Iterator([1, 2, 3, 4, 5, 6]);
compare2(iterator1, iterator2); // iterator1 和 iterator2 相等

// 中止迭代器
let each1 = function (arr, callback) {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (callback(i, arr[i]) === false) {
      break;
    }
  }
};
each1([1, 2, 3, 4, 5, 6], function (index, item) {
  if (item > 3) {
    return false;
  }
  console.log(index, item);
});
/*
0 1
1 2
2 3
*/
