// interface User {
//   name: string;
//   age: number;
//   phone: string | null;
// }
// type userKey = keyof User; //union type userKey="name"|"age"|"phone" ,only in compile time.doesn't exist on runtime

const newUser = {
  name: "Masum",
  age: 25,
  phone: "1234567",
};
// type newUserKey = keyof typeof newUser;

function getUser<T, k extends keyof T>(object: T, key: k): T[k] {
  return object[key];
}
console.log(`User Name:`, getUser(newUser, "name"));
console.log(`User phone:`, getUser(newUser, "phone"));
