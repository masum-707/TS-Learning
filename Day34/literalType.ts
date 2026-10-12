//string literal

type User = "admin" | "user" | "guest";
let user: User = "admin";
let user1: User = "viewer"; //waring

//number literal
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice = 1;
let diceRoll1: dice = 7; //warning

//boolean
type isActive = true | false;
let active: isActive = true;

//object
type ApiResponses = {
  statusText: "OK" | " Success" | "Failed";
  statusCode: 200 | 201 | 404;
};
const response: ApiResponses = {
  statusText: " Success",
  statusCode: 200,
};

//combine type

type combined = 201 | "ok" | false;
let status: combined = "ok";
