const username: string = "Masum";
let age: number = 24;
//age = "ten"; //real time feedback
console.log(username);
console.log(age);

const numbers: number[] = [1, 2, 3];
numbers.push(78); //valid
numbers.push("7"); //invalid(only show error in real time)
console.log(numbers);
const userName: Array<string> = ["Masum"];
//const userName:string[]=[];
userName.push("Nahid");
userName.push(45); //showing error
console.log(userName);

//object type
const user: {
  name: string;
  age: number;
} = {
  name: "Masum",
  age: 25, //valid
  //age ="25" invalid
};

console.log(user);
