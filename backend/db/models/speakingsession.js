'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpeakingSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // SpeakingSession.belongsTo(models.User, {
      //   foreignKey: "userId"
      // })

      // SpeakingSession.belongsTo(models.LanguageCourse, {
      //   foreignKey: "languageCourseId"
      // })

      // SpeakingSession.hasMany(models.SpeakingQuestion,{
      //   foreignKey: "speakingSessionId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })
    }
  }
  SpeakingSession.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    languageCourseId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'SpeakingSession',
  });
  return SpeakingSession;
};