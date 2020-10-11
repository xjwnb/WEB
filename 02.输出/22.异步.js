/*
 * @Author: your name
 * @Date: 2020-10-10 22:47:19
 * @LastEditTime: 2020-10-11 09:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\22.异步.js
 */

// 异步返回值
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
  console.log(res); // 3
});

// 失败处理
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (
        !(Object.prototype.toString.call(value) === "[object Object]") ||
        !("name" in value)
      ) {
        throw "传入的数据有误！";
      }
      success(value["name"] + "加油！");
    } catch (e) {
      failure(e + "继续努力！");
    }
  });
}
double(
  { name: "小卡车" },
  (res) => {
    console.log(`success: ${res}`);
  },
  (error) => {
    console.log(`error: ${error}`);
  }
);
// 输出 success: 小卡车加油！
double(
  {},
  (res) => {
    console.log(`success: ${res}`);
  },
  (error) => {
    console.log(`error: ${error}`);
  }
);
// 输出： error: 传入的数据有误！继续努力！