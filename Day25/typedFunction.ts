function introduce(name: string, age: number, active: boolean) {
  console.log(name, age, active);
}
introduce("Masum", 25, true);

function greet(name: string = "Nahid", message?: string): string {
  return message ? `${message}, ${name}` : `Welcome ${name}`;
}
console.log(greet());
console.log(greet("Masum", "Hello"));

function infiniteLoop(): never {
  let count = 0;
  while (true) {
    console.log(count);
    count++;
  }
}
// const test = infiniteLoop();
