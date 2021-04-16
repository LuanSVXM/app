'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jogador.hasMany(models.Historico)
      Jogador.belongsToMany(models.Questao, {through: 'JogadorQuestao'})
    }
  };
  Jogador.init({
    usuario: DataTypes.STRING(20),
    datanascimento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    senha: DataTypes.STRING(20),
    nome: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    email: DataTypes.TEXT
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Jogador',
  });
  return Jogador;
};