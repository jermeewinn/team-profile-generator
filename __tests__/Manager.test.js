const Manager = require('../lib/Manager');
//Copy & paste Employee Properties, but also add officeNumber, and make sure getRole() is overridden to 'Manager'
test('creates an employee name', () => {
    const employee = 'Dave';
    const expected = new Manager(employee, '486410', 'dave@ucsc.edu', '9099279928').getName()

    expect(expected).toEqual('Dave');
});

test('creates an employee ID number', () => {
    const employee = '48654';
    const expected = new Manager('Dave', employee, 'dave@ucsc.edu', '9099279928').getId()
    
    expect(expected).toEqual('48654');
    
});

test('creates an employee email', () => {
    const employee = 'dave@ucsc.edu';
    const expected = new Manager('Dave', '46854', employee, '9099279928').getEmail()
    
    expect(expected).toEqual('dave@ucsc.edu')
});

test('creates a role for the employee', () => {
    const role = 'Manager';
    const expected = new Manager('Dave', '46854', 'dave@ucsc.edu', '9099279928').getRole()

    expect(expected).toEqual(role)
});

test('creates a phone number for the Manager', () => {
    const employee = '9099279928';
    const expected = new Manager('Dave', '46854', 'dave@ucsc.edu', employee).getOfficeNumber()

    expect(expected).toEqual('9099279928')
});     