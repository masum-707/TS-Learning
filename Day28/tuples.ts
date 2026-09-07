//normal tuple
let person: [string, number] = ["Ali", 30];

//function return type
function getCoordinates(): [number, number] {
  return [42, 17];
}
const [x, y] = getCoordinates();

//Labeling tuple

type UserTuple = [id: number, name: string];
const user: UserTuple = [1, "Nahid"];
console.log(typeof user);

//rest element
type Names = [string, ...string[]]; //must be string type

const friends: Names = ["Ali", "Tanim", "Jora"];
//spread
function sum(a: number, b: number): number {
  return a + b;
}

const values: [number, number] = [3, 7];
console.log(sum(...values));

//optional tuple element
type LogEntry = [message: string, timestamp?: Date];

const entry1: LogEntry = ["System started"];
const entry2: LogEntry = ["System shutdown", new Date()];

console.log(entry2);
