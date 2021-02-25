/*
 * @Author: your name
 * @Date: 2021-02-25 19:35:33
 * @LastEditTime: 2021-02-25 19:37:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\05.new\01.new.js
 */
function create() {
  let obj = new Object();
  let ctx = [].shift.call(arguments);
  obj.__proto__ = ctx.prototype;
  let result = ctx.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}