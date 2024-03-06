const { Shape, Triangle, Circle, Square } = require("./shapes");

describe("Shape", () => {
    describe("setColor", () => {
        it("should be a blue color", () =>{
            const shape = new Shape
            shape.setColor("blue") 
            expect(shape.color).toEqual("blue")
        });
    });
});

describe("Triangle", () => {
    describe("render", () => {
        it("should return a string", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');  
        });
    });
});

describe("Circle", () => {
    describe("render", () => {
        it("should return a string", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle r="95" cx="150" cy="100" fill="blue" />');  
        });
    });
});

describe("Square", () => {
    describe("render", () => {
        it("should return a string", () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect width="200" height="200" x="10" y="10" fill="blue" />');  
        });
    });
});



