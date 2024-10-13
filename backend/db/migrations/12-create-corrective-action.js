'use strict';
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CorrectiveActions');
  }
};