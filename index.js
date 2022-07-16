
const markDown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    "What do you want the Title to be?",
    "Write a description for what your README will say:",
    "How will this application be installed?",
    "Exactly how will the program be used?",
    "Contribution Guidelines?",
    "How to report Bugs?"
];



function init() {

const [title, description, installation, usage, contribution, debug] = questions;

    inquirer 
        .prompt([
            {
              type: "input",
              message: title,
              name: "title"
            },
                {
                type: "input",
                message: description,
                name: "description"
            },
                {
                type: "input",
                message: installation,
                name: "installation"
            },
                {
                type: "input",
                message: usage,
                name: "usage"
            },
                {
                type: "input",
                message: contribution,
                name: "contribution"
            },
                {
                type: "input",
                message: debug,
                name: "debug"
            },
            
        ])
        .then((response) =>{

        const readmeFile =  generateMarkdown(response);

        
            fs.writeFile("README.md", readmeFile, (err) => err ? console.log(err) : console.log("no cigar"))
         } )
}

// Function call to initialize app
init();
