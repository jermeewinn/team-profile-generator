const inquirer = require('inquirer');
const template = require('./src/template');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = 
    ([
        {
            type: 'input',
            name: 'getName',
            message: "Input your team member's name:"
        },
        {
            type: 'input',
            name: 'getId',
            message: "Input your team member's employee ID:"
        },
        {
            type: 'input',
            name: 'getEmail',
            message: "Enter your team member's company Email:"
        },
        {
            type: 'checkbox',
            name: 'getRole',
            message: "Enter your team memeber's role: (Input Manager, Engineer, or Intern)",
            choices: ['Manager', 'Engineer', 'Intern']
        }

    ])