const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: "Hello, world!",
};
console.log(obj.foo);
console.log(obj.bar);

type User = {
  readonly name: string;
  age: number;
  height?: number;  // オプショナルなプロパティ
}
const user: User = {
  name: "poyo",
  age: 13,
};
user.age = 100;
console.log(user.age);

const obj1 = {
  bar: 456,
  buz: 789,
};
const obj2 = {
  foo: 123,
  ...obj1,
};
console.log(obj2);
