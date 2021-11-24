const inquirer = require('inquirer');
//initialize the Intern class
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
};

Intern.prototype.getName = function() {
    return this.name;
};
Intern.prototype.getId = function() {
    return this.id;
};
Intern.prototype.getEmail = function() {
    return this.email;
};
Intern.prototype.getSchool = function() {
    return this.school;
};
Intern.prototype.getRole = function() {
    return 'Intern';
};

module.exports = Intern;