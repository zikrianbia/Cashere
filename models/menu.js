'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.hasMany(models.Order, {
        foreignKey: 'MenuId'
      })
      Menu.belongsToMany(models.Tag,{
        through: models.MenuTag,
        foreignKey: 'MenuId'
      })
    }
  };
  Menu.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true
      }
    },
    imgUrl: {
      type: DataTypes.TEXT,
      validate:{
        isUrl: true
      }
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};