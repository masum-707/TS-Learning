// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// // type partialUser = { [P in keyof User]?: User[P] }; //optional
// type partialUser = { [P in keyof User]?: User[P] | null }; //Creating Nullable
// // type partialUser<T> = { [K in keyof T]?: T[K] | null };
// const user1: partialUser = {};
// const user2: partialUser = { id: 101, name: "Masum" };
// user1.id = 1;

// type readOnly = { readonly [P in keyof User]?: User[P] };
// const user3: readOnly = { id: 102, email: "adfg" };
// user3.name = "Masum"; //warning due to readonly

// //Record mapped type->built in
// type ProductNames = Record<"sku123" | "sku456" | "sku789", string>; //must exist all union  key
// const products: ProductNames = {
//   sku123: "Laptop",
//   sku456: "Tablet",
//   //   sku789: "Smartphone",
// };

// type premituveRecord = Record<string, number>;

// const user: premituveRecord = {
//   1: 25, //key string default
//   name: "Masum", //only (string ,number)pair allow
//   age: 25,
// };

// type role = "admin" | "user" | "guest";
// type permission = Record<role, Record<string, boolean>>;

// const users: permission = {
//   admin: {
//     canWrite: true,
//     canRead: true,
//     canDelete: true,
//   },
//   user: {
//     canWrite: true,
//     canRead: true,
//     canDelete: false,
//   },
//   guest: {
//     canWrite: false,
//     canRead: true,
//     canDelete: false,
//   },
// };

// console.log(users.admin.canDelete);
// console.log(users.guest.canWrite);

// type pickUser = Pick<User, "id" | "email">; //selected specific key from User and create a new type

//Built in
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isAdmin: boolean;
// }

// // Partial<T> - Makes all properties optional
// type PartialUser = Partial<User>;
// // Equivalent to: { id?: number; name?: string; email?: string; isAdmin?: boolean; }

// // Required<T> - Makes all properties required
// type RequiredUser = Required<Partial<User>>;
// // Equivalent to: { id: number; name: string; email: string; isAdmin: boolean; }

// // Readonly<T> - Makes all properties readonly
// type ReadonlyUser = Readonly<User>;
// // Equivalent to: { readonly id: number; readonly name: string; ... }

// // Pick<T, K> - Creates a type with a subset of properties from T
// type UserCredentials = Pick<User, "email" | "id">;
// // Equivalent to: { email: string; id: number; }

// // Omit<T, K> - Creates a type by removing specified properties from T
// type PublicUser = Omit<User, "id" | "isAdmin">;
// // Equivalent to: { name: string; email: string; }

// // Record<K, T> - Creates a type with specified keys and value types
// type UserRoles = Record<"admin" | "user" | "guest", string>;
// // Equivalent to: { admin: string; user: string; guest: string; }

// Exclude and Extract in union  type
type User = "admin" | "user" | "guest";

type exclude = Exclude<User, "admin">;
const u2: exclude = "guest";
const u3: exclude = "user";

type newUser = Extract<User, "guest" | "admin">;
const u1: newUser = "guest";
const u0: newUser = "admin";

//Pick and Omit

interface UserInfo {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type pickUserInfo = Pick<UserInfo, "id" | "name">;
const pick1: pickUserInfo = {
  id: 101,
  name: "sdfg",
};

type omitUserInfo = Omit<UserInfo, "isAdmin">;
const omit1: omitUserInfo = {
  id: 102,
  name: "qwe",
  email: "wert",
};
