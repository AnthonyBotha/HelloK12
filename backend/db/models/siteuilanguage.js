'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteUILanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SiteUILanguage.belongsTo(models.User,{
        foreignKey: "userId"
      })
    }
  }
  SiteUILanguage.init({
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    element: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SiteUILanguage',
  });
  return SiteUILanguage;
};