'use strict';
const {hashPassword} = require('../helper/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kasir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kasir.hasMany(models.Order,{
        foreignKey: 'KasirId'
      })
    }
  };
  Kasir.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (user, options) =>{
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'Kasir',
  });
  return Kasir;
};