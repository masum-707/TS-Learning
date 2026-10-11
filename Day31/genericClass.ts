interface hasInfo<T, U> {
  id: U;
  name: T;
  phone?: T;
}

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
}

const myInfo = new Information({ id: 101, name: "Masum", phone: "019...." });
console.log(myInfo.info);
//console.log(myInfo.name); //cant access private property directly
