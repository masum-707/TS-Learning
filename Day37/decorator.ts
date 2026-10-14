// function Log(constructor: Function) {
//   console.log(`${constructor.name} created `);
// }

// @Log
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// @Log
// class Product {}

// @Log// valid only when declared a class
// const user=new User("masum")

// function methodLog(
//   target: object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor,
// ) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     console.log(`Target: ${target.constructor.name}`);
//     console.log(`Method: ${propertyKey} and argument of the method:(${args})`);
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

// class Animal {
//   @methodLog
//   dog(name: string) {
//     console.log("dog:", name);
//   }
// }
// const dog1 = new Animal();
// dog1.dog("Red");
// const dog2 = new Animal();
// dog2.dog("Black");

// class User {
//   @methodLog
//   userInf(name: string, gender: string) {
//     console.log(`UserName:${name}\ngender:${gender}`);
//   }
// }
// const myInfo = new User();
// myInfo.userInf("Masum", "Male");

function propertyLog(target: object, propertyKey: string) {
  console.log(`Target:`, target.constructor.name);
  console.log(`Property Key:`, propertyKey);
}

class Car {
  @propertyLog
  name: string = "abc";
  @propertyLog
  age: number = 25;
}
