
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
sub.run();
console.log(sub.getName());
sub.setName("zzx");
console.log(sub.getName());
/*
小卡车 - 20 running...
小卡车
zzx 
*/
