'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VocabularyImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // VocabularyImage.belongsTo(models.Vocabulary, {
      //   foreignKey: "vocabularyId"
      // })
    }
  }
  VocabularyImage.init({
    vocabularyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'VocabularyImage',
  });
  return VocabularyImage;
};