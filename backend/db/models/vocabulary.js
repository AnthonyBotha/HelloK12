'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vocabulary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vocabulary.belongsTo(models.Unit, {
        foreignKey: "unitId"
      })

      Vocabulary.hasMany(models.ListeningQuestion,{
        foreignKey: "vocabularyId",
        onDelete: "CASCADE",
        hooks: true
      })

      Vocabulary.hasMany(models.SpeakingQuestion,{
        foreignKey: "vocabularyId",
        onDelete: "CASCADE",
        hooks: true
      })

      Vocabulary.hasMany(models.ReadingQuestion,{
        foreignKey: "vocabularyId",
        onDelete: "CASCADE",
        hooks: true
      })

      Vocabulary.hasMany(models.WritingQuestion,{
        foreignKey: "vocabularyId",
        onDelete: "CASCADE",
        hooks: true
      })
    }
  }
  Vocabulary.init({
    word: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Vocabulary',
  });
  return Vocabulary;
};