const Engineer = require('../lib/Engineer');
//Copy & paste Employee Properties, but also add GitHub, and make sure getRole() is overriddent to 'Engineer'
test('creates an employee name', () => {
    const employee = 'Dave';
    const expected = new Engineer(employee, '486410', 'dave@ucsc.edu', 'davehub').getName()

    expect(expected).toEqual('Dave');
});

test('creates an engineer ID number', () => {
    const employee = '48654';
    const expected = new Engineer('Dave', employee, 'dave@ucsc.edu', 'davehub').getId()
    
    expect(expected).toEqual('48654');
    
});

test('creates an engineer email', () => {
    const employee = 'dave@ucsc.edu';
    const expected = new Engineer('Dave', '46854', employee, 'davehub').getEmail()
    
    expect(expected).toEqual('dave@ucsc.edu')
});

test('creates a role for the engineer', () => {
    const role = 'Engineer';
    const expected = new Engineer('Dave', '46854', 'dave@ucsc.edu', 'davehub').getRole()

    expect(expected).toEqual(role)
});
//Github
test('creates a GitHub object for the engineer', () => {
    const employee = 'davehub';
    const expected = new Engineer('Dave', '46854', 'dave@ucsc.edu', employee).getGithub()
});