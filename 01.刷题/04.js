/*
 * @Author: your name
 * @Date: 2020-09-27 20:21:54
 * @LastEditTime: 2020-09-27 21:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\04.js
 */
// 题目 1：
const num = parseInt("7 * 8", 10);
console.log(num); // 7
/*
原因：
    parseInt 会检查字符串中是否合法，一旦遇到不合法的字符后，会停止解析并且忽略后面所有字符。
    所以返回字符 "7", 而第二个参数基数指定为 10 （十进制），因此将字符 "7" 解析为十进制，并返回。
    所以输出为 7
*/

// 题目 2：
console.log("I am a chinese"[0]); // I
/*
原因：
    取得字符串中的第0个元素，便是字符 "I"。
*/

// 题目 3：
const box = { x: 1, y: 20 };
Object.freeze(box);
const shape = box;
shape.x = 100;
console.log(shape); // { x: 10, y: 20 }
/*
原因：
    Object.freeze 方法使得无法添加，删除或者修改对象的属性。
    例子中已经将对象 box 冻结了，而创建的变量 shape 也设置为冻结对象 box。因此 shape 也是冻结。
    所以不能被修改，所以返回原值。
*/

// 题目 4:
function getAge(...args) {
  console.log(typeof args);
}
getAge(1); // object
/*
原因：
    由于是用扩展运算符作为形参，所以 ...args 中的 args 是一个数组，而 typeof 检测数组返回的是 "object"。
*/

// 题目 5:
const str = "小卡车努力加油啊";
console.log(str.padStart(9)); // " 小卡车努力加油啊"
console.log(str.padStart(7)); // "小卡车努力加油啊"
console.log(str.padStart(11, "变秃吧")); // 变秃吧小卡车努力加油啊
/*
原因：
    padStart 方法有两个参数，第一个参数是一个数字，规定字符串的长度，如果小于字符串原来的长度的话，则返回原字符串。
    而第二个参数（可选）是将第一个参数的数字大于字符串长度的部分，用第二个参数填补，如果没有传入第二参数则使用空格填补。
*/

// 题目 6:
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}
const person = { name: "小卡车" };
compareMembers(person); // They are the same!
/*
原因：
    campareMembers 函数中有两个形参，而第二个参数有一个 person 的默认值。
    在调用的时候只传入一个叫做 person 变量，因此，第二个参数也会默认使用 person 变量，因此参数相等。
*/

// 题目 7：
const handler = {
  set: () => {
    console.log("set");
  },
  get: () => {
    console.log("get");
  },
};
const msg = new Proxy({}, handler);
msg.name = "小卡车"; // set
msg.name; // get
/*
原因：
    使用 Proxy 会给一个对象添加自定义行为。传入的第一个参数是作为新创建变量（msg）的值，第二个参数，是添加的新
    自定义行为，set 函数会在对象被赋值的时候调用，而 get 函数会在对象被获取的时候调用。
*/

// 题目 8：
var arr1 = [1, 2, 3].map((item) => {
  if (typeof item === "number") {
    return;
  }
  return num * 2;
});
console.log(arr1); // [ undefined, undefined, undefined ]
/*
原因：
    调用 map 的数组元素类型都是 number 。所以返回空。而默认映射的值是 undefined， 所以返回的新数组为
    [ undefined, undefined, undefined ]
*/

// 题目 9：
const set = new Set();
set.add(1);
set.add("小卡车");
set.add({ name: "小卡车" });
console.log(set);
for (let item of set) {
  console.log(item + 6); // 7 小卡车6 [object Object]6
}
/*
原因：
    for of 遍历出的值为对象的值。用 + 运算符 + 6。遍历出来的第一个值是 number ，所以输出 7，
    第二个是字符串，便输出 "小卡车6", 第三个是一个对象，所以字符串化后变成 [object Object]6;
*/

// 题目 10：
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}
(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item); // 1 2 3
  }
})();
/*
原因:
    我们给函数 range 传递：Promise{1},Promise{2}, Promise{3}, Generator 函数 range 返回一个全是 asyncObject promise数组。
    赋值给变量 gen, 之后使用 for await of 进行遍历。而使用的是 await ，resolve 状态，所以输出 1 2 3
*/
