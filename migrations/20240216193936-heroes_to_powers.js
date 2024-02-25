'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('heroes_to_powers', {
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'hero_id',
        references: {
          model: 'heroes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      powerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'power_id',
        references: {
          model: 'powers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });

    await queryInterface.addConstraint('heroes_to_powers', {
      fields: ['hero_id', 'power_id'],
      type: 'unique',
      name: 'unique_pair_constraint',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes_to_powers');
  },
};
