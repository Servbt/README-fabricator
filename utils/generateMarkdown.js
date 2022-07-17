// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT" || license === "mit") {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT" || license === "mit") {

    return `(https://opensource.org/licenses/MIT)`

} else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" || license === "mit") {

    return `${renderLicenseBadge(license)}`

  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, debug}) {



  return `# ${title} 
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
