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

function printText(): void {
    console.log("Hello void function");
}
printText();
console.log(typeof printText);

//unknown
let text: unknown = 34567; // "unknown to uppercase";
console.log(text);
// console.log(text.toUpperCase()); //throw an error since text isn't a string
if (typeof text === "string") {
    console.log(text.toUpperCase());
} else {
    console.log(
        `Since text is unknown and .toUpperCasee() a string method,\nwe check text and find text is not a string`,
    );
}
function throwError(): void {
    throw new Error("Something went wrong");
}

try {
    throwError();
} catch (error) {
    console.log(error.message);
}

//tuple -> an array that know elements number including their types

// let users: (string | number)[] = ["Masum", 24];//normal array (can be string or number in any position )

let student: [string, number, boolean] = [
    //tuple must follow the strict data type in their sequence
    "Masum",
    24,
    77,
];
console.log(student);
