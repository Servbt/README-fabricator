
function renderLicenseBadge(license) {
  if (license === "MIT" || license === "mit") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`
  } else {
    return "";
  }
}


function renderLicenseLink(license) {
  if (license === "MIT" || license === "mit") {
    return `(https://opensource.org/licenses/MIT)`
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license === "MIT" || license === "mit") {
    return `## License 
${renderLicenseBadge(license)}`
  } else {
    return "";
  }
}

function usingThereadme(usage) {
  return `${usage}`;
}

function generateMarkdown({ title, description, installation, usage, license, contribution, debug, contact }) {
  return `# ${title} 
  ${renderLicenseSection(license)}

  ## Description

${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#Testing)
  - [Contributions](#contributions)
  - [Contact](#Contact)


  ## Installation
  
${installation}
  
  ## Usage
  ${usingThereadme(usage)}

  

## How to Test

${debug}


## Contributions

${contribution}

## Contact

${contact}

`;
}

module.exports = generateMarkdown;
