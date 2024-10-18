'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpeakingSessions';
    await queryInterface.bulkInsert(options,[
      {
        userId: 1,
        startTime: new Date("2025-03-02"),
        endTime: new Date("2025-03-03"), 
        status: "Complete",
        languageCourseId: 1
      },
      {
        userId: 2,
        startTime: new Date("2025-03-03"),
        endTime: new Date("2025-03-04"), 
        status: "Complete",
        languageCourseId: 2
      },
      {
        userId: 3,
        startTime: new Date("2025-03-04"),
        endTime: new Date("2025-03-05"), 
        status: "Complete",
        languageCourseId: 3
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
  options.tableName = 'SpeakingSessions';
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete(options, {
    startTime: { [Op.in]: [new Date("2025-03-02"), new Date("2025-03-03"), new Date("2025-03-03")] }
  }, {});

}
};