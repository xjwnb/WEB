/*
 * @Author: your name
 * @Date: 2020-10-23 10:15:46
 * @LastEditTime: 2020-10-23 11:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\03.代理模式\01.代理模式.js
 */
// 代理实现图片预加载
let img = (function () {
  let imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();
let proxyImg = (function () {
  let image = new Image();
  image.onload = function () {
    console.log(this);
    console.log(this.src);
    img.setSrc(this.src);
  };
  return function (src) {
    img.setSrc("./img/loading.gif");
    setTimeout(function () {
      image.src = src;
    }, 2000);
  };
})();
proxyImg("https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png");

// 缓存代理
// 乘积代理
let mult = function () {
  let result = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    result *= arguments[i];
  }
  return result;
};
// 缓存函数
let proxyMult = (function () {
  let cache = {};
  return function () {
    let args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
})();
console.log(proxyMult(1, 2, 3, 4, 5, 6)); // 720
console.log(proxyMult(1, 2, 3, 4, 5, 6)); // 720
