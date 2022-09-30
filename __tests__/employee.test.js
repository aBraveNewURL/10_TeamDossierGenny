const Employee = require('../lib/employee');
const employee = new Employee('Damien',666,'theOmen@fakeemail.com')

test('tests whether or not we can create a new employee properly with Employee constructor', () => {
    expect(employee.name).toBe('Damien');
    expect(employee.id).toBe(666);
    expect(employee.email).toBe('theOmen@fakeemail.com');
});

test('tests the getName method', () => {
    expect(employee.getName()).toBe('Damien')}
    );

test('tests the getId method', () => {
    expect(employee.getId()).toBe(666)}
    );

test('tests the getEmail method', () => {
    expect(employee.getEmail()).toBe('theOmen@fakeemail.com ')}
    );

test('tests the getRole method', () => {
    expect(employee.getRole()).toBe('Employee')}
    );

