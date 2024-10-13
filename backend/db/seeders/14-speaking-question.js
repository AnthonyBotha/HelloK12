'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpeakingQuestions';
    await queryInterface.bulkInsert(options,[
      {
        speakingSessionId:1,
        vocabularyId:1,
        userAnswer: "Apple",
        isCorrect: true,
        correctiveActionId: 1
      },
      {
        speakingSessionId:2,
        vocabularyId:2,
        userAnswer: "Mother",
        isCorrect: false,
        correctiveActionId: 2
      },
      {
        speakingSessionId:3,
        vocabularyId:3,
        userAnswer: "Dog",
        isCorrect: true,
        correctiveActionId: 3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'SpeakingQuestions';
  const Op = Sequelize.Op;
  await queryInterface.bulkDelete(options, {
    userAnswer: { [Op.in]: ["Apple","Mother","Dog"] }
  }, {});

}
};