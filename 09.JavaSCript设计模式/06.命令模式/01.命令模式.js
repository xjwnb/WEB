/*
 * @Author: your name
 * @Date: 2020-10-24 20:55:30
 * @LastEditTime: 2020-10-24 21:02:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\06.命令模式\01.命令模式.js
 */
let bindClick = function (button, func) {
  button.onclick = func;
};
let MenuBar = {
  refresh: function () {
    console.log("刷新");
  },
};
let button1 = document.createElement("button");
button1.innerText = "执行刷新命令";
document.body.appendChild(button1);
bindClick(button1, MenuBar.refresh);
