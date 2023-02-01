// TODO: Include packages needed for this application
const inquirer = require("./utils/node_modules/inquirer");
const fs = require("fs");
// const generateMarkdown = require('./utils/generateMarkdown');
// const markdown = require(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  "Title of your project:",
  "Your motivation for creating this app was to:",
  "Now users of your app are able to:",
  "While bulding your app you learned:",
  "Something that stands out about your app is:",
  "To install this app:",
  "To use this app:",
  "If you would like to include an image of your app in use, please provide a full path route or link to your image now:",
  "Please provide any details about who you collaborated with on this app:",
  "Please provide any details about third party assets that you used:",
  "What type of license would you like to give this app?",
  "Your GitHub username is:",
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
        name: "image",
    },
    {
      type: "input",
      message: questions[8],
      name: "collabs",
    },
    {
      type: "input",
      message: questions[9],
      name: "assets",
    },
    {
      type: "checkbox",
      message: questions[10],
      name: "license",
      choices: ["MIT", "Apache", "GPLv2", "GPLv3", "Other", "No License"],
    },
    {
      type: "input",
      message: questions[11],
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
      image,
      collabs,
      assets,
      questions,
      license
    } = response;

    const newReadMe = 
`# ${title}

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
    <a href="#Questions">Questions</a>
  </li>
  <li>
  <a href="#License">License</a>
</li>
    </ul>
    
## Description <span id="Description">

    The motivation behind the creation of ${title} was ${motive}
    Now, users of this app can ${solution}
    During the bulding process I learned ${lessons}
    Something that I think stands out about this app is ${standouts}

## Installation <span id="Installation">

    To install ${title}:
    
    ${install}
    
## Usage <span id="Usage">

    To use ${title}:
    
    ${use}

<img src="${image}"/>
    
## Credits <span id="Credits">

    ${collabs}
    ${assets}

## Questions <span id="Questions">
    
    To ask questions about this app, please contact me at:
<a href="https://github.com/${questions}">github.com/${questions}</a>
    
## License <span id="License">

    ${license}`;
    

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
