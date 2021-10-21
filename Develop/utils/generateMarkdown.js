// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  [License]((https://opensource.org/licenses/${license})
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `
  # ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation 
  To install necessary dependancies, run the following command:
  
  ${data.dependancies}


  ## Usage 
  ${data.info}

  ## License
  This project is licensed under the ${data.license} license.
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  To run tests, run the following command: 

  ${data.tests}

  ## Questions
  Contact me:
  \n  
  If you have any questions about the repo, open an issue or contact me directly at:
  Email: ${data.email}

  You can find more of my work at:
  Github: https://github.com/${data.username}

`

;
}

module.exports = generateMarkdown;

