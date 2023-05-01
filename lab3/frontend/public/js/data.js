const data = [
  {
    name: "Ivan Hob",
    tel: "+38099332233",
    place: "Kyiv, Ukraine",
  },
  {
    name: "Ivan MON",
    tel: "+38099111111",
    place: "Kyiv, Ukraine",
  },
  {
    name: "Dmitriy Nap",
    tel: "+38099222222",
    place: "Kyiv, Ukraine",
  },
];

localStorage.setItem(
  "currentUser",
  JSON.stringify({
    username: "test",
    email: "test@test.com",
    password: "123",
    sex: "male",
    birthday: "2001-01-01",
    contacts: data,
  })
);
