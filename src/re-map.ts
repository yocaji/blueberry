function map(array: number[], callback: (value: number) => number): number[] {
  const result: number[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}
const arr = [1, 1, 2, 3, 5, 8, 13];
const result = map(arr, (x) => x * 10);
console.log(result);
