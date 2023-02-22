// TODO: Include packages needed for this application
const inquirer = require("./utils/node_modules/inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title of your project:",
    name: "title",
  },
  {
    type: "input",
    message: "Your motivation for creating this app was to:",
    name: "motive",
  },
  {
    type: "input",
    message: "Now users of your app are able to:",
    name: "solution",
  },
  {
    type: "input",
    message: "While bulding your app you learned:",
    name: "lessons",
  },
  {
    type: "input",
    message: "Something that stands out about your app is:",
    name: "standouts",
  },
  {
    type: "input",
    message: "To install this app:",
    name: "install",
  },
  {
    type: "input",
    message: "To use this app:",
    name: "use",
  },
  {
    type: "input",
    message:
      "If you would like to include an image of your app in use, please provide a full path route or link to your image now:",
    name: "image",
  },
  {
    type: "input",
    message:
      "Please provide any details about who you collaborated with on this app:",
    name: "collabs",
  },
  {
    type: "input",
    message:
      "Please provide any details about third party assets that you used:",
    name: "assets",
  },
  {
    type: "list",
    message: "What type of license would you like to give this app?",
    name: "license",
    choices: ["MIT", "Apache", "GPLv2", "GPLv3", "Other", "No License"],
  },
  {
    type: "input",
    message: "Your GitHub username is:",
    name: "contact",
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
   console.log("Your file has been created!")
});
}

// TODO: Create a function to initialize app
async function init() {

  const userInput = await inquirer.prompt(questions);
  
  writeFile("README.md", generateMarkdown(userInput), console.log(userInput));

};

// Function call to initialize app
init();
