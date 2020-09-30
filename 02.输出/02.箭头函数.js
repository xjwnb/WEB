/*
 * @Author: your name
 * @Date: 2020-09-30 15:01:20
 * @LastEditTime: 2020-09-30 15:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\02.箭头函数.js
 */
const func1 = () => {
  console.log("箭头函数");
};
func1(); // 箭头函数

var name = "xkc";
const person = {
  name: "小卡车",
  age: 20,
  info: () => {
    console.log(this);
  },
  info1: function () {
    console.log(this);
  },
};
person.info(); // window
person.info1(); // {name: "小卡车", age: 20, info: ƒ, info1: ƒ}

const xkcMsg = {
  age: 20,
  info: function () {
    console.log(this);
    return () => {
      console.log(this);
    };
  },
};
xkcMsg.info()(); // {age: 20, info: ƒ}  {age: 20, info: ƒ}
/**
 *
 * 我的理解是箭头函数中的 this 不是指向调用函数的对象，而已箭头函数本身所处的作用域中，在创建的时候已经决定了。
 * 以 xkcMsg 这个对象为例：其中一个 info 传统的函数，中的 this ，打印出来是 xkcMsg 是因为，该函数是用 xkcMsg 这个对象调用的。
 * 而 info 函数中返回了一个箭头函数，箭头函数本身没有 this，而所处作用域的 this，javascript 只有函数作用域，所以向上指向到函数 info，
 * 因此该箭头函数的 this 指向指向的是 info 函数的 this 指向，因此打印出来是 xkcMsg.
 */

function fn2() {
  console.log(this);
  console.log(this.name);
  return () => {
    console.log(this);
    console.log(this.name);
  };
}
fn2()(); // window xkc  window xkc
const msg = {
  name: "小卡车",
  info: fn2,
};
msg.info()(); // {name: "小卡车", info: ƒ} 小卡车  {name: "小卡车", info: ƒ} 小卡车
/**
 * 本例中，再次验证。fn2 函数是定义在全局中的，第一次调用是在全局中，因此调用该函数是的 window ，而 fn2 函数中返回的箭头函数中的 this，就是 fn2 函数的 this。
 * 而在定义一个 msg 的对象，并将函数 fn2 赋予 msg 的属性 info，此刻通过 msg.info()() 调用，真实调用 info 的是 msg 对象，因此 this 指向也指向调用的 msg 对象,
 * 而所返回的箭头函数指向 fn2 函数 this。
 */
