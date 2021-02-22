/*
 * @Author: your name
 * @Date: 2021-02-03 13:14:35
 * @LastEditTime: 2021-02-03 13:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\01.实现 add(1)(2)(3)\add(1)(2)(3)-柯里化.js
 */
function add() {
  let _args = [...arguments];

  const _add = function () {
    _args.push(...arguments);
    return _add;
  };
  _add.toString = function () {
    return _args.reduce((a, b) => {
      return a + b;
    });
  };

  return _add;
}

console.log(add(1)(2)(3));
