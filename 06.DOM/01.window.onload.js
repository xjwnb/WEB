/*
 * @Author: your name
 * @Date: 2020-09-30 13:41:27
 * @LastEditTime: 2020-09-30 13:43:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\06.DOM\01.window.onload.js
 */

//  往window.onload 添加函数
function addLoadEvent(func) {
  var oldFunc = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldFunc();
      func();
    };
  }
}
