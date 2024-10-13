'use strict';

const { ReadingQuestion } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await ReadingQuestion.bulkCreate([
      {
        readingSessionId:1,
        vocabularyId:1,
        userAnswer: "Apple",
        isCorrect: true,
        correctiveActionId: 1
      },
      {
        readingSessionId:2,
        vocabularyId:2,
        userAnswer: "Mother",
        isCorrect: false,
        correctiveActionId: 2,
      },
      {
        readingSessionId:3,
        vocabularyId:3,
        userAnswer: "Dog",
        isCorrect: true,
        correctiveActionId: 3,
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'ReadingQuestions';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    userAnswer: { [Op.in]: ["Apple","Mother","Dog"] }
  }, {});

}
};