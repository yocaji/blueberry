const obj = {
  foo: 123,
  bar: "Hello, world!",
};
console.log(obj.foo);
console.log(obj.bar);

const user = {
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
