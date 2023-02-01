// TODO: Include packages needed for this application
const inquirer = require("./utils/node_modules/inquirer");
const fs = require("fs");
// const generateMarkdown = require('./utils/generateMarkdown');
// const markdown = require(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  "What is the name of your project?",
  "What was your motivation for making this app?",
  "What problem does your app solve?",
  "What did you learn while bulding your app?",
  "What stands out about your app?",
  "Please tell us how to install your app.",
  "How do we use your app?",
  "Who did you collaborate with on this app?",
  "What third party assets were used in the creation of this app?",
  "What type of license would you like to give this app?",
  "Please provide the link to your GitHub account so that users may contact you with questions",
];

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "motive",
    },
    {
      type: "input",
      message: questions[2],
      name: "solution",
    },
    {
      type: "input",
      message: questions[3],
      name: "lessons",
    },
    {
      type: "input",
      message: questions[4],
      name: "standouts",
    },
    {
      type: "input",
      message: questions[5],
      name: "install",
    },
    {
      type: "input",
      message: questions[6],
      name: "use",
    },
    {
      type: "input",
      message: questions[7],
      name: "collabs",
    },
    {
      type: "input",
      message: questions[8],
      name: "assets",
    },
    {
      type: "checkbox",
      message: questions[9],
      name: "license",
      choices: ["MIT", "Apache", "GPLv2", "GPLv3", "Other", "No License"],
    },
    {
      type: "input",
      message: questions[10],
      name: "questions",
    },
  ])
  .then((response) => {
    console.log("your response", response);

    const {
      title,
      motive,
      solution,
      lessons,
      standouts,
      install,
      use,
      collabs,
      assets,
      license,
      questions,
    } = response;

    const newReadMe = `# ${title}

## Table of Contents
    
 <ul>
 <li>
    <a href="#Description">Description</a>
  </li>
  <li>
    <a href="#Installation">Installation</a> 
  </li>
  <li>
    <a href="#Usage">Usage</a>
  </li>
  <li>
    <a href="#Credits">Credits</a>
  </li>
  <li>
    <a href="#License">License</a>
  </li>
  <li>
    <a href="#Badges">Badges</a>
  </li>
  <li>
    <a href="#Features">Features</a>
  </li>
  <li>
    <a href="#Contribution">Contribution</a>
  </li>
  <li>
    <a href="#Tests">Tests</a>
  </li>
  <li>
    <a href="#Questions">Questions</a>
  </li>
    </ul>
    
## Description

    ${motive}
    ${solution}
    ${lessons}
    ${standouts}

## Installation

    ${install}
    
## Usage

    ${use}
    
## Credits

    ${collabs}
    ${assets}
    
## License

    ${license}
    
## Badges
    
## Features
    
## Contribution
    
## Tests
    
## Questions
    
    Please reach out to me at ${questions} with any questions about this project.`;

    fs.writeFile("README.md", newReadMe, (err) => {
      if (err) {
        console.log("Something went wrong", err);
      } else {
        console.log("README has been created");
      }
    });
  });

// TODO: Create a function to write README file
// function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
