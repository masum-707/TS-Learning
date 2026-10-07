// class Person {
//   name: string;
//   age: number;
//   gender: string | null;
//   constructor(name: string, age: number, gender: string | null = null) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   intro(): void {
//     console.log(
//       `Name: ${this.name}\nGender: ${this.gender}\nAge: ${this.age}\n`,
//     );
//   }
// }
// const person1 = new Person("Masum", 25, "Male");
// person1.intro();
// const person2 = new Person("ABC", 25);
// person2.intro();

//access modifier

class Account {
  public name: string;
  private balance: number;
  protected gender: string;
  constructor(name: string, balance: number, gender: string) {
    this.name = name;
    this.balance = balance;
    this.gender = gender;
  }
  // getBalance(): number {
  //   // console.log(this.balance);
  //   return this.balance;
  // }
  // get Balance(): number {
  //   // console.log(this.balance);
  //   return this.balance;
  // }
}

// const myAccount = new Account("Masum", 1000, "male");
// console.log(myAccount);
// console.log(myAccount.balance);  //can't access private property
// console.log(myAccount.Balance); //using getter method
// console.log(myAccount.getBalance()); //using class method
// console.log(myAccount.name);

class Information extends Account {
  info(): void {
    console.log(this.name, this.balance, this.gender); //warning in balance
  }
}
const myInfo = new Information("Masum", 1000, "male");
myInfo.info();
console.log(myInfo.name);
console.log(myInfo.balance); //waring
console.log(myInfo.gender); //warning
