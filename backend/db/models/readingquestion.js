'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReadingQuestion.belongsTo(models.ReadingSession, {
        foreignKey: "readingSessionId"
      })

      ReadingQuestion.belongsTo(models.CorrectiveAction, {
        foreignKey: "correctiveActionId"
      })

      ReadingQuestion.belongsTo(models.Vocabulary, {
        foreignKey: "vocabularyId"
      })
    }
  }
  ReadingQuestion.init({
    readingSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vocabularyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userAnswer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    correctiveActionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ReadingQuestion',
  });
  return ReadingQuestion;
};