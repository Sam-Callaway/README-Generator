const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Welcome to the README generator")
    inquirer.prompt(questions).then((data) => {

    })
}

// function call to initialize program
init();
