
// 枚举
enum Msg {
  name,
  age
}

let msg1: Msg = Msg.name;
console.log(msg1, Msg.name, Msg.age); // 0 0 1
/*
默认情况下：从 0 开始为元素编号，同样也可以改变
*/

enum Msg1 {
  name = 1,
  age
}
console.log(Msg1.name, Msg1.age); // 1 2


enum Msg2 {
  name = 6, 
  age = 100
}
console.log(Msg2.name, Msg2.age);  // 6 100


enum Msg3 {
  name = 7,
  age
}
let msg3Name: String = Msg3[7];
console.log(msg3Name); // "name"