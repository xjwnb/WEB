
// 数字
let num: number = 20;

// 布尔值
let isBool: boolean = true;

// 字符串
let myName: string = "小卡车";

// 数组
// 1)
let arr1: number[] = [1, 2, 3, 4, 5, 6];
// 2)
let arr2: Array<number> = [1, 2, 3, 4, 5, 6];

// 元组 Tuple
let tuple: [string, number, boolean] = ["小卡车", 20, true];

// 枚举
enum Color {
  Red = 1,
  Green,
  Blue
}
let color: Color = Color.Green;

// Any
let anyThing: any = 200;
anyThing = "200";
anyThing = true;
let list: any[] = [1, "2", true]; 

// Void
function clgInfo(): void {
  console.log("info...");
}
clgInfo();
// 说明 void 类型变量只能赋予 undefined 和 null
let unusable: void = undefined;

// Null 和 Undefined
let n: null = null;
let u: undefined = undefined;

// Never
// never 类型表示的是那些永远不存在的值的类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

// Object
function getName(obj: {name: string}): string {
  console.log(obj);
  return obj.name;
}
let obj: object = { name: "小卡车" };

// 类型断言
// 1)
let someValue: any = "string";
let strLength: number = (<string>someValue).length;
// 2)
let someValue1: any = "string";
let strLength1: number = (someValue1 as string).length;
