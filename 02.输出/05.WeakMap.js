/*
 * @Author: your name
 * @Date: 2020-10-06 00:08:49
 * @LastEditTime: 2020-10-06 09:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\05.WeakMap.js
 */

/**
 * 没有 keys(), values(), entries() 方法，也没有 size 属性。
 * 键必须是对象。
 * 键为空时，自动被垃圾回收器销毁。 
 * 一般用于 DOM
 */

const User = (function () {
  const wm1 = new WeakMap();
  class User {
    constructor(id) {
      this.idProperty = Symbol("id");
      this.setId(id);
    }
    setPrivate(property, value) {
      const privateMembers = wm1.get(this) || {};
      privateMembers[property] = value;
      wm1.set(this, privateMembers);
    }
    getPrivate(property) {
      return wm1.get(this)[property];
    }
    setId(id) {
      this.setPrivate(this.idProperty, id);
    }
    getId() {
      return this.getPrivate(this.idProperty);
    }
  }
  return User;
})();
const user = new User(1);
user.setPrivate();
const id = user.getId();
console.log(id); // 1


const wm2 = new WeakMap();
const key1 = {
  id: 1,
};
const key2 = {
  id: 2,
};
wm2.set(key1, "value1");
wm2.set(key2, "value2");
console.log(wm2.get(key1));
