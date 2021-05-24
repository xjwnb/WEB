/*
 * @Author: your name
 * @Date: 2021-05-24 13:47:22
 * @LastEditTime: 2021-05-24 14:17:51
 * @LastEditors: Please set LastEditors
 * @Description: 手写 async await
 * @FilePath: \WEB\100.面试\A.JavaScript\08.手写async await\index.js
 */

function asyncFunc(generatorFunc) {
  return function () {
    const gen = generatorFunc.apply(this, arguments);
    return new Promise((resolve, reject) => {
      let generatorResult;
      function step(name, arg) {
        try {
          generatorResult = gen[name](arg);
        } catch (err) {
          reject(err);
        }
        let { value, done } = generatorResult;
        if (done) return resolve(value);
        return Promise.resolve(value)
          .then((val) => arguments.callee("next", val))
          .catch((err) => arguments.callee("throw", err));
      }
      step("next");
    });
  };
}

// 测试代码
function delay(time, a) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(a + 1);
    }, time)
  );
}

function* generatorFunc(msg) {
  console.log("1");
  let first = yield delay(1000, 1);
  console.log("2");
  console.log(msg);
  return yield delay(1000, first);
}

let gen = asyncFunc(generatorFunc);
gen('提示要出结果了').then((res) => {
  console.log("generatorFunc", res);
});
