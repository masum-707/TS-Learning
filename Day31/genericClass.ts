interface hasInfo<T, U> {
  id: U;
  name: T;
  phone?: T;
}
const userInfo = new Map();

class Information<T extends hasInfo<string, number>> {
  private id: number;
  private name: string;
  private phone?: string | null;
  constructor(obj: T) {
    this.id = obj.id;
    this.name = obj.name;
    this.phone = obj.phone;
  }
  get info(): string {
    const phone = this.phone ? this.phone : "Not Aplicable";
    return `UserId:${this.id}\nUserName:${this.name}\nPhoneNumber:${phone}`;
  }
  store(): void {
    userInfo.set(this.id, this);
  }
}

const myInfo = new Information({ id: 101, name: "Masum", phone: "019...." });
const firstInfo = new Information({ id: 102, name: "abc", phone: "1234" });
// console.log(myInfo.info);
myInfo.store();
firstInfo.store();
console.log(userInfo.get(102));
//console.log(myInfo.name); //cant access private property directly
