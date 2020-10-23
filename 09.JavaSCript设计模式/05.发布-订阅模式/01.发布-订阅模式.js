/*
 * @Author: your name
 * @Date: 2020-10-23 15:44:30
 * @LastEditTime: 2020-10-23 18:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\05.发布-订阅模式\01.发布-订阅模式.js
 */

let Event = (function () {
  let clientList = {},
    listen,
    trigger,
    remove;
  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };
  trigger = function () {
    let key = Array.prototype.shift.call(arguments);
    let fns = clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0, l = fns.length; i < l; i++) {
      fns[i].apply(this, arguments);
    }
  };
  remove = function (key, fn) {
    let fns = clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        let _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };
  return {
    listen,
    trigger,
    remove,
  };
})();
Event.listen("msg", function (data) {
  let p = document.createElement("p");
  p.innerHTML = `name: ${data.name}, age：${data.age}`;
  document.body.appendChild(p);
});
Event.trigger("msg", { name: "小卡车", age: 20 });
