"use strict";
var val1;
val1 = 21;
val1 = "小卡车";
function disp1(name) {
    if (typeof name === "string") {
        console.log(name);
    }
    else {
        for (var i = 0, l = name.length; i < l; i++) {
            console.log(name[i]);
        }
    }
}
var dispStr = "小卡车";
var disStrArr1 = ["1", "2", "3", "4", "5", "6"];
disp1(dispStr); // 小卡车
disp1(disStrArr1);
/*
1
2
3
4
5
6
*/ 
