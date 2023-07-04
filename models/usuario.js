'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  usuario.init({
   
    mail:{
       type: DataTypes.STRING,
       allowNull: false
    },
    contrasenia :{
      type : DataTypes.STRING,
      allowNull: false
    },
    usuario: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'usuario',
    tableName:"usuarios"
  });
  return usuario;
};