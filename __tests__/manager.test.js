const Manager = require('../lib/manager');
const newManager = new Manager('Lumberg','7718','BillLumberg@hmm.yeah','007')

test('tests whether or not we can create a new manager properly with Manager constructor', () => {
    expect(manager.name).toBe('Lumberg');
    expect(manager.id).toBe('7718');
    expect(manager.email).toBe('BillLumberg@hmm.yeah');
    expect(manager.officeNumber).toBe('007');
});

test('tests the getName method', () => {
    expect(manager.getName()).toBe('Lumberg')}
    );

test('tests the getId method', () => {
    expect(manager.getId()).toBe('7718')}
    );

test('tests the getEmail method', () => {
    expect(manager.getEmail()).toBe('BillLumberg@hmm.yeah')}
    );

test('tests the getofficeNumber method', () => {
    expect(manager.getofficeNumber()).toBe('007')}
    );

test('tests the getRole method', () => {
    expect(manager.getRole()).toBe('Manager')}
    );

