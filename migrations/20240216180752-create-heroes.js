'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'nick_name',
      },
      realName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'real_name',
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: 'origin_description',
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: 'catch_phrase',
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
    await queryInterface.dropTable('heroes');
  },
};
