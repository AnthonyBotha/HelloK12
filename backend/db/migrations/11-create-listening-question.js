'use strict';

let options = {};
options.tableName = "ListeningQuestions";
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ListeningQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listeningSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "ListeningSessions"}
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
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "ListeningQuestions";
    await queryInterface.dropTable(options);
  }
};