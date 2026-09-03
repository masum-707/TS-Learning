// const add: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };
// const subtract = (a: number, b: number): number => {
//   return a - b;
// };
// console.log(typeof add);
// console.log(add(3, 5));
// console.log(subtract(add(3, 5), 5));

// function calculate(
//   a: number,
//   b: number,
//   operation: (a: number, b: number) => number,
// ): number {
//   return operation(a, b);
// }
// console.log(calculate(1, 5, add));
// console.log(calculate(5, 8, (a, b) => a * b));

//rest parameter using tuple
function rest(...values: [string, number, any]): void {
  //   console.log(value[0], value[1], value[2]);
  for (const value of values) {
    console.log(value);
  }
}
rest("Masum", 25, true);
