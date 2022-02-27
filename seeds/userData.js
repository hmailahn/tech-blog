const { User } = require('../models');

const userdata = [ 
    {
      username: 'test',
      password: 'test'  
    },
    {
      username: 'testtest',
      password: 'testtest'
    },
    {
      username: 'testuser',
      password: 'testuser'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
