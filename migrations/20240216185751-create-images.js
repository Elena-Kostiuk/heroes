'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imagePath: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'image_path',
      },
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
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('images');
  },
};
