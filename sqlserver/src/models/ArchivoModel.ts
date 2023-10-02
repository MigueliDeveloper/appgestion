import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Archivo = db.define('Archivo',{
    filename:{
        type: DataTypes.STRING

    },

    iduser:{
        type: DataTypes.STRING
    },

    path:{
        type: DataTypes.STRING

    },

}, {
    createdAt: false,
    updatedAt: false

});

export default Archivo;