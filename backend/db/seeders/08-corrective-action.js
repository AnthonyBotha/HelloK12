'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'CorrectiveActions';
    await queryInterface.bulkInsert(options,[
      {
        correct:true,
        phrase: "Spanish-Good Job!",
        languageCourseId:1
      },
      {
        correct:false,
        phrase: "English-Try again!",
        languageCourseId:2
      },
      {
        correct:true,
        phrase: "Spanish-That's correct!",
        languageCourseId:3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'CorrectiveActions';
  const Op = Sequelize.Op;
  await queryInterface.bulkDelete(options, {
    phrase: { [Op.in]: ["Spanish-Good Job!","English-Try again!","Spanish-That's correct!"] }
  }, {});

}
};