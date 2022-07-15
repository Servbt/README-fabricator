// TODO: Include packages needed for this application
const exports = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    "What do you want the Title to be?",
    "Write a description for what your README will say:",
    "How will this application be installed?",
    "Exactly how will the program be used?",
    "Contribution Guidelines?",
    "How to report Bugs?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
