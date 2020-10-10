/*
 * @Author: your name
 * @Date: 2020-10-10 17:36:14
 * @LastEditTime: 2020-10-10 18:15:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\20.内存泄漏.js
 */

// 普通
function assignHandler() {
  let element = document.getElementById("ele");
  element.onclick = () => {
    console.log(element.id);
  };
}

// 防止内存泄漏的优化代码
function assignHandler1() {
  let element = document.getElementById("ele");
  let id = element.id;
  element.onclick = () => {
    console.log(id);
  };
}
