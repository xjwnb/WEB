// 接口
interface Inter1 {
  name: string;
};

function printInter1(inter: Inter1) {
  console.log(inter);
}
let inter1: Inter1 = {
  name: "小卡车"
};
printInter1(inter1); // { name: '小卡车' }



// 可选接口
interface Inter2 {
  name?: string;
  age?: number;
};
function printInter2(inter: Inter2): { name: string; color: string } {
  console.log(inter);
  return {
    name: inter.name,
    color: "blue"
  };
}
let inter2: Inter2 = {
  name: "小卡车",
  age: 20
};
let inter2Info = printInter2(inter2);
console.log(inter2Info);
/*
{ name: '小卡车', age: 20 }
{ name: '小卡车', color: 'blue' }
*/



// 只读属性
interface Inter3 {
  readonly name: string;
  readonly age: number;
};
let inter3: Inter3 = {
  name: "小卡车",
  age: 20
};
console.log(inter3.name); // 小卡车
// inter3.name = "zzx";  // Cannot assign to 'name' because it is a read-only property.

let a: number[] = [1, 2, 3, 4, 5, 6];
let aa: ReadonlyArray<number> = a;
console.log(aa[5]); // 6
// aa[0] = 6;  // Index signature in type 'readonly number[]' only permits reading.



// 额外的属性检查
interface Inter4 {
  name?: string;
  age?: number;
  [propName: string]: any
};
function printInter4(inter: Inter4): { name: string; height: number } {
  console.log(inter);
  return {
    name: inter.name,
    height: 178
  };
}
let inter4: Inter4 = {
  name: "小卡车",
  color: "blue"
};
let getPrintInter4 = printInter4(inter4);
console.log(getPrintInter4);
/*
{ name: '小卡车', color: 'blue' }
{ name: '小卡车', height: 178 }
 */




// 函数类型
interface Inter5 {
  (obj: { name: string; age: number }): object;
};
let printInter5: Inter5;
printInter5 = function (obj: { name: string; age: number }): object {
  let resultObj = {
    name: obj.name,
    age: obj.age
  }
  return resultObj;
}
let inter5 = {
  name: "小卡车",
  age: 20
};
let getPrintInter5 = printInter5(inter5);
console.log(getPrintInter5); // { name: '小卡车', age: 20 }



// 可索引的类型
interface Inter6 {
  [index: number]: string;
};
let inter6Array: Inter6;
inter6Array = ["小卡车", "zzx"];
console.log(inter6Array[0]); // 小卡车



// 类类型
// 类实现一个接口时，只对其实例部分进行类型检查
interface Inter7 {
  name: string;
};
class Info1 implements Inter7 {
  name: string;
  constructor(age: number) { }
}

// 
interface Inter8 {
  new (name: string, age: number): Inter9;
};
interface Inter9 {
  print();
};
class Info2 implements Inter9 {
  constructor(name: string, age: number) {

  }
  print() {
    console.log("Info2");
  }
}
function getInfo2(Info: Inter8, name: string, age: number): Inter9 {
  return new Info(name, age);
}
let info2 = getInfo2(Info2, "小卡车", 20);
info2.print(); // Info2



// 继承接口
interface Inter10 {
  name: string;
};
interface Inter11 extends Inter10 {
  age: number;
};
let info3 = <Inter11>{};
info3.name = "小卡车";
info3.age = 20;
console.log(info3); // { name: '小卡车', age: 20 }



// 混合类型
interface Inter12 {
  (name: string): string;
  run(): void;
  age: number;
};
function printInter12(): Inter12 {
  let msg = <Inter12>function (name: string) {
    console.log(name);
  };
  msg.run = function () {
    console.log("running");
  }
  msg.age = 20;
  return msg;
}
let inter12 = printInter12();
inter12("小卡车");
inter12.run();
console.log(inter12.age);
/*
小卡车
running
20
*/


// 接口继承类
class Control {
  private state: any;
};
interface SelectableControl extends Control {
  select(): void;
};
class Button extends Control implements SelectableControl {
  select() { };
}
class TextBox extends Control {
  select() { };
}
