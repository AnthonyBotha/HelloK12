'use strict';

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
 
    await User.bulkCreate([
      {
        email: 'demo@user.io',
        firstName: "DemoUser",
        lastName: "DemoUserLastName",
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        points: 0
      },
      {
        email: 'user1@user.io',
        firstName: "FakeUser1FirstName",
        lastName: "FakeUser1LastName",
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password1'),
        points: 0
      },
      {
        email: 'user2@user.io',
        firstName: "FakeUser2FirstName",
        lastName: "FakeUser2LastName",
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2'),
        points: 0
      }
    ], { validate: true });

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});

  }
};


