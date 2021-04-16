'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Historico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JogadorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Jogador',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade'    
      },
        trofeus: {
          type: Sequelize.STRING,
          allowNull: true
        },
        ranking: {
          type: Sequelize.INTEGER,
          defautValue: 0,
        },
        ultimo_dia: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Historico');
  }
};