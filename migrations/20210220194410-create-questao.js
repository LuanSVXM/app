'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categoria',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade'
      },
      frase: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      op1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      op2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      op3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      op4: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      op5: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      url1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Midia',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
        allowNull: true,
      },
      url2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Midia',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
        allowNull: true,
      },
      url3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Midia',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
        allowNull: true,
      },
      url4: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Midia',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete:'cascade',
        allowNull: true,
      },
      url5: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Midia',
          key: 'id'
        },
        allowNull: true,
        onUpdate: 'cascade',
        onDelete:'cascade',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questao');
  }
};