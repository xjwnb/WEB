
// object
let obj1: object = { name: "小卡车", age: 21 };

function fn2(): object {
  return {
    ...obj1
  }
}

console.log(fn2()); // { name: '小卡车', age: 21 }