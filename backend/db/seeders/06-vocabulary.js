'use strict';

const { Vocabulary } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Vocabulary.bulkCreate([
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
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'Vocabularies';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    word: { [Op.in]: ["Spanish-Apple","English-Brother","Spanish-Dog"] }
  }, {});

}
};