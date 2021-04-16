'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.belongsTo(models.Questao)
    }
  };
  Categoria.init({
    url: DataTypes.TEXT,
    nome: DataTypes.TEXT,
    
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};