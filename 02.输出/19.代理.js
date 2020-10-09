/*
 * @Author: your name
 * @Date: 2020-10-09 11:49:57
 * @LastEditTime: 2020-10-09 20:07:49
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

// get()
const person1 = {
  name: "小卡车",
};
const proxy8 = new Proxy(person1, {
  get(target, property, receiver) {
    console.log("get()...");
    return Reflect.get(...arguments);
  },
});
proxy8.name; // get()...

// set()
const person2 = {
  name: "xkc",
};
const proxy9 = new Proxy(person2, {
  set(target, property, value, receiver) {
    console.log("set()...");
    return Reflect.set(...arguments);
  },
});
proxy9.name = "小卡车"; // set()...

// has()
const person3 = {};
const proxy10 = new Proxy(person3, {
  has(target, property) {
    console.log("has()...");
    return Reflect.has(...arguments);
  },
});
"name" in proxy10; // has()...

// defineProperty()
const person4 = {};
const proxy11 = new Proxy(person4, {
  defineProperty(target, property, descriptor) {
    console.log("defineProperty()...");
    return Reflect.defineProperty(...arguments);
  },
});
Object.defineProperty(proxy11, "name", { value: "小卡车" }); // defineProperty()...

// 简易验证密码DEMO
const msgTarget = {};
const msgProxy = new Proxy(msgTarget, {
  set(target, property, value, proxy) {
    if (property === "password" && value.trim()) {
      if (Array.from(value).map(item => Number(item)).every(i => String(i) !== "NaN" && Object.prototype.toString.call(i) === "[object Number]")) {
        console.log("密码验证通过");
      } else {
        console.log("请重新输入密码!");
      }
    }
  }
});
msgProxy.password = "abcd"; // 请重新输入密码!
msgProxy.password = "123456"; // 密码验证通过


const UserList = [];
class User {
  constructor(name) {
    this.setName(name);
  }
  setName(newName) {
    this.name = newName;
  }
  getName() {
    return this.name;
  }
}
const userProxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    console.log(newUser);
    UserList.push(newUser);
    return newUser;
  }
});
new userProxy("小卡车"); // User { name: '小卡车' }
console.log(UserList); // [ User { name: '小卡车' } ]
