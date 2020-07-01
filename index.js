const inquirer = require("inquirer");
const fs = require("fs");

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
    name: "installation",
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
function writeToFile(filename, data) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readme = `
    # ${answers.title}
    ### ${answers.license}
    ## Description
    ${answers.description}
    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    Tests](#tests)
    [Questions](#questions)
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Contributing
    ${answers.contribution}
    ## Test
    ${answers.test}
    ## License
    The application is covered by the ${answers.license} license.
    ## Questions
    [My Github Profile](https://github.com/${answers.username})
    If you have furthe
    `;
    writeToFile("./README.md", readme);
  });
}

// function call to initialize program
init();
