type admin = {
  //   role: "admin";
  name: string;
  permission: string[];
};
type user = {
  // role:"user",
  name: string;
  email: string;
};

type person = admin | user;
const p1: person = {
  // role:"admin",
  name: "Masum",
  permission: ["ALL"],
};

const p2: person = {
  name: "salman",
  email: "salman@gmail.com",
};
const testObj: person = {
  name: "Test Union",
  permission: ["Granted"],
  email: "test@gmail.com",
  age: 25, //warning, since is not available in person property
};
function display(user: person): void {
  if ("permission" in user) {
    console.log(user.permission);
  } else {
    console.log(user.email);
  }
}
//we can use "if" instead of "in",such as define role property in each type the check (if(user.role==="admin"))

display(p1);
display(p2);
console.log("email" in p2);
console.log("email" in p1);
console.log(Object.entries(testObj));
