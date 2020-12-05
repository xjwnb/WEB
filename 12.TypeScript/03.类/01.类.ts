
class Super {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  static color(): void {
    console.log("blue");
  }
}

class Sub extends Super {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  run(): void {
    console.log(`${this.name} - ${this.age} running...`);
  }
}

let sub = new Sub("小卡车", 20);
console.log(sub.age); // 外部可以访问共有属性
sub.run();
console.log(sub.getName());
sub.setName("zzx");
console.log(sub.getName());
/*
20
小卡车 - 20 running...
小卡车
zzx 
*/



// 公共、私有与受保护的修饰符
// 默认共有属性 public 

// protected
class Person1 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): void {
    console.log(this.name);
  }
}
class SubPerson extends Person1 {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  getSuperName(): string {
    return this.name;
  }
}
let subperson = new SubPerson("xkc", 20);
console.log(subperson.getName());
console.log(subperson.getSuperName()); // 子类可以获取到父类中 protected 声明的属性
/*
undefined
xkc
*/
let person1 = new Person1("小卡车");
console.log(person1.getName()); // undefined 外部不可访问到 protected 声明的属性


// privated
class Person2 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
class SubPerson1 extends Person2 {
  private age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }
  getSuperName(): string {
    // return `${this.name}`;  // 子类无法访问父类中通过 private 声明的属性，报错
    return `${this.getName()}`;
  }
}
let person2 = new Person2("小卡车");
console.log(person2.getName()); // 小卡车
let subperson1 = new SubPerson1("zzx", 20);
console.log(subperson1.getAge()); // 20
console.log(subperson1.getSuperName()); // zzx