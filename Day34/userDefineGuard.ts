function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
const value = "123";
console.log(isNumber(value));

function isString(value: unknown): value is string {
  return typeof value === "string";
}
console.log(isString(value));
