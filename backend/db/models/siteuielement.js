'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteUIElement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SiteUIElement.belongsTo(models.SiteUILanguage,{
        foreignKey: "siteUILanguageId"
      })
    }
  }
  SiteUIElement.init({
    element: {
      type: DataTypes.STRING,
      allowNull: false
    },
    siteUILanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SiteUIElement',
  });
  return SiteUIElement;
};