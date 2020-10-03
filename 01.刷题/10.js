/*
 * @Author: your name
 * @Date: 2020-10-03 19:53:49
 * @LastEditTime: 2020-10-03 19:58:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WEB\01.刷题\10.js
 */
//
class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};
const pet = new Dog("Mara");
pet.bark(); // Woof I am Mara
delete Dog.prototype.bark;
// pet.bark(); // TypeError
/*
原因：
    使用 delete 删除 Dog 类原型方法 bark，因此，后面又调用了，所以会抛出错误。TypeError: pet.bark is not a function 
*/
