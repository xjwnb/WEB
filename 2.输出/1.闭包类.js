/*
 * @Author: your name
 * @Date: 2020-09-26 16:05:46
 * @LastEditTime: 2020-09-26 16:32:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\2.输出\1.js
 */

// 闭包实现
/**
 * 书本类
 */
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;

  return function (name, price, type) {
    // 特效方法
    this.getName = function () {
      return this.name;
    };
    this.getPrice = function () {
      return this.price;
    };
    this.getType = function () {
      return this.type;
    };

    this.setName = function (name) {
      this.name = name;
    };
    this.setPrice = function (price) {
      this.price = price;
    };
    this.setType = function (type) {
      this.type = type;
    };
    this.getBookNum = function () {
      console.log(bookNum);
    };

    // 构造
    this.setName(name);
    this.setPrice(price);
    this.setType(type);
    // 增加书本数量
    bookNum++;
    if (bookNum > 3) {
      throw new Error("超出库存量");
    }
  };
})();
Book.prototype = {
  getString: function () {
    return `${this.name}, ${this.price}, ${this.type}`;
  },
};

// 测试
var jsBook = new Book("JavaScript设计模式", 100, "JavaScript");
console.log(jsBook.getName());
console.log(jsBook.getString());
jsBook.getBookNum();

var DOMBook = new Book("JavaScript DOM 编程艺术", 100, "JavaScript");
DOMBook.getBookNum();

var HtmlBook = new Book("HTML 书", 100, "HTML");
HtmlBook.getBookNum();

/* 
超出仓库量报错
var jBook = new Book("Java 编程书", 100, "Java");
jBook.getBookNum(); 
*/
