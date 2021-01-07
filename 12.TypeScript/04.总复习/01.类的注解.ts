
// 类型注解：是一种轻量型的为函数或者变量添加的约束

(() => {
  function msg(name: string) {
    return name + "加油！！！";
  }
  let myName: string = "小卡车";
  let showMsg = msg(myName);
  console.log(showMsg);
})();