let val1: string | number;
val1 = 21;
val1 = "小卡车"


function disp1(name: string | string[]) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    for (let i = 0, l = name.length; i < l; i++) {
      console.log(name[i]);
    }
  }
}
let dispStr = "小卡车";
let disStrArr1 = ["1", "2", "3", "4", "5", "6"];
disp1(dispStr);    // 小卡车
disp1(disStrArr1);
/*
1
2
3
4
5
6
*/