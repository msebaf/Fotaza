'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comentario.belongsTo(models.imagen,{
        foreignKey: 'fotoId'
      });
      comentario.hasOne(models.perfil, {
        sourceKey: 'autorId',
        foreignKey: 'usuarioId',
        
      });


      
    }
  }
  comentario.init({
   
    autorId:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    fotoId :{
      type : DataTypes.INTEGER,
      allowNull: false
    },
    comentario: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fechaCreacion:{
      type:DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'comentario',
    tableName:"comentarios"
  });
  return comentario;
};