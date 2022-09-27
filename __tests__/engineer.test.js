const Engineer = require('../lib/engineer');
const newEngineer = new Engineer('Crankypants', 14, 'principal@business.org', 'RedLeaderStandingBy')

it('tests whether or not we can create a new manager properly with Manager constructor', () => {
    expect(manager.name).toBe('Crankypants');
    expect(manager.id).toBe(14);
    expect(manager.email).toBe('principal@business.org');
    expect(manager.officeNumber).toBe('RedLeaderStandingBy');
});

it('tests the getName method', () => {
    expect(manager.getName()).toBe('Crankypants')
}
);

it('tests the getId method', () => {
    expect(manager.getId()).toBe(14)
}
);

it('tests the getEmail method', () => {
    expect(manager.getEmail()).toBe('principal@business.org')
}
);

it('tests the getgitHub method', () => {
    expect(manager.getgitHub()).toBe('RedLeaderStandingBy')
}
);

it('tests the getRole method', () => {
    expect(manager.getRole()).toBe('Engineer')
}
);

