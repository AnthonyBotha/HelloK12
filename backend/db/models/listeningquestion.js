'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListeningQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ListeningQuestion.belongsTo(models.ListeningSession, {
        foreignKey: "listeningSessionId"
      })

      ListeningQuestion.belongsTo(models.CorrectiveAction, {
        foreignKey: "correctiveActionId"
      })

      ListeningQuestion.belongsTo(models.Vocabulary, {
        foreignKey: "vocabularyId"
      })
    }
  }
  ListeningQuestion.init({
    listeningSessionId: {
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
    modelName: 'ListeningQuestion',
  });
  return ListeningQuestion;
};