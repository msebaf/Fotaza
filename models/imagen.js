'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      imagen.hasMany(models.comentario, {
        foreignKey: 'fotoId'
      })
      
      
    }
  }
  imagen.init({
   
    autorId:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    titulo :{
      type : DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    formato: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fechaCreacion:{
      type:DataTypes.DATE,
      allowNull: false
    },
    resolucion: {
      type:DataTypes.STRING,
      allowNull: false
    },
    licencia: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    etiqueta1: {
      type:DataTypes.STRING,
      allowNull: true
    },
    etiqueta2: {
      type:DataTypes.STRING,
      allowNull: true
    },
    etiqueta3: {
      type:DataTypes.STRING,
      allowNull: true
    },
    path: {
      type:DataTypes.STRING,
      allowNull: false
    },
    autor:{
      type:DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'imagen',
    tableName:"imagenes"
  });
  return imagen;
};