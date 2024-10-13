'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WritingSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WritingSession.belongsTo(models.User, {
        foreignKey: "userId"
      })

      WritingSession.belongsTo(models.LanguageCourse, {
        foreignKey: "languageCourseId"
      })

      WritingSession.hasMany(models.WritingQuestion,{
        foreignKey: "writingSessionId",
        onDelete: "CASCADE",
        hooks: true
      })
    }
  }
  WritingSession.init({
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
    modelName: 'WritingSession',
  });
  return WritingSession;
};