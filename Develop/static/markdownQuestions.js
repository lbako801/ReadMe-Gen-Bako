const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the ReadMe title?',
    validate: (titleInput) => {
        if (titleInput) {
            return true;
        } else {
        console.log('Please enter the title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Write a description for the ReadMe',
    validate: (descInput) => {
        if (descInput) {
          return true;
        } else {
          console.log('Please enter the description!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'install',
    message: 'How can one install the application?',
    validate: instInput => {
        if (instInput) {
            return true;
        } else {
            console.log('Please enter a installation instructions!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Write out usage information: ',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('Please enter usage information!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributions',
    message: 'Who contributed to the project?',
    validate: contrInput => {
        if (contrInput) {
            return true;
        } else {
            console.log('Please enter the contributors!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Write test information',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('Please write test information!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license',
    choices: [
        'Creative commons',
        'Attribution',
        'Attribution non-commercial'
    ]
},
{
    type: 'input',
    name: 'github',
    message: 'What is the github user URL?',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('Please enter a github username url');
            return false;
        }
    }
    },];

module.exports = questions;
