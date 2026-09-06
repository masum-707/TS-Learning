//literal can be string,number,boolean
type Role = "admin" | "user" | "moderator";
let role: Role;

role = "admin"; // ok
role = "user"; // ok
role = "moderator"; // ok
role = "guest"; // error

// const Literal
const direction = "left"; //can not be change

let dir: "left" = "left"; // Explicit literal
dir = "right"; //error due to explicity fixed the value
