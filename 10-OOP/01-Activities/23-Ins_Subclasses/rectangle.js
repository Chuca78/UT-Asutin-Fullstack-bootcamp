const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    console.log('constructor');
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
  printSides() {
    console.log(`Side A ${this.sideA}`);
    console.log(`Side B ${this.sideB}`);
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
rectangle.printSides();
