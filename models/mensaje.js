'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mensaje.belongsTo(models.perfil, {
        
        foreignKey: 'emisorId',
        targetKey: 'usuarioId',

      });
      
    }
  }
  mensaje.init({
   
    emisorId:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    receptorId :{
      type : DataTypes.INTEGER,
      allowNull: false
    },
    texto: {
      type:DataTypes.STRING,
      allowNull: false
    },
    fechaHora:{
      type:DataTypes.DATE,
      allowNull: false
    },
    visto:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'mensaje',
    tableName:"mensajes"
  });
  return mensaje;
};