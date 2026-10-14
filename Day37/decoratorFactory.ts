function logFactory(message: string) {
  return function Log(constructor: Function) {
    console.log(`${constructor.name} `, message);
  };
}

@logFactory("decleared")
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
