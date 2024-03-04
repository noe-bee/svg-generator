const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

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
  //write file