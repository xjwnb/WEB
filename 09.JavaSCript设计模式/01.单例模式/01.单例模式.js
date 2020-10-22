// 实现单例模式 1：
let Singleton = function (name) {
  this.name = name;
};
Singleton.instance = null;
Singleton.prototype.getName = function () {
  console.log(this.name);
};
Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};
let sing1 = Singleton.getInstance("小卡车");
let sing2 = Singleton.getInstance("蜘蛛侠");
console.log(sing1 === sing2); // true
console.log(sing2); // Singleton { name: '小卡车' }

// 实现单例模式 2：
let Singleton1 = function (name) {
  this.name = name;
};
Singleton1.prototype.getName = function () {
  console.log(this.name);
};
Singleton1.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton1(name);
    }
    return instance;
  };
})();
let s1 = Singleton1.getInstance("xkc");
let s2 = Singleton1.getInstance("zzx");
console.log(s1 === s2); // true
console.log(s2); // Singleton1 { name: 'xkc' }

// 透明的单例模式
let CreateDiv = (function () {
  let instance;
  let CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return this;
  };
  CreateDiv.prototype.init = function () {
    let div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };
  return CreateDiv;
})();
let createDiv1 = new CreateDiv("小卡车");
let createDiv2 = new CreateDiv("蜘蛛侠");
console.log(createDiv1 === createDiv2); // true

// 用代理实现单例模式
let CreateDiv1 = function (html) {
  this.html = html;
  this.init();
};
CreateDiv1.prototype.init = function () {
  let div = document.createElement("div");
  div.innerHTML = this.html;
  document.body.appendChild(div);
};
// 代理类
let ProxySingletonCreateDiv = (function () {
  let instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv1(html);
    }
    return instance;
  };
})();
let proxyCreateDiv1 = new ProxySingletonCreateDiv("小卡车");
let proxyCreateDiv2 = new ProxySingletonCreateDiv("蜘蛛侠");
console.log(proxyCreateDiv1 === proxyCreateDiv2);

// 惰性单例
let createLoginLayer = (function () {
  let div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "我是登录浮窗";
      div.style.display = "none";
      document.body.appendChild(div);
    }
    return div;
  };
})();
document.getElementById("xkcLoginBtn").onclick = function () {
  let loginlayer = createLoginLayer();
  loginlayer.style.display = "block";
};
