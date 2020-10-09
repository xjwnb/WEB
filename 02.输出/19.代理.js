/*
 * @Author: your name
 * @Date: 2020-10-09 11:49:57
 * @LastEditTime: 2020-10-09 14:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\19.代理.js
 */

// 定义捕获器
const target1 = {
  foo: "bar",
};
const handler1 = {
  get() {
    return "handler override";
  },
};
const proxy1 = new Proxy(target1, handler1);
console.log(target1.foo); // bar
console.log(proxy1.foo); // handler override
console.log(target1["foo"]); // bar
console.log(proxy1["foo"]); // handler override

// 捕获器参数和反射API
const target2 = {
  foo: "bar",
  name: "小卡车",
};
const handler2 = {
  get(trapTarget, property, receiver) {
    console.log(trapTarget, trapTarget === target2); // { foo: 'bar', name: '小卡车' } true
    console.log(property); // foo
    console.log(receiver, receiver === proxy2); // { foo: 'bar', name: '小卡车' } true
  },
};
const proxy2 = new Proxy(target2, handler2);
proxy2.foo;

//
const target3 = {
  foo: "bar",
};
const handler3 = {
  get(trapTarget, property, receiver) {
    return trapTarget[property];
  },
};
const proxy3 = new Proxy(target3, handler3);
console.log(target3.foo); // bar
console.log(proxy3.foo); // bar

//
const target4 = {
  foo: "bar",
};
const handler4 = {
  get() {
    return Reflect.get(...arguments);
  },
};
const proxy4 = new Proxy(target4, handler4);
console.log(target4.foo); // bar
console.log(proxy4.foo); // bar

//
const target5 = {
  foo: "bar",
};
const handler5 = {
  get: Reflect.get,
};
const proxy5 = new Proxy(target5, handler5);
console.log(target5.foo); // bar
console.log(proxy5.foo); // bar

//
const target6 = {
  foo: "bar",
};
const proxy6 = new Proxy(target6, Reflect);
console.log(target6.foo); // bar
console.log(proxy6.foo); // bar

// 可测销代理
const target7 = {
  foo: "bar",
};
const handler7 = {
  get: Reflect.get,
};
const { proxy, revoke } = Proxy.revocable(target7, handler7);
console.log(target7.foo); // bar
console.log(proxy.foo); // bar
revoke(); // 测销
// console.log(proxy.foo); // TypeError
