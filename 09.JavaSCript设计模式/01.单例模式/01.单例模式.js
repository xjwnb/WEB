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
