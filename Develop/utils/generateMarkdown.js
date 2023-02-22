// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license !== null){
    return `##License
    
    This app has the following license:
    
    `;
  }
//below is my original code idea that was scrapped
// const {license} = userInput
//   let licenseChoice = {
//     MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//   };
//   const {MIT} = licenseChoice;
//   if(license === 'MIT'){
//     licenseBadge = MIT;
//   } else {
//     return '';
//   };
// renderLicenseLink(licenseBadge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {



//scrapped code
// if(licenseBadge === MIT){
//   licenseLink = `https://opensource.org/licenses/MIT`;
// } else{
//   return '';
// };
// renderLicenseSection(licenseBadge, licenseLink);

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {



  //scrapped code
// let licenseSection = 
// `## License <span id="License">
// ${licenseBadge}
// ${licenseLink}
// `;
// generateMarkdown(licenseSection);
//store the template literal in a variable?
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `## Table of Contents
    
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

    The motivation behind the creation of ${data.title} was ${data.motive}
    Now, users of this app can ${data.solution}
    During the bulding process I learned ${data.lessons}
    Something that I think stands out about this app is ${data.standouts}

## Installation <span id="Installation">

    To install ${data.title}:
    
    ${data.install}
    
## Usage <span id="Usage">

    To use ${data.title}:
    
    ${data.use}

<img src="${data.image}"/>
    
## Credits <span id="Credits">

    ${data.collabs}
    ${data.assets}

## Questions <span id="Questions">
    
    To ask questions about this app, please contact me at:
<a href="https://github.com/${data.contact}">github.com/${data.contact}</a>
    
## License <span id="License">

    ${data.license}
    
    `;
}
   

module.exports = generateMarkdown;
