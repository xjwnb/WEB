/*
 * @Author: your name
 * @Date: 2020-10-02 20:10:17
 * @LastEditTime: 2020-10-02 20:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\09.js
 */
// 题目 1：
var status = 1;
setTimeout(() => {
  const status = 2;
  const data = {
    status: 3,
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); // 3
  console.log(data.getStatus.call(this)); // 1
}, 0);
/*
原因：
    第一个直接使用 data.getStatus 方法调用，调用函数的对象是 data, 因此这时的方法中的 this.status 是 data 中的属性 status。
    而第二个打印是修改了方法 getStatus 的 this 指向，指向 setTimeout 的 this。而 setTimeout 其实是 window 的一个方法，因此指向
    了全局中的 status，且必须是用 var 声明的 status，所以第二个打印出的是 1。
*/

// 题目 2：
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456
/*
原因：
    给对象 a 附加一个 b 对象的属性，会自动转换成字符串，因此 a[b] = 123 实际上是 a["object Object"] = 123,
    再给附加一个 c 对象的属性，也就是 a["object Object"] = 456，最后覆盖了之前的 123，因此现在的值是 456。
*/
