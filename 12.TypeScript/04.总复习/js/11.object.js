"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// object
var obj1 = { name: "小卡车", age: 21 };
function fn2() {
    return __assign({}, obj1);
}
console.log(fn2()); // { name: '小卡车', age: 21 }
