// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contributions, tests, license, github, email } = data;

  const readMe = 
  `# ${title}  
  ## Description  
  ${description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributions](#contributions)
  4. [Test Instructions](#test-instructions)
  5. [License](#license)
  6. [Questions](#questions)
  <a name='installation'></a>
  ## Installation  
  ${installation}
  <a name='usage'></a>
  ## Usage  
  ${usage}
  <a name='contributions'></a>
  ## Contributions  
  ${contributions}  
  <a name='test-instructions'></a>
  ## Test Instructions  
  ${tests}
  <a name='license'></a>
  ## License  
  <a name='questions'></a>
  ## Questions `
  return readMe;
}

module.exports = generateMarkdown;
