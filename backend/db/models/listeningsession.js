'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListeningSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ListeningSession.belongsTo(models.User, {
      //   foreignKey: "userId"
      // })

      // ListeningSession.belongsTo(models.LanguageCourse, {
      //   foreignKey: "languageCourseId"
      // })

      // ListeningSession.hasMany(models.ListeningQuestion,{
      //   foreignKey: "listeningSessionId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      
    }
  }
  ListeningSession.init({
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
    modelName: 'ListeningSession',
  });
  return ListeningSession;
};