import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(1, 3, 2, 4);

// Declare an array of shapes.
let shapes: Shape[] = [];

// Add shapes.
shapes.push(myCircle);
shapes.push(myShape);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}