'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Menu,{
        foreignKey: 'MenuId'
      })
      Order.belongsTo(models.Kasir,{
        foreignKey: 'KasirId'
      })
    }
    total(quantity, price){
      let result = quantity * price
      return `Rp. ${result}`
    }
  };
  Order.init({
    MenuId: DataTypes.INTEGER,
    KasirId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};