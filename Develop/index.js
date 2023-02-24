// Packages needed for this application
const inquirer = require("./utils/node_modules/inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title of your project:",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "How to install this app:",
    name: "install",
  },
  {
    type: "input",
    message: "Basic instructions on how to use this app:",
    name: "use",
  },
  {
    type: "list",
    message: "What type of license would you like to give this app?",
    name: "license",
    choices: ["MIT", "Apache_2.0", "GPLv3", 'WTFPL', 'none'],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "user",
  },
  {
    type: "input",
    message: "What is the name of the repo for this app?",
    name: "repo",
  },
  {
    type: "input",
    message: "Please enter your email address:",
    name: "contact",
  },
];

// Function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
   console.log("Your file has been created!")
});
}

// Function to initialize app
async function init() {

  // the value of userInput is defined once inquirer has finished its prompts
  const userInput = await inquirer.prompt(questions);
  
  // file is written using the template imported from generateMarkdown.js with userInput as the data
  writeFile("README.md", generateMarkdown(userInput), console.log(userInput));

};

// Function call to initialize app
init();
