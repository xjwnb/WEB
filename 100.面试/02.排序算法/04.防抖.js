/*
 * @Author: your name
 * @Date: 2021-02-24 18:23:01
 * @LastEditTime: 2021-02-24 18:38:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\02.排序算法\04.防抖.js
 */

function debounce(fun, wait, immediate) {
  let timeout, result, context, timestamp, args;
  let later = function () {
    let last = Date.now() - timestamp;
    if (last >= 0 && last < wait) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = fun.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    let callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = fun.apply(context, args);
      context = args = null;
    }
    return result;
  };
}
