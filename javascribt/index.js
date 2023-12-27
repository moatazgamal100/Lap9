class Shape{
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        return this.sides*this.sideLength
    }
}
let square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());
let triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter());

class Square extends Shape{
    constructor(sideLength) {
        super("square",4,sideLength);
    }
    calcArea() {
        return this.sideLength * this.sideLength;
    }
}
let squareInstance = new Square(9);
console.log(squareInstance.calcPerimeter());
console.log(squareInstance.calcArea());
class Triple{
    static customName = "Tripler";
    static description = "I triple any number you provide";
    static calculate (n=1) {
        return n*3;
    }
}
class SquaredTriple extends Triple{
    static longDescription;
    static description = "square the triple of any number you provide";
    static calculate (n) {
        let result = super.calculate(n);
        return result*result
    }
}
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); 
