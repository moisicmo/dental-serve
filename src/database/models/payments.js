'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payments.belongsTo(models.treatments, {
        foreignKey: 'id',
        target_key: 'treatmentId'
      });
    }
  }
  payments.init({
    treatmentId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    typeDiscount: DataTypes.STRING,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};