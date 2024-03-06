const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please input up to three letters characters for your logo:",
  },
  {
    type: "input",
    name: "textColor",
    message: "What color text would you like?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape to be?",
  },
];

//write to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created logo.svg!")
  );
}

//init function
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    let { text, textColor, shape, shapeColor } = answers;
    let selectedShape;
    if (shape === "Circle") {
      selectedShape = new Circle();
    } else if (shape === "Triangle") {
      selectedShape = new Triangle();
    } else if (shape === "Square") {
      selectedShape = new Square();
    }
    selectedShape.setColor(shapeColor);
    const svgElement = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="115" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>!
    </svg>`;
    writeToFile("logo.svg", svgElement);
  });
}

init();
