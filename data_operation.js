const users = [
    {
      name: 'Alice',
      age: 28,
      gender: 'female',
      location: 'New York'
    },
    {
      name: 'Bob',
      age: 32,
      gender: 'male',
      location: 'Los Angeles'
    },
    {
      name: 'Claire',
      age: 21,
      gender: 'female',
      location: 'Chicago'
    },
    {
      name: 'David',
      age: 45,
      gender: 'male',
      location: 'Houston'
    },
    {
      name: 'Emily',
      age: 30,
      gender: 'female',
      location: 'Miami'
    },
    {
      name: 'Frank',
      age: 22,
      gender: 'male',
      location: 'San Francisco'
    },
    {
      name: 'Grace',
      age: 39,
      gender: 'female',
      location: 'Seattle'
    },
    {
      name: 'Henry',
      age: 14,
      gender: 'male',
      location: 'Boston'
    },
    {
      name: 'Isabella',
      age: 31,
      gender: 'female',
      location: 'Washington, D.C.'
    },
    {
      name: 'Jack',
      age: 10,
      gender: 'male',
      location: 'Austin'
    },
    {
      name: 'Katherine',
      age: 26,
      gender: 'female',
      location: 'Denver'
    },
    {
      name: 'Liam',
      age: 12,
      gender: 'male',
      location: 'Portland'
    },
    {
      name: 'Mia',
      age: 24,
      gender: 'female',
      location: 'Atlanta'
    },
    {
      name: 'Noah',
      age: 33,
      gender: 'male',
      location: 'Phoenix'
    },
    {
      name: 'Olivia',
      age: 17,
      gender: 'female',
      location: 'Dallas'
    }
  ];
  
  console.log(users);

  const isAdult = user => (user && user.age >= 18) ? true : false;

  const adultUsers = users.filter(user => isAdult(user));

  const getFullName = user => `${user.name} (${user.location})`;

  const userNames = users.map(getFullName);


  console.log(adultUsers);
  console.log(userNames);

