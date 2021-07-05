/*
 * @Author: your name
 * @Date: 2021-02-25 20:27:30
 * @LastEditTime: 2021-07-04 22:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\100.面试\06.拷贝\01.递归深拷贝.js
 */

function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let res;
  if (obj instanceof Array) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = arguments.callee(obj[key]);
    }
  }
  return res;
}

/**
 * 高级拷贝
 */
class DeepClone {
  constructor () {
    this.cacheList = [];
  }

  clone (source) {
    if (source instanceof Object) {
      const cache = this.findCache(source);
      if (cache) {
        return cache;
      } else {
        let target = {};
        if (source instanceof Array) {
          target = new Array();
        } else if (source instanceof Function) {
          target = function () {
            return source.apply(this, arguments);
          }
        } else if (source instanceof Date) {
          target = new Date(source);
        } else if (source instanceof RegExp) {
          target = new RegExp(source.source, source.flags);
        }
        this.cacheList.push([source, target]);
        for (let key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = this.clone(source[key]);
          }
        }
        return target;
      }
    }
    return source; 
  }

  findCache (source) {
    for (let i = 0; i < this.cacheList.length; i++) {
      if (this.cacheList[i][0] == source) {
        return this.cacheList[i][1];
      }
    }
    return undefined;
  }
}

const obj = {
  date: new Date(),
  name: "小卡车",
  reg: /^[0-9]$/g,
  info: {
    habby: ["打游戏", "发呆"],
    age: 21,
  },
  getName: function () {
    return this.name;
  },
};

const deepClone = new DeepClone();
const objCopy = deepClone.clone(obj);
console.log(objCopy);
