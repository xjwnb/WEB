/*
 * @Author: your name
 * @Date: 2021-05-24 14:40:07
 * @LastEditTime: 2021-05-24 14:40:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\A.JavaScript\09.async await 练习\index.js
 */

function testThrow(num) {
  return new Promise((resolve, reject) => {
    console.log(num);
    if (num > 5) {
      return resolve(123);
    } else {
      reject("ERROR:出错了，传入的值小于5！");
    }
  });
}
(async () => {
  try {
    let testResult = await testThrow(Math.random() * (10 - 1) + 1);
    console.log("testResult", testResult);
  } catch (err) {
    console.log("ERROR", err);
  }
})();
