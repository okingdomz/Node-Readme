
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



const questions = [
    {
    type: "input",
    message: "What is the Title of the Project?",
    name: "title"
}, {
    type: "input",
    message: "Why did you build this project?",
    name: "description"
}, {
    type: "input",
    message: "What problem does it solve?",
    name: "innovation"
}, {
    type: "input",
    message: "How do you use the app?",
    name: "usage"
},{
    type: "list",
    name: "license",
    message: "What license is being used?",
    choices: ['None', 'Apache', 'MIT', 'GPL', 'ISC']
},{
    type: "input",
    message: "What does the user needs to install the app?",
    name: "installation"
},{
    type: "input",
    message: "How can you test this app?",
    name: "tests"
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "contribution"
},{
    type: "input",
    message: "Github Username?",
    name: "username"
}, {
    type: "input",
    message: "Github Email?",
    name: "email"
}
];

const writeToFile = fileContent => {
    return new Promise((resolve, reject ) => {
        fs.writeFile('.generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};




function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();


module.exports = questions;
