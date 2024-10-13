'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ReadingSession.belongsTo(models.User, {
      //   foreignKey: "userId"
      // })

      // ReadingSession.belongsTo(models.LanguageCourse, {
      //   foreignKey: "languageCourseId"
      // })

      // ReadingSession.hasMany(models.ReadingQuestion,{
      //   foreignKey: "readingSessionId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })
    }
  }
  ReadingSession.init({
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
    modelName: 'ReadingSession',
  });
  return ReadingSession;
};