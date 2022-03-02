// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  status = PENDING;

  value = null;
  reason = null;

  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    const realOnFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    const realOnRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      if (this.status === FULFILLED) {
        fulfilledMicrotask();
      } else if (this.status === REJECTED) {
        rejectedMicrotask();
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });

    return promise2;
  }

  catch(onRejected) {
    this.then(undefined, onRejected);
  }

  finally(fn) {
    return this.then(
      (value) => {
        return MyPromise.resolve(fn()).then(() => {
          return value;
        });
      },
      (error) => {
        return MyPromise.resolve(fn()).then(() => {
          throw error;
        });
      }
    );
  }

  static resolve(parameter) {
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    return new MyPromise((resolve) => {
      resolve(parameter);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promiseList) {
    return new MyPromise((resolve, reject) => {
      const result = [];
      const length = promiseList.length;
      let count = 0;

      if (length === 0) {
        return resolve(result);
      }

      promiseList.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            count++;
            result[index] = value;
            if (count === length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static allSettled = (promiseList) => {
    return new MyPromise((resolve) => {
      const length = promiseList.length;
      const result = [];
      let count = 0;

      if (length === 0) {
        return resolve(result);
      } else {
        for (let i = 0; i < length; i++) {
          const currentPromise = MyPromise.resolve(promiseList[i]);
          currentPromise.then(
            (value) => {
              count++;
              result[i] = {
                status: "fulfilled",
                value: value,
              };
              if (count === length) {
                return resolve(result);
              }
            },
            (reason) => {
              count++;
              result[i] = {
                status: "rejected",
                reason: reason,
              };
              if (count === length) {
                return resolve(result);
              }
            }
          );
        }
      }
    });
  };

  static race(promiseList) {
    return new MyPromise((resolve, reject) => {
      const length = promiseList.length;

      if (length === 0) {
        return resolve();
      } else {
        for (let i = 0; i < length; i++) {
          MyPromise.resolve(promiseList[i]).then(
            (value) => {
              return resolve(value);
            },
            (reason) => {
              return reject(reason);
            }
          );
        }
      }
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError("The promise and the return value are the same")
    );
  }

  if (typeof x === "object" || typeof x === "function") {
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      then = x.then;
    } catch (error) {
      return reject(error);
    }

    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (error) {
        if (called) return;

        reject(error);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
};

MyPromise.resolve()
  .then(() => {
    console.log(0);
    return MyPromise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

MyPromise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
