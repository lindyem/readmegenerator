var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter the title of your project.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions.",
    name: "instructions",
  },
  {
    type: "input",
    message: "Enter usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the contribution guidelines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter test instructions.",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license.",
    name: "license",
    choices: [
      "ISC",
      "MIT",
      "Microsoft Public License",
      "Educational Community License v2.0",
    ],
  },
  {
    type: "input",
    message: "Enter Github username.",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
