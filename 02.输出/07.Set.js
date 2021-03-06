// 创建空集合
const set1 = new Set();
// add 添加
set1.add("小卡车");
set1.add(20);
console.log(set1); // Set { '小卡车', 20 }
// has 判断是否有对应元素
let hasEle = set1.has("小卡车");
console.log(hasEle); // true
// size 大小
const size = set1.size;
console.log(size); // 2
// values 获得值
const values = set1.values();
console.log(values); // [Set Iterator] { '小卡车', 20 }
for (let value of set1.values()) {
  console.log(value); // 小卡车 20
}
// keys 获得键
const keys = set1.keys();
for (let key of set1.keys()) {
  console.log(key); // 小卡车 20
}
// clear 删除所有值
set1.clear();
console.log(set1); // Set {}
