"use strict";
// 类型注解：是一种轻量型的为函数或者变量添加的约束
(function () {
    function msg(name) {
        return name + "加油！！！";
    }
    var myName = "小卡车";
    var showMsg = msg(myName);
    console.log(showMsg);
})();
