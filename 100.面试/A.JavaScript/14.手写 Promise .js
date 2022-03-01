const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// // 1、同步简易版本
// class MyPromise {
//   constructor(exe) {
//     exe(this.resolve, this.reject);
//   }

//   status = PENDING;

//   value = null;
//   reason = null;

//   resolve = (value) => {
//     if (this.status === PENDING) {
//       this.status = FULFILLED;
//       this.value = value;
//     }

//     // if ()
//   };

//   reject = (reason) => {
//     if (this.status === PENDING) {
//       this.status = REJECTED;
//       this.reason = reason;
//     }
//   };

//   then(onFulfilled, onRejected) {
//     if (this.status === FULFILLED) {
//       onFulfilled(this.value);
//     } else if (this.status === REJECTED) {
//       onRejected(this.reason);
//     }
//   }
// }

// const p1 = new MyPromise((resolve, reject) => {
//   resolve("resolve");
//   reject("reject");
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

// const p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 2000);
// });

// p2.then(
//   (value) => {
//     console.log("resolve", value);
//   },
//   (reason) => {
//     console.log("reject", reason);
//   }
// );

// // 2、加入异步
// class MyPromiseA {
//   constructor(exe) {
//     exe(this.resolve, this.reject);
//   }

//   status = PENDING;

//   value = null;
//   reason = null;

//   onFulfilledCallback = [];
//   onRejectedCallback = [];

//   resolve = (value) => {
//     if (this.status === PENDING) {
//       this.status = FULFILLED;
//       this.value = value;
//       this.onFulfilledCallback.forEach((callback) => callback(value));
//     }
//   };

//   reject = (reason) => {
//     if (this.status === REJECTED) {
//       this.status = REJECTED;
//       this.reason = reason;
//       this.onRejectedCallback.forEach((callback) => callback(reason));
//     }
//   };

//   then(onFulfilled, onRejected) {
//     if (this.status === FULFILLED) {
//       onFulfilled(this.value);
//     } else if (this.status === REJECTED) {
//       onRejected(this.reason);
//     } else if (this.status === PENDING) {
//       this.onFulfilledCallback.push(onFulfilled);
//       this.onRejectedCallback.push(onRejected);
//     }
//   }
// }

// const promise = new MyPromiseA((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 2000);
// });

// promise.then((value) => {
//   console.log(1);
//   console.log("resolve", value);
// });

// promise.then((value) => {
//   console.log(2);
//   console.log("resolve", value);
// });

// promise.then((value) => {
//   console.log(3);
//   console.log("resolve", value);
// });

// // 3、
// class MyPromiseB {
//   constructor(exe) {
//     exe(this.resolve, this.reject);
//   }

//   status = PENDING;

//   value = null;
//   reason = null;

//   onFulfilledCallback = [];
//   onRejectedCallback = [];

//   resolve = (value) => {
//     if (this.status === PENDING) {
//       this.status = FULFILLED;
//       this.value = value;
//       this.onFulfilledCallback.forEach((callback) => callback(value));
//     }
//   };

//   reject = (reason) => {
//     if (this.status === PENDING) {
//       this.status = REJECTED;
//       this.reason = reason;
//       this.onRejectedCallback.forEach((callback) => callback(reason));
//     }
//   };

//   then(onFulfilled, onRejected) {
//     const promise = new MyPromiseB((resolve, reject) => {
//       if (this.status === FULFILLED) {
//         queueMicrotask(() => {
//           const result = onFulfilled(this.value);
//           this.resolvePromise(promise, result, resolve, reject);
//         });
//       } else if (this.status === REJECTED) {
//         queueMicrotask(() => {
//           const result = onRejected(this.reason);
//           this.resolvePromise(promise, result, resolve, reject);
//         });
//       } else if (this.status === PENDING) {
//         this.onFulfilledCallback.push(onFulfilled);
//         this.onRejectedCallback.push(onRejected);
//       }
//     });

//     return promise;
//   }

//   resolvePromise(promise, result, resolve, reject) {
//     if (promise === result) {
//       return reject(new TypeError("error!!!"));
//     }

//     if (result instanceof MyPromiseB) {
//       result.then(resolve, reject);
//     } else {
//       resolve(result);
//     }
//   }
// }

// 4、最终版本
class MyPromiseC {
  constructor(exe) {
    try {
      exe(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  status = PENDING;

  value = null;
  reason = null;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledCallback.forEach((fn) => fn());
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectedCallback.forEach((fn) => fn());
    }
  };

  then(onFulfilled, onRejected) {
    const resultFullfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    const resultRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const promise = new MyPromiseC((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const result = resultFullfilled(this.value);
            resolvePromise(promise, result, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      };

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const result = resultFullfilled(this.reason);
            resolvePromise(promise, result, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      };

      if (this.status === FULFILLED) {
        fulfilledMicrotask();
      } else if (this.status === REJECTED) {
        rejectedMicrotask();
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(() => {
          resultFullfilled(this.value);
        });
        this.onRejectedCallback.push(() => {
          resultRejected(this.reason);
        });
      }
    });

    return promise;
  }

  // 静态方法 - resolve
  static resolve(parameter) {
    if (parameter instanceof MyPromiseC) {
      return parameter;
    }
    return new MyPromiseC((resolve) => {
      resolve(parameter);
    });
  }

  // 静态方法 - reject
  static reject(reason) {
    return new MyPromiseC((resolve, reject) => {
      reject(reason);
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 如果相等了，说明return的是自己，抛出类型错误并返回
  if (promise === x) {
    return reject(
      new TypeError("The promise and the return value are the same")
    );
  }

  if (typeof x === "object" || typeof x === "function") {
    // x 为 null 直接返回，走后面的逻辑会报错
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      // 把 x.then 赋值给 then
      then = x.then;
    } catch (error) {
      // 如果取 x.then 的值时抛出错误 error ，则以 error 为据因拒绝 promise
      return reject(error);
    }

    // 如果 then 是函数
    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x, // this 指向 x
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          (y) => {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量 called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (error) {
        // 如果调用 then 方法抛出了异常 error：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
        if (called) return;

        // 否则以 error 为据因拒绝 promise
        reject(error);
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

const promise = new MyPromiseC((resolve, reject) => {
  resolve(100);
});

promise
  .then()
  .then()
  .then()
  .then((value) => {
    console.log(value);
  });

// MyPromiseC.resolve()
//   .then(() => {
//     console.log(0);
//     return MyPromiseC.resolve(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// MyPromiseC.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });
