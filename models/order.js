'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Variant, {
        foreignKey: 'variantId',
        as: 'variants',
      });
      this.belongsTo(models.Transaction, {
        foreignKey: 'transactionId',
        as: 'transactions',
      });
    }
  }
  Order.init(
    {
      transactionId: DataTypes.INTEGER,
      variantId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
