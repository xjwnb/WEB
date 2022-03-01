const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  state = PENDING;

  value = null;
  reason = null;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  constructor(exe) {
    exe(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.state !== PENDING) return;

    this.state = FULFILLED;
    this.value = value;

    this.onFulfilledCallback.forEach((fn) => fn());
  }

  reject(reason) {
    if (this.state !== PENDING) return;

    this.state = REJECTED;
    this.reason = reason;

    this.onRejectedCallback.forEach((fn) => fn());
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (data) => data;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    } else if (this.state === REJECTED) {
      onRejected(this.reason);
    } else if (this.state === PENDING) {
      this.onFulfilledCallback.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallback.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

function resolvePromise (promise, x , resolve, reject) {
  if (promise === x) {
    throw reject(new TypeError("Error"));
  }

  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
} 

/* const promise = new MyPromise((resolve, reject) => {
  resolve("小卡车");
}).then((value) => {
  console.log(value);
}); */

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("小卡车");
  }, 100);
}).then((value) => {
  console.log(value);
});
