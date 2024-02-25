'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate (models) {
      Hero.hasMany(models.Image, {
        foreignKey: 'heroId',
      });
      Hero.belongsToMany(models.Power, {
        through: 'heroes_to_powers',
        foreignKey: 'heroId',
      });
    }
  }

  Hero.init(
    {
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nick_name',
        validate: {
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'real_name',
      },
      originDescription: {
        type: DataTypes.TEXT,
        field: 'origin_description',
      },
      catchPhrase: {
        type: DataTypes.STRING,
        field: 'catch_phrase',
      },
    },
    {
      sequelize,
      modelName: 'Hero',
      tableName: 'heroes',
      underscored: true,
    }
  );
  return Hero;
};
