/*
 * @Author: your name
 * @Date: 2020-10-06 10:47:40
 * @LastEditTime: 2020-10-06 10:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\06.Map.js
 */

// 创建 map
const person = new Map();
// set() 设置键值
person.set("name", "小卡车");
person.set("age", 20);
console.log(person);
// get() 获得值
let name = person.get("name");
console.log(name);
// keys() 获得所有键
let keys = person.keys();
console.log(keys);
// values() 获得所有值
let values = person.values();
console.log(values);
// entries() 获得键值
let personEntries = person.entries();
console.log(personEntries);
// 删除
person.delete("age");
console.log(person);
