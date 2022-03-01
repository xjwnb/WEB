const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  state = PENDING;

  value = undefined;
  reason = undefined;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  constructor(exe) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];
    exe(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallback.forEach((fn) => fn());
    }
  }

  reject(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallback.forEach((fn) => fn());
    }
  }

  // then
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (data) => data;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    let promise1 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.state === PENDING) {
        this.onFulfilledCallback.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallback.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise1;
  }

  // 静态方法 resolve
  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }

  // 静态方法 reject
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  // catch
  catch(errCallback) {
    return this.then(null, errCallback);
  }

  // finally
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }

  // all
  static all(promises) {
    if (!Array.isArray(promises)) {
      const type = typeof promises;
      return new TypeError(`TypeError: ${type} ${values} is not iterable`);
    }

    return new MyPromise((resolve, reject) => {
      let resultArr = [];
      let orderIndex = 0;
      const processResultByKey = (value, index) => {
        resultArr[index] = value;
        if (++orderIndex === promises.length) {
          resolve(resultArr);
        }
      };
      for (let i = 0; i < promises.length; i++) {
        let value = promises[i];
        if (value && typeof value.then === "function") {
          value.then((value) => {
            processResultByKey(value, i);
          }, reject);
        } else {
          processResultByKey(value, i);
        }
      }
    });
  }

  // race
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        let val = promises[i];
        if (val && typeof val.then === "function") {
          val.then(resolve, reject);
        } else {
          resolve(val);
        }
      }
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError("Error"));
  }

  let called;

  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (res) => {
            if (called) return;
            called = true;
            resolvePromise(promise, res, resolve, reject);
          },
          (e) => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}

// const promise = new MyPromise((resolve, reject) => {
//   resolve("小卡车");
// }).then((value) => {
//   console.log(value);
// });

// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("小卡车");
//   }, 100);
// })
//   .then((value) => {
//     console.log("...,", value);
//     return "xkc";
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const p1 = MyPromise.resolve("小卡车...").then((value) => {
//   console.log(value);
// });

// //
// MyPromise.reject("小卡车 Error").then(
//   (value) => {
//     console.log("oFulfilled", value);
//   },
//   (err) => {
//     console.log("onRejected", err);
//     return "......error";
//   }
// );

// MyPromise.resolve(456)
//   .finally(() => {
//     return new MyPromise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(123);
//       }, 3000);
//     });
//   })
//   .then((data) => {
//     console.log(data, "success");
//   })
//   .catch((err) => {
//     console.log(err, "error");
//   });

let p5 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok1");
  }, 1000);
});

let p6 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok2");
  }, 1000);
});

MyPromise.all([1, 2, 3, p5, p6]).then(
  (data) => {
    console.log("resolve", data);
  },
  (err) => {
    console.log("reject", err);
  }
);
