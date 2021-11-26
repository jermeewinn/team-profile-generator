const inquirer = require('inquirer');
const template = require('./src/template');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];
// Initialized through $node index.js. User is acting as the manager.

function newMembers(getRole,getCustomInfo) {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'getRole',
                message: "Enter your or your team member's role: (Manager, Engineer, or Intern)",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'getCustomInfo',
                message: "If your member is a MANAGER, please provide the office phone number. If your member is an ENGINEER, enter their GitHub. If your member is an INTERN, enter their school."
            },
            {
                type: 'input',
                name: 'employeeName',
                message: "Input your team member's name:"
            },
            {
                type: 'input',
                name: 'id',
                message: "Input your team member's employee ID:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter your team member's company Email:"
            },
            {
                type: 'list',
                name: 'promptFinish1',
                message: 'Do you have more people on your team?',
                choices: ['Yes', 'No']
            }
        ])
            //this adds new members to the array AND sets conditions whether or not you want to continue the question loop through the prompt.
            .then(({getRole,getCustomInfo,employeeName,id,email,promptFinish1}) => {
                let member;
                console.log(getRole)
                if (getRole === 'Engineer') {
                    member = new Engineer(employeeName, id, email, getCustomInfo)
                } else if (getRole === 'Intern') {
                    member = new Intern(employeeName, id, email, getCustomInfo)
                } else if (getRole === 'Manager') {
                    member = new Manager(employeeName, id, email, getCustomInfo)
                }
                teamArray.push(member);
                console.log(teamArray)
                if (promptFinish1 === "Yes") {
                    newMembers(getRole,getCustomInfo);
                }
                else{
                    fs.writeFile('./dist/index.html', template(teamArray), err => {
                    if (err) throw err;
                    console.log("HTML successfully generated!")
                        }
                        
                    )
                } 
            })
}   

newMembers();