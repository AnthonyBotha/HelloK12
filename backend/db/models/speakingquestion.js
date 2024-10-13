'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpeakingQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SpeakingQuestion.belongsTo(models.SpeakingSession, {
        foreignKey: "speakingSessionId"
      })

      SpeakingQuestion.belongsTo(models.CorrectiveAction, {
        foreignKey: "correctiveActionId"
      })

      SpeakingQuestion.belongsTo(models.Vocabulary, {
        foreignKey: "vocabularyId"
      })
    }
  }
  SpeakingQuestion.init({
    speakingSessionId: {
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
    modelName: 'SpeakingQuestion',
  });
  return SpeakingQuestion;
};