/*
 * @Author: your name
 * @Date: 2021-02-25 20:27:30
 * @LastEditTime: 2021-02-25 20:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\06.拷贝\01.递归深拷贝.js
 */

function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let res;
  if (obj instanceof Array) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = arguments.callee(obj[key]);
    }
  }
  return res;
}
