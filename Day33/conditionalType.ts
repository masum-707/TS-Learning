type arr<T> = T extends { length: number } ? T : any;
type A = arr<string>;
type B = arr<boolean>;

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength([]));
