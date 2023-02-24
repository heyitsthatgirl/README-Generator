// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  
  // If license is defined as anything but 'none', a template literal is returned containing the badge image 
  // that corresponds with the chosen license
  if(license !== 'none'){
    return `[![License Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  // otherwise, an empty string is returned
  return '';


//Below is my original code idea that was scrapped
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

// Function that returns the license link for the table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // If license is defined as anything but 'none', 
  // a template literal is returned containing the link for the table of contents 
  if(license !== 'none'){
    return `[License](#license)`;
  }
  // otherwise, an empty string is returned
  return '';

//Scrapped code
// if(licenseBadge === MIT){
//   licenseLink = `https://opensource.org/licenses/MIT`;
// } else{
//   return '';
// };
// renderLicenseSection(licenseBadge, licenseLink);

}

// Function that returns the license section of README
function renderLicenseSection(license) {

  // If license isn't 'none' then a template literal is returned containing the license section
  if(license !== 'none'){
    return `
  ## License
    
  This app is licensed with the following:
    
`
  }
  // otherwise an empty string is returned
  return '';
}
// Scrapped code
// let licenseSection = 
// `## License <span id="License">
// ${licenseBadge}
// ${licenseLink}
// `;
// generateMarkdown(licenseSection);
//store the template literal in a variable?

// Function to render a link to the credits section
// function renderCreditsLink(collabs) {
//   if(collabs !== null) {
//     return `[Credits](#credits)`;
//   }
// }

// // Function to provide a credits section if the user adds details about collaborations or third-party apps
// function renderCreditsSection(collabs) {
//   if(collabs !== null){
//     return `## Credits
    
//     ${collabs}
    
//     `;
//   }
//   return '';
// }

// Function to generate markdown for README
function generateMarkdown(data) {

return `
# ${data.title}

## Description

${data.description}


## Table of Contents

[Installation](#installation)

[Usage](#usage)

${renderLicenseLink(data.license)}

[Contributing](#contributing)

[Questions](#questions)

    
## Installation
    
${data.install}
    
## Usage
    
${data.use}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
    
## Contributing

The repository for this app can be found [here](https://github.com/${data.user}/${data.repo}).

For information on how to contribute to a project through forking, please visit the 
GitHub documentation on [Contributing to projects through forking](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## Questions
    
To ask additional questions about this app, please contact me at ${data.contact}.
`;
}
   

module.exports = generateMarkdown;
