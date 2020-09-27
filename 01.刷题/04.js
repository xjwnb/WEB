/*
 * @Author: your name
 * @Date: 2020-09-27 20:21:54
 * @LastEditTime: 2020-09-27 21:01:08
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


