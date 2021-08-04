function machine(name) {
  this.name = name;
  this.myPromise = Promise.resolve(this.name);

  this.consoleName = () => {
    this.myPromise = this.myPromise.then((res) => {
      return `start ${res}`;
    });
  };
  this.consoleName();
  return arguments.callee.prototype;
}

// 动作
machine.prototype.do = function (action) {
  myPromise = myPromise.then((res) => {
    res && console.log(res);
    return `${name} ${action}`;
  });
  return machine.prototype;
};

// 延迟
machine.prototype.wait = function (num) {
  myPromise = myPromise.then(async (res) => {
    console.log(res);
    console.log(`wait ${num}s`);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, num * 1000);
    });
  });
  return machine.prototype;
};

// 提前延迟
machine.prototype.waitFirst = function (num) {
  myPromise = myPromise.then(async (res) => {
    console.log(`waitFirst ${num}s`);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, num * 1000);
    });
    return res;
  });
  return machine.prototype;
};

// 执行
machine.prototype.execute = async function () {
  myPromise.then((res) => {
    console.log(res);
  });
};

// machine("小卡车").execute();
// machine("小卡车").do("吃东西").execute();
// machine("小卡车").wait(3).do("吃东西").execute();
machine("小卡车").waitFirst(3).do("吃东西").execute();
