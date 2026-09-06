// //A union type( | ) means a variable can have one of several allowed types
// let value: string | number;
// value = "masum";
// value = 25;
// //value = true;//error ,since value types string or number ,not boolean

// function print(value: string | number): void {
//   console.log(value);
// }
// const printf = (value: number | string): void => {
//   console.log(value);
// };
// printf("Masum");
// // print("Masum");
type X = { a: any };

type PointX = X & { x: number; y: string }; //intersect
interface Graphic extends PointX {
  radius: number;
  y: string;
}
const test: Graphic = {
  radius: 30,
  x: 25,
  y: "Masum",
  a: 0,
};

console.log(Object.values(test));
console.log(Object.entries(test));

interface newTest extends Graphic {
  aa: string;
}

const ntest: newTest = {
  aa: "hello",
  radius: 10,
  x: 2,
  y: "sdfghjk",
  a: 45,
};

console.log(Object.entries(ntest));
