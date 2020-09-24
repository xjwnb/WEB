/*
 * @Author: your name
 * @Date: 2020-09-24 17:38:35
 * @LastEditTime: 2020-09-24 17:42:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\1.刷题\1.js
 */
// 输出
console.log(typeof typeof 1); // "string"
/* 
原因： 
    由于从左往右执行， 执行 typeof 的时候，就会先去去后面的值，
    接着 typeof 1 获得字符串 "number",
    最终 typeof "number" ,因此取得值 "string" 
*/