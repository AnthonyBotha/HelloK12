'use strict';

let options = {};
options.tableName = "CorrectiveActions";
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CorrectiveActions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      phrase: {
        type: Sequelize.STRING,
        allowNull: false
      },
      languageCourseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "LanguageCourses"}
      },
      languageCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "CorrectiveActions";
    await queryInterface.dropTable(options);
  }
};