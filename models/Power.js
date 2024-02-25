'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    static associate (models) {
      Power.belongsToMany(models.Hero, {
        through: 'heroes_to_powers',
        foreignKey: 'powerId',
      });
    }
  }

  Power.init(
    {
      powerType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'power_type',
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Power',
      tableName: 'powers',
      underscored: true,
    }
  );
  return Power;
};
