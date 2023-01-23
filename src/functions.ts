// 関数宣言の例
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}
console.log(range(5, 10))

// 返り値が無い関数の宣言
function helloWorldTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello, world!");
  }
}
helloWorldTimes(5);

// 関数式の例
type Human = {
  height: number;
  weight: number;
};
const calcBMI = function({ height, weight }: Human): number {
  return weight / height ** 2;
};
const alice: Human = { height: 1.55, weight: 55 };
console.log(calcBMI(alice));

// アロー関数式の例
const calcBMI2 = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
}
console.log(calcBMI2(alice))

// コールバック関数の例
type Member = {
  name: string;
  age: number;
}
const members: Member[] = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 8 },
];
const names = members.map((m: Member): string => m.name);
console.log(names);
