'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  voto.init({
   
    fotoId:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    usuarioId :{
      type : DataTypes.INTEGER,
      allowNull: false
    },
    voto: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    fechaVoto:{
      type:DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    timestmaps:false,
    createdAt:false,
    updatedAt:false,
    modelName: 'voto',
    tableName:"votos"
  });
  return voto;
};