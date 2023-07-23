'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class licencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  licencia.init({
   
    licencia:{
       type: DataTypes.STRING,
       allowNull: false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'licencia',
    tableName:"licencias"
  });
  return licencia;
};