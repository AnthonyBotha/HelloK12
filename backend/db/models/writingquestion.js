'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WritingQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // WritingQuestion.belongsTo(models.WritingSession, {
      //   foreignKey: "writingSessionId"
      // })

      // WritingQuestion.belongsTo(models.CorrectiveAction, {
      //   foreignKey: "correctiveActionId"
      // })

      // WritingQuestion.belongsTo(models.Vocabulary, {
      //   foreignKey: "vocabularyId"
      // })
    }
  }
  WritingQuestion.init({
    writingSessionId: {
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
    modelName: 'WritingQuestion',
  });
  return WritingQuestion;
};