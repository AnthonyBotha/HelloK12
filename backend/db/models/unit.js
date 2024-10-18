'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Unit.belongsTo(models.LanguageCourse, {
        foreignKey: "languageCourseId"
      })

      Unit.hasMany(models.Vocabulary,{
        foreignKey: "unitId",
        onDelete: "CASCADE",
        hooks: true
      })

    }
  }
  Unit.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageCourseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    languageCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Unit',
  });
  return Unit;
};