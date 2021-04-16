'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Midia.belongsTo(models.Questao)
    }
  };
  Midia.init({
    descricao: DataTypes.STRING,
    url: DataTypes.TEXT,
    nome: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Midia',
  });
  return Midia;
};