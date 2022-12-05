// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = require("./static/markdownQuestions");

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile(fileName, fileData, (error) => {
        if(error){
            return console.log(error)
        }
        console.log("Success!");
    });
}
// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', answers));
}

// Function call to initialize app

init();
