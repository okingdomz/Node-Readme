const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  // license url
  let badge = '';
  if (license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'GPL') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'ISC') {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseSection = '';
    if (license === 'Apache') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'GPL') {
      licenseLink = 'https://www.gnu.org/licenses'
    
    } else if (license === 'ISC') {
      licenseLink = 'https://docs.microfocus.com/SM/9.52/Hybrid/Content/SMSP_OS3R/ISC_License_ISC.htm'

    } else  {
          licenceLink = ''
    }
  return licenceLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license != 'none') {
//     return `## License
//     This Project is Licensed under`
//   }
// }

//  returns license section of readme , esoecially if there is no license or returns as an empty section
function renderLicenseSection(license) {
  let licenceSection = ''
  if (license === 'None') {
    licenceSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  } return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return `
  
  # ${answer.title},

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}


  ## Table of Contents:
  ### * [Description](#description)
  ### * [Tests](#tests)
  ### * [Installation](#installation)
  ### * [Questions](#questions)
  ### * [Usage](#usage)
  ### * [Contributon](#contribution)
   
   
   
  ## Description
  ### ${answer.description}

  ## Installation
  ### ${answer.installation}

  ## Usage
  ### ${answer.usage}

  ## Innovation
  ### ${answer.innovation}

  

 


  ## Contribution
  ${answer.contribution}

  ## Test
  ${answer.tests}


  ## Questions
  [Screenify Walkthrough]
  Additional Questions can be sent to: ${answer.email}

  Other Projects can be viewed [here](www.github.com/${answer.github})



`;
}

module.exports = generateMarkdown;
