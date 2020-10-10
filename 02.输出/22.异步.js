/*
 * @Author: your name
 * @Date: 2020-10-10 22:47:19
 * @LastEditTime: 2020-10-10 23:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\22.异步.js
 */
function test1(a, b, callback) {
  var a = a + b;
  // 异步操作
  setTimeout(function () {
    // 异步执行完成获得数据作为参数返回给回调函数。
    callback(a);
  }, 1000);
}
// 传入数据并利用回调函数获得异步结果。
test1(1, 2, (res) => {
  console.log(res);
});
