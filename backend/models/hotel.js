const {DataTypes} = require("sequelize");
const sequelize= require('../config/database');
const Hotel=sequelize.define('Hotel' , {
    municipio_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    clasificacion:{
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.TEXT,
    },
    imagen:{
        type: DataTypes.STRING,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false, 
        defaultvalue: 'A'
    }

    }, {
  tableName: 'hoteles',
  timestamps: false // Desactiva la creación automática de createdAt y updatedAt
}
);

module.exports = Hotel;