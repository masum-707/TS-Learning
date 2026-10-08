abstract class Shape {
  protected length_1: number;
  protected length_2?: number;
  constructor(length_1: number, length_2?: number) {
    this.length_1 = length_1;
    this.length_2 = length_2;
  }

  abstract area(): void;
}

class Rectangle extends Shape {
  area(): void {
    console.log(this.length_1 * (this.length_2 ?? 1));
  }
}
class Circle extends Shape {
  area(): void {
    console.log(3.1416 * this.length_1 * this.length_1);
  }
}
const r1 = new Rectangle(5, 3);
const c1 = new Circle(5);
r1.area();
c1.area();
