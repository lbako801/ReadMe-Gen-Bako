// Packages required for the program to work

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions to use with the inquirer.prompt

const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the ReadMe title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List contributors.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test information'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter licenses.',
        choices:
        [
            'MIT',
            'Open',
            'ISC',
            'Apache',
            'Academic'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',

    }
];

// Function to get user input and create readme file!

async function init() {
    try {
        const answers = await inquirer.prompt(prompts);
        const readMe = generateMarkdown(answers);
        fs.writeFile('README.md', readMe, (err) =>
          err ? console.error(err) : console.log('README generated.')
        );
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app

init();