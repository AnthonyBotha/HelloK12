'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpeakingQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      speakingSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "SpeakingSessions"}
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
        references: {model: "CorrectiveActions"}
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
    await queryInterface.dropTable('SpeakingQuestions');
  }
};