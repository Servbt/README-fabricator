// TODO: Include packages needed for this application
const markDown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
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
function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`
    fs.writeFile(fileName, JSON.stringify(data,null,"\t"), (err) =>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    for(const question of questions){
        console.log(typeof question);
    }
    inquirer 
        .prompt([
            {
              type: "input",
              message: "hello?",
              name: "quesitions"
            }
        ])
        .then((response) =>
        response ? console.log("it works"):console.log("no cigar")
        )
}

// Function call to initialize app
init();
