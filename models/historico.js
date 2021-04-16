'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Historico.belongsTo(models.Jogador)
    }
  };
  Historico.init({
    JogadorId: DataTypes.INTEGER,
    trofeus: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    ultimo_dia: DataTypes.DATE,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Historico',
  });
  return Historico;
};