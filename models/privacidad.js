'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class privacidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  privacidad.init({
   
    privacidadTabla:{
       type: DataTypes.STRING,
       allowNull: false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'privacidad',
    tableName:"privacidades"
  });
  return privacidad;
};