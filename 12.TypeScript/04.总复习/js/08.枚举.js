"use strict";
// 枚举
var Msg;
(function (Msg) {
    Msg[Msg["name"] = 0] = "name";
    Msg[Msg["age"] = 1] = "age";
})(Msg || (Msg = {}));
var msg1 = Msg.name;
console.log(msg1, Msg.name, Msg.age); // 0 0 1
/*
默认情况下：从 0 开始为元素编号，同样也可以改变
*/
var Msg1;
(function (Msg1) {
    Msg1[Msg1["name"] = 1] = "name";
    Msg1[Msg1["age"] = 2] = "age";
})(Msg1 || (Msg1 = {}));
console.log(Msg1.name, Msg1.age); // 1 2
var Msg2;
(function (Msg2) {
    Msg2[Msg2["name"] = 6] = "name";
    Msg2[Msg2["age"] = 100] = "age";
})(Msg2 || (Msg2 = {}));
console.log(Msg2.name, Msg2.age); // 6 100
var Msg3;
(function (Msg3) {
    Msg3[Msg3["name"] = 7] = "name";
    Msg3[Msg3["age"] = 8] = "age";
})(Msg3 || (Msg3 = {}));
var msg3Name = Msg3[7];
console.log(msg3Name); // "name"
