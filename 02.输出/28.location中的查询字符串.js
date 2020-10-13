/*
 * @Author: your name
 * @Date: 2020-10-13 14:26:56
 * @LastEditTime: 2020-10-13 15:38:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\02.输出\28.location中的查询字符串.js
 */

// URL 中查询字符串
let getQueryStringArgs = function () {
  let qs = location.search ? location.search.substring(1) : "",
    args = {};
  for (let item of qs.split("&").map((k) => k.split("="))) {
    let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
};

// URLSearchParams
let qs = "?name=xkc&age=20";
let searchParams = new URLSearchParams(qs);
console.log(searchParams); // URLSearchParams { 'name' => 'xkc', 'age' => '20' }
let hasName = searchParams.has("name");
console.log(hasName); // true
let name = searchParams.get("name");
console.log(name); // xkc
searchParams.set("hobby", "LOL");
console.log(searchParams.toString()); // name=xkc&age=20&hobby=LOL
searchParams.delete("hobby");
console.log(searchParams.toString()); // name=xkc&age=20
// 遍历
for (let param of searchParams) {
  console.log(param);
}
/*
[ 'name', 'xkc' ]
[ 'age', '20' ]
*/
