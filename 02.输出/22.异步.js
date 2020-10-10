/*
 * @Author: your name
 * @Date: 2020-10-10 22:47:19
 * @LastEditTime: 2020-10-10 22:49:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\22.异步.js
 */
function test1(a, b, callback) {
  var a = a + b;
  setTimeout(function() {
    callback(a);
  }, 1000);
}

test1(1, 2, res => {
  console.log(res);
});