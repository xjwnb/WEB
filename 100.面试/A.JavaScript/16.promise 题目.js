/*
 * @Author: your name
 * @Date: 2022-03-07 19:28:23
 * @LastEditTime: 2022-03-07 19:30:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WEB\100.面试\A.JavaScript\16.promise 题目.js
 */

const timer = setTimeout(() => {
  console.log("timer");
}, 0);

for (var i = 0; i < 1; i++) {
  console.log(i);
}

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  console.log("then");
});
for (var j = 3; j < 4; j++) {
  console.log(j);
}
clearTimeout(timer);
