'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Vocabularies';
    await queryInterface.bulkInsert(options,[
      {
        word: "Spanish-Apple",
        unitId:1
      },
      {
        word: "English-Brother",
        unitId:2
      },
      {
        word: "Spanish-Dog",
        unitId:3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'Vocabularies';
  const Op = Sequelize.Op;
  await queryInterface.bulkDelete(options, {
    word: { [Op.in]: ["Spanish-Apple","English-Brother","Spanish-Dog"] }
  }, {});

}
};