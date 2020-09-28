/*
 * @Author: your name
 * @Date: 2020-09-28 12:35:38
 * @LastEditTime: 2020-09-28 12:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\06.DOM\1.getElementsByClassName.js
 */

// 兼容的 getElementsByClassName
function getElementsByClassName(node, className) {
  if (node.getElementsByClassName) {
    return node.getElementsByClassName(className);
  } else {
    var result = new Array();
    var elems = node.getElementsByTagName("*");
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].className.indexOf(className) != -1) {
        result[result.length] = elems[i];
      }
    }
    return result;
  }
}