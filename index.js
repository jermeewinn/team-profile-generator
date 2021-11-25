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
        // {
        //     type: 'list',
        //     name: 'getRole',
        //     message: "Enter your team memeber's role: (Input Manager, Engineer, or Intern)",
        //     choices: ['Engineer', 'Intern']
        // },
        // {
        //     type: 'input',
        //     name: 'genCustomInfo',
        //     message: "If your member is an Engineer, enter their GitHub. If your member is an Intern, enter their school."
        // },
        {
            type: 'list',
            name: 'promptFinish2',
            message: 'Do you have more people on your team?',
            choices: ['Yes', 'No']
        }
    ])

const teamArray = [];
// Initialized through $node index.js. User is acting as the manager.
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Input your First and Last Name:'
        },
        {
            type: 'input',
            name: 'getOfficeNumber',
            message: 'Input your company office phone number:'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Input your employee ID number:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Input your company email:'
        },
        // {
        //     type: 'list',
        //     name: 'promptFinish1',
        //     message: 'Do you have more people on your team?',
        //     choices: ['Yes', 'No']
        // }
    ])   
        .then(({ role, genCustomInfo }) => {
            role = 'Manager';
            team();
        })   
};


function newMembers() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'getRole',
                message: "Enter your team memeber's role: (Input Manager, Engineer, or Intern)",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'genCustomInfo',
                message: "If your member is an Engineer, enter their GitHub. If your member is an Intern, enter their school."
            },
        ])
        .prompt(questions);
       
function team(role, genCustomInfo) {
    inquirer.prompt(questions)
        .then(({ id, employeeName, email, promptFinish2}) => {
            // let member;

            // if (getRole === 'Engineer') {
            //     member = new Engineer(employeeName, id, email, getCustomInfo)
            // } else if (getRole === 'Intern') {
            //     member = new Intern(employeeName, id, email, getCustomInfo)
            // }
            teamArray.push(member);
        
            if (promptFinish2 === "Yes") {
                newMembers();
            } else fs.writeFile('../dist/index.html', teamplate(teamArray), (err) => {
                    if (err) {console.log('Try again.', err)}
                    console.log("HTML successfully generated!")
                })
            })
    }

init();