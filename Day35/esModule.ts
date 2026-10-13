export type User = { name: string; id: string };
export interface product {
  id: string;
  name: string;
  price: number;
}
export class Student {
  name: string;
  #id: string;
  //   constructor(name: string, id: string) {
  //     this.name = name;
  //     this.id = id;
  //   }
  constructor(obj: User) {
    this.name = obj.name;
    this.#id = obj.id;
  }
  get userId(): string {
    return this.#id;
  }
}
