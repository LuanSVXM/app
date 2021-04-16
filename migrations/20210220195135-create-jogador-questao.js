'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('JogadorQuestao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CodJogador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jogador',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
      },
      CodQuestao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questao',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('JogadorQuestao');
  }
};