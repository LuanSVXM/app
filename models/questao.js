'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Questao.hasMany(models.Categoria)
      Questao.belongsToMany(models.Jogador, {through: 'JogadorQuestao'})
      Questao.hasOne(models.Midia)
    }
  };
  Questao.init({
    tipo: DataTypes.INTEGER,
    categoria: DataTypes.INTEGER,
    frase: DataTypes.TEXT,
    op1: DataTypes.TEXT,
    op2: DataTypes.TEXT,
    op3: DataTypes.TEXT,
    op4: DataTypes.TEXT,
    op5: DataTypes.TEXT,
    url1: DataTypes.INTEGER,
    url2: DataTypes.INTEGER,
    url3: DataTypes.INTEGER,
    url4: DataTypes.INTEGER,
    url5: DataTypes.INTEGER,  
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Questao',
  });
  return Questao;
};