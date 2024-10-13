'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WritingQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      writingSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "WritingSessions" }
      },
      vocabularyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userAnswer: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      correctiveActionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "CorrectiveActions" }
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
    await queryInterface.dropTable('WritingQuestions');
  }
};