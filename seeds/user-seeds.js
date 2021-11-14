const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'brittany1',
    email: 'britt@email.com',
    password: 'password'
  },
  {
    username: 'Ben',
    email: 'email@gmail.com',
    password: 'Password1234'
  },
  {
    username: 'ChunkyKitten',
    email: 'kitten@email.com',
    password: 'password'
  },
  {
    username: 'bluedream08',
    email: 'blue@email.com',
    password: 'password'
  },
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;