// function pair<T, U>(first: T, second: U): [T, U] {
//   return [first, second];
// }

// const result = pair("Masum", 24);
// console.log(result);

// function getFirst<T, U>(items: T[], index: U): T {
//   const number = Number(index);
//   return items[number];
// }

// const name = getFirst(["Masum", 1], 1);
// console.log(name);

//merge two array
// const arr1: number[] = [1, 2, 3];
// const arr2: (string | null)[] = ["Masum", "one", null];

// function merge<T, U>(a: T[], b: U[]): (T | U)[] {
//   return [...a, ...b];
// }

// console.log(merge(arr1, arr2));

//merge two object (specific structure should be maintained)

interface hasId {
  id: number;
  phone?: string;
}

const obj1 = {
  name: "abc",
  gender: "male",
};
const obj2 = {
  id: 101,
  name: "Masum",
  phone: "1234",
};

function mergeObject<T, U extends hasId>(a: T, b: U): T {
  return { ...a, ...b };
}
console.log(mergeObject(obj1, obj2));
