const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    console.log("Welcome to the README generator. Press enter to skip any sections")
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md",generateMarkdown(data))
    })
}

// function call to initialize program
init();
