/*
 * @Author: your name
 * @Date: 2020-10-29 17:42:48
 * @LastEditTime: 2020-10-29 18:25:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\09.JavaSCript设计模式\07.组合模式\01.组合模式.js
 */

// 命令
let MainCommand = function () {
  return {
    commandsList: [],
    add: function (command) {
      this.commandsList.push(command);
    },
    execute: function () {
      for (let i = 0, command; (command = this.commandsList[i++]); ) {
        command.execute();
      }
    },
  };
};
// 打开电视和音响命令
let openTvCommand = {
  execute: function () {
    console.log("打开电视");
  },
};
let openSoundCommand = {
  execute: function () {
    console.log("打开音响");
  },
};
let mycommand1 = MainCommand();
mycommand1.add(openTvCommand);
mycommand1.add(openSoundCommand);

// 关门和打开电脑命令
let closeDoorCommand = {
  execute: function () {
    console.log("关门");
  },
};
let openPcCommand = {
  execute: function () {
    console.log("打开电脑");
  },
};
let mycommand2 = MainCommand();
mycommand2.add(closeDoorCommand);
mycommand2.add(openPcCommand);

// 总命令
let mycommand = MainCommand();
mycommand.add(mycommand1);
mycommand.add(mycommand2);

// 执行按钮点击事件
let time1;
let setCommand = (function (command) {
  document.getElementById("mainCommand").addEventListener("click", function () {
    command.execute();
    console.log(command);
    this.disabled = true;
    let that = this;
    time1 = window.setTimeout(function () {
      that.disabled = false;
    }, 3000);
  });
})(mycommand);

window.onunload = function () {
  console.log(time1, a, 111);
  clearTimeout(time1);
};
