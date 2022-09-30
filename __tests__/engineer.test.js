const Engineer = require('../lib/engineer');
const engineer = new Engineer('Crankypants','14','principal@business.org','RedLeaderStandingBy')

test('tests whether or not we can create a new engineer properly with Engineer constructor', () => {
    expect(engineer.name).toBe('Crankypants');
    expect(engineer.id).toBe('14');
    expect(engineer.email).toBe('principal@business.org');
    expect(engineer.gitHub).toBe('RedLeaderStandingBy');
});

test('tests the getName method', () => {
    expect(engineer.getName()).toBe('Crankypants')
}
);

test('tests the getId method', () => {
    expect(engineer.getId()).toBe('14')
}
);

test('tests the getEmail method', () => {
    expect(engineer.getEmail()).toBe('principal@business.org')
}
);

test('tests the getgitHub method', () => {
    expect(engineer.getgitHub()).toBe('RedLeaderStandingBy')
}
);

it('tests the getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer')
}
);

