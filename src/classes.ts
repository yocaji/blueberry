class User {
  // クラスのプロパティ
  name: string = "";
  age: number = 0;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // クラスのメソッド
  isAdult(): boolean {
    return this.age >= 20;
  }
  setAge(newAge: number): void {
    this.age = newAge;
  }
}
// const alice = new User();
// console.log(alice.name);
// console.log(alice.age);

// alice.age = 55;
// console.log(alice.age);
// console.log(alice.isAdult());
// alice.setAge(11);
// console.log(alice.isAdult());

const bob = new User("Bob", 15);
console.log(bob.name);
console.log(bob.age);
