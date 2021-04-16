'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jogador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      datanascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
          allowNull: false,
          type: Sequelize.TEXT,
          unique: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jogador');
  }
};