/*
 * @Author: your name
 * @Date: 2021-07-05 23:54:36
 * @LastEditTime: 2021-07-05 23:59:04
 * @LastEditors: Please set LastEditors
 * @Description: 手写发布订阅
 * @FilePath: \WEB\100.面试\A.JavaScript\11.手写发布订阅\index.js
 */

class EventBus {
  cache = [];

  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }

  emit(eventName) {
    this.cache[eventName].forEach((fn) => fn());
  }

  off(eventName, fn) {
    const index = indexOf(this.cache[eventName], fn);
    if (index === -1) return;
    this.cache[eventName].splice(index, 1);
  }
}
function indexOf(arr, item) {
  if (arr === undefined) return -1;
  let index = -1;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === item) {
      index = i;
      break;
    }
  }
  return index;
}
