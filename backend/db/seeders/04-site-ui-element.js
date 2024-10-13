'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SiteUIElements';
    await queryInterface.bulkInsert(options,[
      {
        element: "hello",
        siteUILanguageId: 1
      },
      {
        element: "hello",
        siteUILanguageId: 2
      },
      {
        element: "Menu",
        siteUILanguageId: 1
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SiteUIElements';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      element: { [Op.in]: ["hello", "hello", "Menu"] }
    }, {});

  }
};