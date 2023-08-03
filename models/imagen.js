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
      imagen.hasMany(models.voto, {
        foreignKey: 'fotoId' 
      })
      imagen.hasOne(models.privacidad, {
        sourceKey: 'privacidadId',
        foreignKey: 'id'
        
      })
      imagen.hasOne(models.licencia, {
        sourceKey: 'licenciaId',
        foreignKey: 'id',
        as: 'licencia'
      })
      imagen.hasOne(models.categoria, {
        sourceKey: 'categoriaId',
        foreignKey: 'id',
        as: 'categoria'
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
    categoriaId: {
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
      allowNull: true
    },
    licenciaId: {
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
    ruta: {
      type:DataTypes.STRING,
      allowNull: false
    },
    autor:{
      type:DataTypes.STRING,
      allowNull: false
    },
    privacidadId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    marcaAgua:{
      type:DataTypes.STRING,
      allowNull: true
    },
    comentarioAutor:{
      type:DataTypes.STRING,
      allowNull: true
    },
    eliminada:{
      type:DataTypes.BOOLEAN,
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