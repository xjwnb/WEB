// 创建空集合
const set1 = new Set();
// add 添加
set1.add("小卡车");
set1.add(20);
console.log(set1); // Set { '小卡车', 20 }
// 判断是否有对应元素
let hasEle = set1.has("小卡车");
console.log(hasEle); // true
// size 大小
const size = set1.size;
console.log(size); // 2
// clear 删除所有值
set1.clear();
console.log(set1); // Set {}
