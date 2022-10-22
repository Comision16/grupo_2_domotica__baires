'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product,{
        foreignKey:'product_id',
        as:'product'
      })
    }
  }
  Image.init({
    name: DataTypes.STRING,
    product_id:DataTypes.STRING,
    createdAt:{
      type:DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};