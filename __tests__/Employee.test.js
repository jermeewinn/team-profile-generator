const Employee = require('../lib/Employee');


test('creates an employee name', () => {
    const employee = 'Dave';
    const expected = new Employee(employee, '486410', 'dave@ucsc.edu').getName()

    expect(expected).toEqual('Dave');
});

test('creates an employee ID number', () => {
    const employee = '48654';
    const expected = new Employee('Dave', employee, 'dave@ucsc.edu').getId()
    
    expect(expected).toEqual('48654');
    
});

test('creates an employee email', () => {
    const employee = 'dave@ucsc.edu';
    const expected = new Employee('Dave', '46854', employee).getEmail()
    
    expect(expected).toEqual('dave@ucsc.edu')
});

test('creates a role for the employee', () => {
    const role = 'Employee';
    const expected = new Employee('Dave', '46854', 'dave@ucsc.edu').getRole()

    expect(expected).toEqual(role)
});

