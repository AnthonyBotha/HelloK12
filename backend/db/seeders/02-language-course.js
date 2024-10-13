'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'LanguageCourses';
    return queryInterface.bulkInsert(options,[
      {
        language: "Spanish",
        userId: 1
      },
      {
        language: "English",
        userId: 2
      },
      {
        language: "Spanish",
        userId: 3

      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'LanguageCourses';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    language: { [Op.in]: ["Spanish", "English", "Spanish"] }
  }, {});

}
};


