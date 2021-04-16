'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Historicos.init({
    usuario: DataTypes.STRING,
    trofeus: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    ultimo_dia: DataTypes.DATE,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Historicos',
  });
  return Historicos;
};