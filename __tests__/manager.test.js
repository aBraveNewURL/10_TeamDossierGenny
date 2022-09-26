const Manager = require('../lib/manager');
const newManager = new Manager('Lumberg',7718,'BillLumberg@hmm.yeah',007)

it('tests whether or not we can create a new manager properly with Manager constructor', () => {
    expect(manager.name).toBe('Lumberg');
    expect(manager.id).toBe(7718);
    expect(manager.email).toBe('BillLumberg@hmm.yeah');
});

it('tests the getName method', () => {
    expect(manager.getName()).toBe('Lumberg')}
    );

it('tests the getId method', () => {
    expect(manager.getId()).toBe(7718)}
    );

it('tests the getEmail method', () => {
    expect(manager.getEmail()).toBe('BillLumberg@hmm.yeah')}
    );

it('tests the getRole method', () => {
    expect(manager.getRole()).toBe('Manager')}
    );

