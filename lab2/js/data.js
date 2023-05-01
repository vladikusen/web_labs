const data = [
    {
        name: 'Ivan Pihta',
        number: '+380991111222',
        cityandCountry: 'Kyiv, Ukraine'
    },
    {
        name: 'Ivan Puhta',
        number: '+38099111111',
        cityandCountry: 'Kyiv, Ukraine'
    },
    {
        name: 'Ivan Pahta',
        number: '+38099222222',
        cityandCountry: 'Kyiv, Ukraine'
    }
];

if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', null);
}

if (!localStorage.getItem('users')) {
    localStorage.setItem(
        'users',
        JSON.stringify([
            {
                username: 'test',
                email: 'test@test.com',
                password: '123',
                sex: 'male',
                birthday: '2001-01-01',
                contacts: data
            }
        ])
    );
}
