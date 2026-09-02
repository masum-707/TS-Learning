function add(a: number, b: any): number {
  return a + b;
}
console.log(add(6, "7")); //no error since b type any

function multiplier(a: number, b: number): number {
  return a * b;
}
console.log(multiplier("5", 6));
