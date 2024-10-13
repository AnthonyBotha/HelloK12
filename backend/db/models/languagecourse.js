'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LanguageCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // LanguageCourse.belongsTo(models.User, {
      //   foreignKey: "userId"
      // })

      // LanguageCourse.hasMany(models.CorrectiveAction,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // LanguageCourse.hasMany(models.Unit,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // LanguageCourse.hasMany(models.ListeningSession,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // LanguageCourse.hasMany(models.SpeakingSession,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // LanguageCourse.hasMany(models.ReadingSession,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // LanguageCourse.hasMany(models.WritingSession,{
      //   foreignKey: "languageCourseId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })
    }
  }
  LanguageCourse.init({
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'LanguageCourse',
  });
  return LanguageCourse;
};