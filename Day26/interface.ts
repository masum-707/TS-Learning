interface User {
  readonly id: number;
  name: string;
  age: number;
  email: string;
  phone?: string;
}

const user: User = {
  id: 101,
  name: "Masum",
  age: "25", //warning ,since age type is number
  //email: "masum@gmail.com", //though email property is commented but there is no warning for user object,because there already a warning in age property ,that TS assume this object already invalid and skip further investigate .***If all property valid  there will be warning for missing email property in user object according to User interface structure
  phone: " 23567",
};
user.id = 1000; //warning ,since readonly property but still id will be change
console.log(typeof user);
console.log(Object.values(user));

//type (alias) custom type name using types,union
type ID = string;
const myId: ID = "202SCT";
console.log(myId);
type status = "pending" | "success" | "failed";
const currentStatus: status = "failed";
console.log(currentStatus);
