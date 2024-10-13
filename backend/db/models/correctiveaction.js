'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CorrectiveAction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CorrectiveAction.belongsTo(models.LanguageCourse, {
        foreignKey: "languageCourseId"
      })

      CorrectiveAction.hasMany(models.ListeningQuestion,{
        foreignKey: "correctiveActionId",
        onDelete: "CASCADE",
        hooks: true
      })

      CorrectiveAction.hasMany(models.SpeakingQuestion,{
        foreignKey: "correctiveActionId",
        onDelete: "CASCADE",
        hooks: true
      })

      CorrectiveAction.hasMany(models.ReadingQuestion,{
        foreignKey: "correctiveActionId",
        onDelete: "CASCADE",
        hooks: true
      })

      CorrectiveAction.hasMany(models.WritingQuestion,{
        foreignKey: "correctiveActionId",
        onDelete: "CASCADE",
        hooks: true
      })
    }
  }
  CorrectiveAction.init({
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phrase: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageCourseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CorrectiveAction',
  });
  return CorrectiveAction;
};