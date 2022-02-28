const { User } = require('../models');

const userdata = [ 
    {
      username: 'SarahMarra',
      password: 'test'  
    },
    {
      username: 'Andrew33',
      password: 'testtest'
    },
    {
      username: 'CatGirl4',
      password: 'testuser'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
