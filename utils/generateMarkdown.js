
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


function generateMarkdown({ title, description, installation, usage, license, contribution, debug }) {



  return `# ${title} 
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
