'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
      perfil.hasMany(models.imagen,{
        foreignKey: 'autorId'
      });
     
      
      
    }
  }
  perfil.init({
   
    usuarioId:{
       type: DataTypes.INTEGER,
       allowNull: true
    },
    nombre :{
      type : DataTypes.STRING,
      allowNull: true
    },
    apellido: {
      type:DataTypes.STRING,
      allowNull: true
    },
    mail:{
      type: DataTypes.STRING,
      allowNull: true
    },
    fechaNacimiento:{
      type:DataTypes.DATE,
      allowNull: true
    },
    intereses:{
      type:DataTypes.STRING,
      allowNull: true
    },
    nombreUsuario:{
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar:{
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'perfil',
    tableName:"perfiles"
  });
  return perfil;
};