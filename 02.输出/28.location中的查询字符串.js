/*
 * @Author: your name
 * @Date: 2020-10-13 14:26:56
 * @LastEditTime: 2020-10-13 14:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\28.location中的查询字符串.js
 */

// URL 中查询字符串
let getQueryStringArgs = function () {
  let qs = location.search ? location.search.substring(1) : "",
    args = {};
  for (let item of qs.split("&").map((k) => k.split("="))) {
    let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
};
