/*
 * @Author: your name
 * @Date: 2020-10-24 20:55:30
 * @LastEditTime: 2020-10-24 21:21:53
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


let MoveCommand = {
  run: function () {
    console.log("奔跑");
  },
  stop: function () {
    console.log("停止");
  },
  squatDown: function () {
    console.log("蹲下");
  },
  walk: function () {
    console.log("行走");
  },
};
let triggerMove = function (dom, receiver, state) {
  return dom.onclick = receiver[state];
};
let move = (function () {
  let run = document.getElementById("run");
  let stop = document.getElementById("stop");
  let squatDown = document.getElementById("squatDown");
  let walk = document.getElementById("walk");
  triggerMove(run, MoveCommand, "run");
  triggerMove(stop, MoveCommand, "stop");
  triggerMove(squatDown, MoveCommand, "squatDown");
  triggerMove(walk, MoveCommand, "walk");
})();
