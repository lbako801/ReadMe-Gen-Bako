//Below const enters user data from index.js to make a ReadME file!

function generateMarkdown(data) {

  const { title, description, install, usage, license, contributors, tests, github, email } = data

  return `
  ## ${title}
  ## Description
  ${description}
  ## Installation
  ${install}
  ## Usage
  ${usage}
  ## Licenses
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  ## Contributors
  ${contributors}
  ## Tests
  ${tests}
  ## Contact
  ${github}](https://github.com/${github})
  Or Email Me @ ${email}`
};

//Exports generateMarkdown const to be used in other files!

module.exports = generateMarkdown;
