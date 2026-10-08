interface Shape {
  name: string;
  area(): void;
}

class Rectangle implements Shape {
  name: string;
  lengthA: number;
  lengthB: number;

  constructor(name: string, lengthA: number, lengthB: number) {
    this.name = name;
    this.lengthA = lengthA;
    this.lengthB = lengthB;
  }
  area(): void {
    console.log(
      `Shape name ${this.name} and area: ${this.lengthA * this.lengthB}`,
    );
  }
}
const r1 = new Rectangle("rectangle", 50, 30);
r1.area();
