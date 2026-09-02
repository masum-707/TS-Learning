let value: unknown = "Hello";

let message = value as string;
// console.log(value.toUpperCase());
console.log(message.toUpperCase());
console.log((value as string).toUpperCase());

//assertions does not  ,create data or their types,just tells consider this value as given types

const user = {
  name: "Masum",
  age: 25,
};

const person = user as {
  //tell TS to consider person as user
  name: string;
  age: number;
  email: string;
};

console.log(person.email); //undefined
console.log(person);
