'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User.hasMany(models.SiteUILanguage,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // User.hasMany(models.LanguageCourse,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // User.hasMany(models.ListeningSession,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // User.hasMany(models.SpeakingSession,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // User.hasMany(models.ReadingSession,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

      // User.hasMany(models.WritingSession,{
      //   foreignKey: "userId",
      //   onDelete: "CASCADE",
      //   hooks: true
      // })

    }
  }


  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[3, 256]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[3, 256]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 256],
          isEmail: true
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        },
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};