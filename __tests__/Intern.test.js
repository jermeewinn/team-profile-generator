const Intern = require('../lib/Intern');
//Copy & paste test code from Employee. Change the role to 'Intern' and add a section for school
test('creates an employee name', () => {
    const employee = 'Dave';
    const expected = new Intern(employee, '486410', 'dave@ucsc.edu', 'UCSC').getName()

    expect(expected).toEqual('Dave');
});

test('creates an employee ID number', () => {
    const employee = '48654';
    const expected = new Intern('Dave', employee, 'dave@ucsc.edu', 'UCSC').getId()
    
    expect(expected).toEqual('48654');
    
});

test('creates an employee email', () => {
    const employee = 'dave@ucsc.edu';
    const expected = new Intern('Dave', '46854', employee, 'UCSC').getEmail()
    
    expect(expected).toEqual('dave@ucsc.edu')
});

test('creates a role for the employee', () => {
    const role = 'Intern';
    const expected = new Intern('Dave', '46854', 'dave@ucsc.edu', 'UCSC').getRole()

    expect(expected).toEqual(role)
});

test('creates an object for school intern is from', () => {
    const employee = 'UCSC';
    const expected = new Intern('Dave', '46854', 'dave@ucsc.edu', employee).getSchool()

    expect(expected).toEqual('UCSC')
});