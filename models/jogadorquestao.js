'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JogadorQuestao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  JogadorQuestao.init({
    CodJogador: DataTypes.STRING,
    CodQuestao: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'JogadorQuestao',
  });
  return JogadorQuestao;
};