'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SiteUILanguages';
    await queryInterface.bulkInsert(options,[
      {
        language: "English",
        userId:1
      },
      {
        language: "Spanish",
        userId: 2
      },
      {
        language: "English",
        userId: 3
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SiteUILanguages';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      element: { [Op.in]: ["English", "Spanish","English"] }
    }, {});

  }
};