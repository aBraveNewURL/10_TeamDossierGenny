const Intern = require('../lib/intern');
const newIntern = new Intern('Ricky', 1234567, 'TehN00b@corporate.net', 'Hard Knocks')

it('tests whether or not we can create a new intern properly with Intern constructor', () => {
    expect(intern.name).toBe('Ricky');
    expect(intern.id).toBe(1234567);
    expect(intern.email).toBe('TehN00b@corporate.net');
    expect(intern.school).toBe('Hard Knocks');
});

it('tests the getName method', () => {
    expect(intern.getName()).toBe('Ricky')
}
);

it('tests the getId method', () => {
    expect(intern.getId()).toBe(1234567)
}
);

it('tests the getEmail method', () => {
    expect(intern.getEmail()).toBe('TehN00b@corporate.net')
}
);

it('tests the getEmail method', () => {
    expect(intern.getschool()).toBe('Hard Knocks')
}
);

it('tests the getRole method', () => {
    expect(intern.getRole()).toBe('Intern')
}
);
